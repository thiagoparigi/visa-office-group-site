import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function ConsularProcessingPage() {
  return (
    <VisaDetailLayout
      titleEN="Consular Processing"
      titlePT="Processo Consular"
      subtitleEN="Obtain your immigrant visa through a U.S. consulate abroad"
      subtitlePT="Obtenha seu visto de imigrante através de um consulado dos EUA no exterior"
      whoIsItFor={{
        titleEN: "Who Uses Consular Processing?",
        titlePT: "Quem Usa Processo Consular?",
        contentEN: [
          "Consular processing is for individuals outside the United States (or unable to adjust status in the U.S.) who have an approved immigrant petition and want to obtain their immigrant visa and green card.",
          "This path is required if you're abroad, if you're not eligible to adjust status in the U.S., or if you prefer to process at a consulate. After visa approval and entry to the U.S., you'll receive your green card by mail."
        ],
        contentPT: [
          "O processo consular é para indivíduos fora dos Estados Unidos (ou incapazes de ajustar status nos EUA) que têm uma petição de imigrante aprovada e desejam obter seu visto de imigrante e green card.",
          "Este caminho é necessário se você estiver no exterior, se não for elegível para ajustar status nos EUA, ou se preferir processar em um consulado. Após aprovação do visto e entrada nos EUA, você receberá seu green card pelo correio."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete DS-260 immigrant visa application",
          "Gather civil documents and translations",
          "Coordinate with National Visa Center (NVC)",
          "Prepare Affidavit of Support (I-864)",
          "Compile financial documents",
          "Schedule medical examination abroad",
          "Prepare comprehensive document package",
          "Interview preparation and guidance",
          "Post-interview support"
        ],
        contentPT: [
          "Preenchimento completo da solicitação de visto de imigrante DS-260",
          "Reunião de documentos civis e traduções",
          "Coordenação com National Visa Center (NVC)",
          "Preparação de Declaração de Apoio (I-864)",
          "Compilação de documentos financeiros",
          "Agendamento de exame médico no exterior",
          "Preparação de pacote de documentos abrangente",
          "Preparação e orientação para entrevista",
          "Suporte pós-entrevista"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Passport valid for at least 6 months",
          "Birth certificate with translation",
          "Marriage certificate (if applicable)",
          "Divorce or death certificates (if applicable)",
          "Police certificates from all countries resided",
          "Military records (if applicable)",
          "Form DS-260 confirmation",
          "Form I-864 (Affidavit of Support)",
          "Sponsor's tax returns and financial documents",
          "Medical examination results",
          "Two passport-style photos",
          "Interview appointment letter"
        ],
        contentPT: [
          "Passaporte válido por pelo menos 6 meses",
          "Certidão de nascimento com tradução",
          "Certidão de casamento (se aplicável)",
          "Certidões de divórcio ou óbito (se aplicável)",
          "Certificados policiais de todos os países resididos",
          "Registros militares (se aplicável)",
          "Confirmação do Formulário DS-260",
          "Formulário I-864 (Declaração de Apoio)",
          "Declarações de impostos e documentos financeiros do patrocinador",
          "Resultados de exame médico",
          "Duas fotos estilo passaporte",
          "Carta de consulta de entrevista"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "USCIS approves immigrant petition and forwards to NVC",
          "NVC sends invoice for visa fees",
          "Complete and submit DS-260 online",
          "Submit civil documents to NVC",
          "Submit Affidavit of Support (I-864) and financial documents",
          "NVC reviews and schedules interview",
          "Complete medical examination at approved facility",
          "Attend consular interview",
          "If approved, receive immigrant visa",
          "Enter U.S. within visa validity period",
          "Receive green card by mail (2-4 weeks after entry)"
        ],
        contentPT: [
          "USCIS aprova petição de imigrante e encaminha ao NVC",
          "NVC envia fatura de taxas de visto",
          "Completar e enviar DS-260 online",
          "Enviar documentos civis ao NVC",
          "Enviar Declaração de Apoio (I-864) e documentos financeiros",
          "NVC revisa e agenda entrevista",
          "Completar exame médico em instalação aprovada",
          "Comparecer à entrevista consular",
          "Se aprovado, receber visto de imigrante",
          "Entrar nos EUA dentro do período de validade do visto",
          "Receber green card pelo correio (2-4 semanas após entrada)"
        ]
      }}
      faqs={[
        {
          questionEN: "How long does consular processing take?",
          questionPT: "Quanto tempo leva o processo consular?",
          answerEN: "After petition approval, NVC processing typically takes 2-4 months, then interview wait times vary by consulate (1-6 months). Total time from petition approval to visa issuance is usually 6-12 months.",
          answerPT: "Após aprovação da petição, o processamento do NVC geralmente leva 2-4 meses, então os tempos de espera de entrevista variam por consulado (1-6 meses). O tempo total desde a aprovação da petição até a emissão do visto geralmente é de 6-12 meses."
        },
        {
          questionEN: "What is the National Visa Center (NVC)?",
          questionPT: "O que é o National Visa Center (NVC)?",
          answerEN: "The NVC is the intermediary between USCIS and U.S. consulates abroad. They collect visa fees, process documents, and schedule interviews once everything is approved.",
          answerPT: "O NVC é o intermediário entre o USCIS e os consulados dos EUA no exterior. Eles coletam taxas de visto, processam documentos e agendam entrevistas uma vez que tudo está aprovado."
        },
        {
          questionEN: "What happens at the consular interview?",
          questionPT: "O que acontece na entrevista consular?",
          answerEN: "A consular officer will review your documents, verify information, ask questions about your relationship or employment, and determine visa eligibility. Be truthful, bring all requested documents, and answer clearly.",
          answerPT: "Um oficial consular revisará seus documentos, verificará informações, fará perguntas sobre seu relacionamento ou emprego e determinará elegibilidade de visto. Seja verdadeiro, traga todos os documentos solicitados e responda claramente."
        },
        {
          questionEN: "What if I'm denied at the consulate?",
          questionPT: "E se eu for negado no consulado?",
          answerEN: "If denied, the consular officer must provide the reason. Some denials are due to missing documents (can be resolved), while others may be legal grounds of inadmissibility requiring waivers.",
          answerPT: "Se negado, o oficial consular deve fornecer o motivo. Algumas negações são devido a documentos faltantes (podem ser resolvidas), enquanto outras podem ser motivos legais de inadmissibilidade que requerem dispensas."
        },
        {
          questionEN: "Do I need translations?",
          questionPT: "Preciso de traduções?",
          answerEN: "Yes, all documents not in English must be accompanied by certified translations. The translator must certify that they are competent to translate and that the translation is accurate.",
          answerPT: "Sim, todos os documentos que não estão em inglês devem ser acompanhados de traduções certificadas. O tradutor deve certificar que é competente para traduzir e que a tradução é precisa."
        },
        {
          questionEN: "Can I choose which consulate to process through?",
          questionPT: "Posso escolher qual consulado processar?",
          answerEN: "Generally, you must process through the consulate with jurisdiction over your country of residence or nationality. However, in some cases you may be able to request processing at a different location.",
          answerPT: "Geralmente, você deve processar através do consulado com jurisdição sobre seu país de residência ou nacionalidade. No entanto, em alguns casos você pode conseguir solicitar processamento em um local diferente."
        }
      ]}
      backLink="/services/family-visas"
      backLabelEN="Back to Family Visas"
      backLabelPT="Voltar para Vistos Familiares"
    />
  );
}
