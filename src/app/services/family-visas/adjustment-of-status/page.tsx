import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function AdjustmentOfStatusPage() {
  return (
    <VisaDetailLayout
      titleEN="Adjustment of Status"
      titlePT="Ajuste de Status"
      subtitleEN="Apply for your green card while in the United States"
      subtitlePT="Solicite seu green card enquanto estiver nos Estados Unidos"
      whoIsItFor={{
        titleEN: "Who Can Adjust Status?",
        titlePT: "Quem Pode Ajustar Status?",
        contentEN: [
          "Adjustment of status (Form I-485) allows eligible individuals already in the United States to apply for permanent residency without having to return to their home country for consular processing.",
          "Common paths include family-sponsored (approved I-130), employment-based (approved I-140), asylum/refugee status, diversity visa lottery winners, and other special immigrant categories. You must be physically present in the U.S. and have entered lawfully (with some exceptions for immediate relatives)."
        ],
        contentPT: [
          "Ajuste de status (Formulário I-485) permite que indivíduos elegíveis já nos Estados Unidos solicitem residência permanente sem ter que retornar ao seu país de origem para processo consular.",
          "Caminhos comuns incluem patrocínio familiar (I-130 aprovado), baseado em emprego (I-140 aprovado), status de asilo/refugiado, ganhadores de loteria de visto de diversidade e outras categorias especiais de imigrante. Você deve estar fisicamente presente nos EUA e ter entrado legalmente (com algumas exceções para parentes imediatos)."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-485 (Application to Register Permanent Residence)",
          "Prepare Form I-765 (work authorization) and I-131 (travel document)",
          "Compile complete immigration history documentation",
          "Organize financial support evidence (I-864 if required)",
          "Gather medical examination results (Form I-693)",
          "Prepare personal and family documentation",
          "Create comprehensive application package",
          "Interview preparation guidance",
          "Final review and submission"
        ],
        contentPT: [
          "Preenchimento completo do Formulário I-485 (Solicitação para Registrar Residência Permanente)",
          "Preparação do Formulário I-765 (autorização de trabalho) e I-131 (documento de viagem)",
          "Compilação de documentação completa do histórico de imigração",
          "Organização de evidências de apoio financeiro (I-864 se necessário)",
          "Reunião de resultados de exame médico (Formulário I-693)",
          "Preparação de documentação pessoal e familiar",
          "Criação de pacote de solicitação abrangente",
          "Orientação para preparação de entrevista",
          "Revisão final e envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Approved immigrant petition (I-130, I-140, etc.)",
          "Birth certificate and passport",
          "Marriage certificate (if applicable)",
          "Divorce or death certificates (if applicable)",
          "Form I-94 arrival/departure record",
          "Visa copies and entry stamps",
          "Form I-693 (medical examination)",
          "Form I-864 (Affidavit of Support) if family-based",
          "Employment letters and pay stubs",
          "Tax returns (3 years recommended)",
          "Police certificates (if required)",
          "Two passport-style photos"
        ],
        contentPT: [
          "Petição de imigrante aprovada (I-130, I-140, etc.)",
          "Certidão de nascimento e passaporte",
          "Certidão de casamento (se aplicável)",
          "Certidões de divórcio ou óbito (se aplicável)",
          "Registro de chegada/partida Formulário I-94",
          "Cópias de visto e carimbos de entrada",
          "Formulário I-693 (exame médico)",
          "Formulário I-864 (Declaração de Apoio) se baseado em família",
          "Cartas de emprego e contracheques",
          "Declarações de impostos (3 anos recomendado)",
          "Certificados policiais (se necessário)",
          "Duas fotos estilo passaporte"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Wait for visa availability (check priority date)",
          "Complete medical examination (Form I-693)",
          "Prepare I-485 application package",
          "Submit I-485 with supporting forms (I-765, I-131)",
          "Attend biometrics appointment",
          "Receive Employment Authorization Document (EAD)",
          "Receive Advance Parole travel document",
          "Attend green card interview",
          "Receive decision and green card"
        ],
        contentPT: [
          "Aguardar disponibilidade de visto (verificar data de prioridade)",
          "Completar exame médico (Formulário I-693)",
          "Preparar pacote de solicitação I-485",
          "Enviar I-485 com formulários de apoio (I-765, I-131)",
          "Comparecer à consulta de biometria",
          "Receber Documento de Autorização de Emprego (EAD)",
          "Receber documento de viagem Advance Parole",
          "Comparecer à entrevista de green card",
          "Receber decisão e green card"
        ]
      }}
      faqs={[
        {
          questionEN: "How long does adjustment of status take?",
          questionPT: "Quanto tempo leva o ajuste de status?",
          answerEN: "Processing times vary by field office but typically range from 8-24 months. Employment-based cases in high-volume offices may take longer. You can track your case status online.",
          answerPT: "Os tempos de processamento variam por escritório local, mas geralmente variam de 8 a 24 meses. Casos baseados em emprego em escritórios de alto volume podem levar mais tempo. Você pode acompanhar o status do seu caso online."
        },
        {
          questionEN: "Can I work while I-485 is pending?",
          questionPT: "Posso trabalhar enquanto o I-485 está pendente?",
          answerEN: "Yes, you can apply for an Employment Authorization Document (EAD) along with your I-485. Once approved (typically 3-5 months), you can work for any employer while your green card is pending.",
          answerPT: "Sim, você pode solicitar um Documento de Autorização de Emprego (EAD) junto com seu I-485. Uma vez aprovado (geralmente 3-5 meses), você pode trabalhar para qualquer empregador enquanto seu green card está pendente."
        },
        {
          questionEN: "Can I travel while I-485 is pending?",
          questionPT: "Posso viajar enquanto o I-485 está pendente?",
          answerEN: "You need Advance Parole (Form I-131) to travel internationally while I-485 is pending. Leaving without it may be considered abandonment of your application. Current combo cards include both EAD and Advance Parole.",
          answerPT: "Você precisa de Advance Parole (Formulário I-131) para viajar internacionalmente enquanto o I-485 está pendente. Sair sem ele pode ser considerado abandono de sua solicitação. Os cartões combinados atuais incluem EAD e Advance Parole."
        },
        {
          questionEN: "What happens at the green card interview?",
          questionPT: "O que acontece na entrevista de green card?",
          answerEN: "An immigration officer will verify your identity, review your application, ask questions about your background, relationship (if family-based), and eligibility. Bring original documents, be truthful, and answer only what is asked.",
          answerPT: "Um oficial de imigração verificará sua identidade, revisará sua solicitação, fará perguntas sobre seu histórico, relacionamento (se baseado em família) e elegibilidade. Traga documentos originais, seja verdadeiro e responda apenas o que for perguntado."
        },
        {
          questionEN: "What if I'm denied?",
          questionPT: "E se eu for negado?",
          answerEN: "If your I-485 is denied, you may be placed in removal proceedings where you can present your case to an immigration judge. In some cases, you may be able to file a motion to reopen or reconsider.",
          answerPT: "Se seu I-485 for negado, você pode ser colocado em processo de remoção onde pode apresentar seu caso a um juiz de imigração. Em alguns casos, você pode conseguir apresentar uma moção para reabrir ou reconsiderar."
        },
        {
          questionEN: "Do I need a medical examination?",
          questionPT: "Preciso de um exame médico?",
          answerEN: "Yes, Form I-693 (medical examination) is required and must be completed by a USCIS-designated civil surgeon. The exam includes vaccination records, physical examination, and tests for certain communicable diseases.",
          answerPT: "Sim, o Formulário I-693 (exame médico) é necessário e deve ser completado por um cirurgião civil designado pelo USCIS. O exame inclui registros de vacinação, exame físico e testes para certas doenças transmissíveis."
        }
      ]}
      backLink="/services/family-visas"
      backLabelEN="Back to Family Visas"
      backLabelPT="Voltar para Vistos Familiares"
    />
  );
}
