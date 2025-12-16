import { QuizResponse, CoupleResult, QuizSession } from '../types';
import { quizData } from '../quizData';

// Mapeamento de módulos para temas de pontuação
const themeMapping = {
  'module3': 'communication',
  'block1': 'emotional_maturity',
  'block2': 'sexuality',
  'block3': 'spirituality',
  'block4': 'finance',
  'block5': 'education',
  'block7': 'conflict_resolution',
  'module4': 'future_expectations',
  'module5': 'family_friends',
  'module6': 'wedding_preparation'
};

export class QuizService {
  // Calcula pontuação individual
  static calculateIndividualScore(responses: QuizResponse[]): number {
    const scoringQuestions = responses.filter(r => r.points > 0);
    const totalPoints = scoringQuestions.reduce((sum, r) => sum + r.points, 0);
    return totalPoints;
  }

  // Calcula pontuação máxima possível para um conjunto de respostas
  static calculateMaxScore(responses: QuizResponse[]): number {
    let maxScore = 0;

    responses.forEach(response => {
      // Encontra a pergunta correspondente
      for (const module of quizData.modules) {
        const question = module.questions.find(q => q.id === response.questionId);
        if (question && question.options) {
          // Pega a maior pontuação possível para esta pergunta
          const maxPoints = Math.max(...question.options.map(opt => opt.points));
          maxScore += maxPoints;
        }
      }
    });

    return maxScore;
  }

  // Calcula percentual individual
  static calculateIndividualPercentage(individualScore: number, maxScore: number): number {
    if (maxScore === 0) return 0;
    return (individualScore / maxScore) * 100;
  }

  // Calcula pontuação do casal (média)
  static calculateCoupleScore(partner1Percentage: number, partner2Percentage?: number): number {
    if (partner2Percentage === undefined) {
      return partner1Percentage; // Apenas um parceiro respondeu
    }
    return (partner1Percentage + partner2Percentage) / 2;
  }

  // Calcula índice de alinhamento (consenso)
  static calculateAlignmentIndex(partner1Responses: QuizResponse[], partner2Responses: QuizResponse[]): number {
    const commonQuestions: { q1: QuizResponse; q2: QuizResponse }[] = [];

    // Encontra perguntas respondidas por ambos
    partner1Responses.forEach(r1 => {
      const r2 = partner2Responses.find(r => r.questionId === r1.questionId);
      if (r2) {
        commonQuestions.push({ q1: r1, q2: r2 });
      }
    });

    if (commonQuestions.length === 0) return 0;

    let totalAlignment = 0;

    commonQuestions.forEach(({ q1, q2 }) => {
      // Encontra a pergunta para calcular delta máximo
      let maxDelta = 2; // Padrão para questões 1-2-3

      for (const module of quizData.modules) {
        const question = module.questions.find(q => q.id === q1.questionId);
        if (question && question.options) {
          const points = question.options.map(opt => opt.points);
          maxDelta = Math.max(...points) - Math.min(...points);
          break;
        }
      }

      const delta = Math.abs(q1.points - q2.points);
      const questionAlignment = maxDelta > 0 ? 1 - (delta / maxDelta) : 1;
      totalAlignment += questionAlignment;
    });

    return (totalAlignment / commonQuestions.length) * 100;
  }

  // Classifica o casal baseado na pontuação
  static classifyCouple(coupleScore: number): 'connected' | 'building' | 'alert' {
    if (coupleScore >= 80) return 'connected';
    if (coupleScore >= 50) return 'building';
    return 'alert';
  }

  // Classifica o alinhamento
  static classifyAlignment(alignmentIndex: number): 'high' | 'moderate' | 'low' {
    if (alignmentIndex >= 75) return 'high';
    if (alignmentIndex >= 50) return 'moderate';
    return 'low';
  }

  // Calcula scores por tema
  static calculateThemeScores(responses: QuizResponse[]): { [theme: string]: number } {
    const themeScores: { [theme: string]: { points: number; maxPoints: number } } = {};

    responses.forEach(response => {
      // Encontra o módulo da pergunta
      for (const module of quizData.modules) {
        const question = module.questions.find(q => q.id === response.questionId);
        if (question) {
          const theme = themeMapping[module.id as keyof typeof themeMapping];
          if (theme && question.options && question.options.length > 0) {
            if (!themeScores[theme]) {
              themeScores[theme] = { points: 0, maxPoints: 0 };
            }

            themeScores[theme].points += response.points;
            themeScores[theme].maxPoints += Math.max(...question.options.map(opt => opt.points));
          }
          break;
        }
      }
    });

    // Converte para percentuais
    const result: { [theme: string]: number } = {};
    Object.keys(themeScores).forEach(theme => {
      const { points, maxPoints } = themeScores[theme];
      result[theme] = maxPoints > 0 ? (points / maxPoints) * 100 : 0;
    });

    return result;
  }

  // Calcula resultado completo do casal
  static calculateCoupleResult(
    partner1Responses: QuizResponse[],
    partner2Responses?: QuizResponse[]
  ): CoupleResult {
    const partner1Score = this.calculateIndividualScore(partner1Responses);
    const partner1Max = this.calculateMaxScore(partner1Responses);
    const partner1Percentage = this.calculateIndividualPercentage(partner1Score, partner1Max);

    let partner2Score: number | undefined;
    let partner2Percentage: number | undefined;

    if (partner2Responses && partner2Responses.length > 0) {
      partner2Score = this.calculateIndividualScore(partner2Responses);
      const partner2Max = this.calculateMaxScore(partner2Responses);
      partner2Percentage = this.calculateIndividualPercentage(partner2Score, partner2Max);
    }

    const coupleScore = this.calculateCoupleScore(partner1Percentage, partner2Percentage);
    const alignmentIndex = partner2Responses
      ? this.calculateAlignmentIndex(partner1Responses, partner2Responses)
      : 100; // 100% de alinhamento se só um respondeu

    const classification = this.classifyCouple(coupleScore);
    const alignmentLevel = this.classifyAlignment(alignmentIndex);

    const themeScores = partner2Responses
      ? this.calculateThemeScores([...partner1Responses, ...partner2Responses])
      : this.calculateThemeScores(partner1Responses);

    return {
      partner1Score,
      partner2Score,
      coupleScore,
      alignmentIndex,
      classification,
      alignmentLevel,
      themeScores
    };
  }

  // Gera ID único para sessão do quiz
  static generateSessionId(): string {
    return `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Valida se todas as perguntas obrigatórias foram respondidas
  static validateResponses(responses: QuizResponse[]): { isValid: boolean; missingQuestions: string[] } {
    const allQuestions = quizData.modules.flatMap(module => module.questions);
    const scoringQuestions = allQuestions.filter(q => q.options && q.options.some(opt => opt.points > 0));

    const missingQuestions: string[] = [];

    scoringQuestions.forEach(question => {
      const response = responses.find(r => r.questionId === question.id);
      if (!response) {
        missingQuestions.push(question.question);
      }
    });

    return {
      isValid: missingQuestions.length === 0,
      missingQuestions
    };
  }
}
