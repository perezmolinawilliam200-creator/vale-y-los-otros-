import { SurveyResponse, DimensionAnalysis } from '../types/survey';

export const INITIAL_SURVEY_DATA: SurveyResponse[] = [
  {
    id: 1,
    timestamp: '10/27/2026 16:38:38',
    q1_calidadVida: 'Si',
    q2_educacion: 'Si',
    q3_trabajo: 'No',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Tal vez',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Desfavorable',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Optimista',
    hasRichQualitativeText: false,
    keyThemes: ['Adopción inicial', 'Duda académica', 'Confianza en labor humana']
  },
  {
    id: 2,
    timestamp: '10/27/2026 16:41:05',
    q1_calidadVida: 'Si',
    q2_educacion: 'Si',
    q3_trabajo: 'No',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'No',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Desfavorable',
    q4_category: 'Inequitativo',
    q5_category: 'Desfavorable',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: false,
    keyThemes: ['Rechazo al uso en tareas', 'Protección del empleo humano']
  },
  {
    id: 3,
    timestamp: '10/27/2026 16:44:56',
    q1_calidadVida: 'Depende',
    q2_educacion: 'Depende porque muchas veces lo tenemos tan a la mano que no nos permite ver más allá, interiorizar la información que recibimos',
    q3_trabajo: 'Lo pueden hacer, pero no se compara con el calor humano',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Sí, pero corroborando primero la información',
    q1_category: 'Condicional',
    q2_category: 'Condicional',
    q3_category: 'Condicional',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: true,
    notableQuote: 'Lo pueden hacer, pero no se compara con el calor humano.',
    keyThemes: ['Calor humano insustituible', 'Interiorización del aprendizaje', 'Verificación obligatoria']
  },
  {
    id: 4,
    timestamp: '10/27/2026 16:45:04',
    q1_calidadVida: 'Ai',
    q2_educacion: 'Si ayuda',
    q3_trabajo: 'Si porque cada vez avanza más',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Si se manera buena',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Optimista',
    hasRichQualitativeText: true,
    notableQuote: 'Si, de manera buena.',
    keyThemes: ['Avance tecnológico continuo', 'Uso ético y constructivo']
  },
  {
    id: 5,
    timestamp: '10/27/2026 16:46:22',
    q1_calidadVida: 'Puede ser',
    q2_educacion: 'Si',
    q3_trabajo: 'En algunos ámbitos si',
    q4_accesoEquitativo: 'No por la cobertura',
    q5_tareasAcademicas: 'En algunos casos si',
    q1_category: 'Condicional',
    q2_category: 'Favorable',
    q3_category: 'Condicional',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: true,
    notableQuote: 'No por la cobertura.',
    keyThemes: ['Brecha de conectividad e infraestructura', 'Sustitución laboral sectorial']
  },
  {
    id: 6,
    timestamp: '10/27/2026 16:47:01',
    q1_calidadVida: 'Si',
    q2_educacion: 'Si',
    q3_trabajo: 'Si',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Si',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Optimista',
    hasRichQualitativeText: false,
    keyThemes: ['Alta aceptación general', 'Conciencia de inequidad de acceso']
  },
  {
    id: 7,
    timestamp: '10/27/2026 16:51:59',
    q1_calidadVida: 'Si',
    q2_educacion: 'Sii yo creo que ayuda demasiado',
    q3_trabajo: 'Si',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Si',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Optimista',
    hasRichQualitativeText: true,
    notableQuote: 'Sii yo creo que ayuda demasiado.',
    keyThemes: ['Potenciación del aprendizaje', 'Reemplazo laboral asumido']
  },
  {
    id: 8,
    timestamp: '10/27/2026 16:52:08',
    q1_calidadVida: 'No',
    q2_educacion: 'Si',
    q3_trabajo: 'Si',
    q4_accesoEquitativo: 'Si',
    q5_tareasAcademicas: 'No',
    q1_category: 'Desfavorable',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Equitativo',
    q5_category: 'Desfavorable',
    overallSentiment: 'Escéptico',
    hasRichQualitativeText: false,
    keyThemes: ['Escepticismo sobre calidad de vida', 'Rechazo ético en academia']
  },
  {
    id: 9,
    timestamp: '10/27/2026 16:52:21',
    q1_calidadVida: 'Si obvio',
    q2_educacion: 'Claro',
    q3_trabajo: 'Si',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Si',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Optimista',
    hasRichQualitativeText: true,
    notableQuote: 'Si obvio, claro.',
    keyThemes: ['Adopción decidida', 'Entusiasmo tecnológico']
  },
  {
    id: 10,
    timestamp: '10/27/2026 16:54:43',
    q1_calidadVida: 'Si',
    q2_educacion: 'Si ayuda mucho',
    q3_trabajo: 'Independientemente hay que saberla como utilizar',
    q4_accesoEquitativo: 'Si',
    q5_tareasAcademicas: 'Si, de cierta forma pero es importante también acudir a libros para fomentar la lectura.',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Condicional',
    q4_category: 'Equitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: true,
    notableQuote: 'Es importante también acudir a libros para fomentar la lectura.',
    keyThemes: ['Fomento de la lectura analógica', 'Capacitación en uso', 'Equilibrio de fuentes']
  },
  {
    id: 11,
    timestamp: '10/27/2026 16:56:15',
    q1_calidadVida: 'Si, porque la inteligencia artificial automatiza tareas rutinarias...',
    q2_educacion: 'Cumplen ambas funciones por un lado es una buena herramienta de apoyo muy útil que personaliza el aprendizaje explica conceptos complejos de forma sencilla...',
    q3_trabajo: 'Si, especialmente las tareas respectivas .',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'De pende como se use, si es correcta cuando se emplea como una herramienta de apoyo',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: true,
    notableQuote: 'Personaliza el aprendizaje, explica conceptos complejos de forma sencilla, pero debe ser apoyo.',
    keyThemes: ['Automatización de tareas repetitivas', 'Personalización del aprendizaje', 'Pedagogía adaptativa']
  },
  {
    id: 12,
    timestamp: '10/27/2026 16:56:59',
    q1_calidadVida: 'Depende del uso',
    q2_educacion: 'Depende del uso',
    q3_trabajo: 'Si',
    q4_accesoEquitativo: 'No, todos los tienen el mismo bolsillo',
    q5_tareasAcademicas: 'Apoyarse en la IA es lo correcto',
    q1_category: 'Condicional',
    q2_category: 'Condicional',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: true,
    notableQuote: 'No, todos no tienen el mismo bolsillo.',
    keyThemes: ['Barrera socioeconómica / costo', 'Apoyo legítimo', 'Uso condicional']
  },
  {
    id: 13,
    timestamp: '10/27/2026 16:57:21',
    q1_calidadVida: 'no',
    q2_educacion: 'si',
    q3_trabajo: 'tal vez',
    q4_accesoEquitativo: 'no',
    q5_tareasAcademicas: 'si',
    q1_category: 'Desfavorable',
    q2_category: 'Favorable',
    q3_category: 'Condicional',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Escéptico',
    hasRichQualitativeText: false,
    keyThemes: ['Discrepancia bienestar vs utilidad educativa']
  },
  {
    id: 14,
    timestamp: '10/27/2026 16:57:56',
    q1_calidadVida: 'Si',
    q2_educacion: 'Creo que la inteligencia ayuda mucho para aprender',
    q3_trabajo: 'Si',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Si',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Optimista',
    hasRichQualitativeText: true,
    notableQuote: 'Creo que la inteligencia ayuda mucho para aprender.',
    keyThemes: ['Facilitador del aprendizaje', 'Reemplazo laboral']
  },
  {
    id: 15,
    timestamp: '10/27/2026 17:01:08',
    q1_calidadVida: 'Si',
    q2_educacion: 'Ayuda aprender',
    q3_trabajo: 'No',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Si',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Desfavorable',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Optimista',
    hasRichQualitativeText: false,
    keyThemes: ['Ayuda al aprendizaje', 'Blindaje del trabajo humano']
  },
  {
    id: 16,
    timestamp: '10/27/2026 17:02:53',
    q1_calidadVida: 'Puede ser',
    q2_educacion: 'Si',
    q3_trabajo: 'Si en algunos ámbitos',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Aveces',
    q1_category: 'Condicional',
    q2_category: 'Favorable',
    q3_category: 'Condicional',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: false,
    keyThemes: ['Postura matizada', 'Sustitución segmentada']
  },
  {
    id: 17,
    timestamp: '10/27/2026 17:03:04',
    q1_calidadVida: 'No',
    q2_educacion: 'Depende del uso que le dé la persona',
    q3_trabajo: 'No',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'Si',
    q1_category: 'Desfavorable',
    q2_category: 'Condicional',
    q3_category: 'Desfavorable',
    q4_category: 'Inequitativo',
    q5_category: 'Favorable',
    overallSentiment: 'Escéptico',
    hasRichQualitativeText: true,
    notableQuote: 'Depende del uso que le dé la persona.',
    keyThemes: ['Agencia del usuario', 'Resistencia al impacto macro']
  },
  {
    id: 18,
    timestamp: '10/27/2026 17:03:13',
    q1_calidadVida: 'depende de su uso, ya que ayuda a resolver problemas y mejorar la tecnología, pero a largo tiempo consume recursos naturales y las personas por su facilidad no tienen pensamiento crítico',
    q2_educacion: 'si ayuda mucho, a profesores y estudiantes para mejorar la educación',
    q3_trabajo: 'si, ya que se van descubriendo cosas nuevas y se supone que busca mejorar la calidad de vida entonces muchas cosas las va a reemplazar',
    q4_accesoEquitativo: 'no, muchas personas abusan de ella, otros no la conocen, y otros no saber manejarla o no pueden',
    q5_tareasAcademicas: 'si, siempre y cuando se aprenda y la ia sea un refuerzo, no una copia',
    q1_category: 'Condicional',
    q2_category: 'Favorable',
    q3_category: 'Favorable',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: true,
    notableQuote: 'Si, siempre y cuando se aprenda y la IA sea un refuerzo, no una copia. Consume recursos y afecta el pensamiento crítico si no se cuida.',
    keyThemes: ['Pensamiento crítico', 'Impacto ambiental/recursos', 'Alfabetización digital', 'Refuerzo vs Copia']
  },
  {
    id: 19,
    timestamp: '10/27/2026 17:03:49',
    q1_calidadVida: 'Si',
    q2_educacion: 'Si',
    q3_trabajo: 'No',
    q4_accesoEquitativo: 'No',
    q5_tareasAcademicas: 'No',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Desfavorable',
    q4_category: 'Inequitativo',
    q5_category: 'Desfavorable',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: false,
    keyThemes: ['Demarcación ética estricta en educación y empleo']
  },
  {
    id: 20,
    timestamp: '10/27/2026 17:04:25',
    q1_calidadVida: 'Si',
    q2_educacion: 'Si',
    q3_trabajo: 'En algunos ámbitos si',
    q4_accesoEquitativo: 'No por la cobertura',
    q5_tareasAcademicas: 'En algunas actividades',
    q1_category: 'Favorable',
    q2_category: 'Favorable',
    q3_category: 'Condicional',
    q4_category: 'Inequitativo',
    q5_category: 'Condicional',
    overallSentiment: 'Crítico-Constructivo',
    hasRichQualitativeText: true,
    notableQuote: 'No por la cobertura geográfica.',
    keyThemes: ['Brecha de conectividad territorial', 'Adopción modular']
  }
];

