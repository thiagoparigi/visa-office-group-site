import { Heart, Briefcase, Users, Globe, FileCheck, CheckCircle, ListChecks, Eye, Bell } from 'lucide-react';
import { buildWhatsAppLink, getCalendlyUrl } from '@/lib/utils';
import { generateLocalBusinessSchema } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';
import TrustBadges from '@/components/TrustBadges';

export default function HomePage() {
  const services = [
    {
      icon: Heart,
      title: 'Vistos Humanitários',
      description: 'T, U, VAWA, Asylum - organização completa de evidências',
      href: '/vistos-humanitarios',
    },
    {
      icon: Briefcase,
      title: 'Vistos de Trabalho',
      description: 'EB-3, O-1, L-1 - pacotes profissionais de qualificação',
      href: '/vistos-trabalho',
    },
    {
      icon: Users,
      title: 'Vistos Familiares',
      description: 'I-130, I-485, Parole - documentação familiar completa',
      href: '/vistos-familiares',
    },
    {
      icon: Globe,
      title: 'Vistos no Brasil',
      description: 'DS-160, agendamento e preparação para entrevista',
      href: '/servicos',
    },
  ];

  const processSteps = [
    { icon: FileCheck, title: 'Avaliação inicial', description: 'Diagnóstico do caso e estratégia documental' },
    { icon: ListChecks, title: 'Checklist e estratégia', description: 'Lista completa de documentos necessários' },
    { icon: CheckCircle, title: 'Organização de evidências', description: 'Preparação profissional de todas as provas' },
    { icon: Eye, title: 'Revisão final', description: 'Verificação completa antes da submissão' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <BackgroundLayer intensity="full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-wide">
              Imigração com verdade.
              <br />
              <span className="text-gold-base">Organização de evidências.</span>
              <br />
              <span className="text-gray-text">Acompanhamento real.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-text mb-10 leading-relaxed max-w-3xl mx-auto">
              Assistência completa na preparação e organização do seu processo — do checklist ao pacote final.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
              <a href={buildWhatsAppLink('Olá! Gostaria de fazer um diagnóstico do meu caso imigratório. Pode me ajudar?')} className="btn-primary">
                Falar no WhatsApp
              </a>
              <a href={getCalendlyUrl()} className="btn-secondary">
                Agendar Avaliação
              </a>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">Escolha sua categoria</h2>
            <p className="text-gray-text max-w-2xl mx-auto">Suporte especializado para cada tipo de processo imigratório</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="card-premium group hover:border-gold-base/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gold-base/10 rounded-lg mb-6 group-hover:bg-gold-base/20 transition-colors">
                  <service.icon className="text-gold-base" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-text/80 text-sm mb-6 leading-relaxed">{service.description}</p>
                <span className="text-gold-base font-semibold text-sm group-hover:text-gold-soft transition-colors">
                  Ver detalhes →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="subtle" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">Como funciona</h2>
            <p className="text-gray-text max-w-2xl mx-auto">Processo claro, transparente e organizado em etapas</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gold-base rounded-full mx-auto mb-4">
                  <step.icon className="text-navy-deep" size={28} />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-navy-deep/50 rounded-full mx-auto mb-4 border border-gold-base/30">
                  <span className="text-gold-base font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-text/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <BackgroundLayer intensity="full" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Pronto para dar o próximo passo
            <br />
            <span className="text-gold-base">com segurança?</span>
          </h2>
          <p className="text-gray-text text-lg mb-10 max-w-2xl mx-auto">
            Atendimento humano. Clareza desde o primeiro contato.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={buildWhatsAppLink('Olá! Gostaria de fazer um diagnóstico do meu caso imigratório. Pode me ajudar?')} className="btn-primary">
              Falar no WhatsApp
            </a>
            <a href={getCalendlyUrl()} className="btn-secondary">
              Agendar Avaliação
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
