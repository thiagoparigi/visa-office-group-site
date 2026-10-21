'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import BackgroundLayer from '@/components/BackgroundLayer';
import { Award, Briefcase, Users, Lightbulb, Building } from 'lucide-react';

export default function EmploymentVisasPage() {
  const { language } = useLanguage();

  const visas = [
    {
      icon: Award,
      titleEN: 'EB-1 Visa',
      titlePT: 'Visto EB-1',
      descriptionEN: 'For individuals with extraordinary ability, outstanding professors, and multinational executives',
      descriptionPT: 'Para indivíduos com habilidade extraordinária, professores notáveis e executivos multinacionais',
      href: '/services/employment-visas/eb-1',
    },
    {
      icon: Lightbulb,
      titleEN: 'EB-2 NIW',
      titlePT: 'EB-2 NIW',
      descriptionEN: 'National Interest Waiver for professionals whose work benefits the United States',
      descriptionPT: 'Dispensa de Interesse Nacional para profissionais cujo trabalho beneficia os EUA',
      href: '/services/employment-visas/eb-2-niw',
    },
    {
      icon: Briefcase,
      titleEN: 'EB-3 Visa',
      titlePT: 'Visto EB-3',
      descriptionEN: 'For skilled workers, professionals, and other workers',
      descriptionPT: 'Para trabalhadores qualificados, profissionais e outros trabalhadores',
      href: '/services/employment-visas/eb-3',
    },
    {
      icon: Users,
      titleEN: 'O-1 Visa',
      titlePT: 'Visto O-1',
      descriptionEN: 'For individuals with extraordinary ability in sciences, arts, education, business, or athletics',
      descriptionPT: 'Para indivíduos com habilidade extraordinária em ciências, artes, educação, negócios ou atletismo',
      href: '/services/employment-visas/o-1',
    },
    {
      icon: Building,
      titleEN: 'L-1 Visa',
      titlePT: 'Visto L-1',
      descriptionEN: 'Intracompany transfer for managers, executives, and specialized knowledge workers',
      descriptionPT: 'Transferência interna para gerentes, executivos e trabalhadores com conhecimento especializado',
      href: '/services/employment-visas/l-1',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundLayer intensity="subtle" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'pt' ? 'Vistos de Trabalho' : 'Employment Visas'}
            </h1>
            <p className="text-xl text-gray-text">
              {language === 'pt'
                ? 'Green cards baseados em emprego para profissionais qualificados'
                : 'Employment-based green cards for skilled professionals'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visas.map((visa, index) => {
              const Icon = visa.icon;
              return (
                <Link key={index} href={visa.href}>
                  <div className="card-premium hover:border-gold-base/50 cursor-pointer h-full group">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-gold-base/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-base/20 transition-colors">
                          <Icon className="w-7 h-7 text-gold-base" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {language === 'pt' ? visa.titlePT : visa.titleEN}
                        </h3>
                        <p className="text-gray-text leading-relaxed">
                          {language === 'pt' ? visa.descriptionPT : visa.descriptionEN}
                        </p>
                      </div>

                      <div className="mt-auto pt-6">
                        <span className="text-gold-base font-semibold group-hover:underline">
                          {language === 'pt' ? 'Ver detalhes' : 'View details'} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services" className="text-gold-base hover:underline font-semibold">
              ← {language === 'pt' ? 'Voltar para Serviços' : 'Back to Services'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
