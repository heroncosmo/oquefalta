import { QuizData } from './types';

export const quizData: QuizData = {
  modules: [
    // Módulo 1 - Idade & Fase (não pontua)
    {
      id: 'module1',
      title: 'Idade & Fase do Relacionamento',
      alert: 'Idade e fase não definem maturidade; ajudam a entender o contexto. Marque com sinceridade.',
      questions: [
        {
          id: 'age',
          module: 'module1',
          question: 'Marque sua idade:',
          type: 'single',
          options: [
            { id: '16-21', text: '( ) 16 a 21', points: 0 },
            { id: '21-25', text: '( ) 21 a 25', points: 0 },
            { id: '25-30', text: '( ) 25 a 30', points: 0 },
            { id: '30-35', text: '( ) 30 a 35', points: 0 },
            { id: '35+', text: '( ) 35+', points: 0 }
          ]
        },
        {
          id: 'relationship_phase',
          module: 'module1',
          question: 'Fase do relacionamento:',
          type: 'single',
          options: [
            { id: 'namoro', text: '( ) Namoro', points: 0 },
            { id: 'noivado', text: '( ) Noivado', points: 0 },
            { id: 'casamento', text: '( ) Casamento', points: 0 }
          ]
        }
      ]
    },
    // Módulo 2 - Introdução & Compromisso (não pontua)
    {
      id: 'module2',
      title: 'Introdução & Compromisso',
      alert: 'Check-up relacional: quanto mais sinceridade, melhor o diagnóstico.',
      questions: [
        {
          id: 'commitment',
          module: 'module2',
          question: 'Você tem coragem de mergulhar de cabeça no relacionamento e no seu par?',
          type: 'single',
          options: [
            { id: 'yes', text: '[ ] Sim, quero começar', points: 0 }
          ]
        }
      ]
    },
    // Módulo 3 - Exercícios para o Diálogo
    {
      id: 'module3',
      title: 'Exercícios para o Diálogo',
      alert: 'Relacionamento sem conversa é tipo Wi-Fi fraco: cai toda hora. Aqui, falar é obrigatório.',
      questions: [
        {
          id: 'q3_1',
          module: 'module3',
          question: 'Se seu parceiro diz "estou inseguro com minha carreira", você:',
          type: 'single',
          options: [
            { id: 'a', text: '( ) Muda de assunto — 1 ponto', points: 1 },
            { id: 'b', text: '( ) Dá conselhos rápidos — 2 pontos', points: 2 },
            { id: 'c', text: '( ) Escuta com atenção, busca entender e ajuda a encontrar uma resposta — 3 pontos', points: 3 }
          ]
        },
        {
          id: 'q3_2',
          module: 'module3',
          question: 'Vocês precisam decidir onde morar. Você:',
          type: 'single',
          options: [
            { id: 'a', text: '( ) Impõe sua vontade — 1 ponto', points: 1 },
            { id: 'b', text: '( ) Prefere adiar a decisão — 2 pontos', points: 2 },
            { id: 'c', text: '( ) Sugere opções e ouve o outro — 3 pontos', points: 3 }
          ]
        },
        {
          id: 'q3_3',
          module: 'module3',
          question: 'Em um conflito familiar, você tende a:',
          type: 'single',
          options: [
            { id: 'a', text: '( ) Se fechar — 1 ponto', points: 1 },
            { id: 'b', text: '( ) Explodir — 2 pontos', points: 2 },
            { id: 'c', text: '( ) Conversar até resolver — 3 pontos', points: 3 }
          ]
        }
      ]
    },
    // Bloco 1 - Maturidade Emocional
    {
      id: 'block1',
      title: 'Maturidade Emocional',
      alert: 'Pagar boleto por si só não é sinônimo de maturidade. Vida a dois testa mais que vestibular.',
      questions: [
        {
          id: 'b1_q1',
          module: 'block1',
          question: 'Como reage ao ouvir um "não"?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Fico frustrado(a), mas aceito e sigo em frente — 3', points: 3 },
            { id: 'b', text: '(B) Tento negociar/convencer a mudar de ideia — 2', points: 2 },
            { id: 'c', text: '(C) Sinto muita dificuldade, posso reagir com irritação/tristeza — 1', points: 1 }
          ]
        },
        {
          id: 'b1_q2',
          module: 'block1',
          question: 'Como lida com críticas?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Escuto e reflito, mesmo que doa — 3', points: 3 },
            { id: 'b', text: '(B) Fico na defensiva, mas depois penso melhor — 2', points: 2 },
            { id: 'c', text: '(C) Reajo mal na hora e tenho dificuldade de aceitar — 1', points: 1 }
          ]
        },
        {
          id: 'b1_q3',
          module: 'block1',
          question: 'Como lida com o ciúme?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Controlo e converso de forma saudável — 3', points: 3 },
            { id: 'b', text: '(B) Sinto ciúme, mas tento não transparecer — 2', points: 2 },
            { id: 'c', text: '(C) Reajo de modo impulsivo/exagerado — 1', points: 1 }
          ]
        },
        {
          id: 'b1_q4',
          module: 'block1',
          question: 'Em momentos de estresse, tende a…',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Buscar diálogo/atividades que aliviem a tensão — 3', points: 3 },
            { id: 'b', text: '(B) Explodir ou desabafar de forma intensa — 2', points: 2 },
            { id: 'c', text: '(C) Se fechar e guardar tudo para si — 1', points: 1 }
          ]
        },
        {
          id: 'b1_q5',
          module: 'block1',
          question: 'Você conhece sua linguagem do amor?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Sim, conheço bem e sei expressar/receber amor nessa linguagem — 3', points: 3 },
            { id: 'b', text: '(B) Tenho alguma noção, mas não sei ao certo — 2', points: 2 },
            { id: 'c', text: '(C) Não, nunca pensei ou ouvi falar sobre isso — 1', points: 1 }
          ]
        }
      ]
    },
    // Bloco 2 - Sexualidade
    {
      id: 'block2',
      title: 'Sexualidade',
      alert: 'Esse é o assunto que todo mundo pensa, mas poucos têm coragem de conversar. Relacionamento saudável não sobrevive de suposições!',
      questions: [
        {
          id: 'b2_q1',
          module: 'block2',
          question: 'Como você enxerga a sexualidade no relacionamento?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Como uma expressão de amor, intimidade e cumplicidade — 3', points: 3 },
            { id: 'b', text: '(B) Como algo importante, mas que deve caminhar junto com respeito e diálogo — 2', points: 2 },
            { id: 'c', text: '(C) Como uma necessidade natural, que precisa de atenção e cuidado — 1', points: 1 }
          ]
        },
        {
          id: 'b2_q2',
          module: 'block2',
          question: 'Está disposto(a) a não ultrapassar limites no namoro/noivado caso sigam uma fé em comum?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Sim, acredito que é importante respeitar esses princípios — 3', points: 3 },
            { id: 'b', text: '(B) Tenho dificuldade, mas estou aberto(a) a conversar — 2', points: 2 },
            { id: 'c', text: '(C) Não se aplica ao nosso relacionamento — 1', points: 1 }
          ]
        },
        {
          id: 'b2_q3',
          module: 'block2',
          question: 'Quais suas expectativas em relação à intimidade física, mesmo que ainda não tenham tido relações sexuais?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Que seja uma área de prazer e conexão mútua — 3', points: 3 },
            { id: 'b', text: '(B) Que seja construída com paciência e respeito aos limites de cada um — 2', points: 2 },
            { id: 'c', text: '(C) Que seja frequente e parte essencial do relacionamento — 1', points: 1 }
          ]
        },
        {
          id: 'b2_q4',
          module: 'block2',
          question: 'Existe algo sobre sexualidade que você tem medo ou vergonha de discutir?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Sim, mas gostaria de criar um ambiente seguro para falar sobre isso — 3', points: 3 },
            { id: 'b', text: '(B) Às vezes, mas consigo conversar quando há confiança — 2', points: 2 },
            { id: 'c', text: '(C) Não, sinto liberdade para tratar do assunto — 1', points: 1 }
          ]
        },
        {
          id: 'b2_q5',
          module: 'block2',
          question: 'Como lidaria com períodos de abstinência (ex.: gravidez, doença)?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Com apoio e paciência, valorizando outras formas de carinho — 3', points: 3 },
            { id: 'b', text: '(B) Seria difícil, mas tentaria lidar com compreensão — 2', points: 2 },
            { id: 'c', text: '(C) Sentiria frustração, mas reconheço que faz parte do relacionamento — 1', points: 1 }
          ]
        }
      ]
    },
    // Bloco 3 - Vida Espiritual
    {
      id: 'block3',
      title: 'Vida Espiritual',
      alert: 'Se fé move montanhas, imagina o que pode fazer no casamento. Mas só funciona se os dois estiverem no mesmo caminho!',
      questions: [
        {
          id: 'b3_q1',
          module: 'block3',
          question: 'Somos da mesma fé/igreja?',
          type: 'single',
          options: [
            { id: 'sim', text: '( ) Sim — 3', points: 3 },
            { id: 'nao', text: '( ) Não — 1', points: 1 },
            { id: 'aprender', text: '( ) Posso aprender mais a respeito — 2', points: 2 }
          ]
        },
        {
          id: 'b3_q2',
          module: 'block3',
          question: 'Quem estaria disposto(a) a ceder?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Eu cederia, se fosse importante para a unidade do casal — 3', points: 3 },
            { id: 'b', text: '(B) Esperaria que o outro cedesse, por entender que minha fé é prioridade — 2', points: 2 },
            { id: 'c', text: '(C) Buscaríamos juntos um ponto de equilíbrio, sem imposição — 1', points: 1 }
          ]
        },
        {
          id: 'b3_q3',
          module: 'block3',
          question: 'Estamos dispostos a orar juntos regularmente?',
          type: 'single',
          options: [
            { id: 'sim', text: '( ) Sim — 3', points: 3 },
            { id: 'nao', text: '( ) Não — 1', points: 1 },
            { id: 'aprender', text: '( ) Posso aprender mais a respeito — 2', points: 2 }
          ]
        },
        {
          id: 'b3_q4',
          module: 'block3',
          question: 'Qual o papel de Deus em nossas decisões como casal?',
          type: 'single',
          options: [
            { id: 'a', text: '(A) Central: buscamos alinhar escolhas à vontade d\'Ele — 3', points: 3 },
            { id: 'b', text: '(B) Importante, mas nem sempre lembramos de colocar em primeiro lugar — 2', points: 2 },
            { id: 'c', text: '(C) Presente apenas em alguns momentos de dificuldade — 1', points: 1 }
          ]
        },
        {
          id: 'b3_q5',
          module: 'block3',
          question: 'Quanto você valoriza a sua fé/religião? (0 a 10)',
          type: 'scale',
          scale: { min: 0, max: 10 }
        }
      ]
    }
  ]
};

