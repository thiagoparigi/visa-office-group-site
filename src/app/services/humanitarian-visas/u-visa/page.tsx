import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function UVisaPage() {
  return (
    <VisaDetailLayout
      titleEN="U Visa"
      titlePT="Visto U"
      subtitleEN="Protection for crime victims who assist law enforcement"
      subtitlePT="Proteção para vítimas de crimes que auxiliam as autoridades"
      whoIsItFor={{
        titleEN: "Who Is the U Visa For?",
        titlePT: "Para Quem É o Visto U?",
        contentEN: [
          "The U visa is for victims of certain crimes who have suffered mental or physical abuse and are willing to assist law enforcement in the investigation or prosecution of criminal activity.",
          "Qualifying crimes include domestic violence, sexual assault, trafficking, kidnapping, abduction, involuntary servitude, torture, and many others. U visa holders may apply for a green card after 3 years of continuous presence."
        ],
        contentPT: [
          "O visto U é para vítimas de certos crimes que sofreram abuso mental ou físico e estão dispostas a auxiliar as autoridades na investigação ou processo de atividade criminal.",
          "Crimes qualificados incluem violência doméstica, agressão sexual, tráfico, sequestro, abdução, servidão involuntária, tortura e muitos outros. Os portadores de visto U podem solicitar um green card após 3 anos de presença contínua."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-918 (Petition for U Nonimmigrant Status)",
          "Prepare Form I-918 Supplement B for law enforcement certification",
          "Draft detailed personal declaration",
          "Organize crime evidence and documentation",
          "Compile medical and psychological records",
          "Prepare supporting affidavits",
          "Create comprehensive evidence package",
          "Final review and submission guidance"
        ],
        contentPT: [
          "Preenchimento completo do Formulário I-918 (Petição de Status U de Não-Imigrante)",
          "Preparação do Formulário I-918 Suplemento B para certificação policial",
          "Redação de declaração pessoal detalhada",
          "Organização de evidências e documentação de crime",
          "Compilação de registros médicos e psicológicos",
          "Preparação de declarações juramentadas de apoio",
          "Criação de pacote de evidências abrangente",
          "Revisão final e orientação para envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Law enforcement certification (Form I-918 Supplement B)",
          "Personal declaration describing the crime",
          "Police reports and incident reports",
          "Medical records documenting injuries",
          "Psychological evaluations and therapy records",
          "Protective orders or restraining orders",
          "Evidence of cooperation with law enforcement",
          "Witness statements",
          "Photos of injuries",
          "Identity documents"
        ],
        contentPT: [
          "Certificação policial (Formulário I-918 Suplemento B)",
          "Declaração pessoal descrevendo o crime",
          "Relatórios policiais e de incidentes",
          "Registros médicos documentando lesões",
          "Avaliações psicológicas e registros de terapia",
          "Ordens de proteção ou restrição",
          "Evidências de cooperação com autoridades",
          "Declarações de testemunhas",
          "Fotos de lesões",
          "Documentos de identidade"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Initial consultation and eligibility assessment",
          "Document collection and evidence gathering",
          "Law enforcement certification coordination",
          "Personal declaration preparation",
          "Form I-918 completion",
          "Evidence package compilation",
          "Quality review and finalization",
          "Submission to USCIS",
          "Monitor status and respond to requests"
        ],
        contentPT: [
          "Consulta inicial e avaliação de elegibilidade",
          "Coleta de documentos e reunião de evidências",
          "Coordenação de certificação policial",
          "Preparação de declaração pessoal",
          "Preenchimento do Formulário I-918",
          "Compilação de pacote de evidências",
          "Revisão de qualidade e finalização",
          "Envio ao USCIS",
          "Monitorar status e responder a solicitações"
        ]
      }}
      faqs={[
        {
          questionEN: "What crimes qualify for a U visa?",
          questionPT: "Quais crimes se qualificam para um visto U?",
          answerEN: "Qualifying crimes include domestic violence, sexual assault, rape, torture, trafficking, incest, kidnapping, abduction, involuntary servitude, false imprisonment, blackmail, extortion, manslaughter, murder, witness tampering, obstruction of justice, perjury, and other related crimes.",
          answerPT: "Crimes qualificados incluem violência doméstica, agressão sexual, estupro, tortura, tráfico, incesto, sequestro, abdução, servidão involuntária, falsa prisão, chantagem, extorsão, homicídio culposo, assassinato, intimidação de testemunhas, obstrução de justiça, perjúrio e outros crimes relacionados."
        },
        {
          questionEN: "How long does it take to get a U visa?",
          questionPT: "Quanto tempo leva para obter um visto U?",
          answerEN: "Processing times vary significantly, often 4-7 years due to the annual cap of 10,000 visas. However, you may receive deferred action and work authorization while waiting.",
          answerPT: "Os tempos de processamento variam significativamente, muitas vezes 4-7 anos devido ao limite anual de 10.000 vistos. No entanto, você pode receber ação diferida e autorização de trabalho enquanto aguarda."
        },
        {
          questionEN: "Can my family members get U visas?",
          questionPT: "Meus familiares podem obter vistos U?",
          answerEN: "Yes, derivative U visas may be available for your spouse and unmarried children under 21. If you're under 21, your parents and unmarried siblings under 18 may also qualify.",
          answerPT: "Sim, vistos U derivados podem estar disponíveis para seu cônjuge e filhos solteiros menores de 21 anos. Se você tiver menos de 21 anos, seus pais e irmãos solteiros menores de 18 anos também podem se qualificar."
        },
        {
          questionEN: "Do I need to be in the U.S. to apply?",
          questionPT: "Preciso estar nos EUA para solicitar?",
          answerEN: "No, you can apply from outside the U.S., but you must have been a victim of qualifying criminal activity that violated U.S. law or occurred in the U.S.",
          answerPT: "Não, você pode solicitar de fora dos EUA, mas deve ter sido vítima de atividade criminal qualificada que violou a lei dos EUA ou ocorreu nos EUA."
        },
        {
          questionEN: "Can I work with a U visa?",
          questionPT: "Posso trabalhar com um visto U?",
          answerEN: "Yes, U visa holders are eligible for work authorization. You can apply for an Employment Authorization Document (EAD).",
          answerPT: "Sim, os portadores de visto U são elegíveis para autorização de trabalho. Você pode solicitar um Documento de Autorização de Emprego (EAD)."
        },
        {
          questionEN: "Can I get a green card with a U visa?",
          questionPT: "Posso obter um green card com um visto U?",
          answerEN: "Yes, after maintaining continuous physical presence for 3 years, you may apply for adjustment of status to permanent resident if you continue to meet eligibility requirements.",
          answerPT: "Sim, após manter presença física contínua por 3 anos, você pode solicitar ajuste de status para residente permanente se continuar a atender aos requisitos de elegibilidade."
        }
      ]}
      backLink="/services/humanitarian-visas"
      backLabelEN="Back to Humanitarian Visas"
      backLabelPT="Voltar para Vistos Humanitários"
    />
  );
}
