import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import VideoTestimonials from './components/VideoTestimonials';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/AIAdvisor';
import Checkout from './components/Checkout';
import Quiz from './components/Quiz';
import Report from './components/Report';
import Login from './components/Login';
import { X } from 'lucide-react';

type ViewState = 'home' | 'checkout' | 'quiz' | 'report' | 'login';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [showBanner, setShowBanner] = useState(true);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const navigateToCheckout = () => {
    window.scrollTo(0, 0);
    setCurrentView('checkout');
  };

  const navigateToQuiz = () => {
    window.scrollTo(0, 0);
    setCurrentView('quiz');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentView('home');
  };

  const navigateToLogin = () => {
    window.scrollTo(0, 0);
    setCurrentView('login');
  };

  const navigateToReport = () => {
    window.scrollTo(0, 0);
    setCurrentView('report');
  };

  // Renderização condicional baseada na view atual
  if (currentView === 'checkout') {
    return <Checkout onBack={navigateToHome} onSuccess={navigateToQuiz} />;
  }

  if (currentView === 'quiz') {
    return <Quiz onHome={navigateToHome} onFinish={navigateToReport} />;
  }

  if (currentView === 'login') {
    return <Login onBack={navigateToHome} onLoginSuccess={navigateToReport} />;
  }

  if (currentView === 'report') {
    return <Report onLogout={navigateToHome} />;
  }

  // View 'home' (Landing Page padrão)
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Banner - Limited Time Offer */}
      {showBanner && (
        <div className="bg-black text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center relative z-[60]">
          <div className="flex-1 text-center font-medium tracking-wide">
            Oferta Especial por Tempo Limitado - O Diagnóstico Completo por apenas <span className="text-brand-gold font-bold">R$ 97</span> (Reserve seu lugar agora)
          </div>
          <button 
            onClick={() => setShowBanner(false)} 
            className="text-white/70 hover:text-white absolute right-4"
            aria-label="Fechar aviso"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <Navbar 
        bannerVisible={showBanner} 
        onNavigateCheckout={navigateToCheckout} 
        onNavigateLogin={navigateToLogin}
      />
      
      <main>
        <Hero onStart={navigateToCheckout} />
        
        {/* The Hook / Reality Check */}
        <VideoTestimonials onStart={navigateToCheckout} />

        {/* Why this is different (Icons) */}
        <Features />

        {/* How it works */}
        <Process />
        
        {/* Methodology / Philosophy */}
        <About />
        
        {/* Pricing / CTA */}
        <Pricing onBuy={navigateToCheckout} />

        {/* FAQ Section */}
        <FAQ />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;