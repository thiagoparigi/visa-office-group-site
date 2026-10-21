import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function VAWAPage() {
  return (
    <VisaDetailLayout
      titleEN="VAWA Self-Petition"
      titlePT="Auto-Petição VAWA"
      subtitleEN="Immigration relief for victims of domestic violence"
      subtitlePT="Alívio imigratório para vítimas de violência doméstica"
      whoIsItFor={{
        titleEN: "Who Is VAWA For?",
        titlePT: "Para Quem É o VAWA?",
        contentEN: [
          "The Violence Against Women Act (VAWA) allows certain victims of domestic violence to self-petition for immigration benefits without the abuser's knowledge or consent. VAWA is available to both women and men.",
          "You may be eligible if you are the spouse, child, or parent of a U.S. citizen or permanent resident who has subjected you to battery or extreme cruelty. VAWA self-petitioners can eventually apply for a green card."
        ],
        contentPT: [
          "A Lei de Violência Contra as Mulheres (VAWA) permite que certas vítimas de violência doméstica façam auto-petição para benefícios de imigração sem o conhecimento ou consentimento do agressor. VAWA está disponível para mulheres e homens.",
          "Você pode ser elegível se for cônjuge, filho ou pai de um cidadão americano ou residente permanente que o submeteu a agressão ou crueldade extrema. Os auto-peticionários do VAWA podem eventualmente solicitar um green card."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-360 (Petition for Amerasian, Widow, or Special Immigrant)",
          "Prepare comprehensive personal declaration",
          "Organize evidence of abuse",
          "Compile proof of relationship to abuser",
          "Gather evidence of abuser's status",
          "Prepare supporting affidavits and expert opinions",
          "Create complete evidence package",
          "Final review and submission guidance"
        ],
        contentPT: [
          "Preenchimento completo do Formulário I-360 (Petição de Amerasian, Viúva ou Imigrante Especial)",
          "Preparação de declaração pessoal abrangente",
          "Organização de evidências de abuso",
          "Compilação de prova de relacionamento com o agressor",
          "Reunião de evidências do status do agressor",
          "Preparação de declarações juramentadas de apoio e opiniões de especialistas",
          "Criação de pacote de evidências completo",
          "Revisão final e orientação para envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Personal declaration describing abuse",
          "Police reports and incident reports",
          "Protective orders or restraining orders",
          "Medical records documenting injuries",
          "Psychological evaluations and therapy records",
          "Photos of injuries",
          "Witness statements and affidavits",
          "Evidence of joint residence with abuser",
          "Marriage certificate or birth certificate",
          "Proof of abuser's citizenship or permanent residency",
          "Evidence of good moral character"
        ],
        contentPT: [
          "Declaração pessoal descrevendo abuso",
          "Relatórios policiais e de incidentes",
          "Ordens de proteção ou restrição",
          "Registros médicos documentando lesões",
          "Avaliações psicológicas e registros de terapia",
          "Fotos de lesões",
          "Declarações de testemunhas e declarações juramentadas",
          "Evidências de residência conjunta com o agressor",
          "Certidão de casamento ou certidão de nascimento",
          "Prova de cidadania ou residência permanente do agressor",
          "Evidências de bom caráter moral"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Initial consultation and case evaluation",
          "Document collection and evidence gathering",
          "Personal declaration preparation",
          "Relationship and abuse evidence compilation",
          "Form I-360 completion",
          "Evidence package assembly",
          "Quality review and finalization",
          "Submission to USCIS",
          "Monitor status and prepare for next steps"
        ],
        contentPT: [
          "Consulta inicial e avaliação do caso",
          "Coleta de documentos e reunião de evidências",
          "Preparação de declaração pessoal",
          "Compilação de evidências de relacionamento e abuso",
          "Preenchimento do Formulário I-360",
          "Montagem de pacote de evidências",
          "Revisão de qualidade e finalização",
          "Envio ao USCIS",
          "Monitorar status e preparar para próximas etapas"
        ]
      }}
      faqs={[
        {
          questionEN: "What qualifies as battery or extreme cruelty?",
          questionPT: "O que se qualifica como agressão ou crueldade extrema?",
          answerEN: "Battery includes physical violence. Extreme cruelty includes physical or sexual abuse, psychological abuse, economic control, threats, isolation, stalking, and other forms of controlling behavior that cause harm.",
          answerPT: "Agressão inclui violência física. Crueldade extrema inclui abuso físico ou sexual, abuso psicológico, controle econômico, ameaças, isolamento, perseguição e outras formas de comportamento controlador que causam dano."
        },
        {
          questionEN: "Can men file VAWA petitions?",
          questionPT: "Homens podem apresentar petições VAWA?",
          answerEN: "Yes, despite the name, VAWA is available to both men and women who are victims of domestic violence by a U.S. citizen or permanent resident spouse or parent.",
          answerPT: "Sim, apesar do nome, o VAWA está disponível para homens e mulheres que são vítimas de violência doméstica por um cônjuge ou pai cidadão americano ou residente permanente."
        },
        {
          questionEN: "Will my abuser know I filed a VAWA petition?",
          questionPT: "Meu agressor saberá que apresentei uma petição VAWA?",
          answerEN: "No, USCIS will not notify your abuser about your VAWA petition. The process is confidential to protect your safety.",
          answerPT: "Não, o USCIS não notificará seu agressor sobre sua petição VAWA. O processo é confidencial para proteger sua segurança."
        },
        {
          questionEN: "Can I include my children in my VAWA petition?",
          questionPT: "Posso incluir meus filhos em minha petição VAWA?",
          answerEN: "Yes, you can include unmarried children under 21 years old as derivative beneficiaries in your VAWA self-petition.",
          answerPT: "Sim, você pode incluir filhos solteiros menores de 21 anos como beneficiários derivados em sua auto-petição VAWA."
        },
        {
          questionEN: "How long does VAWA processing take?",
          questionPT: "Quanto tempo leva o processamento do VAWA?",
          answerEN: "Processing times vary but typically range from 18-36 months. Once approved, you can apply for work authorization and eventually adjustment of status if you're in the U.S.",
          answerPT: "Os tempos de processamento variam, mas geralmente variam de 18 a 36 meses. Uma vez aprovado, você pode solicitar autorização de trabalho e eventualmente ajuste de status se estiver nos EUA."
        },
        {
          questionEN: "What if I'm divorced from my abuser?",
          questionPT: "E se eu estiver divorciado do meu agressor?",
          answerEN: "You may still file a VAWA petition if the divorce occurred within 2 years of filing, or if you can show a connection between the abuse and the divorce.",
          answerPT: "Você ainda pode apresentar uma petição VAWA se o divórcio ocorreu dentro de 2 anos após a apresentação, ou se você puder mostrar uma conexão entre o abuso e o divórcio."
        }
      ]}
      backLink="/services/humanitarian-visas"
      backLabelEN="Back to Humanitarian Visas"
      backLabelPT="Voltar para Vistos Humanitários"
    />
  );
}
