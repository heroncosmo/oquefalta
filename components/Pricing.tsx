import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onBuy?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBuy }) => {
  return (
    <section id="quiz" className="py-20 bg-brand-dark text-white relative overflow-hidden">
       {/* Background Image Overlay */}
       <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1920&auto=format&fit=crop"
          alt="Textura de fundo"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Investimento no Amor</h2>
          <p className="text-slate-300">Quanto vale o futuro do seu relacionamento?</p>
        </div>

        <div className="bg-white text-slate-800 rounded-lg shadow-2xl overflow-hidden max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="bg-brand-gold p-4 text-center">
            <span className="text-brand-dark font-bold uppercase tracking-widest text-sm">Oferta Especial</span>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Quiz Completo + Relatório</h3>
            <p className="text-slate-500 text-sm mb-6">Acesso imediato para o casal</p>
            
            <div className="mb-6">
              <span className="text-5xl font-serif font-bold text-brand-dark">R$ 97</span>
              <span className="text-slate-400 text-xl">,00</span>
            </div>

            <ul className="text-left space-y-4 mb-8 max-w-xs mx-auto">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Link para 2 pessoas</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Diagnóstico em 30 minutos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Relatório comparativo em PDF</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Guia de conversa pós-quiz</span>
              </li>
            </ul>

            <button 
              onClick={onBuy}
              className="w-full bg-brand-dark text-white font-bold py-4 rounded-sm hover:bg-brand-blue transition-colors uppercase tracking-widest shadow-lg"
            >
              Comprar Agora
            </button>
            <p className="mt-4 text-xs text-slate-400">Pagamento seguro. Garantia de 7 dias.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;