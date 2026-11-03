import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, Download, ExternalLink, MessageSquare, Check, X, AlertCircle } from 'lucide-react';
import { SurveyResponse } from '../types/survey';

interface TableViewProps {
  responses: SurveyResponse[];
  onSelectRespondent: (response: SurveyResponse) => void;
  onExportCSV: () => void;
}

export const TableView: React.FC<TableViewProps> = ({
  responses,
  onSelectRespondent,
  onExportCSV
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sentimentFilter, setSentimentFilter] = useState<string>('all');
  const [qualitativeOnly, setQualitativeOnly] = useState(false);
  const [sortField, setSortField] = useState<keyof SurveyResponse>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filter & Search Logic
  const filteredData = useMemo(() => {
    return responses.filter((item) => {
      // Sentiment filter
      if (sentimentFilter !== 'all' && item.overallSentiment !== sentimentFilter) {
        return false;
      }

      // Qualitative only filter
      if (qualitativeOnly && !item.hasRichQualitativeText) {
        return false;
      }

      // Search query across all fields
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesText = 
          item.q1_calidadVida.toLowerCase().includes(q) ||
          item.q2_educacion.toLowerCase().includes(q) ||
          item.q3_trabajo.toLowerCase().includes(q) ||
          item.q4_accesoEquitativo.toLowerCase().includes(q) ||
          item.q5_tareasAcademicas.toLowerCase().includes(q) ||
          (item.notableQuote && item.notableQuote.toLowerCase().includes(q)) ||
          item.keyThemes.some(t => t.toLowerCase().includes(q)) ||
          item.id.toString().includes(q);

        if (!matchesText) return false;
      }

      return true;
    }).sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (valA === undefined || valB === undefined) return 0;
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortOrder === 'asc' ? valA - valB : valB - valA;
      }
      return sortOrder === 'asc' 
        ? String(valA).localeCompare(String(valB)) 
        : String(valB).localeCompare(String(valA));
    });
  }, [responses, searchQuery, sentimentFilter, qualitativeOnly, sortField, sortOrder]);

  const handleSort = (field: keyof SurveyResponse) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Helper for category indicator style
  const getCategoryTag = (category: string) => {
    switch (category) {
      case 'Favorable':
      case 'Equitativo':
        return <span className="text-emerald-700 font-medium">Sí</span>;
      case 'Desfavorable':
      case 'Inequitativo':
        return <span className="text-rose-700 font-medium">No</span>;
      case 'Condicional':
        return <span className="text-amber-700 font-medium">Condicional</span>;
      default:
        return <span className="text-stone-600">{category}</span>;
    }
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter Bar */}
      <div className="bg-white border border-stone-200 rounded-lg p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palabra clave, 'bolsillo', 'calor humano', 'libros'..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-stone-300 rounded-md bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-800 placeholder-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-md">
              <button
                onClick={() => setSentimentFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  sentimentFilter === 'all'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Todos ({responses.length})
              </button>
              <button
                onClick={() => setSentimentFilter('Optimista')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  sentimentFilter === 'Optimista'
                    ? 'bg-white text-emerald-800 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Optimistas
              </button>
              <button
                onClick={() => setSentimentFilter('Crítico-Constructivo')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  sentimentFilter === 'Crítico-Constructivo'
                    ? 'bg-white text-amber-800 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Críticos / Reflexivos
              </button>
              <button
                onClick={() => setSentimentFilter('Escéptico')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  sentimentFilter === 'Escéptico'
                    ? 'bg-white text-rose-800 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Escépticos
              </button>
            </div>

            <button
              onClick={() => setQualitativeOnly(!qualitativeOnly)}
              className={`px-3 py-2 text-xs font-medium rounded-md border transition-colors flex items-center gap-1.5 ${
                qualitativeOnly
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-200 text-stone-700 bg-white hover:bg-stone-50'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Con Citas Extensas</span>
            </button>
          </div>
        </div>

        {/* Results Metadata Counter */}
        <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div>
            Mostrando <strong>{filteredData.length}</strong> de <strong>{responses.length}</strong> entrevistas
            {searchQuery && <span> · Filtrado por: "{searchQuery}"</span>}
          </div>
          <div className="flex items-center gap-2">
            <span>Haz clic en cualquier fila para ver el análisis cualitativo completo</span>
          </div>
        </div>
      </div>

      {/* Main Tabular Container */}
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                <th 
                  onClick={() => handleSort('id')}
                  className="py-3 px-3 font-semibold cursor-pointer hover:bg-stone-100/70 select-none w-12 text-center"
                >
                  <div className="flex items-center justify-center gap-1">
                    #
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('timestamp')}
                  className="py-3 px-3 font-semibold cursor-pointer hover:bg-stone-100/70 select-none w-24"
                >
                  <div className="flex items-center gap-1">
                    Hora
                    <ArrowUpDown className="w-3 h-3 text-stone-400" />
                  </div>
                </th>
                <th className="py-3 px-3 font-semibold min-w-[170px]">
                  1. Calidad de Vida
                </th>
                <th className="py-3 px-3 font-semibold min-w-[200px]">
                  2. Ayuda Educativa
                </th>
                <th className="py-3 px-3 font-semibold min-w-[180px]">
                  3. Reemplazo Laboral
                </th>
                <th className="py-3 px-3 font-semibold min-w-[150px]">
                  4. Igualdad de Acceso
                </th>
                <th className="py-3 px-3 font-semibold min-w-[180px]">
                  5. Tareas Académicas
                </th>
                <th className="py-3 px-3 font-semibold w-24 text-center">
                  Postura
                </th>
                <th className="py-3 px-2 font-semibold w-10 text-center">
                  Ver
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-stone-400">
                    No se encontraron entrevistas con los filtros seleccionados.
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => onSelectRespondent(item)}
                    className="hover:bg-stone-50/80 cursor-pointer transition-colors group"
                  >
                    <td className="py-3 px-3 font-mono text-center text-stone-500 font-medium">
                      {item.id}
                    </td>
                    <td className="py-3 px-3 text-stone-500 whitespace-nowrap font-mono text-[11px]">
                      {item.timestamp.split(' ')[1] || item.timestamp}
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-start gap-1.5">
                        <span className="shrink-0">{getCategoryTag(item.q1_category)}</span>
                        <span className="text-stone-600 line-clamp-2" title={item.q1_calidadVida}>
                          {item.q1_calidadVida.length > 25 ? `· ${item.q1_calidadVida}` : ''}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          {getCategoryTag(item.q2_category)}
                          {item.hasRichQualitativeText && (
                            <MessageSquare className="w-3 h-3 text-amber-600 shrink-0" />
                          )}
                        </div>
                        <p className="text-stone-600 line-clamp-2 italic" title={item.q2_educacion}>
                          {item.q2_educacion}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="space-y-1">
                        <div>{getCategoryTag(item.q3_category)}</div>
                        <p className="text-stone-600 line-clamp-2" title={item.q3_trabajo}>
                          {item.q3_trabajo}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="space-y-1">
                        <div>{getCategoryTag(item.q4_category)}</div>
                        <p className="text-stone-600 line-clamp-2" title={item.q4_accesoEquitativo}>
                          {item.q4_accesoEquitativo}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="space-y-1">
                        <div>{getCategoryTag(item.q5_category)}</div>
                        <p className="text-stone-600 line-clamp-2" title={item.q5_tareasAcademicas}>
                          {item.q5_tareasAcademicas}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className={`text-[11px] font-medium ${
                        item.overallSentiment === 'Optimista'
                          ? 'text-emerald-700'
                          : item.overallSentiment === 'Crítico-Constructivo'
                          ? 'text-amber-700'
                          : 'text-rose-700'
                      }`}>
                        {item.overallSentiment}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectRespondent(item);
                        }}
                        className="p-1 text-stone-400 group-hover:text-stone-800 rounded hover:bg-stone-200 transition-colors"
                        title="Ver ficha completa"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer with summary and quick export */}
        <div className="bg-stone-50 border-t border-stone-200 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-3">
            <span>Leyenda:</span>
            <span className="flex items-center gap-1 text-emerald-700 font-medium">● Favorable</span>
            <span className="flex items-center gap-1 text-amber-700 font-medium">● Condicional</span>
            <span className="flex items-center gap-1 text-rose-700 font-medium">● Desfavorable</span>
          </div>

          <button
            onClick={onExportCSV}
            className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-900 font-medium underline"
          >
            <Download className="w-3 h-3" />
            Descargar matriz como CSV
          </button>
        </div>
      </div>
    </div>
  );
};
