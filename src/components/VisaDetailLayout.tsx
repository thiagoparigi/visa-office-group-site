'use client';

import { useLanguage } from '@/context/LanguageContext';
import BackgroundLayer from '@/components/BackgroundLayer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Section {
  titleEN: string;
  titlePT: string;
  contentEN: string[];
  contentPT: string[];
}

interface FAQ {
  questionEN: string;
  questionPT: string;
  answerEN: string;
  answerPT: string;
}

interface VisaDetailProps {
  titleEN: string;
  titlePT: string;
  subtitleEN: string;
  subtitlePT: string;
  whoIsItFor: Section;
  whatWeDo: Section;
  documents: Section;
  process: Section;
  faqs: FAQ[];
  backLink: string;
  backLabelEN: string;
  backLabelPT: string;
}

export default function VisaDetailLayout({
  titleEN,
  titlePT,
  subtitleEN,
  subtitlePT,
  whoIsItFor,
  whatWeDo,
  documents,
  process,
  faqs,
  backLink,
  backLabelEN,
  backLabelPT,
}: VisaDetailProps) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <BackgroundLayer intensity="subtle" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href={backLink} className="text-gold-base hover:underline font-semibold inline-flex items-center">
                ← {language === 'pt' ? backLabelPT : backLabelEN}
              </Link>
            </div>

            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {language === 'pt' ? titlePT : titleEN}
              </h1>
              <p className="text-xl text-gray-text mb-8">
                {language === 'pt' ? subtitlePT : subtitleEN}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />
                <Link href="/contato" className="btn-secondary">
                  {language === 'pt' ? 'Agendar Avaliação' : 'Schedule Evaluation'}
                </Link>
              </div>
            </div>

            <div className="space-y-12">
              <section className="card-premium">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {language === 'pt' ? whoIsItFor.titlePT : whoIsItFor.titleEN}
                </h2>
                {(language === 'pt' ? whoIsItFor.contentPT : whoIsItFor.contentEN).map((item, idx) => (
                  <p key={idx} className="text-gray-text leading-relaxed mb-4">
                    {item}
                  </p>
                ))}
              </section>

              <section className="card-premium">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {language === 'pt' ? whatWeDo.titlePT : whatWeDo.titleEN}
                </h2>
                <ul className="space-y-3">
                  {(language === 'pt' ? whatWeDo.contentPT : whatWeDo.contentEN).map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-text">
                      <ChevronRight className="w-5 h-5 text-gold-base mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card-premium">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {language === 'pt' ? documents.titlePT : documents.titleEN}
                </h2>
                <ul className="space-y-3">
                  {(language === 'pt' ? documents.contentPT : documents.contentEN).map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-text">
                      <ChevronRight className="w-5 h-5 text-gold-base mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card-premium">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {language === 'pt' ? process.titlePT : process.titleEN}
                </h2>
                <div className="space-y-4">
                  {(language === 'pt' ? process.contentPT : process.contentEN).map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gold-base/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gold-base font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-text pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-premium">
                <h2 className="text-3xl font-bold text-white mb-8">
                  {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-l-2 border-gold-base/30 pl-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {language === 'pt' ? faq.questionPT : faq.questionEN}
                      </h3>
                      <p className="text-gray-text leading-relaxed">
                        {language === 'pt' ? faq.answerPT : faq.answerEN}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="card-premium bg-gold-base/5 border-gold-base/20">
                <p className="text-sm text-gray-text text-center">
                  {language === 'pt'
                    ? 'Este é um serviço de preparação de documentos e suporte administrativo. Não fornecemos aconselhamento jurídico.'
                    : 'This is a document preparation and administrative support service. We do not provide legal advice.'}
                </p>
              </div>

              <div className="text-center pt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton />
                  <Link href="/contato" className="btn-secondary">
                    {language === 'pt' ? 'Agendar Consulta' : 'Schedule Consultation'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
