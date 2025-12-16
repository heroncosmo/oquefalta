import React from 'react';
import { HelpCircle, Check, Heart, Users, Clock, DollarSign } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Dúvidas Frequentes</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-center">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <HelpCircle className="w-16 h-16 text-brand-dark mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-brand-dark mb-4 font-serif">Qual é o formato?</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Tudo é 100% online. Você e seu cônjuge recebem links individuais para responder no seu próprio tempo. Após ambos concluírem, um relatório detalhado é gerado instantaneamente, comparando as respostas e oferecendo insights práticos para conversarem.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <Check className="w-16 h-16 text-brand-dark mb-6 stroke-[2]" />
            <h3 className="text-xl font-bold text-brand-dark mb-4 font-serif">Isso realmente funciona?</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Sim. Ao contrário da terapia tradicional, onde você pode se sentir pressionado na hora, o formato do quiz permite honestidade sem confronto imediato. Baseado em psicologia comportamental e princípios bíblicos, já ajudamos mais de 10.000 casais a quebrar o gelo.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <Heart className="w-16 h-16 text-brand-dark mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-brand-dark mb-4 font-serif">O que nos torna diferentes?</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Nossa ferramenta não é apenas um "teste de personalidade". É um diagnóstico relacional profundo. Combinamos precisão clínica com uma linguagem acessível e acolhedora, focada em restaurar a amizade e a intimidade do casal.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <Users className="w-16 h-16 text-brand-dark mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-brand-dark mb-4 font-serif">Para quem é indicado?</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Para casais em qualquer estágio: namorados avaliando compatibilidade, recém-casados ajustando a rotina, ou casais de longa data buscando reacender a chama ou resolver conflitos persistentes.
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center">
            <Clock className="w-16 h-16 text-brand-dark mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-brand-dark mb-4 font-serif">Quanto tempo leva?</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Respeitamos seu tempo. O quiz leva entre 15 a 30 minutos para ser respondido. O relatório é imediato. Vocês podem discutir os resultados no ritmo de vocês, talvez em um jantar especial ou no fim de semana.
            </p>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col items-center">
            <DollarSign className="w-16 h-16 text-brand-dark mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-brand-dark mb-4 font-serif">Qual é o investimento?</h3>
            <p className="text-slate-600 leading-relaxed text-sm px-4">
              Queremos que todo casal tenha acesso a ajuda de qualidade. O quiz custa uma fração de uma única sessão de terapia. Oferecemos um preço acessível e garantia de satisfação ou seu dinheiro de volta.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;