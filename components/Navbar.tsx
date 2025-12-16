import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, User } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#' },
  { label: 'O Quiz', href: '#quiz' },
  { label: 'Sobre', href: '#about' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Depoimentos', href: '#reviews' },
];

interface NavbarProps {
  bannerVisible: boolean;
  onNavigateCheckout?: () => void;
  onNavigateLogin?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ bannerVisible, onNavigateCheckout, onNavigateLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (onNavigateCheckout) {
      e.preventDefault();
      onNavigateCheckout();
    }
  };

   const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateLogin) {
      onNavigateLogin();
    }
  };

  // Determine navbar classes based on state
  const navbarClasses = isScrolled
    ? 'bg-white/95 text-brand-dark shadow-md py-2'
    : 'bg-transparent text-white py-4';

  const linkClasses = isScrolled
    ? 'text-brand-blue hover:text-brand-gold'
    : 'text-white/90 hover:text-brand-gold';

  const logoTextClasses = isScrolled
    ? 'text-brand-dark'
    : 'text-white';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${navbarClasses}`}
      style={{ top: bannerVisible ? (isScrolled ? '0px' : '36px') : '0px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Heart className="h-6 w-6 text-brand-gold fill-current" />
            <span className={`font-serif text-2xl font-bold tracking-tight ${logoTextClasses}`}>
              O que falta<span className="text-brand-gold">dizer</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${linkClasses}`}
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <button 
                onClick={handleLoginClick}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-dark' : 'text-white/80 hover:text-white'}`}
              >
                <User size={16} /> Entrar
              </button>
              <button 
                onClick={handleCtaClick}
                className="bg-brand-gold text-brand-dark px-5 py-2 rounded-sm text-sm font-bold uppercase hover:bg-white hover:text-brand-dark transition-all"
              >
                Começar
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-brand-gold focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full top-full left-0 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-blue hover:text-brand-gold hover:bg-slate-50 block px-3 py-3 text-base font-medium border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
                onClick={(e) => { setIsOpen(false); handleLoginClick(e); }}
                className="w-full text-slate-600 block px-3 py-3 text-base font-bold uppercase border-b border-gray-50 hover:bg-slate-50"
            >
                Entrar na Conta
            </button>
             <button
                onClick={(e) => { setIsOpen(false); handleCtaClick(e); }}
                className="w-full text-brand-dark bg-brand-gold block px-3 py-4 text-base font-bold uppercase mt-2"
              >
                Começar Agora
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;