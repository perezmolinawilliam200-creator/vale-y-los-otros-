import React, { useState } from 'react';
import { 
  FileText, 
  Lightbulb, 
  CheckCircle, 
  AlertTriangle, 
  Scale, 
  Quote, 
  Bookmark, 
  ChevronRight,
  Shield,
  Layers,
  GraduationCap
} from 'lucide-react';
import { SurveyResponse } from '../types/survey';
import { DIMENSIONS, computeStats } from '../data/surveyData';

interface AnalysisViewProps {
  responses: SurveyResponse[];
  onSelectRespondent: (response: SurveyResponse) => void;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({
  responses,
  onSelectRespondent
}) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const stats = computeStats(responses);

  const thematicTags = [
    { id: 'all', label: 'Todos los Temas' },
    { id: 'calor-humano', label: 'Calor Humano e Identidad Laboral' },
    { id: 'brecha', label: 'Brecha Digital y Costo Económico' },
    { id: 'refuerzo-copia', label: 'Refuerzo vs Copia en Educación' },
    { id: 'pensamiento-critico', label: 'Pensamiento Crítico y Verificación' }
  ];

  return (
    <div className="space-y-8">
      {/* Report Header */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            <span>Informe Analítico Integral</span>
            <span aria-hidden="true">·</span>
            <span>Muestra N=20</span>
            <span aria-hidden="true">·</span>
            <span>Metodología Mixta</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
            Diagnóstico Cualitativo y Cuantitativo sobre la Demanda de Inteligencia Artificial
          </h2>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Este informe sintetiza la percepción social, laboral y educativa frente a la irrupción de la inteligencia artificial. A partir de 20 entrevistas de campo codificadas, se identifica un patrón nítido: <strong>alta disposición al uso pragmático en el aprendizaje y el trabajo</strong>, contrarrestada por una <strong>alarma generalizada ante la brecha socioeconómica y la pérdida de la calidez humana</strong>.
          </p>
        </div>

        {/* Executive Summary Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-stone-100">
          <div>
            <div className="text-xs font-medium text-stone-500">Aceptación en Vida Diaria</div>
            <div className="text-2xl font-bold text-stone-900 mt-1">{stats.approvalLife}%</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Favorable + 25% condicional</div>
          </div>
          <div>
            <div className="text-xs font-medium text-stone-500">Valoración en Educación</div>
            <div className="text-2xl font-bold text-emerald-700 mt-1">{stats.educationHelp}%</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Ayuda efectiva al aprendizaje</div>
          </div>
          <div>
            <div className="text-xs font-medium text-stone-500">Impacto en Empleo</div>
            <div className="text-2xl font-bold text-blue-700 mt-1">{stats.laborDisplacement}%</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Sustitución de tareas operativas</div>
          </div>
          <div>
            <div className="text-xs font-medium text-stone-500">Percepción de Inequidad</div>
            <div className="text-2xl font-bold text-rose-700 mt-1">{stats.digitalDivide}%</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Señalan brechas de acceso</div>
          </div>
        </div>
      </div>

      {/* The 5 Thematic Pillars Detailed Analysis */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-stone-900">
            Los 5 Pilares Estructurales del Estudio
          </h3>
          <span className="text-xs text-stone-500">
            Análisis cruzado de variables empíricas
          </span>
        </div>

        {/* Pilar 1 */}
        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
            <div>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                Pilar 01
              </span>
              <h4 className="text-base font-semibold text-stone-900">
                Calidad de Vida: Automatización Rutinaria frente a Riesgos Cognitivos
              </h4>
            </div>
            <div className="text-xs text-stone-500">
              Aprobación: <strong>60% Sí</strong> · <strong>25% Condicional</strong> · <strong>15% No</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-stone-700 leading-relaxed">
            <div className="lg:col-span-8 space-y-3">
              <p>
                Los participantes asocian la mejora en la calidad de vida directamente con la delegación de tareas repetitivas y la resolución rápida de inconvenientes diarios. Sin embargo, un 25% de la muestra condiciona esta mejora: no existe un beneficio intrínseco si el usuario abdica de su capacidad reflexiva.
              </p>
              <p>
                Destaca la postura del entrevistado #18, quien incorpora una dimensión ecológica y cognitiva poco habitual en discusiones superficiales: advierte que el consumo indiscriminado de recursos hídricos/energéticos por centros de datos y la <em>"facilidad que anula el pensamiento crítico"</em> pueden deteriorar la calidad de vida a mediano plazo si no hay una regulación consciente.
              </p>
            </div>
            <div className="lg:col-span-4 bg-stone-50 p-4 rounded-md border border-stone-200/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Cita Evidencial #18
                </span>
                <p className="mt-2 text-xs font-serif italic text-stone-800">
                  "Depende de su uso... ayuda a resolver problemas, pero a largo tiempo consume recursos naturales y las personas por su facilidad pierden pensamiento crítico."
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Alerta de sostenibilidad y soberanía mental.
              </div>
            </div>
          </div>
        </div>

        {/* Pilar 2 */}
        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Pilar 02
              </span>
              <h4 className="text-base font-semibold text-stone-900">
                Educación: Tutoría Adaptativa vs. Atrofia de la Interiorización
              </h4>
            </div>
            <div className="text-xs text-stone-500">
              Aceptación Pedagógica: <strong>85% Ayuda Directa</strong> · <strong>15% Dependencia Condicional</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-stone-700 leading-relaxed">
            <div className="lg:col-span-8 space-y-3">
              <p>
                La educación es el campo donde la demanda se expresa con mayor entusiasmo. Ningún participante opinó que la IA deba vetarse en las aulas. Se resalta su habilidad única para descomponer conceptos difíciles y ofrecer explicaciones personalizadas a ritmo propio (Entrevistado #11).
              </p>
              <p>
                El contra-argumento más elocuente proviene del Entrevistado #3: <em>"muchas veces lo tenemos tan a la mano que no nos permite ver más allá, interiorizar la información que recibimos"</em>. La inmediatez de la respuesta prediseñada amenaza con sustituir el esfuerzo cognitivo necesario para que el conocimiento se consolide en la memoria a largo plazo.
              </p>
            </div>
            <div className="lg:col-span-4 bg-stone-50 p-4 rounded-md border border-stone-200/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Cita Evidencial #11
                </span>
                <p className="mt-2 text-xs font-serif italic text-stone-800">
                  "Cumplen ambas funciones: es una herramienta de apoyo muy útil que personaliza el aprendizaje y explica conceptos complejos de forma sencilla..."
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Personalización como vector principal de demanda.
              </div>
            </div>
          </div>
        </div>

        {/* Pilar 3 */}
        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Pilar 03
              </span>
              <h4 className="text-base font-semibold text-stone-900">
                Mundo Laboral: Automatización Operativa y la Frontera del "Calor Humano"
              </h4>
            </div>
            <div className="text-xs text-stone-500">
              Sustitución Proyectada: <strong>50% Reemplaza</strong> · <strong>20% Ámbitos Específicos</strong> · <strong>30% No</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-stone-700 leading-relaxed">
            <div className="lg:col-span-8 space-y-3">
              <p>
                El 70% de los encuestados prevé un reemplazo total o sectorial de actividades humanas por agentes inteligentes. No obstante, este pronóstico no se formula desde el pánico destructivo, sino desde una clara demarcación funcional: las máquinas asumirán tareas rutinarias y repetitivas, liberando a las personas para labores de mayor juicio o empatía.
              </p>
              <p>
                La frase insignia del estudio emerge en este punto: <strong>"Lo pueden hacer, pero no se compara con el calor humano"</strong> (Entrevistado #3). Esta formulación sintetiza la demanda social de resguardar el vínculo empático, el cuidado personal, la mediación ética y la atención cercana como espacios no delegables a algoritmos.
              </p>
            </div>
            <div className="lg:col-span-4 bg-stone-50 p-4 rounded-md border border-stone-200/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Cita Evidencial #3
                </span>
                <p className="mt-2 text-xs font-serif italic text-stone-800">
                  "Lo pueden hacer, pero no se compara con el calor humano."
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                El factor afectivo como irreductible humano.
              </div>
            </div>
          </div>
        </div>

        {/* Pilar 4 */}
        <div className="bg-white border border-rose-200 bg-rose-50/20 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-rose-100 pb-3 mb-4">
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                Pilar 04 · Hallazgo Crítico
              </span>
              <h4 className="text-base font-semibold text-rose-950">
                La Gran Fractura: Inequidad Económica, Cobertura y Alfabetización
              </h4>
            </div>
            <div className="text-xs font-medium text-rose-800">
              Desigualdad: <strong>90% No Hay Mismas Oportunidades</strong> (18 de 20)
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-stone-700 leading-relaxed">
            <div className="lg:col-span-8 space-y-3">
              <p className="text-rose-950 font-medium">
                Con un consenso abrumador del 90%, este es el hallazgo cuantitativo y ético más contundente de la investigación. La ciudadanía percibe que la inteligencia artificial, lejos de ser un bien público universal, está concentrándose como una ventaja asimétrica para quienes poseen recursos.
              </p>
              <p>
                Los testimonios desglosan la desigualdad en tres niveles infranqueables:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                <li><strong>Barrera Económica:</strong> <em>"No todos tienen el mismo bolsillo"</em> (Entrevistado #12), aludiendo al costo de suscripciones profesionales, hardware con suficiente cómputo y conectividad veloz.</li>
                <li><strong>Barrera Geográfica:</strong> <em>"No por la cobertura"</em> (Entrevistados #5 y #20), evidenciando las deficiencias de infraestructura telecomunicacional fuera de los centros urbanos.</li>
                <li><strong>Barrera Formativa:</strong> <em>"Muchas personas abusan de ella, otros no la conocen y otros no saben manejarla o no pueden"</em> (Entrevistado #18), reflejando analfabetismo digital en IA.</li>
              </ul>
            </div>
            <div className="lg:col-span-4 bg-white p-4 rounded-md border border-rose-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-rose-800 uppercase tracking-wider">
                  Cita Evidencial #12
                </span>
                <p className="mt-2 text-xs font-serif italic text-rose-950">
                  "No, todos no tienen el mismo bolsillo."
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-rose-100 text-[11px] text-rose-700">
                Metáfora elocuente de la brecha económica de clases frente a la tecnología.
              </div>
            </div>
          </div>
        </div>

        {/* Pilar 5 */}
        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-100 pb-3 mb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Pilar 05
              </span>
              <h4 className="text-base font-semibold text-stone-900">
                Ética en Tareas Académicas: El Principio de "Refuerzo, No Copia"
              </h4>
            </div>
            <div className="text-xs text-stone-500">
              Aceptación Regulada: <strong>50% Sí</strong> · <strong>35% Condicional</strong> · <strong>15% No</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-stone-700 leading-relaxed">
            <div className="lg:col-span-8 space-y-3">
              <p>
                Frente a la pregunta de si es correcto utilizar IA para realizar tareas académicas, la comunidad consultada rechaza el prohibicionismo estéril (85% acumulado a favor), pero formula una exigencia deontológica rotunda: <strong>"siempre y cuando se aprenda y la IA sea un refuerzo, no una copia"</strong> (Entrevistado #18).
              </p>
              <p>
                Surge además la exigencia de verificación epistémica (<em>"corroborando primero la información"</em>, Entrevistado #3) y la defensa del libro como contrapeso cultural: <em>"es importante también acudir a libros para fomentar la lectura"</em> (Entrevistado #10). La demanda ciudadana no pide atajos académicos deshonestos, sino pedagogías que enseñen a dialogar críticamente con la herramienta.
              </p>
            </div>
            <div className="lg:col-span-4 bg-stone-50 p-4 rounded-md border border-stone-200/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Cita Evidencial #18 y #10
                </span>
                <p className="mt-2 text-xs font-serif italic text-stone-800">
                  "Sí, siempre y cuando se aprenda y sea un refuerzo, no una copia... acudir también a libros para fomentar la lectura."
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                Pacto formativo: andamiaje inteligente + cultura letrada.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Matriz FODA (SWOT) */}
      <div className="bg-white border border-stone-200 rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-base font-semibold text-stone-900">
            Matriz FODA de la Demanda Social de IA
          </h3>
          <p className="text-xs text-stone-500">
            Evaluación estratégica derivada directamente del análisis de campo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Fortalezas */}
          <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/40">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Fortalezas Identificadas</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
              <li>Alta receptividad y actitud proactiva hacia la innovación (85% aprecio en educación).</li>
              <li>Reconocimiento tácito del valor de la personalización del aprendizaje.</li>
              <li>Comprensión intuitiva de la IA como acelerador de tareas repetitivas.</li>
            </ul>
          </div>

          {/* Oportunidades */}
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50/40">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span>Oportunidades Estratégicas</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
              <li>Diseño de políticas institucionales de "IA como refuerzo" en colegios y universidades.</li>
              <li>Liberación de tiempo docente para asesoría vocacional y mentoría personalizada.</li>
              <li>Reorientación del currículo hacia el pensamiento crítico y la curaduría de datos.</li>
            </ul>
          </div>

          {/* Debilidades */}
          <div className="p-4 rounded-lg border border-amber-200 bg-amber-50/40">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Debilidades y Riesgos Internos</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
              <li>Riesgo de atrofia cognitiva por inmediatez de la respuesta prediseñada.</li>
              <li>Falta de hábitos de contraste de fuentes ("alucinaciones de la IA no verificadas").</li>
              <li>Dependencia tecnológica incipiente reportada por el 15% de los encuestados.</li>
            </ul>
          </div>

          {/* Amenazas */}
          <div className="p-4 rounded-lg border border-rose-200 bg-rose-50/40">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4 text-rose-600" />
              <span>Amenazas Sistémicas</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
              <li><strong>Brecha socioeconómica crítica:</strong> El 90% percibe exclusión por costo de suscripciones y dispositivos.</li>
              <li>Brecha territorial: Falta de cobertura en zonas no metropolitanas.</li>
              <li>Pérdida del "calor humano" en servicios esenciales y deshumanización laboral.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actionable Recommendations */}
      <div className="bg-white border border-stone-200 rounded-lg p-6">
        <h3 className="text-base font-semibold text-stone-900 mb-1">
          Recomendaciones de Acción para Políticas Públicas e Instituciones
        </h3>
        <p className="text-xs text-stone-500 mb-6">
          Respuestas concretas orientadas a cerrar brechas y maximizar el impacto positivo
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-md bg-stone-50 border border-stone-100">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              1
            </div>
            <div>
              <h5 className="text-xs font-semibold text-stone-900">
                Garantizar Acceso Público Universal y Gratuito a Modelos Avanzados de IA
              </h5>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Para responder a la alerta del 90% sobre "no todos tienen el mismo bolsillo", los ministerios y secretarías deben subsidiar paquetes de conectividad y accesos institucionales para estudiantes y docentes de escuelas públicas, evitando que la IA se transforme en un amplificador de privilegios económicos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-md bg-stone-50 border border-stone-100">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              2
            </div>
            <div>
              <h5 className="text-xs font-semibold text-stone-900">
                Marco Curricular Basado en "Refuerzo, no Copia" y Fomento a la Lectura
              </h5>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Reemplazar la prohibición con rúbricas de evaluación de procesos. Toda entrega asistida por IA debe exigir trazabilidad (prompts utilizados, verificación cruzada en libros y artículos, y justificación crítica de las respuestas), protegiendo la lectura profunda como núcleo irreductible.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-md bg-stone-50 border border-stone-100">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              3
            </div>
            <div>
              <h5 className="text-xs font-semibold text-stone-900">
                Estrategia de Transición Laboral Centrada en Competencias Humanistas
              </h5>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Anticipar el reemplazo de tareas operativas (50%) fortaleciendo la formación en habilidades socioemocionales, ética aplicada, creatividad situada y empatía interpersonal: aquello que los ciudadanos definieron como el <em>"calor humano"</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
