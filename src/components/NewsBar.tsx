'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Instagram } from 'lucide-react';

export default function NewsBar() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-red-news py-1.5 overflow-hidden z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[30px]">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <p className="text-white font-semibold text-xs tracking-widest uppercase">
              {language === 'pt' ? 'Visa Office NEWS' : 'Visa Office Update'}
            </p>
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </div>

          <a
            href="https://www.instagram.com/visaofficegroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-white hover:text-gold-base transition-colors duration-300 group"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="text-xs font-medium hidden sm:inline group-hover:underline">
              {language === 'pt' ? 'Siga' : 'Follow'} @visaofficegroup
            </span>
            <span className="text-xs font-medium sm:hidden">@visaofficegroup</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-base opacity-60" />
    </div>
  );
}
