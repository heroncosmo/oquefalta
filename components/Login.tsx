import React, { useState } from 'react';
import { Heart, ArrowLeft, Lock } from 'lucide-react';

interface LoginProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simula autenticação
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-brand-dark p-8 text-center relative">
          <button 
            onClick={onBack}
            className="absolute top-4 left-4 text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex justify-center mb-4">
            <Heart className="h-8 w-8 text-brand-gold fill-current" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">Bem-vindo de volta</h2>
          <p className="text-brand-gold/80 text-sm mt-2">Acesse seu diagnóstico e materiais.</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Senha</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-gold text-brand-dark font-bold py-4 rounded-sm hover:bg-brand-dark hover:text-white transition-all uppercase tracking-widest shadow-md flex justify-center items-center gap-2"
            >
              {loading ? (
                'Entrando...'
              ) : (
                <>
                  <Lock size={16} /> Acessar Relatório
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-xs text-slate-400 hover:text-brand-dark">Esqueceu sua senha?</a>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-xs">
        &copy; O que falta dizer. Área segura.
      </p>
    </div>
  );
};

export default Login;