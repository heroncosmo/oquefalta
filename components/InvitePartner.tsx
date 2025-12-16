import React, { useState } from 'react';
import { Heart, Mail, ArrowRight, Users, CheckCircle } from 'lucide-react';

interface InvitePartnerProps {
  onContinue: (partnerEmail: string) => void;
  onBack: () => void;
}

const InvitePartner: React.FC<InvitePartnerProps> = ({ onContinue, onBack }) => {
  const [partnerEmail, setPartnerEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setPartnerEmail(email);
    setIsValidEmail(validateEmail(email) || email === '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(partnerEmail)) {
      setIsValidEmail(false);
      return;
    }

    setIsSubmitting(true);

    // Simula envio de emails
    setTimeout(() => {
      setIsSubmitting(false);
      onContinue(partnerEmail);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-500">
            <Heart size={20} className="text-brand-gold fill-current" />
            <span className="font-serif font-bold tracking-wide">O Que Falta Dizer</span>
          </div>
          <button onClick={onBack} className="text-slate-500 hover:text-brand-dark text-sm font-bold uppercase tracking-widest">
            Voltar
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 mt-8 md:mt-16">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">
              <CheckCircle size={20} />
            </div>
            <div className="w-16 h-1 bg-green-500 mx-2"></div>
            <div className="flex items-center justify-center w-10 h-10 bg-brand-gold text-white rounded-full">
              <Users size={20} />
            </div>
            <div className="w-16 h-1 bg-slate-300 mx-2"></div>
            <div className="flex items-center justify-center w-10 h-10 bg-slate-300 text-slate-500 rounded-full">
              3
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
            Convidar Parceiro
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Para gerar o diagnóstico completo do casal, precisamos do e-mail do seu parceiro.
            Enviaremos um link único para ele responder a sua parte do quiz.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg border-t-4 border-brand-gold">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-brand-gold" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-2">
              Como Funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Convite Enviado</h3>
              <p className="text-sm text-slate-600">
                Informe o e-mail do seu parceiro e enviaremos um convite automático.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Respostas Individuais</h3>
              <p className="text-sm text-slate-600">
                Cada um responde o quiz separadamente com total privacidade.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Relatório Completo</h3>
              <p className="text-sm text-slate-600">
                Recebam o diagnóstico personalizado do casal por e-mail.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="partnerEmail" className="block text-sm font-bold text-slate-700 mb-2">
                E-mail do seu parceiro
              </label>
              <input
                type="email"
                id="partnerEmail"
                value={partnerEmail}
                onChange={handleEmailChange}
                placeholder="exemplo@email.com"
                className={`w-full bg-slate-50 border rounded-sm px-4 py-3 focus:outline-none focus:ring-2 ${
                  !isValidEmail
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-slate-200 focus:border-brand-gold focus:ring-brand-gold/20'
                }`}
                required
              />
              {!isValidEmail && (
                <p className="text-red-600 text-sm mt-1">Por favor, insira um e-mail válido.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !partnerEmail || !isValidEmail}
              className="w-full bg-[#25D366] text-white font-bold text-lg py-4 px-6 rounded-sm hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando convites...
                </>
              ) : (
                <>
                  Enviar Convites
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500 mt-4">
              Os e-mails serão enviados automaticamente e você poderá começar seu quiz imediatamente.
            </p>
          </form>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-sm border border-green-200">
            <div className="flex items-start gap-3">
              <CheckCircle size={24} className="text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-800 mb-1">Privacidade Garantida</h3>
                <p className="text-sm text-green-700">
                  Cada pessoa responde de forma independente e anônima.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-sm border border-blue-200">
            <div className="flex items-start gap-3">
              <CheckCircle size={24} className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-blue-800 mb-1">Relatório Completo</h3>
                <p className="text-sm text-blue-700">
                  Análise detalhada do casal e índice de alinhamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitePartner;
