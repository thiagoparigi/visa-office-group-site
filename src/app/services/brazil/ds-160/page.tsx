import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function DS160Page() {
  return (
    <VisaDetailLayout
      titleEN="DS-160 Form"
      titlePT="Formulário DS-160"
      subtitleEN="Complete assistance with the online nonimmigrant visa application"
      subtitlePT="Assistência completa com o formulário de solicitação de visto online"
      whoIsItFor={{
        titleEN: "Who Needs the DS-160?",
        titlePT: "Quem Precisa do DS-160?",
        contentEN: [
          "The DS-160 is the online nonimmigrant visa application required for all temporary U.S. visa categories, including tourist (B1/B2), student (F-1), work (H-1B, L-1), and exchange visitor (J-1) visas.",
          "This comprehensive form collects your personal, travel, employment, and security information. Errors or inconsistencies can lead to delays or visa denial, so accuracy is critical. We ensure your DS-160 is completed correctly the first time."
        ],
        contentPT: [
          "O DS-160 é o formulário online de solicitação de visto de não-imigrante exigido para todas as categorias de visto temporário dos EUA, incluindo turista (B1/B2), estudante (F-1), trabalho (H-1B, L-1) e visitante de intercâmbio (J-1).",
          "Este formulário abrangente coleta suas informações pessoais, de viagem, emprego e segurança. Erros ou inconsistências podem levar a atrasos ou negação de visto, portanto, a precisão é crítica. Garantimos que seu DS-160 seja preenchido corretamente da primeira vez."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Collect and organize all required information",
          "Complete DS-160 form online",
          "Upload compliant photo",
          "Review travel history and ensure accuracy",
          "Verify employment and education details",
          "Answer security questions appropriately",
          "Double-check all entries for consistency",
          "Generate confirmation page",
          "Provide guidance for next steps"
        ],
        contentPT: [
          "Coletar e organizar todas as informações necessárias",
          "Preencher formulário DS-160 online",
          "Carregar foto em conformidade",
          "Revisar histórico de viagem e garantir precisão",
          "Verificar detalhes de emprego e educação",
          "Responder perguntas de segurança adequadamente",
          "Verificar todas as entradas para consistência",
          "Gerar página de confirmação",
          "Fornecer orientação para próximas etapas"
        ]
      }}
      documents={{
        titleEN: "Information & Documents Needed",
        titlePT: "Informações e Documentos Necessários",
        contentEN: [
          "Passport (valid for at least 6 months)",
          "Digital photo meeting U.S. visa requirements",
          "Travel itinerary or travel plans",
          "Complete travel history (past 5 years)",
          "Current and previous employment information",
          "Educational background",
          "Family information (parents, spouse, children)",
          "Previous U.S. visa information",
          "Previous U.S. travel dates",
          "Contact information in the U.S. (if applicable)"
        ],
        contentPT: [
          "Passaporte (válido por pelo menos 6 meses)",
          "Foto digital atendendo aos requisitos de visto dos EUA",
          "Itinerário de viagem ou planos de viagem",
          "Histórico completo de viagem (últimos 5 anos)",
          "Informações de emprego atual e anterior",
          "Histórico educacional",
          "Informações familiares (pais, cônjuge, filhos)",
          "Informações de visto anterior dos EUA",
          "Datas de viagem anterior aos EUA",
          "Informações de contato nos EUA (se aplicável)"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Initial consultation to understand visa type and purpose",
          "Collect all required information and documents",
          "Review travel and employment history",
          "Complete DS-160 form online",
          "Upload photo and verify compliance",
          "Review all entries for accuracy",
          "Submit DS-160 and generate confirmation",
          "Provide confirmation page for visa fee payment",
          "Guide you through scheduling interview"
        ],
        contentPT: [
          "Consulta inicial para entender tipo de visto e propósito",
          "Coletar todas as informações e documentos necessários",
          "Revisar histórico de viagem e emprego",
          "Preencher formulário DS-160 online",
          "Carregar foto e verificar conformidade",
          "Revisar todas as entradas para precisão",
          "Enviar DS-160 e gerar confirmação",
          "Fornecer página de confirmação para pagamento de taxa de visto",
          "Orientar através do agendamento de entrevista"
        ]
      }}
      faqs={[
        {
          questionEN: "How long does it take to complete DS-160?",
          questionPT: "Quanto tempo leva para completar o DS-160?",
          answerEN: "With all information ready, DS-160 completion typically takes 60-90 minutes. The form times out after 20 minutes of inactivity, but you can save and return later using your application ID.",
          answerPT: "Com todas as informações prontas, o preenchimento do DS-160 geralmente leva 60-90 minutos. O formulário expira após 20 minutos de inatividade, mas você pode salvar e retornar mais tarde usando seu ID de aplicação."
        },
        {
          questionEN: "What photo requirements must I meet?",
          questionPT: "Quais requisitos de foto devo atender?",
          answerEN: "Photo must be 2x2 inches (51x51mm), taken within last 6 months, white background, facing camera directly, neutral expression, no glasses, specific head size requirements. We can guide you to ensure compliance.",
          answerPT: "A foto deve ter 2x2 polegadas (51x51mm), tirada nos últimos 6 meses, fundo branco, de frente para a câmera, expressão neutra, sem óculos, requisitos específicos de tamanho de cabeça. Podemos orientá-lo para garantir conformidade."
        },
        {
          questionEN: "Can I edit my DS-160 after submission?",
          questionPT: "Posso editar meu DS-160 após o envio?",
          answerEN: "No, once submitted you cannot edit the DS-160. You would need to complete a new form. That's why careful review before submission is crucial.",
          answerPT: "Não, uma vez enviado, você não pode editar o DS-160. Você precisaria preencher um novo formulário. É por isso que a revisão cuidadosa antes do envio é crucial."
        },
        {
          questionEN: "What if I make a mistake on my DS-160?",
          questionPT: "E se eu cometer um erro no meu DS-160?",
          answerEN: "Minor errors can sometimes be corrected at the interview. Major errors (name, passport number, birth date) require completing a new DS-160. Bring the confirmation page with the most accurate information to your interview.",
          answerPT: "Erros menores às vezes podem ser corrigidos na entrevista. Erros maiores (nome, número de passaporte, data de nascimento) requerem preencher um novo DS-160. Traga a página de confirmação com as informações mais precisas para sua entrevista."
        },
        {
          questionEN: "Do I need to print my DS-160?",
          questionPT: "Preciso imprimir meu DS-160?",
          answerEN: "Yes, you must bring the DS-160 confirmation page with barcode to your visa interview. Most consulates also recommend bringing a copy of the full application.",
          answerPT: "Sim, você deve trazer a página de confirmação do DS-160 com código de barras para sua entrevista de visto. A maioria dos consulados também recomenda trazer uma cópia do aplicativo completo."
        },
        {
          questionEN: "What happens after DS-160 completion?",
          questionPT: "O que acontece após completar o DS-160?",
          answerEN: "After submitting DS-160, you must pay the visa fee, schedule your interview appointment, and prepare your supporting documents for the interview.",
          answerPT: "Após enviar o DS-160, você deve pagar a taxa de visto, agendar sua consulta de entrevista e preparar seus documentos de apoio para a entrevista."
        }
      ]}
      backLink="/services/brazil"
      backLabelEN="Back to Brazil Services"
      backLabelPT="Voltar para Serviços do Brasil"
    />
  );
}
