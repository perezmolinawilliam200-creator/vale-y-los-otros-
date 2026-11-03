import React, { useState } from 'react';
import { X, Plus, Sparkles, Check } from 'lucide-react';
import { SurveyResponse } from '../types/survey';

interface AddInterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddResponse: (newResponse: SurveyResponse) => void;
  nextId: number;
}

export const AddInterviewModal: React.FC<AddInterviewModalProps> = ({
  isOpen,
  onClose,
  onAddResponse,
  nextId
}) => {
  const [q1, setQ1] = useState('');
  const [q1Cat, setQ1Cat] = useState<'Favorable' | 'Condicional' | 'Desfavorable'>('Favorable');

  const [q2, setQ2] = useState('');
  const [q2Cat, setQ2Cat] = useState<'Favorable' | 'Condicional' | 'Desfavorable'>('Favorable');

  const [q3, setQ3] = useState('');
  const [q3Cat, setQ3Cat] = useState<'Favorable' | 'Condicional' | 'Desfavorable'>('Favorable');

  const [q4, setQ4] = useState('');
  const [q4Cat, setQ4Cat] = useState<'Equitativo' | 'Inequitativo'>('Inequitativo');

  const [q5, setQ5] = useState('');
  const [q5Cat, setQ5Cat] = useState<'Favorable' | 'Condicional' | 'Desfavorable'>('Condicional');

  const [sentiment, setSentiment] = useState<'Optimista' | 'Crítico-Constructivo' | 'Escéptico'>('Crítico-Constructivo');
  const [notableQuote, setNotableQuote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const formattedTimestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    const newEntry: SurveyResponse = {
      id: nextId,
      timestamp: formattedTimestamp,
      q1_calidadVida: q1.trim() || (q1Cat === 'Favorable' ? 'Sí' : q1Cat === 'Condicional' ? 'Depende' : 'No'),
      q2_educacion: q2.trim() || (q2Cat === 'Favorable' ? 'Ayuda a aprender' : 'Depende del uso'),
      q3_trabajo: q3.trim() || (q3Cat === 'Favorable' ? 'Sí, automatiza tareas' : 'No reemplaza al humano'),
      q4_accesoEquitativo: q4.trim() || (q4Cat === 'Inequitativo' ? 'No, por el costo y cobertura' : 'Sí'),
      q5_tareasAcademicas: q5.trim() || (q5Cat === 'Favorable' ? 'Sí, como apoyo' : 'No'),
      q1_category: q1Cat,
      q2_category: q2Cat,
      q3_category: q3Cat,
      q4_category: q4Cat,
      q5_category: q5Cat,
      overallSentiment: sentiment,
      hasRichQualitativeText: q1.length > 30 || q2.length > 30 || q3.length > 30 || q5.length > 30,
      notableQuote: notableQuote.trim() || undefined,
      keyThemes: ['Entrevista adicional', 'Estudio continuo']
    };

    onAddResponse(newEntry);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div 
        className="bg-white border border-stone-200 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
          <div>
            <h3 className="text-base font-semibold text-stone-900">
              Registrar Nueva Entrevista de Campo (#{nextId})
            </h3>
            <p className="text-xs text-stone-500">
              Ingresa las respuestas obtenidas para recalcular automáticamente la muestra
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="px-6 py-5 overflow-y-auto space-y-4 text-xs">
          {/* Q1 */}
          <div className="space-y-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50/40">
            <label className="font-semibold text-stone-800 block">
              1. ¿Consideras que la IA mejora la calidad de vida?
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setQ1Cat('Favorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q1Cat === 'Favorable' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Sí (Favorable)
              </button>
              <button
                type="button"
                onClick={() => setQ1Cat('Condicional')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q1Cat === 'Condicional' ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Condicional / Depende
              </button>
              <button
                type="button"
                onClick={() => setQ1Cat('Desfavorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q1Cat === 'Desfavorable' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                No (Desfavorable)
              </button>
            </div>
            <textarea
              rows={2}
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
              placeholder="Respuesta textual o comentario del entrevistado..."
              className="w-full p-2 border border-stone-300 rounded bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>

          {/* Q2 */}
          <div className="space-y-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50/40">
            <label className="font-semibold text-stone-800 block">
              2. ¿En educación ayuda a aprender o genera demasiada dependencia?
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setQ2Cat('Favorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q2Cat === 'Favorable' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Ayuda a aprender
              </button>
              <button
                type="button"
                onClick={() => setQ2Cat('Condicional')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q2Cat === 'Condicional' ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Depende del uso
              </button>
              <button
                type="button"
                onClick={() => setQ2Cat('Desfavorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q2Cat === 'Desfavorable' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Pura dependencia
              </button>
            </div>
            <textarea
              rows={2}
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              placeholder="Respuesta textual del entrevistado..."
              className="w-full p-2 border border-stone-300 rounded bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>

          {/* Q3 */}
          <div className="space-y-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50/40">
            <label className="font-semibold text-stone-800 block">
              3. ¿Piensas que puede reemplazar actividades humanas en el trabajo?
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setQ3Cat('Favorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q3Cat === 'Favorable' ? 'bg-blue-50 text-blue-800 border-blue-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Sí, reemplaza
              </button>
              <button
                type="button"
                onClick={() => setQ3Cat('Condicional')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q3Cat === 'Condicional' ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                En algunos ámbitos
              </button>
              <button
                type="button"
                onClick={() => setQ3Cat('Desfavorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q3Cat === 'Desfavorable' ? 'bg-stone-100 text-stone-800 border-stone-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                No reemplaza
              </button>
            </div>
            <textarea
              rows={2}
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              placeholder="Respuesta textual..."
              className="w-full p-2 border border-stone-300 rounded bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>

          {/* Q4 */}
          <div className="space-y-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50/40">
            <label className="font-semibold text-stone-800 block">
              4. ¿Consideras que todas las personas tienen las mismas oportunidades de acceder a la IA?
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setQ4Cat('Inequitativo')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q4Cat === 'Inequitativo' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                No (Desigualdad / Brecha)
              </button>
              <button
                type="button"
                onClick={() => setQ4Cat('Equitativo')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q4Cat === 'Equitativo' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Sí (Mismas Oportunidades)
              </button>
            </div>
            <textarea
              rows={2}
              value={q4}
              onChange={(e) => setQ4(e.target.value)}
              placeholder="Respuesta textual..."
              className="w-full p-2 border border-stone-300 rounded bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>

          {/* Q5 */}
          <div className="space-y-1.5 p-3 rounded-lg border border-stone-200 bg-stone-50/40">
            <label className="font-semibold text-stone-800 block">
              5. ¿Crees que es correcto utilizar la IA para realizar tareas académicas?
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setQ5Cat('Favorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q5Cat === 'Favorable' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Sí, es correcto
              </button>
              <button
                type="button"
                onClick={() => setQ5Cat('Condicional')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q5Cat === 'Condicional' ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                Condicional (Como apoyo / No copia)
              </button>
              <button
                type="button"
                onClick={() => setQ5Cat('Desfavorable')}
                className={`px-2.5 py-1 rounded text-xs font-medium border ${
                  q5Cat === 'Desfavorable' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-white text-stone-600 border-stone-200'
                }`}
              >
                No es correcto
              </button>
            </div>
            <textarea
              rows={2}
              value={q5}
              onChange={(e) => setQ5(e.target.value)}
              placeholder="Respuesta textual..."
              className="w-full p-2 border border-stone-300 rounded bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>

          {/* Highlight Quote */}
          <div className="space-y-1">
            <label className="font-semibold text-stone-700 block">
              Frase o Cita Destacada (Opcional)
            </label>
            <input
              type="text"
              value={notableQuote}
              onChange={(e) => setNotableQuote(e.target.value)}
              placeholder="Ej: 'Apoyarse en la IA pero fortaleciendo la reflexión propia...'"
              className="w-full p-2 border border-stone-300 rounded bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>

          {/* Overall Sentiment */}
          <div className="space-y-1">
            <label className="font-semibold text-stone-700 block">
              Postura General Ponderada
            </label>
            <select
              value={sentiment}
              onChange={(e: any) => setSentiment(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-400"
            >
              <option value="Optimista">Optimista / Favorable</option>
              <option value="Crítico-Constructivo">Crítico-Constructivo / Reflexivo</option>
              <option value="Escéptico">Escéptico / Reticente</option>
            </select>
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 rounded-md transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-sm"
            >
              Guardar y Recalcular Estudio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
