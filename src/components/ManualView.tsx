import React, { useState } from 'react';
import { 
  BookOpen, 
  UserCheck, 
  GraduationCap, 
  Building2, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  Download,
  Printer
} from 'lucide-react';

export const ManualView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'instructor' | 'aprendiz' | 'coordinador' | 'all'>('instructor');

  return (
    <div className="space-y-6">
      {/* Manual Header Banner */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              <span>Documentación Oficial</span>
              <span aria-hidden="true">·</span>
              <span>Archivo raíz: /manual.md</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
              Manual de Operación por Roles
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
              Guía de utilización del <strong>Prototipo Integral de Análisis de Demanda de IA</strong>. Selecciona tu perfil institucional para consultar las orientaciones específicas de trabajo, o revisa el documento normativo completo.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Manual</span>
            </button>
          </div>
        </div>

        {/* Role Switcher Tabs */}
        <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedRole('instructor')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              selectedRole === 'instructor'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Rol de Instructor</span>
          </button>

          <button
            onClick={() => setSelectedRole('aprendiz')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              selectedRole === 'aprendiz'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Rol de Aprendiz</span>
          </button>

          <button
            onClick={() => setSelectedRole('coordinador')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              selectedRole === 'coordinador'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Rol de Coordinador Académico</span>
          </button>

          <button
            onClick={() => setSelectedRole('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all ${
              selectedRole === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Ver Todo el Manual</span>
          </button>
        </div>
      </div>

      {/* Role 1: Instructor */}
      {(selectedRole === 'instructor' || selectedRole === 'all') && (
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                Perfil Pedagógico y Docente
              </span>
              <h3 className="text-xl font-semibold text-stone-900">
                1. Guía de Operación para el Instructor
              </h3>
            </div>
          </div>

          <div className="text-sm text-stone-700 leading-relaxed space-y-4">
            <div>
              <h4 className="font-semibold text-stone-900 text-sm mb-1">
                Objetivo Formativo
              </h4>
              <p>
                El instructor actúa como guía metodológico del proceso investigativo. Su labor es orientar a los aprendices en el levantamiento de información en campo, supervisar la codificación de las respuestas cualitativas y moderar debates fundamentados sobre la tensión entre innovación técnica y equidad social.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-md border border-stone-200 bg-stone-50/50 space-y-2">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                  A. Preparación y Diagnóstico Inicial
                </span>
                <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                  <li>Ingrese al <strong>Panel Ejecutivo</strong> para revisar los indicadores clave activos de la muestra (N=20).</li>
                  <li>Proyecte el <strong>Polígono Multidimensional (Radar)</strong> para plantear preguntas detonantes a los estudiantes.</li>
                  <li>Contraste la discrepancia entre el 85% de apoyo educativo y el 90% de alerta en brecha digital.</li>
                </ul>
              </div>

              <div className="p-4 rounded-md border border-stone-200 bg-stone-50/50 space-y-2">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                  B. Supervisión y Control Cualitativo
                </span>
                <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                  <li>En la <strong>Matriz Tabular</strong>, active el filtro <em>"Con Citas Extensas"</em> para examinar las transcripciones profundas.</li>
                  <li>Abra la <strong>Ficha Técnica Individual</strong> de cualquier encuestado para comprobar que la etiqueta (*Favorable, Condicional, Desfavorable*) refleje con rigor la respuesta literal.</li>
                  <li>Utilice la frase <em>"Lo pueden hacer, pero no se compara con el calor humano"</em> para problematizar la singularidad laboral humana.</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-md bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-950 space-y-1">
              <strong>Estrategia de Evaluación Recomendada:</strong>
              <p>
                Solicite a los aprendices descargar la matriz con el botón <strong>"Exportar CSV"</strong> y entregar un ensayo crítico donde justifiquen por qué la comunidad definió que la IA en tareas debe ser <em>"un refuerzo, no una copia"</em>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Role 2: Aprendiz */}
      {(selectedRole === 'aprendiz' || selectedRole === 'all') && (
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-800">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Perfil del Estudiante e Investigador
              </span>
              <h3 className="text-xl font-semibold text-stone-900">
                2. Guía de Operación para el Aprendiz
              </h3>
            </div>
          </div>

          <div className="text-sm text-stone-700 leading-relaxed space-y-4">
            <div>
              <h4 className="font-semibold text-stone-900 text-sm mb-1">
                Objetivo de Aprendizaje
              </h4>
              <p>
                El aprendiz desarrolla competencias de investigación empírica mediante la recolección de entrevistas, el registro ordenado de datos, la lectura de gráficos estadísticos y la elaboración de conclusiones éticas y técnicas sobre el uso de la IA.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-md border border-stone-200 bg-stone-50/50">
                <span className="text-xs font-bold text-stone-800 block mb-2">
                  Paso a Paso para las Actividades Prácticas:
                </span>
                <ol className="text-xs text-stone-600 space-y-2 list-decimal list-inside">
                  <li>
                    <strong>Explorar la Matriz:</strong> Usa el buscador para encontrar testimonios ingresando términos como <em>"bolsillo"</em>, <em>"libros"</em> o <em>"cobertura"</em>. Filtra por <em>Optimistas</em>, <em>Críticos</em> o <em>Escépticos</em> para comparar argumentos.
                  </li>
                  <li>
                    <strong>Registrar Nuevas Entrevistas:</strong> Haz clic en <strong>"Registrar Entrevista"</strong> en la cabecera. Llena las respuestas del encuestado para las 5 preguntas, selecciona las categorías correspondientes y guarda. Observa cómo todo el estudio se recalcula al instante.
                  </li>
                  <li>
                    <strong>Interpretar los Gráficos:</strong> En la sección <strong>"Gráficos y Visualizaciones"</strong>, analiza las barras de las 5 dimensiones y los gráficos circulares de Brecha Digital y Tareas Académicas.
                  </li>
                  <li>
                    <strong>Descargar Evidencias:</strong> Utiliza el botón <strong>"Exportar CSV"</strong> para respaldar la información y adjuntarla en tu portafolio de evidencias.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Role 3: Coordinador Académico */}
      {(selectedRole === 'coordinador' || selectedRole === 'all') && (
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                Perfil de Gestión Curricular y Política Institucional
              </span>
              <h3 className="text-xl font-semibold text-stone-900">
                3. Guía de Operación para el Coordinador Académico
              </h3>
            </div>
          </div>

          <div className="text-sm text-stone-700 leading-relaxed space-y-4">
            <div>
              <h4 className="font-semibold text-stone-900 text-sm mb-1">
                Propósito Estratégico
              </h4>
              <p>
                El coordinador académico utiliza la plataforma para fundamentar la actualización curricular de los programas de formación, dictar políticas institucionales de uso ético de la IA y justificar inversiones en conectividad e infraestructura digital ante comités directivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-md border border-stone-200 bg-stone-50/50 space-y-1.5">
                <span className="text-xs font-bold text-stone-800 block">
                  1. Indicador Educativo (85%)
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Valida la necesidad de capacitar a los instructores en diseño de actividades pedagógicas mediadas por IA, dejando atrás la idea de vetar estas tecnologías.
                </p>
              </div>

              <div className="p-4 rounded-md border border-stone-200 bg-stone-50/50 space-y-1.5">
                <span className="text-xs font-bold text-stone-800 block">
                  2. Alerta de Brecha (90%)
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Sustenta proyectos de subsidios para conectividad y adquisición de hardware para aprendices en zonas con baja cobertura o recursos económicos limitados.
                </p>
              </div>

              <div className="p-4 rounded-md border border-stone-200 bg-stone-50/50 space-y-1.5">
                <span className="text-xs font-bold text-stone-800 block">
                  3. Política de Integridad
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Formaliza directrices de evaluación institucional adoptando el principio de <em>"refuerzo, no copia"</em> con exigencia de trazabilidad y fuentes de lectura.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-700">
              <strong>Reportes para Acreditación:</strong> Utilice el botón <strong>"Imprimir Informe"</strong> para imprimir o generar un PDF estructurado con la matriz FODA y las recomendaciones de acción para respaldar auditorías de calidad educativa.
            </div>
          </div>
        </div>
      )}

      {/* Question Mapping Reference Table */}
      <div className="bg-white border border-stone-200 rounded-lg p-6">
        <h3 className="text-base font-semibold text-stone-900 mb-2">
          Matriz de Correspondencia de las 5 Preguntas del Instrumento
        </h3>
        <p className="text-xs text-stone-500 mb-4">
          Estructura estandarizada aplicada en el dataset <code className="bg-stone-100 px-1 py-0.5 rounded">TRABAJO_IA_2.0.xlsx</code>
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                <th className="py-2.5 px-3 font-semibold w-12">Var</th>
                <th className="py-2.5 px-3 font-semibold">Pregunta de Campo</th>
                <th className="py-2.5 px-3 font-semibold w-40">Opciones Codificadas</th>
                <th className="py-2.5 px-3 font-semibold">Interpretación Analítica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-stone-800">Q1</td>
                <td className="py-2.5 px-3 font-medium text-stone-800">¿Consideras que la IA mejora la calidad de vida de las personas?</td>
                <td className="py-2.5 px-3">Sí / Depende / No</td>
                <td className="py-2.5 px-3">Evalúa optimismo pragmático vs. riesgo de pérdida de pensamiento crítico.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-stone-800">Q2</td>
                <td className="py-2.5 px-3 font-medium text-stone-800">¿Crees que el uso de la IA en la educación ayuda a aprender o genera demasiada dependencia?</td>
                <td className="py-2.5 px-3">Ayuda / Depende / Dependencia</td>
                <td className="py-2.5 px-3">Mide tutoría adaptativa vs. superficialidad en la interiorización.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-stone-800">Q3</td>
                <td className="py-2.5 px-3 font-medium text-stone-800">¿Piensas que la IA puede reemplazar algunas actividades humanas en el trabajo?</td>
                <td className="py-2.5 px-3">Sí / Ámbitos específicos / No</td>
                <td className="py-2.5 px-3">Delimita la frontera entre automatización mecánica y el "calor humano".</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-stone-800">Q4</td>
                <td className="py-2.5 px-3 font-medium text-stone-800">¿Consideras que todas las personas tienen las mismas oportunidades de acceder a la IA?</td>
                <td className="py-2.5 px-3">Sí / No (Desigualdad 90%)</td>
                <td className="py-2.5 px-3">Identifica barreras económicas ("el mismo bolsillo"), cobertura y competencias.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-stone-800">Q5</td>
                <td className="py-2.5 px-3 font-medium text-stone-800">¿Crees que es correcto utilizar la IA para realizar tareas académicas?</td>
                <td className="py-2.5 px-3">Sí / Condicional / No</td>
                <td className="py-2.5 px-3">Establece la regla ética de oro ciudadana: "refuerzo, no copia" y fomento a la lectura.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