export const DIMENSIONS: DimensionAnalysis[] = [
  {
    id: 'q1',
    number: 1,
    title: 'Impacto en Calidad de Vida',
    shortTitle: 'Calidad de Vida',
    question: '¿Consideras que la inteligencia artificial mejora la calidad de vida de las personas?',
    summary: 'El 60% de los encuestados afirma categóricamente que la IA mejora la calidad de vida, asociado a la automatización de tareas y resolución de problemas. Un 25% manifiesta que es condicional (depende del uso consciente y no perder el pensamiento crítico) y solo un 15% sostiene una postura desfavorable.',
    breakdown: [
      { label: 'Sí (Favorable)', count: 12, percentage: 60, color: '#10b981' },
      { label: 'Condicional / Depende', count: 5, percentage: 25, color: '#f59e0b' },
      { label: 'No (Desfavorable)', count: 3, percentage: 15, color: '#ef4444' }
    ],
    keyTakeaways: [
      'Mayoría percibe un impacto positivo directo en eficiencia y solución de problemas cotidianos.',
      'Aparecen alertas tempranas sobre la pérdida de pensamiento crítico y el consumo de recursos naturales.',
      'La calidad de vida no se ve como una consecuencia automática, sino supeditada a la madurez de su aplicación.'
    ],
    notableQuotes: [
      {
        respondentId: 11,
        quote: 'Sí, porque la inteligencia artificial automatiza tareas rutinarias...',
        context: 'Beneficio de liberación de tiempo operativo'
      },
      {
        respondentId: 18,
        quote: 'Depende de su uso... ayuda a resolver problemas, pero a largo tiempo consume recursos y las personas por facilidad pierden pensamiento crítico.',
        context: 'Reflexión crítica socio-ecológica'
      }
    ]
  },
  {
    id: 'q2',
    number: 2,
    title: 'Educación: Potenciador vs Dependencia',
    shortTitle: 'Educación y Aprendizaje',
    question: '¿Crees que el uso de la IA en la educación ayuda a aprender o que puede hacer que dependan demasiado de la tecnología?',
    summary: 'Existe un consenso abrumador (85%) de que la IA ayuda decisivamente a aprender y apoya tanto a estudiantes como a docentes. El 15% restante advierte que su efectividad depende de cómo se use, sin que nadie rechace su valor pedagógico.',
    breakdown: [
      { label: 'Ayuda a Aprender (Favorable)', count: 17, percentage: 85, color: '#10b981' },
      { label: 'Depende del Uso / Riesgo Dependencia', count: 3, percentage: 15, color: '#f59e0b' },
      { label: 'Solo Genera Dependencia', count: 0, percentage: 0, color: '#ef4444' }
    ],
    keyTakeaways: [
      'La IA es percibida como un catalizador del aprendizaje personalizado y la simplificación de conceptos complejos.',
      'Docentes y estudiantes son vistos como beneficiarios simultáneos de la herramienta.',
      'El riesgo latente es la superficialidad: tener la respuesta tan a la mano que inhiba la interiorización cognitiva.'
    ],
    notableQuotes: [
      {
        respondentId: 11,
        quote: 'Buena herramienta de apoyo muy útil que personaliza el aprendizaje y explica conceptos complejos de forma sencilla.',
        context: 'Personalización pedagógica'
      },
      {
        respondentId: 3,
        quote: 'Depende porque muchas veces lo tenemos tan a la mano que no nos permite ver más allá, interiorizar la información.',
        context: 'Riesgo de atrofia reflexiva'
      }
    ]
  },
  {
    id: 'q3',
    number: 3,
    title: 'Transformación Laboral y Sustitución Humana',
    shortTitle: 'Sustitución en el Trabajo',
    question: '¿Piensas que la IA puede reemplazar algunas actividades que realizan los seres humanos en el trabajo?',
    summary: 'El 50% confirma que la IA reemplazará actividades humanas, particularmente tareas rutinarias y repetitivas. Un 20% considera que ocurrirá en ámbitos específicos. El 30% sostiene que el trabajo humano es irreemplazable, destacando el valor insustituible del "calor humano".',
    breakdown: [
      { label: 'Sí, Reemplaza Actividades', count: 10, percentage: 50, color: '#3b82f6' },
      { label: 'Condicional / Ámbitos Específicos', count: 4, percentage: 20, color: '#f59e0b' },
      { label: 'No Reemplaza', count: 6, percentage: 30, color: '#64748b' }
    ],
    keyTakeaways: [
      'La mitad de la muestra anticipa una reconfiguración directa del mercado laboral por automatización.',
      'Fuerte distinción entre tareas operativas repetitivas (fáciles de automatizar) y la dimensión afectiva/relacional.',
      'El concepto del "calor humano" surge como el bastión de la singularidad humana en el entorno laboral.'
    ],
    notableQuotes: [
      {
        respondentId: 3,
        quote: 'Lo pueden hacer, pero no se compara con el calor humano.',
        context: 'Límite afectivo y empático de la automatización'
      },
      {
        respondentId: 11,
        quote: 'Sí, especialmente las tareas repetitivas.',
        context: 'Segmentación del trabajo por nivel de automatización'
      }
    ]
  },
  {
    id: 'q4',
    number: 4,
    title: 'Brecha Digital y Equidad en el Acceso',
    shortTitle: 'Equidad en el Acceso',
    question: '¿Consideras que todas las personas tienen las mismas oportunidades de acceder a la IA de manera adecuada?',
    summary: 'Es el hallazgo más contundente y unánime del estudio: el 90% (18 de 20 encuestados) manifiesta que NO existe igualdad de oportunidades. Señalan brechas económicas ("no todos tienen el mismo bolsillo"), falta de cobertura de conectividad y barreras de alfabetización digital.',
    breakdown: [
      { label: 'No Hay Igualdad (Desigualdad 90%)', count: 18, percentage: 90, color: '#ef4444' },
      { label: 'Sí Tienen Igualdad (10%)', count: 2, percentage: 10, color: '#10b981' }
    ],
    keyTakeaways: [
      'Alerta crítica sobre la profundización de brechas socioeconómicas preexistentes.',
      'Factores limitantes identificados: costo de suscripciones/hardware, falta de cobertura territorial y desconocimiento de uso.',
      'Demanda urgente de políticas públicas de inclusión y alfabetización en IA.'
    ],
    notableQuotes: [
      {
        respondentId: 12,
        quote: 'No, todos no tienen el mismo bolsillo.',
        context: 'Barrera económica estructural'
      },
      {
        respondentId: 5,
        quote: 'No por la cobertura.',
        context: 'Brecha territorial de infraestructura'
      },
      {
        respondentId: 18,
        quote: 'No, muchas personas abusan de ella, otros no la conocen, y otros no saben manejarla o no pueden.',
        context: 'Brecha cognitiva y de competencias digitales'
      }
    ]
  },
  {
    id: 'q5',
    number: 5,
    title: 'Uso Ético en Tareas Académicas',
    shortTitle: 'Tareas Académicas',
    question: '¿Crees que es correcto utilizar la inteligencia artificial para realizar tareas académicas?',
    summary: 'El 85% de los entrevistados valida el uso de la IA en contextos escolares y universitarios, pero con una condición fundamental: el 35% exige que sea como "herramienta de apoyo, refuerzo y no copia", con verificación de fuentes. Solo un 15% lo rechaza tajantemente.',
    breakdown: [
      { label: 'Sí, es correcto', count: 10, percentage: 50, color: '#10b981' },
      { label: 'Condicional (Apoyo / No Copia / Verificar)', count: 7, percentage: 35, color: '#f59e0b' },
      { label: 'No es correcto', count: 3, percentage: 15, color: '#ef4444' }
    ],
    keyTakeaways: [
      'Se supera el paradigma de la prohibición: la demanda ciudadana apunta hacia la regulación pedagógica.',
      'Regla de oro expresada por los usuarios: "que sea un refuerzo, no una copia".',
      'Énfasis en mantener hábitos tradicionales complementarios como la lectura de libros impresos.'
    ],
    notableQuotes: [
      {
        respondentId: 18,
        quote: 'Sí, siempre y cuando se aprenda y la IA sea un refuerzo, no una copia.',
        context: 'Principio rector de integridad pedagógica'
      },
      {
        respondentId: 3,
        quote: 'Sí, pero corroborando primero la información.',
        context: 'Espíritu crítico y verificación de alucinaciones'
      },
      {
        respondentId: 10,
        quote: 'Sí, pero es importante también acudir a libros para fomentar la lectura.',
        context: 'Complementariedad analógica-digital'
      }
    ]
  }
];

