import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function B1B2Page() {
  return (
    <VisaDetailLayout
      titleEN="B1/B2 Tourist Visa"
      titlePT="Visto de Turista B1/B2"
      subtitleEN="Complete assistance for business and tourist visa applications"
      subtitlePT="Assistência completa para solicitação de visto de negócios e turismo"
      whoIsItFor={{
        titleEN: "Who Needs a B1/B2 Visa?",
        titlePT: "Quem Precisa de um Visto B1/B2?",
        contentEN: [
          "Brazilian citizens traveling to the United States for tourism, vacation, visiting family or friends (B2), or business purposes like meetings, conferences, or negotiations (B1) need a B1/B2 visa.",
          "This is the most common visa type. While approval rates for Brazilians are generally high, proper preparation is essential. We help you present a strong case that demonstrates your intent to return to Brazil after your visit."
        ],
        contentPT: [
          "Cidadãos brasileiros viajando para os Estados Unidos para turismo, férias, visitar família ou amigos (B2), ou propósitos de negócios como reuniões, conferências ou negociações (B1) precisam de um visto B1/B2.",
          "Este é o tipo de visto mais comum. Embora as taxas de aprovação para brasileiros sejam geralmente altas, a preparação adequada é essencial. Ajudamos você a apresentar um caso forte que demonstra sua intenção de retornar ao Brasil após sua visita."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Evaluate your eligibility and case strength",
          "Complete DS-160 form",
          "Guide through fee payment and scheduling",
          "Review and organize supporting documents",
          "Prepare travel itinerary",
          "Compile financial evidence",
          "Document ties to Brazil",
          "Conduct interview preparation",
          "Provide post-interview guidance"
        ],
        contentPT: [
          "Avaliar sua elegibilidade e força do caso",
          "Preencher formulário DS-160",
          "Orientar através do pagamento de taxa e agendamento",
          "Revisar e organizar documentos de apoio",
          "Preparar itinerário de viagem",
          "Compilar evidências financeiras",
          "Documentar laços com o Brasil",
          "Conduzir preparação para entrevista",
          "Fornecer orientação pós-entrevista"
        ]
      }}
      documents={{
        titleEN: "Documents & Evidence",
        titlePT: "Documentos e Evidências",
        contentEN: [
          "Passport valid for at least 6 months",
          "Previous U.S. visas (if any)",
          "Travel itinerary or plans",
          "Round-trip flight reservations (not required but helpful)",
          "Hotel reservations or invitation letter",
          "Employment letter and pay stubs",
          "Bank statements (3-6 months)",
          "Property documents (home ownership)",
          "Vehicle registration",
          "Family documents (marriage, birth certificates)",
          "Business registration (if self-employed)",
          "Tax returns (Imposto de Renda)"
        ],
        contentPT: [
          "Passaporte válido por pelo menos 6 meses",
          "Vistos anteriores dos EUA (se houver)",
          "Itinerário de viagem ou planos",
          "Reservas de voo de ida e volta (não obrigatório mas útil)",
          "Reservas de hotel ou carta de convite",
          "Carta de emprego e contracheques",
          "Extratos bancários (3-6 meses)",
          "Documentos de propriedade (propriedade de casa)",
          "Registro de veículo",
          "Documentos familiares (certidões de casamento, nascimento)",
          "Registro comercial (se autônomo)",
          "Declarações de impostos (Imposto de Renda)"
        ]
      }}
      process={{
        titleEN: "Application Process",
        titlePT: "Processo de Solicitação",
        contentEN: [
          "Initial consultation and eligibility assessment",
          "Complete DS-160 online application",
          "Pay MRV visa fee",
          "Schedule interview appointment",
          "Gather and organize supporting documents",
          "Prepare for interview questions",
          "Attend consular interview",
          "If approved, visa processed in 5-10 business days",
          "Receive passport with visa by mail or pickup"
        ],
        contentPT: [
          "Consulta inicial e avaliação de elegibilidade",
          "Completar solicitação online DS-160",
          "Pagar taxa de visto MRV",
          "Agendar consulta de entrevista",
          "Reunir e organizar documentos de apoio",
          "Preparar para perguntas da entrevista",
          "Comparecer à entrevista consular",
          "Se aprovado, visto processado em 5-10 dias úteis",
          "Receber passaporte com visto pelo correio ou retirada"
        ]
      }}
      faqs={[
        {
          questionEN: "How long is a B1/B2 visa valid?",
          questionPT: "Por quanto tempo um visto B1/B2 é válido?",
          answerEN: "B1/B2 visas for Brazilians are typically issued for 10 years with multiple entries. However, each entry allows a stay of up to 6 months, as determined by the immigration officer at the port of entry.",
          answerPT: "Vistos B1/B2 para brasileiros geralmente são emitidos por 10 anos com múltiplas entradas. No entanto, cada entrada permite uma estadia de até 6 meses, conforme determinado pelo oficial de imigração no porto de entrada."
        },
        {
          questionEN: "What are the main reasons for B1/B2 denial?",
          questionPT: "Quais são os principais motivos para negação de B1/B2?",
          answerEN: "Common reasons include: insufficient ties to Brazil, inability to demonstrate intent to return, inadequate financial resources, or inconsistencies in the application or interview answers.",
          answerPT: "Motivos comuns incluem: laços insuficientes com o Brasil, incapacidade de demonstrar intenção de retornar, recursos financeiros inadequados ou inconsistências na solicitação ou respostas da entrevista."
        },
        {
          questionEN: "Can I work with a B1/B2 visa?",
          questionPT: "Posso trabalhar com um visto B1/B2?",
          answerEN: "No, B1/B2 visas do not allow employment in the U.S. B1 allows business activities like meetings and conferences, but not actual employment or receiving U.S. wages.",
          answerPT: "Não, vistos B1/B2 não permitem emprego nos EUA. B1 permite atividades comerciais como reuniões e conferências, mas não emprego real ou recebimento de salários dos EUA."
        },
        {
          questionEN: "How much money should I have in my bank account?",
          questionPT: "Quanto dinheiro devo ter em minha conta bancária?",
          answerEN: "There's no specific minimum, but you should demonstrate ability to cover your trip expenses. A consistent savings history and stable income are more important than a large one-time deposit.",
          answerPT: "Não há um mínimo específico, mas você deve demonstrar capacidade de cobrir suas despesas de viagem. Um histórico de poupança consistente e renda estável são mais importantes do que um grande depósito único."
        },
        {
          questionEN: "Should I buy flight tickets before my interview?",
          questionPT: "Devo comprar passagens de avião antes da minha entrevista?",
          answerEN: "It's not recommended to buy non-refundable tickets before visa approval. Instead, show flight reservations or itineraries that demonstrate your travel plans without financial risk.",
          answerPT: "Não é recomendado comprar passagens não reembolsáveis antes da aprovação do visto. Em vez disso, mostre reservas de voo ou itinerários que demonstrem seus planos de viagem sem risco financeiro."
        },
        {
          questionEN: "Can I apply again if denied?",
          questionPT: "Posso solicitar novamente se negado?",
          answerEN: "Yes, you can reapply at any time. Address the reasons for denial in your new application, provide additional evidence of ties to Brazil, and demonstrate changed circumstances if applicable.",
          answerPT: "Sim, você pode solicitar novamente a qualquer momento. Aborde os motivos da negação em sua nova solicitação, forneça evidências adicionais de laços com o Brasil e demonstre circunstâncias alteradas, se aplicável."
        }
      ]}
      backLink="/services/brazil"
      backLabelEN="Back to Brazil Services"
      backLabelPT="Voltar para Serviços do Brasil"
    />
  );
}
