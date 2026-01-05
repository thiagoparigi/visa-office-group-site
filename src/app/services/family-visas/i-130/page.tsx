import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function I130Page() {
  return (
    <VisaDetailLayout
      titleEN="I-130 Petition"
      titlePT="Petição I-130"
      subtitleEN="Petition for alien relative to sponsor family members for immigration"
      subtitlePT="Petição de parente estrangeiro para patrocinar membros da família para imigração"
      whoIsItFor={{
        titleEN: "Who Can File an I-130?",
        titlePT: "Quem Pode Apresentar um I-130?",
        contentEN: [
          "U.S. citizens can petition for spouses, children (married or unmarried), parents, and siblings. U.S. permanent residents (green card holders) can petition for spouses and unmarried children only.",
          "The I-130 petition establishes the family relationship and begins the immigration process. Once approved, the beneficiary waits for visa availability and then applies for a green card through adjustment of status or consular processing."
        ],
        contentPT: [
          "Cidadãos americanos podem peticionar por cônjuges, filhos (casados ou solteiros), pais e irmãos. Residentes permanentes dos EUA (portadores de green card) podem peticionar apenas por cônjuges e filhos solteiros.",
          "A petição I-130 estabelece o relacionamento familiar e inicia o processo de imigração. Uma vez aprovada, o beneficiário aguarda a disponibilidade de visto e então solicita um green card através de ajuste de status ou processo consular."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-130 petition",
          "Gather relationship evidence",
          "Compile supporting documentation",
          "Prepare proof of petitioner's status",
          "Organize identity and civil documents",
          "Create comprehensive evidence package",
          "Final review and submission",
          "Monitor case status and provide updates"
        ],
        contentPT: [
          "Preenchimento completo da petição Formulário I-130",
          "Reunião de evidências de relacionamento",
          "Compilação de documentação de apoio",
          "Preparação de prova do status do peticionário",
          "Organização de documentos de identidade e civis",
          "Criação de pacote de evidências abrangente",
          "Revisão final e envio",
          "Monitorar status do caso e fornecer atualizações"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Petitioner's proof of U.S. citizenship or permanent residency",
          "Marriage certificate (for spouse petitions)",
          "Birth certificates (for parent-child petitions)",
          "Evidence of previous marriages ended (divorce decrees, death certificates)",
          "Joint financial documents (bank accounts, leases, mortgages)",
          "Photos together throughout relationship",
          "Affidavits from family and friends",
          "Correspondence and communication records",
          "Travel documents showing time together",
          "Children's birth certificates (if applicable)"
        ],
        contentPT: [
          "Prova de cidadania americana ou residência permanente do peticionário",
          "Certidão de casamento (para petições de cônjuge)",
          "Certidões de nascimento (para petições de pai-filho)",
          "Evidências de casamentos anteriores encerrados (decretos de divórcio, certidões de óbito)",
          "Documentos financeiros conjuntos (contas bancárias, aluguéis, hipotecas)",
          "Fotos juntos ao longo do relacionamento",
          "Declarações juramentadas de familiares e amigos",
          "Registros de correspondência e comunicação",
          "Documentos de viagem mostrando tempo juntos",
          "Certidões de nascimento de filhos (se aplicável)"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Initial consultation and eligibility assessment",
          "Document collection and evidence gathering",
          "Form I-130 preparation",
          "Evidence package compilation",
          "Submission to USCIS",
          "Wait for I-130 approval (6-24 months typically)",
          "Wait for visa availability (if applicable)",
          "File I-485 (adjustment of status) or proceed with consular processing",
          "Attend interviews and biometrics",
          "Receive green card"
        ],
        contentPT: [
          "Consulta inicial e avaliação de elegibilidade",
          "Coleta de documentos e reunião de evidências",
          "Preparação do Formulário I-130",
          "Compilação de pacote de evidências",
          "Envio ao USCIS",
          "Aguardar aprovação do I-130 (6-24 meses geralmente)",
          "Aguardar disponibilidade de visto (se aplicável)",
          "Apresentar I-485 (ajuste de status) ou prosseguir com processo consular",
          "Comparecer a entrevistas e biometria",
          "Receber green card"
        ]
      }}
      faqs={[
        {
          questionEN: "How long does I-130 processing take?",
          questionPT: "Quanto tempo leva o processamento do I-130?",
          answerEN: "Processing times vary by USCIS service center and relationship type, typically ranging from 6 to 24 months. Immediate relative categories (spouse, parent, minor unmarried child of U.S. citizen) are generally faster.",
          answerPT: "Os tempos de processamento variam por centro de serviço do USCIS e tipo de relacionamento, geralmente variando de 6 a 24 meses. Categorias de parentes imediatos (cônjuge, pai, filho menor solteiro de cidadão americano) geralmente são mais rápidas."
        },
        {
          questionEN: "What happens after I-130 approval?",
          questionPT: "O que acontece após a aprovação do I-130?",
          answerEN: "If you're an immediate relative of a U.S. citizen and in the U.S., you can file I-485 concurrently or after approval. For preference categories, you must wait for your priority date to become current before proceeding.",
          answerPT: "Se você é parente imediato de um cidadão americano e está nos EUA, pode apresentar o I-485 simultaneamente ou após a aprovação. Para categorias de preferência, você deve esperar que sua data de prioridade fique atual antes de prosseguir."
        },
        {
          questionEN: "Can I work while my I-130 is pending?",
          questionPT: "Posso trabalhar enquanto meu I-130 está pendente?",
          answerEN: "The I-130 petition itself does not provide work authorization. You'll need to file I-485 (adjustment of status) and apply for an Employment Authorization Document (EAD) to work legally.",
          answerPT: "A petição I-130 em si não fornece autorização de trabalho. Você precisará apresentar o I-485 (ajuste de status) e solicitar um Documento de Autorização de Emprego (EAD) para trabalhar legalmente."
        },
        {
          questionEN: "What if I entered the U.S. illegally?",
          questionPT: "E se eu entrei nos EUA ilegalmente?",
          answerEN: "Immediate relatives of U.S. citizens can generally adjust status even with unlawful entry if they have an approved I-130. Other categories typically need to process through a consulate abroad and may face bars to reentry.",
          answerPT: "Parentes imediatos de cidadãos americanos geralmente podem ajustar o status mesmo com entrada ilegal se tiverem um I-130 aprovado. Outras categorias geralmente precisam processar através de um consulado no exterior e podem enfrentar barras à reentrada."
        },
        {
          questionEN: "Can I visit the U.S. while I-130 is pending?",
          questionPT: "Posso visitar os EUA enquanto o I-130 está pendente?",
          answerEN: "Having a pending I-130 shows immigrant intent, which may make it more difficult to obtain a tourist visa or enter on a nonimmigrant visa. However, certain visa types like H-1B and L-1 allow dual intent.",
          answerPT: "Ter um I-130 pendente mostra intenção de imigrante, o que pode dificultar a obtenção de um visto de turista ou entrada com um visto de não-imigrante. No entanto, certos tipos de visto como H-1B e L-1 permitem dupla intenção."
        },
        {
          questionEN: "What if our relationship ends?",
          questionPT: "E se nosso relacionamento terminar?",
          answerEN: "If the relationship ends before the beneficiary receives a green card, the petition typically becomes invalid. However, there are exceptions like VAWA for abuse victims or situations where the petitioner dies.",
          answerPT: "Se o relacionamento terminar antes de o beneficiário receber um green card, a petição geralmente se torna inválida. No entanto, existem exceções como VAWA para vítimas de abuso ou situações onde o peticionário morre."
        }
      ]}
      backLink="/services/family-visas"
      backLabelEN="Back to Family Visas"
      backLabelPT="Voltar para Vistos Familiares"
    />
  );
}
