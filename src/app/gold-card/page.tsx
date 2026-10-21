'use client';

import { useLanguage } from '@/context/LanguageContext';
import BackgroundLayer from '@/components/BackgroundLayer';
import Link from 'next/link';
import {
  Crown,
  FileCheck,
  ClipboardCheck,
  FolderOpen,
  ShieldCheck,
  Users,
  DollarSign,
  Building2,
  Globe,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Info,
  MessageCircle,
} from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/utils';

export default function GoldCardPage() {
  const { language, t } = useLanguage();
  const isPT = language === 'pt';

  const whatsappLink = buildWhatsAppLink(
    isPT
      ? 'Olá! Gostaria de saber mais sobre o programa Gold Card da Visa Office Group.'
      : 'Hello! I would like to know more about the Gold Card program from Visa Office Group.'
  );

  const heroBadge = isPT ? 'Programa Gold Card' : 'Gold Card Program';

  const heroTitle = isPT ? (
    <>
      Gold Card: o caminho mais rápido para a{' '}
      <span className="text-gold-base">residência permanente nos EUA</span>
    </>
  ) : (
    <>
      Gold Card: the fastest path to{' '}
      <span className="text-gold-base">permanent residency in the USA</span>
    </>
  );

  const heroSubtitle = isPT
    ? 'O Gold Card (Form I-140G) é o novo programa do governo americano que concede residência permanente por meio das categorias EB-1A (Habilidade Extraordinária) ou EB-2 NIW (Dispensa de Interesse Nacional), com processo simplificado via trumpcard.gov e MyUSCIS.'
    : 'The Gold Card (Form I-140G) is a new U.S. government program that grants permanent residency through the EB-1A (Extraordinary Ability) or EB-2 NIW (National Interest Waiver) categories, with a streamlined process via trumpcard.gov and MyUSCIS.';

  const steps = isPT
    ? [
        { icon: Globe, title: 'trumpcard.gov', desc: 'O candidato ou seu representante cria a conta no portal oficial do governo em trumpcard.gov.' },
        { icon: FileCheck, title: 'Form I-140G', desc: 'Preenchimento e submissão do formulário oficial Gold Card (Form I-140G) no sistema.' },
        { icon: ShieldCheck, title: 'MyUSCIS', desc: 'Acompanhamento do processo pela plataforma MyUSCIS, onde o USCIS publica atualizações e decisões.' },
      ]
    : [
        { icon: Globe, title: 'trumpcard.gov', desc: 'The applicant or their representative creates an account on the official government portal at trumpcard.gov.' },
        { icon: FileCheck, title: 'Form I-140G', desc: 'Completion and submission of the official Gold Card form (Form I-140G) in the system.' },
        { icon: ShieldCheck, title: 'MyUSCIS', desc: 'Track the process through the MyUSCIS platform, where USCIS posts updates and decisions.' },
      ];

  const modules = isPT
    ? [
        {
          icon: ClipboardCheck,
          title: 'Pré-triagem de Elegibilidade',
          price: 'GRATUITA',
          desc: 'Avaliação inicial do seu perfil para identificar enquadramento em EB-1A ou EB-2 NIW. Chamada principal sem custo para verificar se o Gold Card é viável para você.',
          isFree: true,
        },
        {
          icon: FolderOpen,
          title: 'Dossiê de Evidências',
          price: 'US$ 19.990',
          desc: 'Organização completa do dossiê documental: coleta, curadoria e estruturação de todas as evidências exigidas para comprovar elegibilidade na categoria escolhida.',
        },
        {
          icon: ShieldCheck,
          title: 'Organização do Vetting',
          price: 'US$ 4.990',
          desc: 'Preparação e organização do processo de vetting — a verificação de antecedentes e validação de informações conduzida pelas autoridades americanas.',
        },
        {
          icon: FileCheck,
          title: 'Suporte ao Protocolo Online',
          price: isPT ? 'Incluso' : 'Included',
          desc: 'Acompanhamento na navegação e submissão via trumpcard.gov e MyUSCIS. Orientamos o preenchimento do Form I-140G e o acompanhamento do status do processo.',
        },
        {
          icon: Crown,
          title: 'Pacote Completo',
          price: 'US$ 24.990',
          desc: 'Todos os módulos acima em um único pacote: dossiê de evidências + organização do vetting + suporte ao protocolo online. A solução integrada do início ao fim.',
          isFeatured: true,
        },
        {
          icon: Users,
          title: 'Dependente Adicional',
          price: 'US$ 4.990',
          desc: 'Inclusão de um dependente adicional no processo (cônjuge ou filho menor de 21 anos). Cobertura por pessoa extra no mesmo dossiê.',
        },
      ]
    : [
        {
          icon: ClipboardCheck,
          title: 'Eligibility Pre-Screening',
          price: 'FREE',
          desc: 'Initial assessment of your profile to identify fit for EB-1A or EB-2 NIW. A complimentary main call to verify whether the Gold Card is viable for you.',
          isFree: true,
        },
        {
          icon: FolderOpen,
          title: 'Evidence Dossier',
          price: '$19,990',
          desc: 'Complete organization of your documentary dossier: collection, curation, and structuring of all evidence required to prove eligibility in the chosen category.',
        },
        {
          icon: ShieldCheck,
          title: 'Vetting Organization',
          price: '$4,990',
          desc: 'Preparation and organization of the vetting process — the background check and information validation conducted by U.S. authorities.',
        },
        {
          icon: FileCheck,
          title: 'Online Protocol Support',
          price: 'Included',
          desc: 'Guidance navigating and submitting via trumpcard.gov and MyUSCIS. We guide Form I-140G completion and process status tracking.',
        },
        {
          icon: Crown,
          title: 'Complete Package',
          price: '$24,990',
          desc: 'All modules above in a single package: evidence dossier + vetting organization + online protocol support. The integrated solution from start to finish.',
          isFeatured: true,
        },
        {
          icon: Users,
          title: 'Additional Dependent',
          price: '$4,990',
          desc: 'Inclusion of an additional dependent in the process (spouse or child under 21). Coverage per extra person in the same dossier.',
        },
      ];

  const govCosts = isPT
    ? [
        { icon: DollarSign, label: 'Taxa USCIS', value: 'US$ 15.000', note: 'por pessoa — paga diretamente ao governo' },
        { icon: Building2, label: 'Gift Individual', value: 'US$ 1.000.000', note: 'contribuição individual ao programa' },
        { icon: Building2, label: 'Gift Corporativo', value: 'US$ 2.000.000', note: 'contribuição corporativa ao programa' },
      ]
    : [
        { icon: DollarSign, label: 'USCIS Fee', value: '$15,000', note: 'per person — paid directly to the government' },
        { icon: Building2, label: 'Individual Gift', value: '$1,000,000', note: 'individual contribution to the program' },
        { icon: Building2, label: 'Corporate Gift', value: '$2,000,000', note: 'corporate contribution to the program' },
      ];

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-base/10 border border-gold-base/30 mb-8">
              <Crown className="w-4 h-4 text-gold-base" />
              <span className="text-gold-base text-xs font-semibold tracking-widest uppercase">{heroBadge}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-wide">
              {heroTitle}
            </h1>

            <p className="text-gold-soft text-lg md:text-xl font-medium italic mb-6">
              {t('slogan')}
            </p>

            <p className="text-lg md:text-xl text-gray-text mb-10 leading-relaxed max-w-3xl mx-auto">
              {heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                {isPT ? 'Fazer Pré-Triagem Gratuita' : 'Start Free Pre-Screening'}
              </a>
              <a href="#modulos" className="btn-secondary w-full sm:w-auto">
                {isPT ? 'Ver Módulos e Preços' : 'View Modules & Pricing'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É O GOLD CARD */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                {isPT ? <>O que é o <span className="text-gold-base">Gold Card</span></> : <>What is the <span className="text-gold-base">Gold Card</span></>}
              </h2>
              <div className="section-divider max-w-xs mx-auto" />
            </div>

            <div className="card-premium space-y-6">
              <p className="text-gray-text leading-relaxed">
                {isPT
                  ? 'O Gold Card é uma nova via de imigração baseada em emprego, em que o governo americano concede residência permanente (green card) por meio do Form I-140G. O programa atende candidatos que se enquadram nas categorias EB-1A (Habilidade Extraordinária) ou EB-2 NIW (Dispensa de Interesse Nacional), com um processo mais célere do que as rotas tradicionais.'
                  : 'The Gold Card is a new employment-based immigration pathway in which the U.S. government grants permanent residency (green card) through Form I-140G. The program serves applicants who qualify under the EB-1A (Extraordinary Ability) or EB-2 NIW (National Interest Waiver) categories, with a faster process than traditional routes.'}
              </p>
              <p className="text-gray-text leading-relaxed">
                {isPT
                  ? 'O processo é conduzido em plataformas oficiais do governo: o candidato (ou seu representante) inicia em trumpcard.gov, submete o Form I-140G e acompanha o andamento em MyUSCIS. A Visa Office Group oferece suporte completo na preparação documental e na navegação desses sistemas — sem fornecer aconselhamento jurídico.'
                  : 'The process is conducted on official government platforms: the applicant (or their representative) starts at trumpcard.gov, submits Form I-140G, and tracks progress on MyUSCIS. Visa Office Group provides complete support in document preparation and navigating these systems — without providing legal advice.'}
              </p>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gold-base/5 border border-gold-base/20">
                <Info className="w-5 h-5 text-gold-base mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-text/90 leading-relaxed">
                  {isPT
                    ? 'A elegibilidade depende do enquadramento em EB-1A ou EB-2 NIW. Nem todo candidato se qualifica. A pré-triagem gratuita identifica se o Gold Card é uma via viável para o seu caso.'
                    : 'Eligibility depends on qualifying for EB-1A or EB-2 NIW. Not every candidate qualifies. The free pre-screening identifies whether the Gold Card is a viable pathway for your case.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ETAPAS DO PROCESSO */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
              {isPT ? <>Como <span className="text-gold-base">funciona</span></> : <>How it <span className="text-gold-base">works</span></>}
            </h2>
            <p className="text-gray-text max-w-2xl mx-auto">
              {isPT ? 'O processo oficial do Gold Card em três etapas' : 'The official Gold Card process in three steps'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="card-premium text-center">
                <div className="flex items-center justify-center w-14 h-14 bg-gold-base rounded-full mx-auto mb-5">
                  <step.icon className="text-navy-deep" size={26} />
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-navy-base/50 rounded-full mx-auto mb-4 border border-gold-base/30">
                  <span className="text-gold-base font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-text/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS E PREÇOS */}
      <section id="modulos" className="relative py-24 overflow-hidden scroll-mt-32">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
              {isPT ? <>Módulos e <span className="text-gold-base">Preços</span></> : <>Modules & <span className="text-gold-base">Pricing</span></>}
            </h2>
            <p className="text-gray-text max-w-2xl mx-auto">
              {isPT
                ? 'Escolha o módulo ideal para a sua necessidade ou opte pelo pacote completo.'
                : 'Choose the ideal module for your needs or opt for the complete package.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <div
                  key={index}
                  className={`card-premium flex flex-col ${mod.isFeatured ? 'border-gold-base/40 ring-1 ring-gold-base/20' : ''}`}
                >
                  {mod.isFeatured && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-deep bg-gold-base rounded-full">
                        {isPT ? 'Recomendado' : 'Recommended'}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-center w-12 h-12 bg-gold-base/10 rounded-lg mb-5">
                    <Icon className="text-gold-base" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{mod.title}</h3>
                  <div className="mb-4">
                    <span className={`text-2xl font-bold ${mod.isFree ? 'text-gold-soft' : 'text-gold-base'}`}>
                      {mod.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-text/70 leading-relaxed mb-6 flex-grow">{mod.desc}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${mod.isFeatured ? 'text-navy-deep bg-gold-base hover:bg-gold-600' : 'text-gold-base border-2 border-gold-base/60 hover:bg-gold-base/10 hover:border-gold-base'}`}
                  >
                    {isPT ? 'Saber Mais' : 'Learn More'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOS DO GOVERNO */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                {isPT ? <>Custos pagos ao <span className="text-gold-base">governo</span></> : <>Costs paid to the <span className="text-gold-base">government</span></>}
              </h2>
              <p className="text-gray-text max-w-2xl mx-auto mb-4">
                {isPT
                  ? 'Valores abaixo são pagos diretamente ao governo americano e não estão inclusos nos honorários da Visa Office Group.'
                  : 'The amounts below are paid directly to the U.S. government and are not included in Visa Office Group fees.'}
              </p>
              <div className="section-divider max-w-xs mx-auto" />
            </div>

            <div className="space-y-4">
              {govCosts.map((cost, index) => {
                const Icon = cost.icon;
                return (
                  <div key={index} className="card-premium flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-gold-base/10 rounded-lg flex-shrink-0">
                        <Icon className="text-gold-base" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{cost.label}</p>
                        <p className="text-xs text-gray-text/60">{cost.note}</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-gold-base whitespace-nowrap">{cost.value}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 p-5 rounded-lg bg-gold-base/5 border border-gold-base/20">
              <AlertTriangle className="w-5 h-5 text-gold-soft mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-text/90 leading-relaxed">
                {isPT
                  ? 'As taxas do governo e os gifts são definidos pelo programa oficial e podem sofrer alterações. Confirme sempre os valores vigentes em trumpcard.gov antes de iniciar o processo.'
                  : 'Government fees and gifts are set by the official program and may change. Always confirm current amounts at trumpcard.gov before starting the process.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto card-premium bg-gold-base/5 border-gold-base/20">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-gold-base mt-0.5 flex-shrink-0" />
              <div className="space-y-3">
                <p className="text-sm text-gray-text leading-relaxed">
                  {isPT
                    ? 'A Visa Office Group é um Document Preparation Office (escritório de preparação de documentos). NÃO somos um escritório de advocacia e NÃO fornecemos aconselhamento jurídico.'
                    : 'Visa Office Group is a Document Preparation Office. We are NOT a law firm and do NOT provide legal advice.'}
                </p>
                <p className="text-sm text-gray-text/80 leading-relaxed">
                  {isPT
                    ? 'A aprovação de qualquer benefício imigratório depende exclusivamente das autoridades americanas (USCIS). Nenhum resultado é garantido. Para questões legais, podemos recomendar um advogado licenciado parceiro.'
                    : 'Approval of any immigration benefit depends solely on U.S. authorities (USCIS). No outcome is guaranteed. For legal matters, we can recommend a licensed attorney partner.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            {isPT ? <>Pronto para o <span className="text-gold-base">Gold Card?</span></> : <>Ready for the <span className="text-gold-base">Gold Card?</span></>}
          </h2>
          <p className="text-gray-text text-lg mb-10 max-w-2xl mx-auto">
            {isPT
              ? 'Comece com uma pré-triagem gratuita. Nossa equipe avalia se o Gold Card é o caminho certo para você.'
              : 'Start with a free pre-screening. Our team assesses whether the Gold Card is the right path for you.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {isPT ? 'Falar no WhatsApp' : 'Contact on WhatsApp'}
              </span>
            </a>
            <Link href="/contato" className="btn-secondary">
              {isPT ? 'Agendar Avaliação' : 'Schedule Evaluation'}
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 max-w-2xl mx-auto">
            <CheckCircle2 className="w-4 h-4 text-gold-base flex-shrink-0" />
            <p className="text-xs text-gray-text/70 leading-relaxed text-left">
              {isPT
                ? 'Atendimento humano, transparente e acolhedor — em português e inglês.'
                : 'Human, transparent, and welcoming service — in Portuguese and English.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
