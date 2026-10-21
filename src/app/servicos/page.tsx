import { Heart, Briefcase, Users, Globe } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Serviços',
  description: 'Serviços completos de suporte imigratório',
  path: '/servicos',
});

export default function ServicosPage() {
  const services = [
    {
      icon: Heart,
      title: 'Vistos Humanitários',
      description: 'Suporte completo na organização de documentos para T (Tráfico), U (Vítimas de Crime), VAWA (Violência Doméstica) e Asylum.',
      items: ['Visto T', 'Visto U', 'VAWA', 'Asylum'],
      href: '/services/humanitarian-visas',
    },
    {
      icon: Briefcase,
      title: 'Vistos de Trabalho',
      description: 'Organização de evidências para EB-1, EB-2 NIW, EB-3, O-1 (Habilidade Extraordinária), L-1 (Transferência) e outras categorias profissionais.',
      items: ['EB-1', 'EB-2 NIW', 'EB-3', 'O-1', 'L-1'],
      href: '/services/employment-visas',
    },
    {
      icon: Users,
      title: 'Vistos Familiares',
      description: 'Preparação de petições I-130, I-485 (ajuste de status), I-601A (perdão), processo consular e reunificação familiar.',
      items: ['I-130', 'Ajuste de Status', 'Processo Consular', 'I-601A'],
      href: '/services/family-visas',
    },
    {
      icon: Globe,
      title: 'Serviços do Brasil',
      description: 'Preparação completa para DS-160, agendamento de entrevista, preparação para entrevista e visto de turista B1/B2.',
      items: ['DS-160', 'Agendamento', 'Prep. Entrevista', 'B1/B2'],
      href: '/services/brazil',
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
              Nossos <span className="text-gold-base">Serviços</span>
            </h1>
            <p className="text-lg text-gray-text leading-relaxed">
              Suporte completo e personalizado para cada tipo de caso imigratório
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center justify-center w-16 h-16 bg-gold-base/10 rounded-lg mb-6">
                  <service.icon className="text-gold-base" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-text/80 text-sm mb-6 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-navy-base/50 text-gold-soft text-xs font-semibold rounded-full border border-gold-base/20">
                      {item}
                    </span>
                  ))}
                </div>

                <a href={service.href} className="inline-flex items-center text-gold-base font-semibold hover:text-gold-soft transition-colors">
                  Saiba mais →
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 card-premium text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Não encontrou o que procura?</h2>
            <p className="text-gray-text mb-6">
              Cada caso é único. Entre em contato para discutirmos como podemos ajudar especificamente no seu processo imigratório.
            </p>
            <a href="/contato" className="btn-primary inline-block">
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
