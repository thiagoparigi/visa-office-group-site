import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function InterviewPreparationPage() {
  return (
    <VisaDetailLayout
      titleEN="Interview Preparation"
      titlePT="Preparação para Entrevista"
      subtitleEN="Comprehensive preparation for your consular interview"
      subtitlePT="Preparação completa para sua entrevista consular"
      whoIsItFor={{
        titleEN: "Who Benefits from Interview Preparation?",
        titlePT: "Quem Se Beneficia da Preparação para Entrevista?",
        contentEN: [
          "Everyone applying for a U.S. visa must attend a consular interview. The interview is brief but crucial - consular officers make visa decisions based on your documents, answers, and overall presentation.",
          "Proper preparation dramatically increases your chances of approval. We help you understand what to expect, how to answer questions confidently, what documents to bring, and how to present your case effectively."
        ],
        contentPT: [
          "Todos que solicitam um visto americano devem comparecer a uma entrevista consular. A entrevista é breve, mas crucial - os oficiais consulares tomam decisões de visto com base em seus documentos, respostas e apresentação geral.",
          "Preparação adequada aumenta dramaticamente suas chances de aprovação. Ajudamos você a entender o que esperar, como responder perguntas com confiança, quais documentos trazer e como apresentar seu caso efetivamente."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Review your case and documents",
          "Identify potential concerns or red flags",
          "Practice common interview questions",
          "Teach effective answering techniques",
          "Organize your document package",
          "Provide consulate-specific tips",
          "Conduct mock interviews",
          "Build your confidence",
          "Provide day-of-interview guidance"
        ],
        contentPT: [
          "Revisar seu caso e documentos",
          "Identificar preocupações ou sinais de alerta potenciais",
          "Praticar perguntas comuns de entrevista",
          "Ensinar técnicas eficazes de resposta",
          "Organizar seu pacote de documentos",
          "Fornecer dicas específicas do consulado",
          "Conduzir entrevistas simuladas",
          "Construir sua confiança",
          "Fornecer orientação para o dia da entrevista"
        ]
      }}
      documents={{
        titleEN: "Documents to Bring",
        titlePT: "Documentos para Trazer",
        contentEN: [
          "Passport (valid for at least 6 months)",
          "DS-160 confirmation page with barcode",
          "Interview appointment letter",
          "MRV fee receipt",
          "Photo (if not uploaded with DS-160)",
          "Employment letter and pay stubs",
          "Bank statements (3-6 months)",
          "Property documents",
          "Travel itinerary or plans",
          "Previous U.S. visas",
          "Family documents (marriage/birth certificates)",
          "Supporting letters (if applicable)"
        ],
        contentPT: [
          "Passaporte (válido por pelo menos 6 meses)",
          "Página de confirmação do DS-160 com código de barras",
          "Carta de consulta de entrevista",
          "Recibo de taxa MRV",
          "Foto (se não carregada com DS-160)",
          "Carta de emprego e contracheques",
          "Extratos bancários (3-6 meses)",
          "Documentos de propriedade",
          "Itinerário de viagem ou planos",
          "Vistos anteriores dos EUA",
          "Documentos familiares (certidões de casamento/nascimento)",
          "Cartas de apoio (se aplicável)"
        ]
      }}
      process={{
        titleEN: "Preparation Process",
        titlePT: "Processo de Preparação",
        contentEN: [
          "Initial consultation to review your case",
          "Document review and organization",
          "Identify your visa eligibility and ties to Brazil",
          "Practice answering key questions",
          "Address potential concerns",
          "Conduct mock interview sessions",
          "Refine your answers",
          "Final document checklist",
          "Day-of-interview tips and guidance"
        ],
        contentPT: [
          "Consulta inicial para revisar seu caso",
          "Revisão e organização de documentos",
          "Identificar sua elegibilidade de visto e laços com o Brasil",
          "Praticar responder perguntas-chave",
          "Abordar preocupações potenciais",
          "Conduzir sessões de entrevista simulada",
          "Refinar suas respostas",
          "Checklist final de documentos",
          "Dicas e orientação para o dia da entrevista"
        ]
      }}
      faqs={[
        {
          questionEN: "What questions will I be asked?",
          questionPT: "Quais perguntas me farão?",
          answerEN: "Common questions include: purpose of trip, travel plans, employment, financial situation, family in the U.S., previous travel, and ties to Brazil. Officers want to ensure you'll return to Brazil after your visit.",
          answerPT: "Perguntas comuns incluem: propósito da viagem, planos de viagem, emprego, situação financeira, família nos EUA, viagens anteriores e laços com o Brasil. Os oficiais querem garantir que você retornará ao Brasil após sua visita."
        },
        {
          questionEN: "How long does the interview last?",
          questionPT: "Quanto tempo dura a entrevista?",
          answerEN: "Interviews typically last 2-5 minutes. Be prepared to answer quickly and clearly. The brevity is normal - don't be alarmed by short interviews.",
          answerPT: "As entrevistas geralmente duram 2-5 minutos. Esteja preparado para responder rápida e claramente. A brevidade é normal - não se alarme com entrevistas curtas."
        },
        {
          questionEN: "Should I bring extra documents?",
          questionPT: "Devo trazer documentos extras?",
          answerEN: "Yes, bring documents that prove ties to Brazil (employment, property, family) and financial ability. Officers may not ask for them, but having them available shows preparation and strengthens your case.",
          answerPT: "Sim, traga documentos que provem laços com o Brasil (emprego, propriedade, família) e capacidade financeira. Os oficiais podem não pedi-los, mas tê-los disponíveis mostra preparação e fortalece seu caso."
        },
        {
          questionEN: "What if I don't speak English well?",
          questionPT: "E se eu não falo inglês bem?",
          answerEN: "At Brazilian consulates, officers typically speak Portuguese and conduct interviews in Portuguese. However, learning a few key phrases in English can demonstrate willingness to communicate.",
          answerPT: "Nos consulados brasileiros, os oficiais geralmente falam português e conduzem entrevistas em português. No entanto, aprender algumas frases-chave em inglês pode demonstrar disposição para se comunicar."
        },
        {
          questionEN: "What should I wear?",
          questionPT: "O que devo vestir?",
          answerEN: "Dress professionally and conservatively - business casual or better. First impressions matter. Avoid casual wear like shorts, flip-flops, or overly revealing clothing.",
          answerPT: "Vista-se profissionalmente e conservadoramente - casual de negócios ou melhor. Primeiras impressões importam. Evite roupas casuais como shorts, chinelos ou roupas excessivamente reveladoras."
        },
        {
          questionEN: "What if my visa is denied?",
          questionPT: "E se meu visto for negado?",
          answerEN: "If denied, the officer will give you a written explanation. You can reapply anytime with new evidence addressing the concerns. Most denials are due to insufficient evidence of ties to Brazil or intent to return.",
          answerPT: "Se negado, o oficial lhe dará uma explicação por escrito. Você pode solicitar novamente a qualquer momento com novas evidências abordando as preocupações. A maioria das negações é devido a evidências insuficientes de laços com o Brasil ou intenção de retornar."
        }
      ]}
      backLink="/services/brazil"
      backLabelEN="Back to Brazil Services"
      backLabelPT="Voltar para Serviços do Brasil"
    />
  );
}
