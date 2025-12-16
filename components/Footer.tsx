import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-6 w-6 text-brand-gold fill-current" />
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                O que falta<span className="text-brand-gold">dizer</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Ajudando casais a reconstruir a confiança, a intimidade e a conexão através de um diagnóstico prático e recursos online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Nossa Abordagem</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">O Quiz</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Intensivos</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Av. Paulista, 1000<br/>São Paulo, SP 01310</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>(11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>ola@oquefaltadizer.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Conecte-se</h4>
            <p className="text-sm mb-4">Receba dicas de casamento e encorajamento no seu email.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Endereço de Email" className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-sm focus:outline-none focus:border-brand-gold text-white text-sm" />
              <button className="bg-brand-gold text-brand-dark font-bold text-xs uppercase py-2 px-4 rounded-sm hover:bg-white transition-colors">Inscrever-se</button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} O que falta dizer. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;