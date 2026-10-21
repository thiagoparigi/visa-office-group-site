import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function AsylumPage() {
  return (
    <VisaDetailLayout
      titleEN="Asylum"
      titlePT="Asilo"
      subtitleEN="Protection for those fleeing persecution"
      subtitlePT="Proteção para pessoas fugindo de perseguição"
      whoIsItFor={{
        titleEN: "Who Is Asylum For?",
        titlePT: "Para Quem É o Asilo?",
        contentEN: [
          "Asylum is available for individuals who are in the United States or at a port of entry and are unable or unwilling to return to their home country due to past persecution or a well-founded fear of future persecution.",
          "Persecution must be based on race, religion, nationality, membership in a particular social group, or political opinion. If granted asylum, you can live and work in the U.S. and apply for a green card after one year."
        ],
        contentPT: [
          "O asilo está disponível para indivíduos que estão nos Estados Unidos ou em um porto de entrada e não podem ou não querem retornar ao seu país de origem devido a perseguição passada ou medo bem fundamentado de perseguição futura.",
          "A perseguição deve ser baseada em raça, religião, nacionalidade, participação em um grupo social específico ou opinião política. Se for concedido asilo, você pode viver e trabalhar nos EUA e solicitar um green card após um ano."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-589 (Application for Asylum)",
          "Prepare detailed personal declaration",
          "Organize country condition evidence",
          "Compile persecution documentation",
          "Prepare supporting affidavits",
          "Gather expert opinions and reports",
          "Create comprehensive evidence package",
          "Interview preparation guidance",
          "Final review and submission"
        ],
        contentPT: [
          "Preenchimento completo do Formulário I-589 (Solicitação de Asilo)",
          "Preparação de declaração pessoal detalhada",
          "Organização de evidências sobre condições do país",
          "Compilação de documentação de perseguição",
          "Preparação de declarações juramentadas de apoio",
          "Reunião de opiniões e relatórios de especialistas",
          "Criação de pacote de evidências abrangente",
          "Orientação para preparação de entrevista",
          "Revisão final e envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Personal declaration describing persecution",
          "Country condition reports",
          "News articles and media reports",
          "Expert opinions and affidavits",
          "Police reports or government documents",
          "Medical records documenting harm",
          "Psychological evaluations",
          "Witness statements",
          "Proof of membership in targeted group",
          "Travel documents and identity documents",
          "Photos and other physical evidence"
        ],
        contentPT: [
          "Declaração pessoal descrevendo perseguição",
          "Relatórios sobre condições do país",
          "Artigos de notícias e relatórios de mídia",
          "Opiniões de especialistas e declarações juramentadas",
          "Relatórios policiais ou documentos governamentais",
          "Registros médicos documentando danos",
          "Avaliações psicológicas",
          "Declarações de testemunhas",
          "Prova de participação em grupo-alvo",
          "Documentos de viagem e documentos de identidade",
          "Fotos e outras evidências físicas"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Initial consultation and eligibility assessment",
          "Document collection and evidence gathering",
          "Personal declaration preparation",
          "Country condition research and documentation",
          "Form I-589 completion",
          "Evidence package compilation",
          "Application submission to USCIS or Immigration Court",
          "Biometrics appointment",
          "Interview preparation",
          "Asylum interview or court hearing",
          "Decision and follow-up"
        ],
        contentPT: [
          "Consulta inicial e avaliação de elegibilidade",
          "Coleta de documentos e reunião de evidências",
          "Preparação de declaração pessoal",
          "Pesquisa e documentação sobre condições do país",
          "Preenchimento do Formulário I-589",
          "Compilação de pacote de evidências",
          "Envio de solicitação ao USCIS ou Tribunal de Imigração",
          "Consulta para biometria",
          "Preparação para entrevista",
          "Entrevista de asilo ou audiência no tribunal",
          "Decisão e acompanhamento"
        ]
      }}
      faqs={[
        {
          questionEN: "What is the deadline to apply for asylum?",
          questionPT: "Qual é o prazo para solicitar asilo?",
          answerEN: "You must apply for asylum within one year of arriving in the United States, unless you can show changed circumstances or extraordinary circumstances that prevented timely filing.",
          answerPT: "Você deve solicitar asilo dentro de um ano após chegar aos Estados Unidos, a menos que possa mostrar circunstâncias alteradas ou circunstâncias extraordinárias que impediram a apresentação oportuna."
        },
        {
          questionEN: "Can I work while my asylum case is pending?",
          questionPT: "Posso trabalhar enquanto meu caso de asilo está pendente?",
          answerEN: "You can apply for work authorization 150 days after filing your asylum application (or 30 days after the deadline to file has passed). If granted, you can work while your case is pending.",
          answerPT: "Você pode solicitar autorização de trabalho 150 dias após apresentar sua solicitação de asilo (ou 30 dias após o prazo para apresentação ter passado). Se concedido, você pode trabalhar enquanto seu caso está pendente."
        },
        {
          questionEN: "Can my family members get asylum?",
          questionPT: "Meus familiares podem obter asilo?",
          answerEN: "Yes, you can include your spouse and unmarried children under 21 in your asylum application if they are in the U.S. If granted asylum, they will also receive asylum status.",
          answerPT: "Sim, você pode incluir seu cônjuge e filhos solteiros menores de 21 anos em sua solicitação de asilo se eles estiverem nos EUA. Se for concedido asilo, eles também receberão status de asilo."
        },
        {
          questionEN: "What happens if my asylum is denied?",
          questionPT: "O que acontece se meu asilo for negado?",
          answerEN: "If your asylum is denied by an asylum officer, your case will be referred to immigration court where you can present your case before a judge. If denied by a judge, you may be able to appeal to the Board of Immigration Appeals.",
          answerPT: "Se seu asilo for negado por um oficial de asilo, seu caso será encaminhado ao tribunal de imigração onde você pode apresentar seu caso perante um juiz. Se negado por um juiz, você pode conseguir apelar ao Conselho de Apelações de Imigração."
        },
        {
          questionEN: "Can I travel outside the U.S. with asylum?",
          questionPT: "Posso viajar para fora dos EUA com asilo?",
          answerEN: "Generally, asylees should not travel to their home country as this may be considered abandonment of asylum. You can apply for a Refugee Travel Document to travel to other countries.",
          answerPT: "Geralmente, asilados não devem viajar para seu país de origem, pois isso pode ser considerado abandono de asilo. Você pode solicitar um Documento de Viagem de Refugiado para viajar para outros países."
        },
        {
          questionEN: "When can I apply for a green card?",
          questionPT: "Quando posso solicitar um green card?",
          answerEN: "If granted asylum, you must wait one year from the date asylum was granted before applying for adjustment of status to permanent resident (green card).",
          answerPT: "Se for concedido asilo, você deve esperar um ano a partir da data em que o asilo foi concedido antes de solicitar ajuste de status para residente permanente (green card)."
        }
      ]}
      backLink="/services/humanitarian-visas"
      backLabelEN="Back to Humanitarian Visas"
      backLabelPT="Voltar para Vistos Humanitários"
    />
  );
}
