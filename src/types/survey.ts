export interface SurveyResponse {
  id: number;
  timestamp: string;
  q1_calidadVida: string;
  q2_educacion: string;
  q3_trabajo: string;
  q4_accesoEquitativo: string;
  q5_tareasAcademicas: string;
  // Normalized classifications for analytics
  q1_category: 'Favorable' | 'Condicional' | 'Desfavorable';
  q2_category: 'Favorable' | 'Condicional' | 'Desfavorable';
  q3_category: 'Favorable' | 'Condicional' | 'Desfavorable';
  q4_category: 'Equitativo' | 'Inequitativo';
  q5_category: 'Favorable' | 'Condicional' | 'Desfavorable';
  overallSentiment: 'Optimista' | 'Crítico-Constructivo' | 'Escéptico';
  hasRichQualitativeText: boolean;
  notableQuote?: string;
  keyThemes: string[];
}

export interface DimensionAnalysis {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  question: string;
  summary: string;
  breakdown: {
    label: string;
    count: number;
    percentage: number;
    color: string;
  }[];
  keyTakeaways: string[];
  notableQuotes: {
    respondentId: number;
    quote: string;
    context: string;
  }[];
}