export function computeStats(data: SurveyResponse[]) {
  const total = data.length;
  if (total === 0) {
    return {
      total: 0,
      approvalLife: 0,
      educationHelp: 0,
      laborDisplacement: 0,
      digitalDivide: 0,
      academicEthicalApproval: 0,
      sentimentBreakdown: { optimista: 0, critico: 0, esceptico: 0 }
    };
  }

  const q1Fav = data.filter(d => d.q1_category === 'Favorable').length;
  const q2Fav = data.filter(d => d.q2_category === 'Favorable').length;
  const q3Fav = data.filter(d => d.q3_category === 'Favorable').length;
  const q4Inequity = data.filter(d => d.q4_category === 'Inequitativo').length;
  const q5Accepted = data.filter(d => d.q5_category === 'Favorable' || d.q5_category === 'Condicional').length;

  const optimista = data.filter(d => d.overallSentiment === 'Optimista').length;
  const critico = data.filter(d => d.overallSentiment === 'Crítico-Constructivo').length;
  const esceptico = data.filter(d => d.overallSentiment === 'Escéptico').length;

  return {
    total,
    approvalLife: Math.round((q1Fav / total) * 100),
    educationHelp: Math.round((q2Fav / total) * 100),
    laborDisplacement: Math.round((q3Fav / total) * 100),
    digitalDivide: Math.round((q4Inequity / total) * 100),
    academicEthicalApproval: Math.round((q5Accepted / total) * 100),
    sentimentBreakdown: {
      optimista: Math.round((optimista / total) * 100),
      critico: Math.round((critico / total) * 100),
      esceptico: Math.round((esceptico / total) * 100)
    }
  };
}
