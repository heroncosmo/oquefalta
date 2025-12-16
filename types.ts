export interface ServiceItem {
  title: string;
  description: string;
  icon: any;
  price?: string;
  popular?: boolean;
}

export interface Testimonial {
  text: string;
  author: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum AdviceStatus {
  Idle,
  Loading,
  Success,
  Error
}

// Tipos para o Quiz
export interface QuizOption {
  id: string;
  text: string;
  points: number;
}

export interface QuizQuestion {
  id: string;
  module: string;
  alert?: string;
  question: string;
  type: 'single' | 'multiple' | 'scale' | 'open' | 'checklist';
  options?: QuizOption[];
  scale?: { min: number; max: number; labels?: { [key: number]: string } };
  checklistOptions?: { id: string; text: string }[];
}

export interface QuizResponse {
  questionId: string;
  answer: string | number | string[];
  points: number;
}

export interface QuizSession {
  id: string;
  partnerEmail?: string;
  responses: QuizResponse[];
  completed: boolean;
  createdAt: Date;
}

export interface CoupleResult {
  partner1Score: number;
  partner2Score?: number;
  coupleScore: number;
  alignmentIndex: number;
  classification: 'connected' | 'building' | 'alert';
  alignmentLevel: 'high' | 'moderate' | 'low';
  themeScores: { [theme: string]: number };
}

export interface QuizData {
  modules: {
    id: string;
    title: string;
    alert?: string;
    questions: QuizQuestion[];
  }[];
}
