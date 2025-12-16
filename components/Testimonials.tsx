import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    text: "A 'Auditoria de Comunicação' abriu nossos olhos. Percebi que estava tentando 'consertar' as coisas quando minha esposa só queria que eu 'ouvisse'. Valeu cada centavo.",
    author: "Thiago & Sara",
    location: "Comprou o Diagnóstico Completo"
  },
  {
    text: "Fizemos o módulo de Intimidade no nosso aniversário. Foi estranho no começo, mas levou à conversa mais honesta que tivemos em 10 anos. Altamente recomendado.",
    author: "Marcos T.",
    location: "Comprou o Diagnóstico Completo"
  },
  {
    text: "Eu estava cético sobre um quiz online, mas o relatório foi surpreendentemente preciso. Deu-nos uma linguagem comum para discutir nossos gatilhos sem gritar.",
    author: "Elena & Tomé",
    location: "Comprou o Diagnóstico Completo"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Casais Amam Nosso Método</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-lg relative border border-slate-100 shadow-sm">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-gold/30" />
              <p className="text-slate-600 italic mb-6 relative z-10 pt-4">"{t.text}"</p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-brand-dark">{t.author}</p>
                <p className="text-sm text-brand-gold uppercase tracking-wide">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;