import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area
} from 'recharts';
import { SurveyResponse } from '../types/survey';
import { computeStats, DIMENSIONS } from '../data/surveyData';
import { BarChart3, PieChart as PieIcon, Activity, Sparkles, AlertCircle } from 'lucide-react';

interface ChartsViewProps {
  responses: SurveyResponse[];
}

export const ChartsView: React.FC<ChartsViewProps> = ({ responses }) => {
  const [selectedChartMode, setSelectedChartMode] = useState<'comparative' | 'dimensions' | 'divide'>('comparative');
  const stats = computeStats(responses);

  // 1. Data for 5-Question Comparative Breakdown
  const comparativeData = [
    {
      dimension: '1. Calidad Vida',
      favorable: Math.round((responses.filter(r => r.q1_category === 'Favorable').length / responses.length) * 100),
      condicional: Math.round((responses.filter(r => r.q1_category === 'Condicional').length / responses.length) * 100),
      desfavorable: Math.round((responses.filter(r => r.q1_category === 'Desfavorable').length / responses.length) * 100),
      label: '¿Mejora la calidad de vida?'
    },
    {
      dimension: '2. Educación',
      favorable: Math.round((responses.filter(r => r.q2_category === 'Favorable').length / responses.length) * 100),
      condicional: Math.round((responses.filter(r => r.q2_category === 'Condicional').length / responses.length) * 100),
      desfavorable: Math.round((responses.filter(r => r.q2_category === 'Desfavorable').length / responses.length) * 100),
      label: '¿Ayuda a aprender?'
    },
    {
      dimension: '3. Trabajo',
      favorable: Math.round((responses.filter(r => r.q3_category === 'Favorable').length / responses.length) * 100),
      condicional: Math.round((responses.filter(r => r.q3_category === 'Condicional').length / responses.length) * 100),
      desfavorable: Math.round((responses.filter(r => r.q3_category === 'Desfavorable').length / responses.length) * 100),
      label: '¿Reemplaza actividades laborales?'
    },
    {
      dimension: '4. Acceso Equitativo',
      favorable: Math.round((responses.filter(r => r.q4_category === 'Equitativo').length / responses.length) * 100),
      condicional: 0,
      desfavorable: Math.round((responses.filter(r => r.q4_category === 'Inequitativo').length / responses.length) * 100),
      label: '¿Mismas oportunidades de acceso?'
    },
    {
      dimension: '5. Tareas Académicas',
      favorable: Math.round((responses.filter(r => r.q5_category === 'Favorable').length / responses.length) * 100),
      condicional: Math.round((responses.filter(r => r.q5_category === 'Condicional').length / responses.length) * 100),
      desfavorable: Math.round((responses.filter(r => r.q5_category === 'Desfavorable').length / responses.length) * 100),
      label: '¿Correcto para tareas académicas?'
    }
  ];

  // 2. Data for Digital Divide Donut (Question 4)
  const divideData = [
    { name: 'Desigualdad en Acceso (No)', value: responses.filter(r => r.q4_category === 'Inequitativo').length, color: '#ef4444' },
    { name: 'Oportunidades Iguales (Sí)', value: responses.filter(r => r.q4_category === 'Equitativo').length, color: '#10b981' }
  ];

  // 3. Academic Ethics Breakdown (Question 5)
  const ethicsData = [
    { name: 'Sí, Aceptación Directa', value: responses.filter(r => r.q5_category === 'Favorable').length, color: '#10b981' },
    { name: 'Condicional (Apoyo / No Copia)', value: responses.filter(r => r.q5_category === 'Condicional').length, color: '#f59e0b' },
    { name: 'No, Desfavorable / Rechazo', value: responses.filter(r => r.q5_category === 'Desfavorable').length, color: '#ef4444' }
  ];

  // 4. Radar polygon data
  const radarData = [
    { dimension: 'Calidad de Vida', pct: stats.approvalLife },
    { dimension: 'Ayuda Educativa', pct: stats.educationHelp },
    { dimension: 'Sustitución Laboral', pct: stats.laborDisplacement },
    { dimension: 'Brecha Digital', pct: stats.digitalDivide },
    { dimension: 'Uso en Tareas', pct: stats.academicEthicalApproval }
  ];

  // 5. Sentiment distribution
  const sentimentData = [
    { name: 'Optimista / Favorable', count: responses.filter(r => r.overallSentiment === 'Optimista').length, color: '#10b981' },
    { name: 'Crítico / Reflexivo', count: responses.filter(r => r.overallSentiment === 'Crítico-Constructivo').length, color: '#f59e0b' },
    { name: 'Escéptico / Reticente', count: responses.filter(r => r.overallSentiment === 'Escéptico').length, color: '#ef4444' }
  ];

  return (
    <div className="space-y-8">
      {/* Chart Navigation Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-stone-200 rounded-lg p-4">
        <div>
          <h2 className="text-base font-semibold text-stone-900">
            Visualización Cuantitativa de la Demanda de IA
          </h2>
          <p className="text-xs text-stone-500">
            Comparativas estadísticas, desgloses porcentuales y correlaciones multidimensionales
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-md">
          <button
            onClick={() => setSelectedChartMode('comparative')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              selectedChartMode === 'comparative'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Comparativo General
          </button>
          <button
            onClick={() => setSelectedChartMode('dimensions')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              selectedChartMode === 'dimensions'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Radar & Sentimiento
          </button>
          <button
            onClick={() => setSelectedChartMode('divide')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              selectedChartMode === 'divide'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Brecha & Ética
          </button>
        </div>
      </div>

      {/* Main Comparative Bar Chart */}
      {selectedChartMode === 'comparative' && (
        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-base font-semibold text-stone-900">
                Distribución Porcentual por Pregunta de Investigación (%)
              </h3>
              <p className="text-xs text-stone-500">
                Comparativa de respuestas Favorables (Verde), Condicionales/Depende (Amarillo) y Desfavorables (Rojo)
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-3 h-3 rounded-xs bg-emerald-500 inline-block" /> Favorable (Sí)
              </span>
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-3 h-3 rounded-xs bg-amber-500 inline-block" /> Condicional / Depende
              </span>
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-3 h-3 rounded-xs bg-rose-500 inline-block" /> Desfavorable (No)
              </span>
            </div>
          </div>

          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparativeData}
                margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis 
                  dataKey="dimension" 
                  tick={{ fill: '#334155', fontSize: 12, fontWeight: 500 }}
                  axisLine={{ stroke: '#cbd5e1' }}
                />
                <YAxis 
                  domain={[0, 100]}
                  unit="%"
                  tick={{ fill: '#64748b', fontSize: 11 }}
                  axisLine={{ stroke: '#cbd5e1' }}
                />
                <Tooltip
                  formatter={(val: any) => [`${val}%`, '']}
                  contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '6px', fontSize: '12px' }}
                />
                <Bar dataKey="favorable" name="Favorable (Sí)" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="condicional" name="Condicional / Depende" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="desfavorable" name="Desfavorable (No)" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-4 bg-stone-50 rounded-md border border-stone-100 text-xs text-stone-600 leading-relaxed">
            <strong className="text-stone-900">Interpretación Clave:</strong> Se aprecia un marcado contraste entre el optimismo en <em>Educación (85% a favor)</em> y la contundente percepción de <em>Desigualdad en Acceso (90% en contra)</em>. La IA es bienvenida en el aula pero rechazada como privilegio reservado a ciertos sectores económicos.
          </div>
        </div>
      )}

      {/* Radar & Sentiment View */}
      {selectedChartMode === 'dimensions' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Radar Chart */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="text-base font-semibold text-stone-900 mb-1">
              Polígono Multidimensional de Demanda y Percepción
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Mapeo de intensidad en las 5 variables del estudio
            </p>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis 
                    dataKey="dimension" 
                    tick={{ fill: '#1e293b', fontSize: 11, fontWeight: 600 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
                  <Radar
                    name="Porcentaje (%)"
                    dataKey="pct"
                    stroke="#0284c7"
                    fill="#38bdf8"
                    fillOpacity={0.35}
                  />
                  <Tooltip formatter={(val: any) => [`${val}%`, 'Intensidad']} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 text-xs text-stone-600 text-center">
              Eje más prominente: <span className="font-semibold text-rose-700">Brecha Digital ({stats.digitalDivide}%)</span>, seguido de <span className="font-semibold text-emerald-700">Ayuda Educativa ({stats.educationHelp}%)</span>.
            </div>
          </div>

          {/* Sentiment Distribution Pie */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6">
            <h3 className="text-base font-semibold text-stone-900 mb-1">
              Distribución de Posturas Globales
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Categorización de los {responses.length} entrevistados
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={45}
                    paddingAngle={3}
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val: any) => [`${val} entrevistados`, 'Total']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 mt-4 pt-3 border-t border-stone-100 text-xs">
              {sentimentData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-stone-700">{item.name}</span>
                  </div>
                  <span className="font-semibold text-stone-900">
                    {item.count} ({Math.round((item.count / responses.length) * 100)}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Divide & Ethics View */}
      {selectedChartMode === 'divide' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Digital Divide Donut */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-stone-900">
                Brecha Digital: Percepción de Igualdad de Oportunidades
              </h3>
              <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                90% Inequidad
              </span>
            </div>
            <p className="text-xs text-stone-500 mb-4">
              Pregunta 4: ¿Todas las personas tienen las mismas oportunidades de acceder a la IA adecuadamente?
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={divideData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={85}
                    innerRadius={50}
                    label={(entry) => `${(entry?.name || '').split(' ')[0]}: ${Math.round(((entry?.value || 0) / responses.length) * 100)}%`}
                  >
                    {divideData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val: any) => [`${val} de ${responses.length} personas`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 p-3 bg-rose-50/50 border border-rose-100 rounded text-xs text-rose-900 leading-relaxed">
              <strong>Motivos destacados por los encuestados:</strong>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-rose-800">
                <li><em>"No todos tienen el mismo bolsillo"</em> (Costo económico de equipos y licencias).</li>
                <li><em>"No por la cobertura"</em> (Brecha de infraestructura y conectividad en zonas rurales).</li>
                <li><em>"Muchos no la conocen ni saben manejarla"</em> (Falta de alfabetización digital).</li>
              </ul>
            </div>
          </div>

          {/* Academic Ethics Breakdown */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-stone-900">
                Uso en Tareas Académicas: Condición Pedagógica
              </h3>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                85% Aceptación Total
              </span>
            </div>
            <p className="text-xs text-stone-500 mb-4">
              Pregunta 5: ¿Es correcto utilizar la inteligencia artificial para realizar tareas académicas?
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ethicsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={85}
                    innerRadius={50}
                    label={(entry) => `${Math.round((entry.value / responses.length) * 100)}%`}
                  >
                    {ethicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val: any) => [`${val} personas`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 p-3 bg-amber-50/50 border border-amber-100 rounded text-xs text-amber-900 leading-relaxed">
              <strong>El Criterio Rector de la Demanda:</strong>
              <p className="mt-1">
                La suma de <em>Sí directo (50%)</em> y <em>Condicional (35%)</em> representa un <strong>85% favorable</strong>. La demanda no pide prohibición sino un pacto pedagógico: <em>"Que sea un refuerzo, no una copia"</em> y <em>"Corroborando primero la información"</em>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Individual Question Bar Mini-Charts */}
      <div className="bg-white border border-stone-200 rounded-lg p-6">
        <h3 className="text-base font-semibold text-stone-900 mb-1">
          Fichas Comparativas Rápidas por Dimensión
        </h3>
        <p className="text-xs text-stone-500 mb-4">
          Resumen de recuentos absolutos y porcentuales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {DIMENSIONS.map((dim) => (
            <div key={dim.id} className="border border-stone-200 rounded-md p-3 bg-stone-50/30">
              <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                Dimensión {dim.number}
              </div>
              <div className="text-xs font-semibold text-stone-800 line-clamp-1 mb-2">
                {dim.shortTitle}
              </div>

              <div className="space-y-1.5">
                {dim.breakdown.map((b, i) => (
                  <div key={i} className="text-[11px]">
                    <div className="flex justify-between text-stone-600">
                      <span className="truncate max-w-[90px]">{b.label.split(' ')[0]}</span>
                      <span className="font-semibold text-stone-900">{b.percentage}%</span>
                    </div>
                    <div className="h-1 bg-stone-200 rounded-full overflow-hidden mt-0.5">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${b.percentage}%`, backgroundColor: b.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
