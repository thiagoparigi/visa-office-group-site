import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function O1Page() {
  return (
    <VisaDetailLayout
      titleEN="O-1 Visa"
      titlePT="Visto O-1"
      subtitleEN="Nonimmigrant visa for individuals with extraordinary ability"
      subtitlePT="Visto de não-imigrante para indivíduos com habilidade extraordinária"
      whoIsItFor={{
        titleEN: "Who Is the O-1 Visa For?",
        titlePT: "Para Quem É o Visto O-1?",
        contentEN: [
          "The O-1 visa is for individuals with extraordinary ability in sciences, arts, education, business, athletics (O-1A), or extraordinary achievement in motion picture or television industry (O-1B).",
          "This is a nonimmigrant visa that allows you to work in the U.S. for up to 3 years initially, with unlimited extensions. It's often used as a stepping stone to EB-1 green card or as a flexible work authorization option for high achievers."
        ],
        contentPT: [
          "O visto O-1 é para indivíduos com habilidade extraordinária em ciências, artes, educação, negócios, atletismo (O-1A), ou conquista extraordinária na indústria cinematográfica ou televisiva (O-1B).",
          "Este é um visto de não-imigrante que permite trabalhar nos EUA por até 3 anos inicialmente, com extensões ilimitadas. É frequentemente usado como um trampolim para o green card EB-1 ou como uma opção flexível de autorização de trabalho para pessoas de alto desempenho."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-129 (Petition for Nonimmigrant Worker)",
          "Prepare detailed petition letter",
          "Organize evidence of extraordinary ability",
          "Compile awards, recognition, and achievements",
          "Gather expert recommendation letters",
          "Document publications, media coverage, and impact",
          "Obtain advisory opinion (if required)",
          "Create comprehensive evidence package",
          "Final review and submission"
        ],
        contentPT: [
          "Preenchimento completo do Formulário I-129 (Petição de Trabalhador Não-Imigrante)",
          "Preparação de carta de petição detalhada",
          "Organização de evidências de habilidade extraordinária",
          "Compilação de prêmios, reconhecimento e conquistas",
          "Reunião de cartas de recomendação de especialistas",
          "Documentação de publicações, cobertura de mídia e impacto",
          "Obtenção de parecer consultivo (se necessário)",
          "Criação de pacote de evidências abrangente",
          "Revisão final e envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Awards and prizes for excellence",
          "Membership in associations requiring outstanding achievement",
          "Published material about you in major media",
          "Evidence of judging the work of others",
          "Original contributions of major significance",
          "Scholarly articles or creative works",
          "Evidence of high salary or remuneration",
          "Exhibitions, performances, or presentations",
          "Leading or critical role in organizations",
          "Expert recommendation letters",
          "Advisory opinion from peer group or labor organization",
          "Contract or itinerary in the U.S."
        ],
        contentPT: [
          "Prêmios e prêmios de excelência",
          "Participação em associações que exigem conquista notável",
          "Material publicado sobre você em grandes mídias",
          "Evidências de julgar o trabalho de outros",
          "Contribuições originais de grande significância",
          "Artigos acadêmicos ou obras criativas",
          "Evidências de salário ou remuneração elevada",
          "Exposições, performances ou apresentações",
          "Papel de liderança ou crítico em organizações",
          "Cartas de recomendação de especialistas",
          "Parecer consultivo de grupo de pares ou organização trabalhista",
          "Contrato ou itinerário nos EUA"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Secure U.S. employer or agent sponsorship",
          "Document collection and evidence gathering",
          "Obtain advisory opinion (if required)",
          "Petition letter and Form I-129 preparation",
          "Evidence package compilation",
          "Submission to USCIS",
          "Premium processing available (15-day response)",
          "If approved and abroad, visa interview at consulate",
          "Enter U.S. and begin work"
        ],
        contentPT: [
          "Garantir patrocínio de empregador ou agente dos EUA",
          "Coleta de documentos e reunião de evidências",
          "Obter parecer consultivo (se necessário)",
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
          questionEN: "What's the difference between O-1A and O-1B?",
          questionPT: "Qual é a diferença entre O-1A e O-1B?",
          answerEN: "O-1A is for extraordinary ability in sciences, education, business, or athletics. O-1B is for extraordinary achievement in the arts or motion picture/television industry. The evidence standards differ slightly.",
          answerPT: "O-1A é para habilidade extraordinária em ciências, educação, negócios ou atletismo. O-1B é para conquista extraordinária nas artes ou indústria cinematográfica/televisiva. Os padrões de evidência diferem ligeiramente."
        },
        {
          questionEN: "How long is the O-1 visa valid?",
          questionPT: "Por quanto tempo o visto O-1 é válido?",
          answerEN: "O-1 is initially granted for up to 3 years. Extensions can be granted in 1-year increments with no maximum limit, as long as you maintain extraordinary ability status.",
          answerPT: "O-1 é inicialmente concedido por até 3 anos. Extensões podem ser concedidas em incrementos de 1 ano sem limite máximo, desde que você mantenha o status de habilidade extraordinária."
        },
        {
          questionEN: "Can I self-petition for O-1?",
          questionPT: "Posso fazer auto-petição para O-1?",
          answerEN: "No, O-1 requires a U.S. employer or agent to sponsor you. However, you can work with an agent who represents multiple employers or engagements.",
          answerPT: "Não, O-1 requer que um empregador ou agente dos EUA o patrocine. No entanto, você pode trabalhar com um agente que representa vários empregadores ou engajamentos."
        },
        {
          questionEN: "Can my family come with me on O-1?",
          questionPT: "Minha família pode vir comigo no O-1?",
          answerEN: "Yes, your spouse and unmarried children under 21 can apply for O-3 dependent visas. They can study but cannot work in the U.S.",
          answerPT: "Sim, seu cônjuge e filhos solteiros menores de 21 anos podem solicitar vistos dependentes O-3. Eles podem estudar, mas não podem trabalhar nos EUA."
        },
        {
          questionEN: "Can O-1 lead to a green card?",
          questionPT: "O-1 pode levar a um green card?",
          answerEN: "Yes, many O-1 holders transition to EB-1A green cards since the evidence standards are similar. O-1 provides work authorization while you prepare your green card application.",
          answerPT: "Sim, muitos portadores de O-1 fazem transição para green cards EB-1A, já que os padrões de evidência são semelhantes. O-1 fornece autorização de trabalho enquanto você prepara sua solicitação de green card."
        },
        {
          questionEN: "Do I need an advisory opinion?",
          questionPT: "Preciso de um parecer consultivo?",
          answerEN: "For most O-1 petitions, an advisory opinion from a relevant peer group, labor organization, or expert in your field is required. Some fields have designated consulting organizations.",
          answerPT: "Para a maioria das petições O-1, um parecer consultivo de um grupo de pares relevante, organização trabalhista ou especialista em seu campo é necessário. Alguns campos têm organizações de consultoria designadas."
        }
      ]}
      backLink="/services/employment-visas"
      backLabelEN="Back to Employment Visas"
      backLabelPT="Voltar para Vistos de Trabalho"
    />
  );
}
