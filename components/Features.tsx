import React from 'react';
import { MessageCircle, Heart, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Mais que uma conversa</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um quiz interativo feito para casais que desejam ir além das conversas superficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 p-6 bg-slate-50 rounded-full border-2 border-slate-100 group-hover:border-brand-gold transition-colors duration-300">
              <MessageCircle className="w-12 h-12 text-brand-dark" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Perguntas Sinceras</h3>
            <p className="text-slate-600 leading-relaxed">
              Com perguntas sinceras e instigantes, ele ajuda a revelar expectativas que muitas vezes ficam guardadas.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 p-6 bg-slate-50 rounded-full border-2 border-slate-100 group-hover:border-brand-gold transition-colors duration-300">
              <CheckCircle className="w-12 h-12 text-brand-dark" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Alinhar Sonhos</h3>
            <p className="text-slate-600 leading-relaxed">
              Descubra se vocês estão caminhando na mesma direção. O quiz projeta o futuro e alinha os objetivos do casal.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 p-6 bg-slate-50 rounded-full border-2 border-slate-100 group-hover:border-brand-gold transition-colors duration-300">
              <Heart className="w-12 h-12 text-brand-dark" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Fortalecer a Conexão</h3>
            <p className="text-slate-600 leading-relaxed">
              Saia da rotina. Use este momento para rir, refletir e criar uma nova camada de intimidade entre vocês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;