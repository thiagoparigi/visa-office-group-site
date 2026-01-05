'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import BackgroundLayer from '@/components/BackgroundLayer';
import { Shield, Heart, Scale, Home } from 'lucide-react';

export default function HumanitarianVisasPage() {
  const { language } = useLanguage();

  const visas = [
    {
      icon: Shield,
      titleEN: 'T Visa',
      titlePT: 'Visto T',
      descriptionEN: 'Protection for victims of human trafficking',
      descriptionPT: 'Proteção para vítimas de tráfico humano',
      href: '/services/humanitarian-visas/t-visa',
    },
    {
      icon: Heart,
      titleEN: 'U Visa',
      titlePT: 'Visto U',
      descriptionEN: 'Protection for crime victims who assist law enforcement',
      descriptionPT: 'Proteção para vítimas de crimes que auxiliam autoridades',
      href: '/services/humanitarian-visas/u-visa',
    },
    {
      icon: Scale,
      titleEN: 'VAWA',
      titlePT: 'VAWA',
      descriptionEN: 'Violence Against Women Act self-petition',
      descriptionPT: 'Auto-petição para vítimas de violência doméstica',
      href: '/services/humanitarian-visas/vawa',
    },
    {
      icon: Home,
      titleEN: 'Asylum',
      titlePT: 'Asilo',
      descriptionEN: 'Protection for those fleeing persecution',
      descriptionPT: 'Proteção para pessoas fugindo de perseguição',
      href: '/services/humanitarian-visas/asylum',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundLayer intensity="subtle" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'pt' ? 'Vistos Humanitários' : 'Humanitarian Visas'}
            </h1>
            <p className="text-xl text-gray-text">
              {language === 'pt'
                ? 'Proteção e esperança para vítimas de crimes, abuso e perseguição'
                : 'Protection and hope for victims of crime, abuse, and persecution'}
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
