'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.reviews': 'Avaliações',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contato',
    'cta.whatsapp': 'Falar no WhatsApp',
    'cta.schedule': 'Agendar avaliação',
    'footer.disclaimer': 'A Visa Office Group oferece assistência na preparação e organização de documentos imigratórios. Não substituímos aconselhamento jurídico. Para questões legais e representação, podemos recomendar um advogado licenciado parceiro, quando necessário.',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.whatsapp': 'Contact on WhatsApp',
    'cta.schedule': 'Schedule Consultation',
    'footer.disclaimer': 'Visa Office Group provides assistance in preparing and organizing immigration documents. We do not replace legal advice. For legal matters and representation, we can recommend a licensed attorney partner when needed.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
