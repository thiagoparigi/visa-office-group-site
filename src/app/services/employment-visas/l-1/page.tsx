import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function L1Page() {
  return (
    <VisaDetailLayout
      titleEN="L-1 Visa"
      titlePT="Visto L-1"
      subtitleEN="Intracompany transfer for managers, executives, and specialized knowledge workers"
      subtitlePT="Transferência interna para gerentes, executivos e trabalhadores com conhecimento especializado"
      whoIsItFor={{
        titleEN: "Who Is the L-1 Visa For?",
        titlePT: "Para Quem É o Visto L-1?",
        contentEN: [
          "The L-1 visa allows multinational companies to transfer managers and executives (L-1A) or employees with specialized knowledge (L-1B) from a foreign office to a U.S. office.",
          "You must have worked for the company abroad for at least one continuous year within the past three years. L-1A visa holders may be eligible for EB-1C green cards. The visa is initially granted for up to 3 years with extensions available."
        ],
        contentPT: [
          "O visto L-1 permite que empresas multinacionais transfiram gerentes e executivos (L-1A) ou funcionários com conhecimento especializado (L-1B) de um escritório estrangeiro para um escritório nos EUA.",
          "Você deve ter trabalhado para a empresa no exterior por pelo menos um ano contínuo nos últimos três anos. Os portadores de visto L-1A podem ser elegíveis para green cards EB-1C. O visto é inicialmente concedido por até 3 anos com extensões disponíveis."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-129 with L supplement",
          "Prepare detailed petition letter",
          "Document qualifying relationship between entities",
          "Organize evidence of employment abroad",
          "Compile managerial/executive or specialized knowledge evidence",
          "Prepare organizational charts and job descriptions",
          "Document company operations and financials",
          "Create comprehensive evidence package",
          "Final review and submission"
        ],
        contentPT: [
          "Preenchimento completo do Formulário I-129 com suplemento L",
          "Preparação de carta de petição detalhada",
          "Documentação de relacionamento qualificado entre entidades",
          "Organização de evidências de emprego no exterior",
          "Compilação de evidências gerenciais/executivas ou de conhecimento especializado",
          "Preparação de organogramas e descrições de cargos",
          "Documentação de operações e finanças da empresa",
          "Criação de pacote de evidências abrangente",
          "Revisão final e envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Evidence of qualifying relationship (parent, subsidiary, affiliate, branch)",
          "Company organizational charts",
          "Job descriptions (foreign and U.S. positions)",
          "Employment verification letters",
          "Evidence of one year employment abroad",
          "Company financial documents",
          "Business licenses and registrations",
          "For L-1A: evidence of managerial/executive duties",
          "For L-1B: evidence of specialized knowledge",
          "Evidence of U.S. office operations or establishment",
          "Lease agreements or office documentation"
        ],
        contentPT: [
          "Evidências de relacionamento qualificado (matriz, subsidiária, afiliada, filial)",
          "Organogramas da empresa",
          "Descrições de cargos (posições estrangeiras e dos EUA)",
          "Cartas de verificação de emprego",
          "Evidências de um ano de emprego no exterior",
          "Documentos financeiros da empresa",
          "Licenças e registros comerciais",
          "Para L-1A: evidências de deveres gerenciais/executivos",
          "Para L-1B: evidências de conhecimento especializado",
          "Evidências de operações ou estabelecimento do escritório dos EUA",
          "Contratos de aluguel ou documentação de escritório"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Verify qualifying relationship between entities",
          "Confirm one year employment requirement",
          "Document collection and evidence gathering",
          "Petition letter and Form I-129 preparation",
          "Evidence package compilation",
          "Submission to USCIS",
          "Premium processing available (15-day response)",
          "If approved and abroad, visa interview at consulate",
          "Enter U.S. and begin work"
        ],
        contentPT: [
          "Verificar relacionamento qualificado entre entidades",
          "Confirmar requisito de um ano de emprego",
          "Coleta de documentos e reunião de evidências",
          "Preparação de carta de petição e Formulário I-129",
          "Compilação de pacote de evidências",
          "Envio ao USCIS",
          "Processamento premium disponível (resposta em 15 dias)",
          "Se aprovado e no exterior, entrevista de visto no consulado",
          "Entrar nos EUA e começar a trabalhar"
        ]
      }}
      faqs={[
        {
          questionEN: "What's the difference between L-1A and L-1B?",
          questionPT: "Qual é a diferença entre L-1A e L-1B?",
          answerEN: "L-1A is for managers and executives with a maximum stay of 7 years. L-1B is for specialized knowledge employees with a maximum stay of 5 years. L-1A holders may qualify for EB-1C green cards.",
          answerPT: "L-1A é para gerentes e executivos com permanência máxima de 7 anos. L-1B é para funcionários com conhecimento especializado com permanência máxima de 5 anos. Os portadores de L-1A podem se qualificar para green cards EB-1C."
        },
        {
          questionEN: "What is specialized knowledge?",
          questionPT: "O que é conhecimento especializado?",
          answerEN: "Specialized knowledge is special knowledge of the company's product, service, research, equipment, techniques, management, or procedures that is not commonly held and is advanced or sophisticated.",
          answerPT: "Conhecimento especializado é conhecimento especial do produto, serviço, pesquisa, equipamento, técnicas, gestão ou procedimentos da empresa que não é comumente detido e é avançado ou sofisticado."
        },
        {
          questionEN: "Can I use L-1 to open a new U.S. office?",
          questionPT: "Posso usar L-1 para abrir um novo escritório nos EUA?",
          answerEN: "Yes, the L-1 new office petition allows you to open a new U.S. office. The initial period is 1 year, after which you must show the office is operational with sufficient space, staff, and financial capacity.",
          answerPT: "Sim, a petição de novo escritório L-1 permite abrir um novo escritório nos EUA. O período inicial é de 1 ano, após o qual você deve mostrar que o escritório está operacional com espaço, pessoal e capacidade financeira suficientes."
        },
        {
          questionEN: "Can my family come with me?",
          questionPT: "Minha família pode vir comigo?",
          answerEN: "Yes, your spouse and unmarried children under 21 can apply for L-2 dependent visas. Your spouse can also apply for work authorization.",
          answerPT: "Sim, seu cônjuge e filhos solteiros menores de 21 anos podem solicitar vistos dependentes L-2. Seu cônjuge também pode solicitar autorização de trabalho."
        },
        {
          questionEN: "Can L-1 lead to a green card?",
          questionPT: "L-1 pode levar a um green card?",
          answerEN: "Yes, L-1A managers and executives may qualify for EB-1C green cards without labor certification. L-1B holders may pursue EB-2 or EB-3 categories with labor certification.",
          answerPT: "Sim, gerentes e executivos L-1A podem se qualificar para green cards EB-1C sem certificação trabalhista. Os portadores de L-1B podem buscar categorias EB-2 ou EB-3 com certificação trabalhista."
        },
        {
          questionEN: "What if I worked remotely for the foreign company?",
          questionPT: "E se eu trabalhei remotamente para a empresa estrangeira?",
          answerEN: "Remote work can count toward the one-year requirement if you were employed by the foreign entity and physically located outside the U.S. However, you must provide clear documentation of the employment relationship.",
          answerPT: "Trabalho remoto pode contar para o requisito de um ano se você foi empregado pela entidade estrangeira e fisicamente localizado fora dos EUA. No entanto, você deve fornecer documentação clara do relacionamento de emprego."
        }
      ]}
      backLink="/services/employment-visas"
      backLabelEN="Back to Employment Visas"
      backLabelPT="Voltar para Vistos de Trabalho"
    />
  );
}
