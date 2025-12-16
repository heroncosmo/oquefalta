import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem para URL
    const text = `Olá, meu nome é *${name}*. \n\n${message}`;
    const encodedText = encodeURIComponent(text);
    
    // Substitua pelo número real do WhatsApp (ex: 5511999999999)
    const phoneNumber = "5511999999999"; 
    
    // Abre o WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden">
          <div className="bg-brand-dark py-8 px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Fale Conosco</h2>
            <p className="text-brand-gold text-base">Prefere uma resposta rápida? Chame no WhatsApp.</p>
          </div>
          
          <form onSubmit={handleWhatsAppClick} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Seu Nome</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b-2 border-slate-200 bg-slate-50 px-3 py-3 focus:outline-none focus:border-brand-gold transition-colors text-lg" 
                placeholder="Ex: Maria Silva" 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Como podemos ajudar?</label>
              <textarea 
                rows={4} 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-b-2 border-slate-200 bg-slate-50 px-3 py-3 focus:outline-none focus:border-brand-gold transition-colors text-lg" 
                placeholder="Ex: Tenho uma dúvida sobre o quiz de comunicação..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#25D366] text-white font-bold py-4 uppercase tracking-widest hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center gap-3 text-lg shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Enviar para WhatsApp
            </button>
            
            <p className="text-center text-slate-400 text-xs mt-4">
              Ao clicar, você será redirecionado para o aplicativo do WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;