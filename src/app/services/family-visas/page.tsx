'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import BackgroundLayer from '@/components/BackgroundLayer';
import { Heart, FileText, Globe, ShieldCheck } from 'lucide-react';

export default function FamilyVisasPage() {
  const { language } = useLanguage();

  const visas = [
    {
      icon: Heart,
      titleEN: 'I-130 Petition',
      titlePT: 'Petição I-130',
      descriptionEN: 'Petition for alien relative to sponsor family members',
      descriptionPT: 'Petição de parente estrangeiro para patrocinar membros da família',
      href: '/services/family-visas/i-130',
    },
    {
      icon: FileText,
      titleEN: 'Adjustment of Status',
      titlePT: 'Ajuste de Status',
      descriptionEN: 'Apply for green card while in the United States',
      descriptionPT: 'Solicitar green card enquanto estiver nos Estados Unidos',
      href: '/services/family-visas/adjustment-of-status',
    },
    {
      icon: Globe,
      titleEN: 'Consular Processing',
      titlePT: 'Processo Consular',
      descriptionEN: 'Immigrant visa process through U.S. consulate abroad',
      descriptionPT: 'Processo de visto de imigrante através do consulado dos EUA no exterior',
      href: '/services/family-visas/consular-processing',
    },
    {
      icon: ShieldCheck,
      titleEN: 'I-601A Waiver',
      titlePT: 'Dispensa I-601A',
      descriptionEN: 'Provisional unlawful presence waiver',
      descriptionPT: 'Dispensa provisória de presença ilegal',
      href: '/services/family-visas/i-601a',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundLayer intensity="subtle" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'pt' ? 'Vistos Familiares' : 'Family Visas'}
            </h1>
            <p className="text-xl text-gray-text">
              {language === 'pt'
                ? 'Reúna sua família nos Estados Unidos através de petições baseadas em família'
                : 'Reunite your family in the United States through family-based petitions'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
