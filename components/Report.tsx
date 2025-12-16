import React from 'react';
import { Download, Share2, LogOut, FileText, CheckCircle, BarChart2 } from 'lucide-react';

interface ReportProps {
  onLogout: () => void;
}

const Report: React.FC<ReportProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-serif font-bold">R</div>
            <span className="font-bold text-brand-dark hidden md:block">Área do Membro</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 hidden md:block">Olá, Ricardo</span>
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-dark transition-colors"
            >
              <LogOut size={16} /> <span className="hidden md:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-2">Seu Diagnóstico</h1>
            <p className="text-slate-500">Relatório gerado em {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
          <button className="bg-brand-dark text-white hover:bg-brand-blue px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center gap-2 shadow-lg transition-all">
            <Download size={18} /> Baixar PDF Completo
          </button>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Overall Health */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-brand-gold relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-brand-dark uppercase tracking-wide text-sm">Saúde do Casamento</h3>
              <BarChart2 className="text-brand-gold w-5 h-5" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-serif font-bold text-brand-dark">72</span>
              <span className="text-xl text-slate-400 mb-2">/100</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Zona de Atenção Moderada</p>
            <div className="w-full bg-slate-100 h-2 mt-4 rounded-full overflow-hidden">
              <div className="bg-brand-gold h-full w-[72%]"></div>
            </div>
          </div>

          {/* Key Strength */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
             <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-brand-dark uppercase tracking-wide text-sm">Ponto Forte</h3>
              <CheckCircle className="text-green-500 w-5 h-5" />
            </div>
            <h4 className="text-xl font-serif font-bold text-brand-dark mb-2">Compromisso</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Vocês demonstraram uma alta dedicação em fazer o relacionamento funcionar a longo prazo, o que é uma base sólida.
            </p>
          </div>

          {/* Critical Area */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-red-400">
             <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-brand-dark uppercase tracking-wide text-sm">Atenção Necessária</h3>
              <FileText className="text-red-400 w-5 h-5" />
            </div>
            <h4 className="text-xl font-serif font-bold text-brand-dark mb-2">Comunicação</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Há indícios de ruídos na comunicação e sentimentos não expressos que podem gerar ressentimentos.
            </p>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Análise Detalhada</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-lg text-brand-dark mb-3">
                    <span className="w-6 h-6 rounded-full bg-brand-gold text-white flex items-center justify-center text-xs">1</span>
                    Dinâmica de Conflito
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-justify">
                    Seu perfil indica um padrão de "evitação". Quando os problemas surgem, um ou ambos tendem a se fechar para evitar brigas. Embora isso mantenha a paz momentânea, impede a resolução real dos problemas. 
                    <span className="block mt-2 font-bold text-brand-blue">Recomendação: Pratiquem a técnica dos "5 minutos de escuta sem interrupção" sugerida no PDF.</span>
                  </p>
                </div>

                <div className="h-px bg-slate-100 w-full"></div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-lg text-brand-dark mb-3">
                    <span className="w-6 h-6 rounded-full bg-brand-gold text-white flex items-center justify-center text-xs">2</span>
                    Qualidade da Intimidade
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-justify">
                    A conexão emocional parece estar desconectada da rotina diária. Vocês funcionam bem como parceiros logísticos (casa, contas), mas deixaram de ser namorados.
                    <span className="block mt-2 font-bold text-brand-blue">Recomendação: Agendem o "encontro semanal inegociável" detalhado na página 12 do seu relatório.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark text-white p-8 rounded-lg shadow-xl overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold mb-4">Próximos Passos</h3>
                <p className="text-slate-300 mb-6">
                  O relatório completo em PDF contém 15 páginas com exercícios práticos personalizados para o seu perfil.
                </p>
                <button className="bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm">
                  Baixar Relatório Completo (PDF)
                </button>
              </div>
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wide">Link do Cônjuge</h4>
              <p className="text-xs text-slate-500 mb-4">
                Envie este link para seu parceiro(a) responder a parte dele(a). Os resultados serão unificados aqui.
              </p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value="oquefaltadizer.com.br/quiz/p/39281" 
                  className="bg-slate-100 border border-slate-200 text-xs p-2 rounded w-full text-slate-600"
                />
                <button className="bg-brand-blue text-white p-2 rounded hover:bg-brand-dark transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-brand-dark mb-2 text-sm">Precisa de ajuda?</h4>
              <p className="text-xs text-slate-500 mb-4">
                Se tiver dúvidas sobre o resultado, nossa equipe de suporte está disponível.
              </p>
              <a href="#contact" className="text-brand-gold text-xs font-bold uppercase hover:underline">Falar no WhatsApp</a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Report;