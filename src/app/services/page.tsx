'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import BackgroundLayer from '@/components/BackgroundLayer';
import { Shield, Briefcase, Heart, Globe } from 'lucide-react';

export default function ServicesPage() {
  const { language } = useLanguage();

  const serviceCategories = [
    {
      icon: Shield,
      titleEN: 'Humanitarian Visas',
      titlePT: 'Vistos Humanitários',
      descriptionEN: 'Protection and legal relief for victims of trafficking, crime, domestic violence, and persecution',
      descriptionPT: 'Proteção e alívio legal para vítimas de tráfico, crime, violência doméstica e perseguição',
      href: '/services/humanitarian-visas',
    },
    {
      icon: Briefcase,
      titleEN: 'Employment Visas',
      titlePT: 'Vistos de Trabalho',
      descriptionEN: 'Employment-based green cards and work visas for skilled professionals and extraordinary ability individuals',
      descriptionPT: 'Green cards baseados em emprego e vistos de trabalho para profissionais qualificados e indivíduos com habilidade extraordinária',
      href: '/services/employment-visas',
    },
    {
      icon: Heart,
      titleEN: 'Family Visas',
      titlePT: 'Vistos Familiares',
      descriptionEN: 'Family-based immigration petitions, adjustment of status, consular processing, and waivers',
      descriptionPT: 'Petições de imigração baseadas em família, ajuste de status, processo consular e dispensas',
      href: '/services/family-visas',
    },
    {
      icon: Globe,
      titleEN: 'Services from Brazil',
      titlePT: 'Serviços do Brasil',
      descriptionEN: 'Complete assistance for Brazilians applying for U.S. visas including DS-160, scheduling, and interview preparation',
      descriptionPT: 'Assistência completa para brasileiros solicitando vistos americanos incluindo DS-160, agendamento e preparação para entrevista',
      href: '/services/brazil',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundLayer intensity="full" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'pt' ? 'Nossos Serviços' : 'Our Services'}
            </h1>
            <p className="text-xl text-gray-text">
              {language === 'pt'
                ? 'Suporte completo de preparação de documentos para cada tipo de caso imigratório'
                : 'Complete document preparation support for every type of immigration case'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} href={category.href}>
                  <div className="card-premium hover:border-gold-base/50 cursor-pointer h-full group">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gold-base/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-base/20 transition-colors">
                          <Icon className="w-8 h-8 text-gold-base" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {language === 'pt' ? category.titlePT : category.titleEN}
                        </h3>
                        <p className="text-gray-text leading-relaxed">
                          {language === 'pt' ? category.descriptionPT : category.descriptionEN}
                        </p>
                      </div>

                      <div className="mt-auto pt-6">
                        <span className="text-gold-base font-semibold group-hover:underline">
                          {language === 'pt' ? 'Ver opções' : 'View options'} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto card-premium bg-gold-base/5 border-gold-base/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {language === 'pt' ? 'Precisa de Ajuda?' : 'Need Help?'}
            </h2>
            <p className="text-gray-text mb-6">
              {language === 'pt'
                ? 'Cada caso é único. Entre em contato para discutirmos como podemos ajudar especificamente no seu processo.'
                : 'Every case is unique. Contact us to discuss how we can specifically help with your immigration process.'}
            </p>
            <Link href="/contato" className="btn-primary inline-block">
              {language === 'pt' ? 'Falar com a equipe' : 'Contact our team'}
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-text">
              {language === 'pt'
                ? 'Este é um serviço de preparação de documentos e suporte administrativo. Não fornecemos aconselhamento jurídico.'
                : 'This is a document preparation and administrative support service. We do not provide legal advice.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
