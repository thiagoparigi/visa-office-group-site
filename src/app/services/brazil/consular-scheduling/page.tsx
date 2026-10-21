import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function ConsularSchedulingPage() {
  return (
    <VisaDetailLayout
      titleEN="Consular Scheduling"
      titlePT="Agendamento Consular"
      subtitleEN="Help scheduling your visa interview appointment"
      subtitlePT="Auxílio no agendamento da entrevista de visto"
      whoIsItFor={{
        titleEN: "Who Needs Scheduling Assistance?",
        titlePT: "Quem Precisa de Assistência de Agendamento?",
        contentEN: [
          "After completing your DS-160 form, you must schedule an interview appointment at the U.S. consulate. The scheduling process can be confusing, with multiple steps and specific requirements for each consulate.",
          "We help you navigate the scheduling system, choose the best appointment time, understand what to bring, and prepare for any special requirements at your specific consulate location."
        ],
        contentPT: [
          "Após preencher seu formulário DS-160, você deve agendar uma consulta de entrevista no consulado dos EUA. O processo de agendamento pode ser confuso, com múltiplas etapas e requisitos específicos para cada consulado.",
          "Ajudamos você a navegar pelo sistema de agendamento, escolher o melhor horário de consulta, entender o que trazer e preparar para quaisquer requisitos especiais em sua localização de consulado específica."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Guide you through CGI Federal website registration",
          "Assist with visa fee payment (MRV fee)",
          "Help schedule interview appointment",
          "Advise on best appointment dates",
          "Explain document requirements for your consulate",
          "Provide consulate-specific guidance",
          "Confirm appointment details",
          "Provide pre-interview checklist",
          "Answer questions about the process"
        ],
        contentPT: [
          "Orientar através do registro no site CGI Federal",
          "Auxiliar no pagamento da taxa de visto (taxa MRV)",
          "Ajudar a agendar consulta de entrevista",
          "Aconselhar sobre as melhores datas de consulta",
          "Explicar requisitos de documentos para seu consulado",
          "Fornecer orientação específica do consulado",
          "Confirmar detalhes da consulta",
          "Fornecer checklist pré-entrevista",
          "Responder perguntas sobre o processo"
        ]
      }}
      documents={{
        titleEN: "What You'll Need",
        titlePT: "O Que Você Precisará",
        contentEN: [
          "DS-160 confirmation number",
          "Passport number",
          "Valid email address",
          "Payment method for MRV fee",
          "MRV fee receipt number (after payment)",
          "Preferred interview dates",
          "Consulate location preference",
          "Contact information"
        ],
        contentPT: [
          "Número de confirmação do DS-160",
          "Número do passaporte",
          "Endereço de e-mail válido",
          "Método de pagamento para taxa MRV",
          "Número de recibo de taxa MRV (após pagamento)",
          "Datas de entrevista preferidas",
          "Preferência de localização do consulado",
          "Informações de contato"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Complete DS-160 and obtain confirmation number",
          "Create profile on CGI Federal website",
          "Pay MRV visa fee (R$ amount varies by visa type)",
          "Receive fee receipt number",
          "Log into scheduling system",
          "Select consulate location",
          "Choose available appointment date",
          "Confirm appointment",
          "Print appointment confirmation letter",
          "Prepare documents for interview"
        ],
        contentPT: [
          "Completar DS-160 e obter número de confirmação",
          "Criar perfil no site CGI Federal",
          "Pagar taxa de visto MRV (valor em R$ varia por tipo de visto)",
          "Receber número de recibo de taxa",
          "Fazer login no sistema de agendamento",
          "Selecionar localização do consulado",
          "Escolher data de consulta disponível",
          "Confirmar consulta",
          "Imprimir carta de confirmação de consulta",
          "Preparar documentos para entrevista"
        ]
      }}
      faqs={[
        {
          questionEN: "How much is the visa fee?",
          questionPT: "Quanto custa a taxa de visto?",
          answerEN: "The MRV fee varies by visa type. For B1/B2 tourist visas, it's currently $185 USD. Check the U.S. embassy website for current fees in Brazilian reais.",
          answerPT: "A taxa MRV varia por tipo de visto. Para vistos de turista B1/B2, atualmente é $185 USD. Verifique o site da embaixada dos EUA para taxas atuais em reais brasileiros."
        },
        {
          questionEN: "How long are interview wait times?",
          questionPT: "Quanto tempo são os tempos de espera de entrevista?",
          answerEN: "Wait times vary by consulate and season. São Paulo and Rio typically have appointments within 2-4 weeks, while smaller consulates may have longer waits. Summer and holiday periods are busiest.",
          answerPT: "Os tempos de espera variam por consulado e temporada. São Paulo e Rio geralmente têm consultas dentro de 2-4 semanas, enquanto consulados menores podem ter esperas mais longas. Períodos de verão e feriados são os mais movimentados."
        },
        {
          questionEN: "Can I reschedule my appointment?",
          questionPT: "Posso reagendar minha consulta?",
          answerEN: "Yes, you can reschedule through the same website. However, excessive rescheduling may affect future appointments. Try to schedule when you're ready to attend.",
          answerPT: "Sim, você pode reagendar através do mesmo site. No entanto, reagendamento excessivo pode afetar futuras consultas. Tente agendar quando estiver pronto para comparecer."
        },
        {
          questionEN: "Which consulate should I choose?",
          questionPT: "Qual consulado devo escolher?",
          answerEN: "Generally, you should apply at the consulate nearest your residence. However, you can apply at any U.S. consulate in Brazil. Consider wait times and travel convenience.",
          answerPT: "Geralmente, você deve solicitar no consulado mais próximo de sua residência. No entanto, você pode solicitar em qualquer consulado dos EUA no Brasil. Considere tempos de espera e conveniência de viagem."
        },
        {
          questionEN: "What if there are no available appointments?",
          questionPT: "E se não houver consultas disponíveis?",
          answerEN: "Check the system regularly as appointments are released periodically. You can also try different consulate locations or wait for new dates to be added.",
          answerPT: "Verifique o sistema regularmente, pois as consultas são liberadas periodicamente. Você também pode tentar diferentes localizações de consulado ou esperar que novas datas sejam adicionadas."
        },
        {
          questionEN: "What happens if I miss my appointment?",
          questionPT: "O que acontece se eu perder minha consulta?",
          answerEN: "You'll need to reschedule and may face additional delays. Your visa fee remains valid for one year from payment, so you won't need to pay again if rescheduling within that period.",
          answerPT: "Você precisará reagendar e pode enfrentar atrasos adicionais. Sua taxa de visto permanece válida por um ano a partir do pagamento, então você não precisará pagar novamente se reagendar dentro desse período."
        }
      ]}
      backLink="/services/brazil"
      backLabelEN="Back to Brazil Services"
      backLabelPT="Voltar para Serviços do Brasil"
    />
  );
}
