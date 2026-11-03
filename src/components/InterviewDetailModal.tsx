import React from 'react';
import { X, Calendar, Clock, MessageSquare, Quote, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { SurveyResponse } from '../types/survey';

interface InterviewDetailModalProps {
  response: SurveyResponse | null;
  onClose: () => void;
}

export const InterviewDetailModal: React.FC<InterviewDetailModalProps> = ({
  response,
  onClose
}) => {
  if (!response) return null;

  const questions = [
    {
      num: 1,
      title: '¿Consideras que la inteligencia artificial mejora la calidad de vida de las personas?',
      answer: response.q1_calidadVida,
      category: response.q1_category,
      type: 'Calidad de Vida'
    },
    {
      num: 2,
      title: '¿Crees que el uso de la IA en educación ayuda a aprender o genera demasiada dependencia?',
      answer: response.q2_educacion,
      category: response.q2_category,
      type: 'Educación'
    },
    {
      num: 3,
      title: '¿Piensas que la IA puede reemplazar algunas actividades que realizan los seres humanos en el trabajo?',
      answer: response.q3_trabajo,
      category: response.q3_category,
      type: 'Laboral'
    },
    {
      num: 4,
      title: '¿Consideras que todas las personas tienen las mismas oportunidades de acceder a la IA adecuadamente?',
      answer: response.q4_accesoEquitativo,
      category: response.q4_category,
      type: 'Acceso y Equidad'
    },
    {
      num: 5,
      title: '¿Crees que es correcto utilizar la IA para realizar tareas académicas?',
      answer: response.q5_tareasAcademicas,
      category: response.q5_category,
      type: 'Ética Académica'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div 
        className="bg-white border border-stone-200 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
              <span>Ficha Técnica de Entrevista</span>
              <span aria-hidden="true">·</span>
              <span>Caso #{response.id}</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mt-0.5">
              Registro del Entrevistado #{response.id}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-200/60 transition-colors"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5 overflow-y-auto space-y-6 text-sm">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-xs">
            <div className="flex items-center gap-2 text-stone-600">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>Timestamp: <strong>{response.timestamp}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Postura general:</span>
              <span className={`font-semibold ${
                response.overallSentiment === 'Optimista'
                  ? 'text-emerald-700'
                  : response.overallSentiment === 'Crítico-Constructivo'
                  ? 'text-amber-700'
                  : 'text-rose-700'
              }`}>
                {response.overallSentiment}
              </span>
            </div>
          </div>

          {/* Highlighted Quote if present */}
          {response.notableQuote && (
            <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200/80">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                <Quote className="w-3.5 h-3.5" />
                <span>Cita Cualitativa Destacada</span>
              </div>
              <p className="text-sm font-serif italic text-amber-950 leading-relaxed">
                "{response.notableQuote}"
              </p>
            </div>
          )}

          {/* All 5 Question Responses */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Respuestas Textuales Registradas
            </h4>

            {questions.map((q) => (
              <div key={q.num} className="p-3.5 rounded-lg border border-stone-200 bg-white space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-xs font-medium text-stone-800">
                    <span className="font-semibold text-stone-900">{q.num}.</span> {q.title}
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                    q.category === 'Favorable' || q.category === 'Equitativo'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : q.category === 'Condicional'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}>
                    {q.category}
                  </span>
                </div>
                <div className="p-2.5 rounded bg-stone-50 border border-stone-100 text-stone-800 text-xs italic font-serif">
                  "{q.answer}"
                </div>
              </div>
            ))}
          </div>

          {/* Thematic Tags */}
          <div>
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Ejes Temáticos Asociados
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-stone-700">
              {response.keyThemes.map((theme, i) => (
                <span key={i} className="bg-stone-100 px-2.5 py-1 rounded text-stone-700">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-md transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
