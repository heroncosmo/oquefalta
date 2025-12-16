import React from 'react';
import { AlertTriangle, Anchor, HeartHandshake } from 'lucide-react';

interface VideoTestimonialsProps {
  onStart?: () => void;
}

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ onStart }) => {
  return (
    <section id="hook" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
          Você e seu cônjuge vivem <br/>como colegas de quarto?
        </h2>

        <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>

        <div className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed text-left md:text-center">
          <p>
            As conversas sobre problemas se transformam rapidamente em discussões? 
            Você está tentando se recuperar de uma quebra de confiança ou encontrar o caminho de volta após um distanciamento silencioso?
          </p>
          <p className="font-medium text-brand-dark">
            Você não está sozinho. E o mais importante: existe um caminho de volta.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <AlertTriangle className="w-10 h-10 text-brand-gold mb-4" />
            <h3 className="font-serif font-bold text-xl text-brand-dark mb-3">Conflitos Constantes</h3>
            <p className="text-slate-600 text-sm">
              Quando cada pequena discordância vira uma batalha, é sinal de que a comunicação fundamental quebrou.
            </p>
          </div>
          
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Anchor className="w-10 h-10 text-brand-gold mb-4" />
            <h3 className="font-serif font-bold text-xl text-brand-dark mb-3">Vidas Paralelas</h3>
            <p className="text-slate-600 text-sm">
              Vocês funcionam bem logisticamente (contas, casa, filhos), mas a intimidade emocional e física desapareceu.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <HeartHandshake className="w-10 h-10 text-brand-gold mb-4" />
            <h3 className="font-serif font-bold text-xl text-brand-dark mb-3">Falta de Confiança</h3>
            <p className="text-slate-600 text-sm">
              Seja por um evento grande ou pequenas quebras diárias, a sensação de segurança um com o outro foi abalada.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-brand-dark text-white p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Nosso Quiz Intensivo foi desenhado para isso.</h3>
             <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
               Não é apenas um teste de personalidade. É uma ferramenta clínica condensada para identificar a raiz dos problemas e fornecer um roteiro claro de restauração.
             </p>
             <button 
               onClick={onStart}
               className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-white hover:text-brand-dark transition-colors uppercase tracking-widest"
             >
               Começar Diagnóstico Agora
             </button>
           </div>
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default VideoTestimonials;