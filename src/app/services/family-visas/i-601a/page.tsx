import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function I601APage() {
  return (
    <VisaDetailLayout
      titleEN="I-601A Waiver"
      titlePT="Dispensa I-601A"
      subtitleEN="Provisional unlawful presence waiver for immediate relatives"
      subtitlePT="Dispensa provisória de presença ilegal para parentes imediatos"
      whoIsItFor={{
        titleEN: "Who Needs an I-601A Waiver?",
        titlePT: "Quem Precisa de uma Dispensa I-601A?",
        contentEN: [
          "The I-601A provisional waiver is for immediate relatives of U.S. citizens (spouses, parents, unmarried children under 21) who are inadmissible to the U.S. due to unlawful presence and need to process their immigrant visa abroad.",
          "If you've been in the U.S. unlawfully for more than 180 days, leaving for consular processing would trigger a 3 or 10-year bar. The I-601A allows you to apply for a waiver before leaving, reducing time abroad to just a few weeks."
        ],
        contentPT: [
          "A dispensa provisória I-601A é para parentes imediatos de cidadãos americanos (cônjuges, pais, filhos solteiros menores de 21 anos) que são inadmissíveis aos EUA devido a presença ilegal e precisam processar seu visto de imigrante no exterior.",
          "Se você esteve nos EUA ilegalmente por mais de 180 dias, sair para processo consular acionaria uma barra de 3 ou 10 anos. O I-601A permite solicitar uma dispensa antes de sair, reduzindo o tempo no exterior para apenas algumas semanas."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Complete Form I-601A application",
          "Prepare detailed extreme hardship declaration",
          "Compile medical, financial, and psychological evidence",
          "Gather country condition documentation",
          "Organize family relationship evidence",
          "Prepare expert affidavits and evaluations",
          "Create comprehensive extreme hardship case",
          "Final review and submission",
          "Monitor case and coordinate consular processing"
        ],
        contentPT: [
          "Preenchimento completo da solicitação Formulário I-601A",
          "Preparação de declaração detalhada de dificuldades extremas",
          "Compilação de evidências médicas, financeiras e psicológicas",
          "Reunião de documentação sobre condições do país",
          "Organização de evidências de relacionamento familiar",
          "Preparação de declarações juramentadas e avaliações de especialistas",
          "Criação de caso abrangente de dificuldades extremas",
          "Revisão final e envio",
          "Monitorar caso e coordenar processo consular"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Approved I-130 petition",
          "Proof of qualifying relative's U.S. citizenship",
          "Detailed personal declaration",
          "Medical records and diagnoses",
          "Psychological evaluations",
          "Financial documents (income, expenses, assets)",
          "Employment letters and pay stubs",
          "School records and special needs documentation",
          "Country condition reports",
          "Expert affidavits",
          "Family photos and relationship evidence",
          "Letters from doctors, therapists, employers"
        ],
        contentPT: [
          "Petição I-130 aprovada",
          "Prova de cidadania americana do parente qualificado",
          "Declaração pessoal detalhada",
          "Registros médicos e diagnósticos",
          "Avaliações psicológicas",
          "Documentos financeiros (renda, despesas, ativos)",
          "Cartas de emprego e contracheques",
          "Registros escolares e documentação de necessidades especiais",
          "Relatórios sobre condições do país",
          "Declarações juramentadas de especialistas",
          "Fotos de família e evidências de relacionamento",
          "Cartas de médicos, terapeutas, empregadores"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Obtain approved I-130 petition",
          "Document extreme hardship to qualifying relative",
          "File Form I-601A with USCIS",
          "Attend biometrics appointment",
          "Wait for I-601A decision (4-12 months typically)",
          "If approved, complete consular processing steps",
          "Attend medical examination abroad",
          "Attend consular interview",
          "If visa approved, return to U.S. as permanent resident"
        ],
        contentPT: [
          "Obter petição I-130 aprovada",
          "Documentar dificuldades extremas ao parente qualificado",
          "Apresentar Formulário I-601A ao USCIS",
          "Comparecer à consulta de biometria",
          "Aguardar decisão do I-601A (4-12 meses geralmente)",
          "Se aprovado, completar etapas de processo consular",
          "Comparecer a exame médico no exterior",
          "Comparecer à entrevista consular",
          "Se visto aprovado, retornar aos EUA como residente permanente"
        ]
      }}
      faqs={[
        {
          questionEN: "What is extreme hardship?",
          questionPT: "O que é dificuldade extrema?",
          answerEN: "Extreme hardship is more than normal hardship from separation. It considers factors like health conditions, financial impact, educational disruption, country conditions, family ties, and ability to relocate. The hardship must be to your U.S. citizen spouse or parent.",
          answerPT: "Dificuldade extrema é mais do que dificuldade normal de separação. Considera fatores como condições de saúde, impacto financeiro, interrupção educacional, condições do país, laços familiares e capacidade de relocalização. A dificuldade deve ser para seu cônjuge ou pai cidadão americano."
        },
        {
          questionEN: "Can permanent residents sponsor I-601A?",
          questionPT: "Residentes permanentes podem patrocinar I-601A?",
          answerEN: "No, the I-601A waiver is only available to immediate relatives of U.S. citizens. Permanent residents cannot be qualifying relatives for I-601A purposes.",
          answerPT: "Não, a dispensa I-601A está disponível apenas para parentes imediatos de cidadãos americanos. Residentes permanentes não podem ser parentes qualificados para fins de I-601A."
        },
        {
          questionEN: "What if my I-601A is denied?",
          questionPT: "E se meu I-601A for negado?",
          answerEN: "If denied, you can file a motion to reopen or reconsider with additional evidence. If that fails, you would need to proceed with consular processing and apply for an I-601 waiver from abroad, which takes longer.",
          answerPT: "Se negado, você pode apresentar uma moção para reabrir ou reconsiderar com evidências adicionais. Se isso falhar, você precisaria prosseguir com o processo consular e solicitar uma dispensa I-601 do exterior, o que leva mais tempo."
        },
        {
          questionEN: "How long is the I-601A valid?",
          questionPT: "Por quanto tempo o I-601A é válido?",
          answerEN: "Once approved, the I-601A is generally valid for the period necessary to complete consular processing. You should leave for your interview within a reasonable time after approval.",
          answerPT: "Uma vez aprovado, o I-601A geralmente é válido pelo período necessário para completar o processo consular. Você deve sair para sua entrevista dentro de um tempo razoável após a aprovação."
        },
        {
          questionEN: "Can I work while I-601A is pending?",
          questionPT: "Posso trabalhar enquanto o I-601A está pendente?",
          answerEN: "The I-601A application itself doesn't provide work authorization. If you already have work authorization from another status, you can continue working under that authorization.",
          answerPT: "A solicitação I-601A em si não fornece autorização de trabalho. Se você já tem autorização de trabalho de outro status, pode continuar trabalhando sob essa autorização."
        },
        {
          questionEN: "What happens at the consular interview?",
          questionPT: "O que acontece na entrevista consular?",
          answerEN: "Even with an approved I-601A, the consular officer will review your case for other grounds of inadmissibility and verify all information. Your approved waiver only covers unlawful presence; other issues must be separately addressed.",
          answerPT: "Mesmo com um I-601A aprovado, o oficial consular revisará seu caso para outros motivos de inadmissibilidade e verificará todas as informações. Sua dispensa aprovada cobre apenas presença ilegal; outros problemas devem ser abordados separadamente."
        }
      ]}
      backLink="/services/family-visas"
      backLabelEN="Back to Family Visas"
      backLabelPT="Voltar para Vistos Familiares"
    />
  );
}
