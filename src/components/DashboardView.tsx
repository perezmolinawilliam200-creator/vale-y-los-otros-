import React from 'react';
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  Briefcase, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Quote
} from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { SurveyResponse } from '../types/survey';
import { computeStats, DIMENSIONS } from '../data/surveyData';

interface DashboardViewProps {
  responses: SurveyResponse[];
  onNavigateTab: (tab: 'dashboard' | 'table' | 'charts' | 'analysis') => void;
  onSelectRespondent: (response: SurveyResponse) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  responses,
  onNavigateTab,
  onSelectRespondent
}) => {
  const stats = computeStats(responses);

  // Radar data across 5 axes of adoption & perception
  const radarData = [
    { subject: 'Calidad de Vida', value: stats.approvalLife, fullMark: 100 },
    { subject: 'Apoyo Educativo', value: stats.educationHelp, fullMark: 100 },
    { subject: 'Impacto Laboral', value: stats.laborDisplacement, fullMark: 100 },
    { subject: 'Brecha de Acceso', value: stats.digitalDivide, fullMark: 100 },
    { subject: 'Uso en Tareas', value: stats.academicEthicalApproval, fullMark: 100 }
  ];

  // Highlights of verbatim quotes
  const highlightedQuotes = responses.filter(r => r.notableQuote);

  return (
    <div className="space-y-8">
      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Calidad de Vida
            </span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 text-xs font-medium rounded">
              Mayoritaria
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-stone-900">
              {stats.approvalLife}%
            </span>
            <span className="text-xs text-stone-500">
              (+25% condicional)
            </span>
          </div>
          <p className="mt-2 text-xs text-stone-600 leading-relaxed">
            Asocian la IA a la automatización de rutinas y resolución de problemas cotidianos.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Potencial Educativo
            </span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 text-xs font-medium rounded">
              Consenso 85%
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-stone-900">
              {stats.educationHelp}%
            </span>
            <span className="text-xs text-stone-500">
              afirman que ayuda
            </span>
          </div>
          <p className="mt-2 text-xs text-stone-600 leading-relaxed">
            Herramienta clave de tutoría y personalización; sin rechazo absoluto en la muestra.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Sustitución Laboral
            </span>
            <span className="text-blue-700 bg-blue-50 px-2 py-0.5 text-xs font-medium rounded">
              50% Reemplazo
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-stone-900">
              {stats.laborDisplacement}%
            </span>
            <span className="text-xs text-stone-500">
              (+20% en áreas clave)
            </span>
          </div>
          <p className="mt-2 text-xs text-stone-600 leading-relaxed">
            Reemplaza tareas repetitivas; surge el "calor humano" como frontera irreemplazable.
          </p>
        </div>

        <div className="bg-white border border-rose-200 bg-rose-50/30 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-800 uppercase tracking-wider">
              Brecha y Desigualdad
            </span>
            <span className="text-rose-700 bg-rose-100 px-2 py-0.5 text-xs font-medium rounded">
              Alerta 90%
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-rose-900">
              {stats.digitalDivide}%
            </span>
            <span className="text-xs text-rose-700 font-medium">
              perciben desigualdad
            </span>
          </div>
          <p className="mt-2 text-xs text-rose-800 leading-relaxed">
            Barrera económica ("no todos tienen el mismo bolsillo") y de cobertura territorial.
          </p>
        </div>
      </div>

      {/* Main Analysis Banner & Radar Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Executive Summary Card */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">
              <span>Síntesis Ejecutiva</span>
              <span aria-hidden="true">·</span>
              <span>Conclusiones Principales</span>
            </div>
            <h2 className="text-xl font-semibold text-stone-900 tracking-tight">
              La Paradoja de la Demanda de IA: Alta Utilidad Percibida vs. Severa Desigualdad Estructural
            </h2>
            <div className="mt-4 space-y-3 text-sm text-stone-600 leading-relaxed">
              <p>
                El análisis de las <strong>{responses.length} entrevistas de campo</strong> revela una demanda de adopción acelerada en los sectores educativo y laboral, pero enmarcada en una tensión ética y socioeconómica profunda:
              </p>
              <ul className="space-y-2 list-disc list-inside text-stone-700">
                <li>
                  <strong className="text-stone-900">En educación (85% a favor):</strong> La IA no se concibe como sustituto del estudio sino como <em>andamiaje cognitivo</em>. La comunidad demanda normativas de "apoyo y no copia" acompañadas de fomento a la lectura tradicional.
                </li>
                <li>
                  <strong className="text-stone-900">En el ámbito laboral (70% impacto):</strong> Se acepta la delegación de tareas mecánicas, pero los entrevistados levantan una frontera moral y empática: la IA carece de <em>"calor humano"</em>.
                </li>
                <li>
                  <strong className="text-stone-900">La fractura de acceso (90% en alerta):</strong> Es el punto de mayor concordancia. La ciudadanía no ve la IA como una herramienta democratizada, sino condicionada al poder adquisitivo y a la conectividad geográfica.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-stone-500">
              Datos normalizados y codificados desde las respuestas textuales de la investigación.
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigateTab('table')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
              >
                <span>Ver Matriz Tabular</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigateTab('analysis')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
              >
                <span>Leer Análisis Detallado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Radar Chart Card */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                Polígono de Percepción Multidimensional
              </h3>
              <p className="text-xs text-stone-500">
                Porcentajes ponderados sobre el total de respuestas
              </p>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#4b5563', fontSize: 11, fontWeight: 500 }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#9ca3af" />
                <Radar
                  name="Índice %"
                  dataKey="value"
                  stroke="#2563eb"
                  fill="#3b82f6"
                  fillOpacity={0.25}
                />
                <Tooltip 
                  formatter={(val: any) => [`${val}%`, 'Porcentaje de Acuerdo']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-center text-xs text-stone-500">
            Nótese el pico saliente en <span className="font-semibold text-stone-800">Brecha de Acceso (90%)</span> y <span className="font-semibold text-stone-800">Apoyo Educativo (85%)</span>.
          </div>
        </div>
      </div>

      {/* Qualitative Voices and Testimonials */}
      <div className="bg-white border border-stone-200 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
          <div>
            <h3 className="text-base font-semibold text-stone-900">
              Voces del Territorio: Citas y Reflexiones Cualitativas
            </h3>
            <p className="text-xs text-stone-500">
              Expresiones directas extraídas de las entrevistas que definen las categorías analíticas
            </p>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            {highlightedQuotes.length} reflexiones cualitativas registradas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlightedQuotes.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectRespondent(item)}
              className="group p-4 rounded-lg border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-stone-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-stone-700">Entrevistado #{item.id}</span>
                  <span>{item.timestamp.split(' ')[1]}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <p className="text-xs font-serif italic text-stone-800 leading-relaxed">
                    "{item.notableQuote}"
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="text-stone-500 truncate max-w-[170px]">
                  {item.keyThemes[0]}
                </span>
                <span className="text-stone-700 font-medium group-hover:text-stone-900 group-hover:underline">
                  Ver detalle →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Core Dimensions Overview Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-stone-900">
            Desglose de las 5 Preguntas Estructuradas
          </h3>
          <button
            onClick={() => onNavigateTab('charts')}
            className="text-xs font-medium text-stone-700 hover:text-stone-900 underline"
          >
            Ver todos los gráficos comparativos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIMENSIONS.map((dim) => (
            <div key={dim.id} className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                  Pregunta {dim.number}
                </div>
                <h4 className="text-sm font-semibold text-stone-900 line-clamp-1 mb-2">
                  {dim.shortTitle}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 italic mb-4">
                  "{dim.question}"
                </p>

                {/* Progress bars for breakdown */}
                <div className="space-y-2 mb-4">
                  {dim.breakdown.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-600 truncate max-w-[180px]">{item.label}</span>
                        <span className="font-semibold text-stone-800">{item.percentage}% ({item.count})</span>
                      </div>
                      <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500">
                {dim.keyTakeaways[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
