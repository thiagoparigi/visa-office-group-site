import VisaDetailLayout from '@/components/VisaDetailLayout';

export default function EB3Page() {
  return (
    <VisaDetailLayout
      titleEN="EB-3 Visa"
      titlePT="Visto EB-3"
      subtitleEN="Employment-based green card for skilled workers, professionals, and other workers"
      subtitlePT="Green card baseado em emprego para trabalhadores qualificados, profissionais e outros trabalhadores"
      whoIsItFor={{
        titleEN: "Who Is the EB-3 Visa For?",
        titlePT: "Para Quem É o Visto EB-3?",
        contentEN: [
          "The EB-3 visa is for skilled workers (requiring at least 2 years of training or experience), professionals (requiring a U.S. bachelor's degree or foreign equivalent), and other workers (less than 2 years of training or experience required).",
          "This category requires a permanent job offer from a U.S. employer and an approved labor certification. While it has longer wait times than EB-1 and EB-2, it's more accessible for a wider range of occupations."
        ],
        contentPT: [
          "O visto EB-3 é para trabalhadores qualificados (que requerem pelo menos 2 anos de treinamento ou experiência), profissionais (que requerem um diploma de bacharel dos EUA ou equivalente estrangeiro) e outros trabalhadores (menos de 2 anos de treinamento ou experiência necessária).",
          "Esta categoria requer uma oferta de emprego permanente de um empregador dos EUA e uma certificação trabalhista aprovada. Embora tenha tempos de espera mais longos do que EB-1 e EB-2, é mais acessível para uma gama mais ampla de ocupações."
        ]
      }}
      whatWeDo={{
        titleEN: "What We Do",
        titlePT: "O Que Fazemos",
        contentEN: [
          "Coordinate labor certification (PERM) process",
          "Complete Form I-140 petition",
          "Prepare detailed petition letter",
          "Organize employment documentation",
          "Compile educational credentials",
          "Document work experience and qualifications",
          "Create comprehensive evidence package",
          "Final review and submission"
        ],
        contentPT: [
          "Coordenar processo de certificação trabalhista (PERM)",
          "Preenchimento completo da petição Formulário I-140",
          "Preparação de carta de petição detalhada",
          "Organização de documentação de emprego",
          "Compilação de credenciais educacionais",
          "Documentação de experiência de trabalho e qualificações",
          "Criação de pacote de evidências abrangente",
          "Revisão final e envio"
        ]
      }}
      documents={{
        titleEN: "Typical Documents & Evidence",
        titlePT: "Documentos e Evidências Típicas",
        contentEN: [
          "Approved PERM labor certification",
          "Job offer letter",
          "Educational diplomas and transcripts",
          "Foreign credential evaluations",
          "Employment verification letters",
          "Resume and work history",
          "Evidence of qualifications",
          "Employer's ability to pay documentation",
          "Company financial records",
          "Tax returns and financial statements"
        ],
        contentPT: [
          "Certificação trabalhista PERM aprovada",
          "Carta de oferta de emprego",
          "Diplomas educacionais e históricos escolares",
          "Avaliações de credenciais estrangeiras",
          "Cartas de verificação de emprego",
          "Currículo e histórico de trabalho",
          "Evidências de qualificações",
          "Documentação da capacidade de pagamento do empregador",
          "Registros financeiros da empresa",
          "Declarações de impostos e demonstrações financeiras"
        ]
      }}
      process={{
        titleEN: "Process Steps",
        titlePT: "Etapas do Processo",
        contentEN: [
          "Employer obtains prevailing wage determination",
          "Employer conducts recruitment process",
          "File PERM labor certification",
          "Wait for PERM approval",
          "File Form I-140 immigrant petition",
          "Wait for I-140 approval and priority date",
          "When visa number available, file I-485 (if in U.S.) or consular processing",
          "Attend biometrics and interview (if required)",
          "Receive green card"
        ],
        contentPT: [
          "Empregador obtém determinação de salário prevalecente",
          "Empregador conduz processo de recrutamento",
          "Apresentar certificação trabalhista PERM",
          "Aguardar aprovação do PERM",
          "Apresentar petição de imigrante Formulário I-140",
          "Aguardar aprovação do I-140 e data de prioridade",
          "Quando número de visto disponível, apresentar I-485 (se nos EUA) ou processo consular",
          "Comparecer à biometria e entrevista (se necessário)",
          "Receber green card"
        ]
      }}
      faqs={[
        {
          questionEN: "What's the difference between EB-3 skilled worker and professional?",
          questionPT: "Qual é a diferença entre trabalhador qualificado EB-3 e profissional?",
          answerEN: "Skilled workers need at least 2 years of job experience or training but not necessarily a bachelor's degree. Professionals must have a U.S. bachelor's degree or foreign equivalent for the position.",
          answerPT: "Trabalhadores qualificados precisam de pelo menos 2 anos de experiência de trabalho ou treinamento, mas não necessariamente um diploma de bacharel. Profissionais devem ter um diploma de bacharel dos EUA ou equivalente estrangeiro para a posição."
        },
        {
          questionEN: "How long does the EB-3 process take?",
          questionPT: "Quanto tempo leva o processo EB-3?",
          answerEN: "The total timeline varies significantly by country. PERM takes 6-12 months, I-140 takes 4-8 months, and then you wait for visa availability. For some countries, total time can be 2-5 years or longer.",
          answerPT: "O cronograma total varia significativamente por país. PERM leva 6-12 meses, I-140 leva 4-8 meses, e então você espera pela disponibilidade de visto. Para alguns países, o tempo total pode ser de 2 a 5 anos ou mais."
        },
        {
          questionEN: "Must I stay with my sponsoring employer?",
          questionPT: "Devo permanecer com meu empregador patrocinador?",
          answerEN: "Generally yes, you must work for your sponsoring employer until you receive your green card. After receiving the green card, you should work for the employer for a reasonable period to show good faith.",
          answerPT: "Geralmente sim, você deve trabalhar para seu empregador patrocinador até receber seu green card. Após receber o green card, você deve trabalhar para o empregador por um período razoável para mostrar boa fé."
        },
        {
          questionEN: "Can my family get green cards?",
          questionPT: "Minha família pode obter green cards?",
          answerEN: "Yes, your spouse and unmarried children under 21 can be included as derivative beneficiaries and receive green cards along with you.",
          answerPT: "Sim, seu cônjuge e filhos solteiros menores de 21 anos podem ser incluídos como beneficiários derivados e receber green cards junto com você."
        },
        {
          questionEN: "What is the PERM labor certification?",
          questionPT: "O que é a certificação trabalhista PERM?",
          answerEN: "PERM is a process where your employer must prove there are no qualified U.S. workers available for the position by conducting a recruitment process under Department of Labor supervision.",
          answerPT: "PERM é um processo onde seu empregador deve provar que não há trabalhadores americanos qualificados disponíveis para a posição, conduzindo um processo de recrutamento sob supervisão do Departamento de Trabalho."
        },
        {
          questionEN: "Can I change jobs while my EB-3 is pending?",
          questionPT: "Posso mudar de emprego enquanto meu EB-3 está pendente?",
          answerEN: "If you change employers before I-140 approval, you must start over. After I-140 approval and 180 days of I-485 pending, you may be able to port to a similar job using AC21 portability.",
          answerPT: "Se você mudar de empregador antes da aprovação do I-140, deve começar de novo. Após aprovação do I-140 e 180 dias de I-485 pendente, você pode conseguir transferir para um emprego semelhante usando portabilidade AC21."
        }
      ]}
      backLink="/services/employment-visas"
      backLabelEN="Back to Employment Visas"
      backLabelPT="Voltar para Vistos de Trabalho"
    />
  );
}
