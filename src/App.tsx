import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Table as TableIcon, 
  BarChart3, 
  FileText, 
  PlusCircle, 
  Download, 
  Printer, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { TableView } from './components/TableView';
import { ChartsView } from './components/ChartsView';
import { AnalysisView } from './components/AnalysisView';
import { ManualView } from './components/ManualView';
import { InterviewDetailModal } from './components/InterviewDetailModal';
import { AddInterviewModal } from './components/AddInterviewModal';
import { INITIAL_SURVEY_DATA } from './data/surveyData';
import { SurveyResponse } from './types/survey';

type ActiveTab = 'dashboard' | 'table' | 'charts' | 'analysis' | 'manual';

export default function App() {
  const [responses, setResponses] = useState<SurveyResponse[]>(INITIAL_SURVEY_DATA);
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [selectedRespondent, setSelectedRespondent] = useState<SurveyResponse | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleAddResponse = (newResponse: SurveyResponse) => {
    setResponses((prev) => [newResponse, ...prev]);
    showNotification(`Entrevista #${newResponse.id} agregada exitosamente. Métricas y gráficos actualizados.`);
  };

  const handleExportCSV = () => {
    const headers = [
      'ID',
      'Timestamp',
      '1. Calidad de Vida (Texto)',
      '1. Clasificación',
      '2. Educación (Texto)',
      '2. Clasificación',
      '3. Reemplazo Laboral (Texto)',
      '3. Clasificación',
      '4. Acceso Equitativo (Texto)',
      '4. Clasificación',
      '5. Tareas Académicas (Texto)',
      '5. Clasificación',
      'Postura Global',
      'Cita Destacada'
    ];

    const escapeCSV = (str: string | undefined) => {
      if (!str) return '""';
      const clean = str.replace(/"/g, '""');
      return `"${clean}"`;
    };

    const rows = responses.map((r) => [
      r.id,
      escapeCSV(r.timestamp),
      escapeCSV(r.q1_calidadVida),
      escapeCSV(r.q1_category),
      escapeCSV(r.q2_educacion),
      escapeCSV(r.q2_category),
      escapeCSV(r.q3_trabajo),
      escapeCSV(r.q3_category),
      escapeCSV(r.q4_accesoEquitativo),
      escapeCSV(r.q4_category),
      escapeCSV(r.q5_tareasAcademicas),
      escapeCSV(r.q5_category),
      escapeCSV(r.overallSentiment),
      escapeCSV(r.notableQuote || '')
    ]);

    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Estudio_Demanda_IA_Entrevistas_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Archivo CSV descargado con éxito.');
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 font-sans flex flex-col antialiased selection:bg-stone-300 selection:text-stone-900">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        responses={responses}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onExportCSV={handleExportCSV}
        onPrintReport={handlePrintReport}
      />

      {/* Navigation Sub-Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto py-2.5">
            <nav className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Panel Ejecutivo</span>
              </button>

              <button
                onClick={() => setActiveTab('table')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'table'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Matriz Tabular ({responses.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('charts')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'charts'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Gráficos y Visualizaciones</span>
              </button>

              <button
                onClick={() => setActiveTab('analysis')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'analysis'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Análisis Integral & FODA</span>
              </button>

              <button
                onClick={() => setActiveTab('manual')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'manual'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>Manual de Roles</span>
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-3 text-xs text-stone-500">
              <span>Archivo fuente: <code className="text-[11px] bg-stone-100 px-1.5 py-0.5 rounded text-stone-700">TRABAJO_IA_2.0.xlsx</code></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <DashboardView
            responses={responses}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onSelectRespondent={(r) => setSelectedRespondent(r)}
          />
        )}

        {activeTab === 'table' && (
          <TableView
            responses={responses}
            onSelectRespondent={(r) => setSelectedRespondent(r)}
            onExportCSV={handleExportCSV}
          />
        )}

        {activeTab === 'charts' && (
          <ChartsView responses={responses} />
        )}

        {activeTab === 'analysis' && (
          <AnalysisView
            responses={responses}
            onSelectRespondent={(r) => setSelectedRespondent(r)}
          />
        )}

        {activeTab === 'manual' && (
          <ManualView />
        )}
      </main>

      {/* Modals */}
      <InterviewDetailModal
        response={selectedRespondent}
        onClose={() => setSelectedRespondent(null)}
      />

      <AddInterviewModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddResponse={handleAddResponse}
        nextId={responses.length > 0 ? Math.max(...responses.map(r => r.id)) + 1 : 1}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Prototipo Integral de Análisis de Demanda y Percepciones sobre Inteligencia Artificial · Estudio Cuantitativo & Cualitativo
          </div>
          <div className="flex items-center gap-3">
            <span>20 Entrevistas de campo</span>
            <span aria-hidden="true">·</span>
            <span>Dataset codificado</span>
            <span aria-hidden="true">·</span>
            <span>Exportable a CSV</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
