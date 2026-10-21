'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import BackgroundLayer from '@/components/BackgroundLayer';
import { FileCheck, Calendar, MessageCircle, Plane } from 'lucide-react';

export default function BrazilServicesPage() {
  const { language } = useLanguage();

  const services = [
    {
      icon: FileCheck,
      titleEN: 'DS-160 Form',
      titlePT: 'Formulário DS-160',
      descriptionEN: 'Complete assistance with the online nonimmigrant visa application',
      descriptionPT: 'Assistência completa com o formulário de solicitação de visto online',
      href: '/services/brazil/ds-160',
    },
    {
      icon: Calendar,
      titleEN: 'Consular Scheduling',
      titlePT: 'Agendamento Consular',
      descriptionEN: 'Help scheduling your visa interview appointment',
      descriptionPT: 'Auxílio no agendamento da entrevista consular',
      href: '/services/brazil/consular-scheduling',
    },
    {
      icon: MessageCircle,
      titleEN: 'Interview Preparation',
      titlePT: 'Preparação para Entrevista',
      descriptionEN: 'Comprehensive preparation for your consular interview',
      descriptionPT: 'Preparação completa para sua entrevista no consulado',
      href: '/services/brazil/interview-preparation',
    },
    {
      icon: Plane,
      titleEN: 'B1/B2 Tourist Visa',
      titlePT: 'Visto de Turista B1/B2',
      descriptionEN: 'Complete assistance for business and tourist visa applications',
      descriptionPT: 'Assistência completa para solicitação de visto de negócios e turismo',
      href: '/services/brazil/b1-b2',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundLayer intensity="subtle" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'pt' ? 'Serviços do Brasil' : 'Services from Brazil'}
            </h1>
            <p className="text-xl text-gray-text">
              {language === 'pt'
                ? 'Assistência especializada para brasileiros solicitando vistos americanos'
                : 'Specialized assistance for Brazilians applying for U.S. visas'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href}>
                  <div className="card-premium hover:border-gold-base/50 cursor-pointer h-full group">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-gold-base/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-base/20 transition-colors">
                          <Icon className="w-7 h-7 text-gold-base" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {language === 'pt' ? service.titlePT : service.titleEN}
                        </h3>
                        <p className="text-gray-text leading-relaxed">
                          {language === 'pt' ? service.descriptionPT : service.descriptionEN}
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
