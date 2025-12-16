import React from 'react';
import { Users, Mail, FileText, Check } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-brand-gold">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Como Funciona o Quiz?</h2>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Processo Simples e Seguro</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 transform -translate-x-1/2"></div>

            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 bg-brand-dark text-brand-gold w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative z-10">1</div>
              <div>
                <h4 className="font-bold text-lg text-brand-dark mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-gold" />
                  Válido para o Casal
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Cada compra do quiz é válida para 2 pessoas. Vocês não precisam estar no mesmo lugar para responder.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start md:flex-row-reverse md:text-right">
              <div className="flex-shrink-0 bg-brand-dark text-brand-gold w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative z-10">2</div>
              <div>
                <h4 className="font-bold text-lg text-brand-dark mb-2 flex items-center gap-2 md:justify-end">
                  <Mail className="w-5 h-5 text-brand-gold" />
                  Links Individuais
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Vocês receberão links únicos nos e-mails cadastrados. Podem responder juntos no sofá ou separados durante o dia.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 bg-brand-dark text-brand-gold w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative z-10">3</div>
              <div>
                <h4 className="font-bold text-lg text-brand-dark mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-gold" />
                  Comparação Automática
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nosso sistema cruza as respostas de forma inteligente, identificando pontos de força e áreas de atrito.
                </p>
              </div>
            </div>

             {/* Step 4 */}
             <div className="flex gap-4 items-start md:flex-row-reverse md:text-right">
              <div className="flex-shrink-0 bg-brand-gold text-brand-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative z-10">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-brand-dark mb-2 flex items-center gap-2 md:justify-end">
                  Resultado Completo
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ao final, ambos recebem o relatório detalhado com a pontuação e insights para discutir.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10 p-4 bg-brand-light border border-brand-gold/30 rounded-lg text-center">
            <p className="text-brand-dark font-medium text-sm">
              <span className="font-bold text-brand-gold">Atenção:</span> Apenas os 2 e-mails cadastrados no momento da compra receberão o acesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;