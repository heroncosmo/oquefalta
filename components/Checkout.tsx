import React, { useState } from 'react';
import { ShieldCheck, Lock, CreditCard, QrCode, Check, Star, ArrowLeft } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
  onSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack, onSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');
  const [loading, setLoading] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simula processamento de pagamento
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* Header Simplificado para Foco */}
      <header className="bg-white border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <button onClick={onBack} className="text-slate-500 hover:text-brand-dark flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
            <ArrowLeft size={16} /> Voltar
          </button>
          <div className="flex items-center gap-2 text-green-600">
            <Lock size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Pagamento 100% Seguro</span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Coluna da Esquerda: Dados e Pagamento */}
        <div className="md:col-span-7">
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-lg border-t-4 border-brand-gold">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-6">Finalizar Inscrição</h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Dados Pessoais */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Seus Dados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Nome Completo" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none" />
                  <input required type="email" placeholder="Melhor E-mail" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none" />
                </div>
                <input required type="tel" placeholder="WhatsApp / Telefone" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none" />
              </div>

              {/* Método de Pagamento */}
              <div className="pt-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Pagamento</h3>
                
                <div className="flex gap-4 mb-6">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 border-2 rounded-sm transition-all ${paymentMethod === 'card' ? 'border-brand-gold bg-brand-gold/10 text-brand-dark font-bold' : 'border-slate-100 bg-slate-50 text-slate-400'}`}
                  >
                    <CreditCard size={20} /> Cartão
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 border-2 rounded-sm transition-all ${paymentMethod === 'pix' ? 'border-brand-gold bg-brand-gold/10 text-brand-dark font-bold' : 'border-slate-100 bg-slate-50 text-slate-400'}`}
                  >
                    <QrCode size={20} /> PIX
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <div className="space-y-4 animate-fade-in">
                    <input required type="text" placeholder="Número do Cartão" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="Validade (MM/AA)" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none" />
                      <input required type="text" placeholder="CVV" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none" />
                    </div>
                    <input required type="text" placeholder="Nome no Cartão" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none" />
                    
                    <div className="bg-green-50 text-green-800 text-xs p-3 rounded-sm flex items-center gap-2">
                       <ShieldCheck size={16} /> Transação Criptografada de Ponta a Ponta.
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 bg-slate-50 rounded-sm border border-slate-200 animate-fade-in">
                    <QrCode size={64} className="mx-auto text-brand-dark mb-4 opacity-80" />
                    <p className="text-sm text-slate-600 mb-4">O código PIX será gerado na próxima etapa.</p>
                    <p className="text-xs text-green-600 font-bold bg-green-100 inline-block px-2 py-1 rounded">Aprovação Imediata</p>
                  </div>
                )}
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#25D366] text-white font-bold text-lg py-4 rounded-sm hover:bg-[#128C7E] transition-colors shadow-lg mt-6 flex justify-center items-center"
              >
                {loading ? 'Processando...' : 'Pagar e Começar Agora'}
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                Ao clicar em pagar, você concorda com nossos termos de serviço. O acesso é enviado por e-mail imediatamente.
              </p>
            </form>
          </div>
        </div>

        {/* Coluna da Direita: Resumo e Persuasão */}
        <div className="md:col-span-5 space-y-6">
          
          {/* Resumo do Pedido */}
          <div className="bg-white p-6 rounded-sm shadow-md">
            <h3 className="text-lg font-serif font-bold text-brand-dark mb-4 border-b border-slate-100 pb-2">Resumo do Pedido</h3>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-bold text-slate-700">Diagnóstico Completo O Que Falta Dizer</p>
                <p className="text-xs text-slate-500">Acesso Vitalício + Bônus</p>
              </div>
              <p className="font-bold text-brand-dark">R$ 97,00</p>
            </div>
            <div className="space-y-2 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Acesso para 2 pessoas</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Relatório Detalhado PDF</div>
              <div className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Guia de Conversa</div>
            </div>
            <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xl">
              <span className="font-bold text-slate-800">Total:</span>
              <span className="font-bold text-green-600">R$ 97,00</span>
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-brand-light p-6 rounded-sm border border-brand-gold/30 flex gap-4 items-start">
            <ShieldCheck className="w-10 h-10 text-brand-gold flex-shrink-0" />
            <div>
              <h4 className="font-bold text-brand-dark text-sm mb-1 uppercase">Garantia Incondicional</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se você não gostar do quiz ou achar que não ajudou, devolvemos 100% do seu dinheiro em até 7 dias. Sem perguntas.
              </p>
            </div>
          </div>

          {/* Depoimento Rápido */}
          <div className="bg-white p-6 rounded-sm shadow-sm italic text-slate-600 text-sm border-l-4 border-brand-dark">
            "Foi o melhor investimento que fizemos no ano. Mais barato que um jantar e salvou nossa comunicação."
            <div className="flex items-center gap-1 mt-2 text-brand-gold text-xs not-italic font-bold">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <span className="text-slate-400 ml-2">- Ricardo & Ana</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;