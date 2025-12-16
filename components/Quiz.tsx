import React, { useState, useEffect } from 'react';
import { Heart, ChevronRight, Loader2, AlertCircle, CheckCircle, Users, Star } from 'lucide-react';
import { quizData } from '../quizData';
import { QuizService } from '../services/quizService';
import { QuizResponse, QuizQuestion } from '../types';

interface QuizProps {
  onHome: () => void;
  onFinish: () => void;
  partnerEmail?: string;
}

const Quiz: React.FC<QuizProps> = ({ onHome, onFinish, partnerEmail }) => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scaleValue, setScaleValue] = useState<number>(5);
  const [openAnswer, setOpenAnswer] = useState('');
  const [checklistAnswers, setChecklistAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | string[] | null>(null);

  const currentModule = quizData.modules[currentModuleIndex];
  const currentQuestion = currentModule?.questions[currentQuestionIndex];

  // Calcular progresso total
  const getTotalProgress = () => {
    let totalQuestions = 0;
    let answeredQuestions = 0;

    quizData.modules.forEach(module => {
      module.questions.forEach(question => {
        totalQuestions++;
        if (responses.some(r => r.questionId === question.id)) {
          answeredQuestions++;
        }
      });
    });

    return (answeredQuestions / totalQuestions) * 100;
  };

  // Verificar se pode avançar para próxima pergunta
  const canProceed = () => {
    if (!currentQuestion) return false;

    switch (currentQuestion.type) {
      case 'single':
        return responses.some(r => r.questionId === currentQuestion.id);
      case 'scale':
        return responses.some(r => r.questionId === currentQuestion.id);
      case 'open':
        return responses.some(r => r.questionId === currentQuestion.id);
      case 'checklist':
        return responses.some(r => r.questionId === currentQuestion.id);
      default:
        return false;
    }
  };

  // Avançar para próxima pergunta
  const nextQuestion = () => {
    if (!canProceed()) return;

    if (currentQuestionIndex < currentModule.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Reset states
      setScaleValue(5);
      setOpenAnswer('');
      setChecklistAnswers([]);
      setSelectedAnswer(null);
    } else if (currentModuleIndex < quizData.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentQuestionIndex(0);
      setScaleValue(5);
      setOpenAnswer('');
      setChecklistAnswers([]);
      setSelectedAnswer(null);
    } else {
      // Quiz completo
      finishQuiz();
    }
  };

  // Voltar para pergunta anterior
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentQuestionIndex(quizData.modules[currentModuleIndex - 1].questions.length - 1);
    }
    // Reset states
    setScaleValue(5);
    setOpenAnswer('');
    setChecklistAnswers([]);
    setSelectedAnswer(null);
  };

  // Selecionar resposta (toggle visual)
  const selectAnswer = (answer: string | number | string[]) => {
    if (selectedAnswer === answer) {
      // Segundo clique na mesma opção = confirma e avança
      answerQuestion(answer, nextQuestion);
    } else {
      // Primeiro clique = apenas seleciona visualmente
      setSelectedAnswer(answer);
    }
  };

  // Confirmar resposta e avançar
  const confirmAndNext = () => {
    if (selectedAnswer !== null) {
      answerQuestion(selectedAnswer);
    }
  };

  // Responder pergunta (interna)
  const answerQuestion = (answer: string | number | string[], callback?: () => void) => {
    if (!currentQuestion) return;

    let points = 0;

    // Calcular pontos baseado na resposta
    if (currentQuestion.options && typeof answer === 'string') {
      const option = currentQuestion.options.find(opt => opt.id === answer);
      points = option?.points || 0;
    } else if (typeof answer === 'number') {
      points = answer; // Para escala 0-10
    }

    const response: QuizResponse = {
      questionId: currentQuestion.id,
      answer,
      points
    };

    // Atualizar ou adicionar resposta
    setResponses(prev => {
      const existing = prev.findIndex(r => r.questionId === currentQuestion.id);
      if (existing >= 0) {
        const newResponses = [...prev];
        newResponses[existing] = response;
        return newResponses;
      } else {
        return [...prev, response];
      }
    });

    // Reset seleção e executar callback (se fornecido)
    setSelectedAnswer(null);
    if (callback) {
      // Usar setTimeout para garantir que o estado seja atualizado
      setTimeout(callback, 0);
    }
  };

  // Finalizar quiz
  const finishQuiz = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      onFinish();
    }, 3000);
  };

  // Renderizar pergunta baseada no tipo
  const renderQuestion = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case 'single':
        return (
          <div className="space-y-4 animate-fade-in-up">
            {currentQuestion.options?.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isAnswered = responses.some(r => r.questionId === currentQuestion.id);

              return (
                <button
                  key={option.id}
                  onClick={() => !isAnswered && selectAnswer(option.id)}
                  disabled={isAnswered}
                  className={`w-full text-left p-6 border rounded-sm transition-all duration-200 group flex items-center justify-between ${
                    isSelected
                      ? 'bg-brand-gold/20 border-brand-gold text-white'
                      : isAnswered
                      ? 'bg-white/5 border-white/10 text-slate-400 cursor-not-allowed'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-brand-gold/50 text-slate-200 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{option.text}</span>
                  <div className="flex items-center gap-2">
                    {isSelected && <CheckCircle size={20} className="text-brand-gold" />}
                    <ChevronRight className={`transition-all ${
                      isSelected ? 'text-brand-gold opacity-100' : 'text-white/20 opacity-0 group-hover:opacity-100 group-hover:text-brand-gold'
                    }`} />
                  </div>
                </button>
              );
            })}

            {/* Botão Próxima para perguntas single */}
            {selectedAnswer && !responses.some(r => r.questionId === currentQuestion.id) && (
              <button
                onClick={confirmAndNext}
                className="w-full bg-brand-gold text-brand-dark font-bold py-4 px-6 rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2 mt-6"
              >
                Confirmar e Próxima
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        );

      case 'scale':
        return (
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400 text-sm">0 - Não valorizo</span>
                <span className="text-slate-400 text-sm">10 - Valorizo muito</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={scaleValue}
                onChange={(e) => setScaleValue(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="text-center mt-4">
                <span className="text-4xl font-bold text-brand-gold">{scaleValue}</span>
              </div>
            </div>
            <button
              onClick={() => answerQuestion(scaleValue)}
              className="w-full bg-brand-gold text-brand-dark font-bold py-4 px-6 rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Confirmar Resposta
              <ChevronRight size={20} />
            </button>
          </div>
        );

      case 'open':
        return (
          <div className="animate-fade-in-up">
            <textarea
              value={openAnswer}
              onChange={(e) => setOpenAnswer(e.target.value)}
              placeholder="Digite sua resposta aqui..."
              className="w-full bg-white/5 border border-white/20 rounded-sm p-4 text-white placeholder-slate-400 focus:border-brand-gold focus:outline-none resize-none"
              rows={4}
            />
            <button
              onClick={() => answerQuestion(openAnswer)}
              disabled={!openAnswer.trim()}
              className="w-full bg-brand-gold text-brand-dark font-bold py-4 px-6 rounded-sm hover:bg-white transition-colors mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próxima Pergunta
              <ChevronRight size={20} />
            </button>
          </div>
        );

      case 'checklist':
        return (
          <div className="animate-fade-in-up">
            <div className="space-y-3 mb-6">
              {currentQuestion.checklistOptions?.map((option) => (
                <label key={option.id} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checklistAnswers.includes(option.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setChecklistAnswers(prev => [...prev, option.id]);
                      } else {
                        setChecklistAnswers(prev => prev.filter(id => id !== option.id));
                      }
                    }}
                    className="w-4 h-4 text-brand-gold bg-transparent border-white/30 rounded focus:ring-brand-gold"
                  />
                  <span className="text-slate-200">{option.text}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => answerQuestion(checklistAnswers)}
              disabled={checklistAnswers.length === 0}
              className="w-full bg-brand-gold text-brand-dark font-bold py-4 px-6 rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmar Respostas
              <ChevronRight size={20} />
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4 text-center">
        <div className="text-center space-y-6 animate-fade-in">
          <Loader2 className="w-16 h-16 text-brand-gold animate-spin mx-auto" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Gerando seu Diagnóstico...</h2>
          <div className="max-w-md mx-auto space-y-2 text-slate-400 text-sm">
            <p className="animate-pulse">Analisando padrões de comunicação...</p>
            <p className="animate-pulse delay-700">Calculando índice de alinhamento...</p>
            <p className="animate-pulse delay-1000">Preparando relatório personalizado...</p>
          </div>
        </div>
      </div>
    );
  }

  const progress = getTotalProgress();

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Top Bar */}
      <div className="bg-white/5 p-4 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/80">
            <Heart size={20} className="text-brand-gold fill-current" />
            <span className="font-serif font-bold tracking-wide">O Que Falta Dizer</span>
          </div>
          <div className="text-white/50 text-xs font-mono">
            {currentModule?.title}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/10">
        <div
          className="h-full bg-brand-gold transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">

          {/* Module Alert */}
          {currentModule?.alert && (
            <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-sm flex gap-3">
              <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <p className="text-amber-200 text-sm leading-relaxed">{currentModule.alert}</p>
            </div>
          )}

          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
              {currentModule?.title}
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              {currentQuestion?.question}
            </h2>
          </div>

          {renderQuestion()}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={previousQuestion}
              disabled={currentModuleIndex === 0 && currentQuestionIndex === 0}
              className="px-6 py-3 text-slate-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>
            <button
              onClick={nextQuestion}
              disabled={!canProceed()}
              className="px-6 py-3 bg-brand-gold text-brand-dark font-bold rounded-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentModuleIndex === quizData.modules.length - 1 &&
               currentQuestionIndex === currentModule.questions.length - 1
                ? 'Finalizar Quiz'
                : 'Próxima →'}
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center text-white/20 text-xs">
        <p>Responda com honestidade. Suas respostas são privadas até o relatório final.</p>
        {partnerEmail && (
          <p className="mt-2 flex items-center justify-center gap-2">
            <Users size={14} />
            Compartilhando resultados com {partnerEmail}
          </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