// Adicionando o Bloco 4 ao quiz principal
quizData.modules.push(
  // Bloco 4 - Finanças
  {
    id: 'block4',
    title: 'Finanças',
    alert: 'O amor pode ser cego, mas as contas não são! Aqui não vale esconder cartão estourado, tá?',
    questions: [
      {
        id: 'b4_q1',
        module: 'block4',
        question: 'Como você lida com as finanças?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sou econômico(a), gosto de ter uma reserva — 3', points: 3 },
          { id: 'b', text: '(B) Costumo gastar mais do que ganho — 1', points: 1 },
          { id: 'c', text: '(C) Não guardo, mas também não me endivido — 2', points: 2 }
        ]
      },
      {
        id: 'b4_q2',
        module: 'block4',
        question: 'Quando casarmos (ou se já estivermos casados), você prefere…',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Contas conjuntas, para termos total transparência — 3', points: 3 },
          { id: 'b', text: '(B) Contas separadas, cada um administra a sua — 1', points: 1 },
          { id: 'c', text: '(C) Um modelo híbrido (parte conjunta, parte individual) — 2', points: 2 }
        ]
      },
      {
        id: 'b4_q3',
        module: 'block4',
        question: 'Quem deve administrar o orçamento da casa?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Ele — 2', points: 2 },
          { id: 'b', text: '(B) Ela — 2', points: 2 },
          { id: 'c', text: '(C) Ambos juntos, de forma compartilhada — 3', points: 3 }
        ]
      },
      {
        id: 'b4_q4',
        module: 'block4',
        question: 'Como você lida com dívidas?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Evito ao máximo e só assumo em casos necessários — 3', points: 3 },
          { id: 'b', text: '(B) Não gosto, mas acabo contraindo e pago aos poucos — 2', points: 2 },
          { id: 'c', text: '(C) Vejo como parte natural da vida financeira e não me preocupo muito — 1', points: 1 }
        ]
      },
      {
        id: 'b4_q5',
        module: 'block4',
        question: 'Quais são suas prioridades financeiras?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Investimentos (guardar e multiplicar recursos) — 4', points: 4 },
          { id: 'b', text: '(B) Estilo de vida (viajar, aproveitar o presente) — 3', points: 3 },
          { id: 'c', text: '(C) Conquista de bens (ex.: casa própria, carro) — 2', points: 2 },
          { id: 'd', text: '(D) Não tenho prioridades financeiras, não penso muito nisso — 1', points: 1 }
        ]
      },
      {
        id: 'b4_q6',
        module: 'block4',
        question: 'Sobre dízimos e ofertas, você…',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Concorda e considera um princípio importante — 3', points: 3 },
          { id: 'b', text: '(B) Tem dúvidas ou dificuldades em relação ao assunto — 2', points: 2 },
          { id: 'c', text: '(C) Não concorda e prefere não praticar — 1', points: 1 }
        ]
      },
      {
        id: 'b4_q7',
        module: 'block4',
        question: 'Você acha importante ter transparência sobre a vida financeira do outro (renda, gastos, contas)?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, acredito que não deve haver segredos — 3', points: 3 },
          { id: 'b', text: '(B) Sim, mas só em pontos relevantes (ex.: grandes dívidas ou investimentos) — 2', points: 2 },
          { id: 'c', text: '(C) Não, prefiro manter certa independência nessa área — 1', points: 1 }
        ]
      },
      {
        id: 'b4_q8',
        module: 'block4',
        question: 'Você espera que o homem seja o provedor principal?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim — 1', points: 1 },
          { id: 'b', text: '(B) Não — 3', points: 3 },
          { id: 'c', text: '(C) Depende da situação financeira e da fase da vida — 2', points: 2 }
        ]
      },
      {
        id: 'b4_q9',
        module: 'block4',
        question: 'Sobre contribuição financeira no casamento:',
        type: 'single',
        options: [
          { id: 'a', text: '(A) A mulher deve ajudar financeiramente quando possível — 2', points: 2 },
          { id: 'b', text: '(B) O homem deve ser responsável — 1', points: 1 },
          { id: 'c', text: '(C) Ambos devem compartilhar de forma igual, sem distinção de gênero — 3', points: 3 }
        ]
      }
    ]
  },
  // Bloco 5 - Educação & Desenvolvimento
  {
    id: 'block5',
    title: 'Educação & Desenvolvimento',
    alert: 'Casamento não é formatura: o diploma de aprendizado nunca chega. Sempre vai ter uma prova surpresa no caminho.',
    questions: [
      {
        id: 'b5_q1',
        module: 'block5',
        question: 'Você gosta de estudar?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, gosto muito e faço disso um hábito — 3', points: 3 },
          { id: 'b', text: '(B) Gosto, mas estudo apenas quando é necessário — 2', points: 2 },
          { id: 'c', text: '(C) Não tenho paciência, estudo só o básico — 1', points: 1 }
        ]
      },
      {
        id: 'b5_q2',
        module: 'block5',
        question: 'Está disposto(a) a continuar aprendendo mesmo depois de casado?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, acredito que o aprendizado é contínuo — 3', points: 3 },
          { id: 'b', text: '(B) Depende da fase da vida e das prioridades — 2', points: 2 },
          { id: 'c', text: '(C) Não, não vejo necessidade — 1', points: 1 }
        ]
      },
      {
        id: 'b5_q3',
        module: 'block5',
        question: 'O que você mais valoriza?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Diploma (formação acadêmica) — 3', points: 3 },
          { id: 'b', text: '(B) Prática (colocar em ação o que aprende) — 2', points: 2 },
          { id: 'c', text: '(C) Experiência (sabedoria adquirida na vivência) — 1', points: 1 }
        ]
      },
      {
        id: 'b5_q4',
        module: 'block5',
        question: 'Como planeja equilibrar estudo, trabalho e vida familiar?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Com organização e diálogo constante sobre prioridades — 3', points: 3 },
          { id: 'b', text: '(B) Priorizando trabalho e família, deixando estudo em segundo plano — 2', points: 2 },
          { id: 'c', text: '(C) Ajustando conforme a necessidade de cada fase — 1', points: 1 }
        ]
      }
    ]
  },
  // Bloco 6 - Papéis no Relacionamento (checklist - não pontua)
  {
    id: 'block6',
    title: 'Papéis no Relacionamento',
    alert: 'Quem lava a louça? Quem troca lâmpada? Quem paga os boletos? Aqui não tem super-herói ou super-heroína. A ideia é que vocês conversem sobre os papéis e como enxergam a divisão das tarefas no dia a dia.',
    questions: [
      {
        id: 'roles_finances',
        module: 'block6',
        question: 'Quem ficará responsável por organizar as finanças da casa (contas, planilha, investimentos)?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_cleaning',
        module: 'block6',
        question: 'Quem se responsabiliza pela limpeza da casa?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_meals',
        module: 'block6',
        question: 'Quem planeja cardápio e faz compras de mercado/feira?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_cooking',
        module: 'block6',
        question: 'Quem cozinha e quem organiza a cozinha (louça, fogão, limpeza)?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_repairs',
        module: 'block6',
        question: 'Quem resolve reparos rápidos (hidráulica/elétrica) e contrata prestadores de serviços?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_car',
        module: 'block6',
        question: 'Quem cuida da manutenção e documentação dos carros (IPVA, seguro, revisões)?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_car_tasks',
        module: 'block6',
        question: 'Quem abastece, leva para lavar e calibra pneus?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_children',
        module: 'block6',
        question: 'Quem acompanha rotina escolar, atividades e reuniões? (se aplicável)',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_property',
        module: 'block6',
        question: 'Quem cuida de decisões sobre compra/venda/reforma de imóveis?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      },
      {
        id: 'roles_planning',
        module: 'block6',
        question: 'Quem acompanha planejamentos de longo prazo?',
        type: 'checklist',
        checklistOptions: [
          { id: 'woman', text: 'Mulher' },
          { id: 'man', text: 'Homem' },
          { id: 'both', text: 'Ambos' }
        ]
      }
    ]
  },
  // Bloco 7 - Conflitos & Negociações
  {
    id: 'block7',
    title: 'Conflitos & Negociações',
    alert: 'Discutir não é problema. O problema é guardar mágoa como se fosse colecionável. Vamos ser sinceros?',
    questions: [
      {
        id: 'b7_q1',
        module: 'block7',
        question: 'Como costuma resolver conflitos?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Prefiro conversar imediatamente e resolver na hora — 3', points: 3 },
          { id: 'b', text: '(B) Preciso de um tempo para pensar e depois retomar a conversa — 2', points: 2 },
          { id: 'c', text: '(C) Evito falar sobre o assunto, deixo o tempo passar para ver se melhora sozinho — 1', points: 1 }
        ]
      },
      {
        id: 'b7_q2',
        module: 'block7',
        question: 'Está disposto(a) a pedir ajuda externa (como terapia), se necessário?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, acredito que ajuda externa pode ser muito útil — 3', points: 3 },
          { id: 'b', text: '(B) Talvez, se for a última alternativa — 2', points: 2 },
          { id: 'c', text: '(C) Não, prefiro resolver sempre apenas entre nós — 1', points: 1 }
        ]
      },
      {
        id: 'b7_q3',
        module: 'block7',
        question: 'Qual sua tolerância em relação à diferença de opiniões?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Alta: respeito e aceito opiniões diferentes sem problemas — 3', points: 3 },
          { id: 'b', text: '(B) Média: aceito algumas diferenças, mas em temas importantes prefiro alinhamento — 2', points: 2 },
          { id: 'c', text: '(C) Baixa: tenho dificuldade em lidar e gosto que minha opinião prevaleça — 1', points: 1 }
        ]
      }
    ]
  },
  // Módulo 4 - Expectativas de Futuro
  {
    id: 'module4',
    title: 'Expectativas de Futuro',
    alert: 'Quer filhos? Quer cachorro? Quer só paz? Aqui é a hora de alinhar as expectativas. Se cada um dirigir para um lado, não tem relacionamento que aguente.',
    questions: [
      {
        id: 'future_children',
        module: 'module4',
        question: 'Se ainda não temos filhos, queremos ter filhos? Quantos?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, queremos ter mais de um — 3', points: 3 },
          { id: 'b', text: '(B) Sim, mas apenas um — 2', points: 2 },
          { id: 'c', text: '(C) Não temos intenção de ter filhos — 1', points: 1 },
          { id: 'd', text: '(D) Não decidi ainda se quero ou não ter filhos, ou se pretendo adotar — 2', points: 2 }
        ]
      },
      {
        id: 'future_housing',
        module: 'module4',
        question: 'Onde pretendem morar (cidade/aluguel/compra)?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Comprar casa própria no futuro — 3', points: 3 },
          { id: 'b', text: '(B) Morar de aluguel por enquanto — 2', points: 2 },
          { id: 'c', text: '(C) Ainda não decidimos/abertos a possibilidades — 1', points: 1 }
        ]
      }
    ]
  },
  // Módulo 5 - Família & Amigos
  {
    id: 'module5',
    title: 'Família & Amigos',
    alert: 'Família e amigos são presentes, mas podem virar invasores de privacidade se vocês não colocarem limites.',
    questions: [
      {
        id: 'family_role',
        module: 'module5',
        question: 'Qual o papel dos pais na sua vida hoje?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Referência e presença ativa nas decisões, compartilhamos tudo com eles — 1', points: 1 },
          { id: 'b', text: '(B) Apoio e conselho, mas sem interferência direta — 3', points: 3 },
          { id: 'c', text: '(C) Relação mais distante/independente — 2', points: 2 }
        ]
      },
      {
        id: 'family_visits',
        module: 'module5',
        question: 'Com que frequência esperam visitar familiares?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Muitas vezes na semana — 1', points: 1 },
          { id: 'b', text: '(B) Algumas vezes ao mês — 2', points: 2 },
          { id: 'c', text: '(C) Apenas em datas especiais/feriados — 3', points: 3 }
        ]
      },
      {
        id: 'family_above_partner',
        module: 'module5',
        question: 'Estão dispostos a colocar o cônjuge (quando efetivamente casados) acima da família de origem?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, sempre — 3', points: 3 },
          { id: 'b', text: '(B) Sim, mas pode ser difícil em alguns momentos — 2', points: 2 },
          { id: 'c', text: '(C) Não, a família de origem vem primeiro — 1', points: 1 }
        ]
      },
      {
        id: 'friends_involvement',
        module: 'module5',
        question: 'Até onde os amigos devem se envolver no relacionamento?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Podem aconselhar e apoiar quando pedirmos — 3', points: 3 },
          { id: 'b', text: '(B) Apenas em situações sociais, sem interferência nas decisões — 2', points: 2 },
          { id: 'c', text: '(C) Não devem se envolver de forma alguma, devemos evitar expor nosso relacionamento — 1', points: 1 }
        ]
      }
    ]
  },
  // Módulo 6 - Para Noivos (Regime de Bens, Festa, Casamento e Lua de Mel)
  {
    id: 'module6',
    title: 'Para Noivos',
    alert: 'Casamento não se resume à festa, mas confessa: dá briga até no sabor do bem-casado. Bora ser realistas antes que o cartão de crédito chore!',
    questions: [
      {
        id: 'wedding_regime',
        module: 'module6',
        question: 'Já decidiram sobre regime de bens?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Comunhão parcial de bens — 4', points: 4 },
          { id: 'b', text: '(B) Separação total de bens — 3', points: 3 },
          { id: 'c', text: '(C) Não decidimos ainda, mas quero estudar a respeito — 2', points: 2 },
          { id: 'd', text: '(D) Não acho isso relevante — 1', points: 1 },
          { id: 'e', text: '(E) Pretendemos morar juntos antes e depois pensar nisso — 2', points: 2 }
        ]
      },
      {
        id: 'wedding_party',
        module: 'module6',
        question: 'Festa grande, pequena ou viagem?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Festa grande com muitos convidados — 2', points: 2 },
          { id: 'b', text: '(B) Celebração íntima/festa pequena — 3', points: 3 },
          { id: 'c', text: '(C) Viagem no lugar da festa — 1', points: 1 }
        ]
      },
      {
        id: 'wedding_payment',
        module: 'module6',
        question: 'Quem paga a celebração?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Nós dois juntos (recursos próprios) — 3', points: 3 },
          { id: 'b', text: '(B) Pais e família ajudam — 2', points: 2 },
          { id: 'c', text: '(C) Apenas um dos dois arca com a maioria dos custos — 1', points: 1 }
        ]
      },
      {
        id: 'wedding_debt',
        module: 'module6',
        question: 'Estão dispostos a cortar gastos para evitar dívidas do casamento?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, melhor economizar do que começar endividado — 3', points: 3 },
          { id: 'b', text: '(B) Sim, mas mantendo alguns itens essenciais — 2', points: 2 },
          { id: 'c', text: '(C) Não, queremos realizar todos os desejos, mesmo que custe mais — 1', points: 1 }
        ]
      },
      {
        id: 'honeymoon',
        module: 'module6',
        question: 'A lua de mel é algo indispensável para você?',
        type: 'single',
        options: [
          { id: 'a', text: '(A) Sim, não abro mão de viver esse momento especial — 3', points: 3 },
          { id: 'b', text: '(B) Gostaria, mas posso abrir mão se não for possível — 2', points: 2 },
          { id: 'c', text: '(C) Não considero tão importante — 1', points: 1 }
        ]
      }
    ]
  },
  // Módulo 7 - Exercício Final (respostas livres - não pontua)
  {
    id: 'module7',
    title: 'Exercício Final',
    alert: 'Agora é a hora do jogo da memória: quem conhece melhor quem? Preparem-se para rir, se surpreender e talvez até se emocionar.',
    questions: [
      {
        id: 'final_food',
        module: 'module7',
        question: 'Qual a comida favorita do(a) meu/minha companheiro(a)?',
        type: 'open'
      },
      {
        id: 'final_happy',
        module: 'module7',
        question: 'O que faz o outro feliz no cotidiano?',
        type: 'open'
      },
      {
        id: 'final_dream',
        module: 'module7',
        question: 'Qual o maior sonho dele(a)?',
        type: 'open'
      },
      {
        id: 'final_music',
        module: 'module7',
        question: 'Uma música preferida dele(a).',
        type: 'open'
      },
      {
        id: 'final_movie',
        module: 'module7',
        question: 'Qual filme ou série preferida dele(a)?',
        type: 'open'
      },
      {
        id: 'final_place',
        module: 'module7',
        question: 'Qual lugar no mundo ele(a) gostaria de conhecer?',
        type: 'open'
      },
      {
        id: 'final_habit',
        module: 'module7',
        question: 'Qual hábito ou mania engraçada que ele(a) tem?',
        type: 'open'
      },
      {
        id: 'final_gift',
        module: 'module7',
        question: 'Qual presente simples sempre o(a) deixa feliz?',
        type: 'open'
      },
      {
        id: 'final_admire',
        module: 'module7',
        question: 'Quem é a pessoa que ele(a) mais admira?',
        type: 'open'
      },
      {
        id: 'final_time',
        module: 'module7',
        question: 'Qual é o momento do dia que ele(a) mais gosta (manhã, tarde ou noite)?',
        type: 'open'
      }
    ]
  }
);
