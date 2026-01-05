'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-text hover:text-gold-base transition-colors"
    >
      <Globe size={18} />
      <span className="uppercase">{language === 'pt' ? 'EN' : 'PT'}</span>
    </button>
  );
}
