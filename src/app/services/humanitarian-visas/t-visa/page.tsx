import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function TVisaPage() {
  return (
    <VisaDetailLayout
      titleEN="T Visa"
      titlePT="Visto T"
      subtitleEN="Protection and path to permanent residency for victims of human trafficking"
      subtitlePT="Proteção e caminho para residência permanente para vítimas de tráfico humano"
      whoIsItFor={{
        titleEN: "Who Is the T Visa For?",
        titlePT: "Para Quem É o Visto T?",
        contentEN: [
          "The T visa is a humanitarian visa for victims of severe forms of human trafficking who are currently in the United States, American Samoa, the Commonwealth of the Northern Mariana Islands, or at a U.S. port of entry.",
          "This visa provides protection and allows victims to remain in the country to assist law enforcement in investigating and prosecuting trafficking crimes. After 3 years, T visa holders may be eligible to apply for permanent residency (green card)."
        ],
        contentPT: [
          "O visto T é um visto humanitário para vítimas de formas graves de tráfico humano que estão atualmente nos Estados Unidos, Samoa Americana, Commonwealth das Ilhas Marianas do Norte ou em um porto de entrada dos EUA.",
          "Este visto oferece proteção e permite que as vítimas permaneçam no país para auxiliar as autoridades na investigação e processo de crimes de tráfico. Após 3 anos, os portadores do visto T podem ser elegíveis para solicitar residência permanente (green card)."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-914 (Application for T Nonimmigrant Status)",
          "Prepare detailed personal declaration",
          "Organize evidence of trafficking",
          "Compile law enforcement cooperation documentation",
          "Prepare supporting affidavits and declarations",
          "Create comprehensive evidence package",
          "Review and quality check entire application",
          "Provide submission guidance"
        ],
        contentPT: [
          "Preenchimento completo do Formulário I-914 (Solicitação de Status T de Não-Imigrante)",
          "Preparação de declaração pessoal detalhada",
          "Organização de evidências de tráfico",
          "Compilação de documentação de cooperação com autoridades",
          "Preparação de declarações juramentadas e declarações de apoio",
          "Criação de pacote de evidências abrangente",
          "Revisão e verificação de qualidade de toda a solicitação",
          "Orientação para envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Law enforcement cooperation letter or declaration",
          "Personal declaration describing trafficking experience",
          "Police reports or incident reports",
          "Medical records documenting injuries or trauma",
          "Psychological evaluations",
          "Evidence of physical restraint or confinement",
          "Communications with traffickers",
          "Witness statements and affidavits",
          "Identity documents (passport, birth certificate)",
          "Evidence of extreme hardship upon removal"
        ],
        contentPT: [
          "Carta ou declaração de cooperação com autoridades",
          "Declaração pessoal descrevendo experiência de tráfico",
          "Relatórios policiais ou de incidentes",
          "Registros médicos documentando lesões ou trauma",
          "Avaliações psicológicas",
          "Evidências de restrição física ou confinamento",
          "Comunicações com traficantes",
          "Declarações de testemunhas e declarações juramentadas",
          "Documentos de identidade (passaporte, certidão de nascimento)",
          "Evidências de dificuldades extremas em caso de remoção"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Initial consultation and case evaluation",
          "Document collection and organization",
          "Preparation of personal declaration",
          "Compilation of evidence package",
          "Form I-914 completion",
          "Quality review and final preparation",
          "Application submission to USCIS",
          "Monitor case status and respond to requests"
        ],
        contentPT: [
          "Consulta inicial e avaliação do caso",
          "Coleta e organização de documentos",
          "Preparação de declaração pessoal",
          "Compilação de pacote de evidências",
          "Preenchimento do Formulário I-914",
          "Revisão de qualidade e preparação final",
          "Envio da solicitação ao USCIS",
          "Monitorar status do caso e responder a solicitações"
        ]
      }}
      faqs={[
        {
          questionEN: "How long is the T visa valid?",
          questionPT: "Por quanto tempo o visto T é válido?",
          answerEN: "The T visa is initially granted for up to 4 years. After 3 years of continuous physical presence in the U.S., you may be eligible to apply for a green card.",
          answerPT: "O visto T é inicialmente concedido por até 4 anos. Após 3 anos de presença física contínua nos EUA, você pode ser elegível para solicitar um green card."
        },
        {
          questionEN: "Do I need to cooperate with law enforcement?",
          questionPT: "Preciso cooperar com as autoridades?",
          answerEN: "Generally yes, unless you are under 18 years old or unable to cooperate due to physical or psychological trauma. You must comply with reasonable requests from law enforcement in the investigation or prosecution of trafficking.",
          answerPT: "Geralmente sim, a menos que você tenha menos de 18 anos ou não possa cooperar devido a trauma físico ou psicológico. Você deve cumprir solicitações razoáveis das autoridades na investigação ou processo de tráfico."
        },
        {
          questionEN: "Can my family members get T visas?",
          questionPT: "Meus familiares podem obter vistos T?",
          answerEN: "Yes, certain family members may be eligible for derivative T visas, including spouse, children, parents (if you're under 21), and unmarried siblings under 18 (if you're under 21).",
          answerPT: "Sim, certos membros da família podem ser elegíveis para vistos T derivados, incluindo cônjuge, filhos, pais (se você tiver menos de 21 anos) e irmãos solteiros menores de 18 anos (se você tiver menos de 21 anos)."
        },
        {
          questionEN: "Can I work with a T visa?",
          questionPT: "Posso trabalhar com um visto T?",
          answerEN: "Yes, T visa holders are automatically authorized to work in the United States. You will receive an Employment Authorization Document (EAD).",
          answerPT: "Sim, os portadores de visto T estão automaticamente autorizados a trabalhar nos Estados Unidos. Você receberá um Documento de Autorização de Emprego (EAD)."
        },
        {
          questionEN: "What if my T visa application is denied?",
          questionPT: "E se minha solicitação de visto T for negada?",
          answerEN: "If denied, you may be able to file a motion to reopen or reconsider, or in some cases, appeal the decision. We can help evaluate your options and determine the best course of action.",
          answerPT: "Se negado, você pode conseguir apresentar uma moção para reabrir ou reconsiderar, ou em alguns casos, apelar da decisão. Podemos ajudar a avaliar suas opções e determinar o melhor curso de ação."
        },
        {
          questionEN: "How long does the T visa process take?",
          questionPT: "Quanto tempo leva o processo do visto T?",
          answerEN: "Processing times vary, but typically range from 12-24 months. USCIS may issue interim relief (like work authorization) while your case is pending if you demonstrate eligibility.",
          answerPT: "Os tempos de processamento variam, mas geralmente variam de 12 a 24 meses. O USCIS pode emitir alívio provisório (como autorização de trabalho) enquanto seu caso está pendente se você demonstrar elegibilidade."
        }
      ]}
      backLink="/services/humanitarian-visas"
      backLabelEN="Back to Humanitarian Visas"
      backLabelPT="Voltar para Vistos Humanitários"
    />
  );
}
