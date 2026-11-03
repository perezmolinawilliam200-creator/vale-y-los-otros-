import React from 'react';
import { Download, PlusCircle, Printer, FileSpreadsheet, Sparkles } from 'lucide-react';
import { SurveyResponse } from '../types/survey';

interface HeaderProps {
  responses: SurveyResponse[];
  onOpenAddModal: () => void;
  onExportCSV: () => void;
  onPrintReport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  responses,
  onOpenAddModal,
  onExportCSV,
  onPrintReport
}) => {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
              <span>Investigación de Campo</span>
              <span aria-hidden="true">·</span>
              <span>Muestra Activa: {responses.length} Entrevistas</span>
              <span aria-hidden="true">·</span>
              <span>Dataset: TRABAJO_IA_2.0</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
              Análisis Integral de Demanda y Percepciones sobre IA
            </h1>
            <p className="text-sm text-stone-600 mt-1 max-w-3xl">
              Plataforma analítica para la evaluación empírica de encuestas cualitativas y cuantitativas sobre la adopción, impacto laboral, ética pedagógica y brechas de acceso a la inteligencia artificial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
              title="Descargar matriz en formato CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar CSV</span>
            </button>

            <button
              onClick={onPrintReport}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
              title="Imprimir informe ejecutivo estructurado"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Informe</span>
            </button>

            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-sm"
              title="Registrar una nueva entrevista al estudio"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Registrar Entrevista</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
