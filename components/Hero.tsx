import React, { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1920&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1711387453143-36bb84fa682d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1597663807001-540da1f29f19?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

interface HeroProps {
  onStart?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100dvh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt="Casal conectado"
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 md:mt-0 flex flex-col justify-center h-full pb-12 md:pb-0">
        
        <div className="animate-fade-in-up">
           <h2 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 md:mb-6 text-shadow-sm">
            Retiro de Casamento Online
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-2xl">
            Você pode ter um <br className="hidden md:block"/>
            <span className="italic">casamento melhor.</span>
          </h1>
          
          <p className="text-base md:text-2xl text-slate-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-4">
            Saia da rotina de "colegas de quarto" e recupere a conexão profunda. 
            Um diagnóstico completo do seu relacionamento em menos de 30 minutos.
          </p>

          <div className="flex flex-col gap-4 items-center w-full px-4">
            <button 
              onClick={onStart}
              className="w-full md:w-auto bg-brand-gold text-brand-dark font-bold text-lg py-4 px-12 rounded-sm hover:bg-white hover:text-brand-dark transition-all duration-300 uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
            >
              Salvar Meu Casamento
            </button>
            <p className="text-slate-300 text-xs md:text-sm mt-2">
              <span className="text-brand-gold">★ ★ ★ ★ ★</span> Mais de 10.000 casais ajudados
            </p>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
        <svg className="w-8 h-8 text-white/50 hover:text-white transition-colors cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor" onClick={() => document.getElementById('hook')?.scrollIntoView()}>
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
