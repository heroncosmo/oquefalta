import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop" 
                alt="Casal conversando intimamente" 
                className="w-full h-auto rounded-sm shadow-xl z-10 relative"
              />
              {/* Decorative Frame */}
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-gold z-0 hidden md:block"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">Por que o Quiz Funciona?</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">O Insight começa com uma pergunta</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Muitos casais enfrentam dificuldades não porque falta amor, mas porque falta compreensão. Nosso quiz atua como um espelho, refletindo a dinâmica do seu relacionamento de uma forma segura, estruturada e construtiva.
              </p>
              <p>
                Ao contrário da terapia tradicional, que pode parecer intimidadora, nossa avaliação pode ser feita no conforto do seu sofá. Ela fornece dados imediatos, relatórios personalizados e iniciadores de conversa sob medida para ajudar vocês a superarem as barreiras.
              </p>
              <div className="pt-4">
                <p className="font-serif italic text-xl text-brand-blue">
                  "A pergunta certa pode desbloquear uma vida inteira de conexão."
                </p>
                <p className="mt-2 font-bold text-brand-dark">— Equipe O que falta dizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;