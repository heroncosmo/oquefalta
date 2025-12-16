import React, { useState } from 'react';
import { Heart, ChevronRight, Loader2 } from 'lucide-react';

interface QuizProps {
  onHome: () => void;
  onFinish: () => void; // Nova prop para navegar para o relatório
}

const questions = [
  {
    id: 1,
    category: "Comunicação",
    question: "Quando vocês discordam sobre algo importante, como a conversa geralmente termina?",
    options: [
      "Um de nós cede apenas para manter a paz, mas fica ressentido.",
      "Gritamos ou nos calamos completamente (tratamento de silêncio).",
      "Conseguimos expor nossos pontos, mas nem sempre chegamos a uma solução.",
      "Resolvemos o problema juntos e nos sentimos conectados depois."
    ]
  },
  {
    id: 2,
    category: "Intimidade",
    question: "Como você descreveria a qualidade da conexão emocional entre vocês hoje?",
    options: [
      "Distante. Parecemos estranhos vivendo na mesma casa.",
      "Funcional. Somos bons parceiros logísticos, mas falta paixão.",
      "Variável. Temos momentos bons, mas muitos baixos.",
      "Profunda. Sinto que posso compartilhar qualquer coisa."
    ]
  },
  {
    id: 3,
    category: "Futuro",
    question: "Vocês possuem objetivos de vida compartilhados e claros para os próximos 5 anos?",
    options: [
      "Não, raramente falamos sobre o futuro.",
      "Temos algumas ideias vagas, mas nada concreto.",
      "Sim, temos alguns planos, mas precisamos alinhar detalhes.",
      "Sim, estamos totalmente alinhados e trabalhando juntos neles."
    ]
  },
  // Simulação de mais perguntas...
];

const Quiz: React.FC<QuizProps> = ({ onHome, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: answer };
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Quiz finished, start analysis simulation
        setIsAnalyzing(true);
        setTimeout(() => {
           onFinish(); // Navega para o Dashboard/Relatório
        }, 3000);
      }
    }, 300);
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4 text-center">
        <div className="text-center space-y-6 animate-fade-in">
          <Loader2 className="w-16 h-16 text-brand-gold animate-spin mx-auto" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Gerando seu Diagnóstico...</h2>
          <div className="max-w-md mx-auto space-y-2 text-slate-400 text-sm">
            <p className="animate-pulse">Analisando padrões de comunicação...</p>
            <p className="animate-pulse delay-700">Calculando índice de intimidade...</p>
            <p className="animate-pulse delay-1000">Preparando plano de ação personalizado...</p>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQ = questions[currentStep];

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Top Bar */}
      <div className="bg-white/5 p-4 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/80">
            <Heart size={20} className="text-brand-gold fill-current" />
            <span className="font-serif font-bold tracking-wide">O Diagnóstico</span>
          </div>
          <div className="text-white/50 text-xs font-mono">
            QUESTÃO {currentStep + 1} DE {questions.length}
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
          
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
              {currentQ.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-4 animate-fade-in-up">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/50 rounded-sm transition-all duration-200 group flex items-center justify-between"
              >
                <span className="text-slate-200 group-hover:text-white text-lg">{option}</span>
                <ChevronRight className="text-white/20 group-hover:text-brand-gold opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center text-white/20 text-xs">
        <p>Responda com honestidade. Suas respostas são privadas até o relatório final.</p>
      </div>
    </div>
  );
};

export default Quiz;