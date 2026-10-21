'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppLink, getCalendlyUrl } from '@/lib/utils';
import LanguageToggle from './LanguageToggle';
import NewsBar from './NewsBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/servicos', label: t('nav.services') },
    { href: '/gold-card', label: t('nav.goldcard') },
    { href: '/vagas-eb3', label: t('nav.eb3') },
    { href: '/sobre', label: t('nav.about') },
    { href: '/fundacao', label: t('nav.foundation') },
    { href: '/avaliacoes', label: t('nav.reviews') },
    { href: '/faq', label: 'FAQ' },
    { href: '/contato', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <NewsBar />
      <div className={`relative z-40 transition-all duration-500 ${isScrolled ? 'bg-navy-deep/90 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-navy-deep/60 to-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex flex-col justify-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image src="/logo/selo-vog-transparente.png" alt="VISA OFFICE GROUP" width={44} height={44} className="h-11 w-11 flex-shrink-0" priority />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm sm:text-base leading-tight tracking-wide">VISA OFFICE GROUP</span>
                  <span className="hidden sm:inline text-gold-soft text-xs font-medium italic leading-tight">{t('slogan')}</span>
                </div>
              </Link>
              <div className="flex items-center gap-4 mt-1.5">
                <a href="https://instagram.com/visaofficegroup" target="_blank" rel="noopener noreferrer" aria-label="Instagram @visaofficegroup" className="flex items-center gap-1.5 text-gold-soft hover:text-white transition-colors">
                  <Instagram size={14} />
                  <span className="text-xs font-medium">@visaofficegroup</span>
                </a>
                <a href="https://instagram.com/visaofficefoundation" target="_blank" rel="noopener noreferrer" aria-label="Instagram @visaofficefoundation" className="flex items-center gap-1.5 text-gold-soft hover:text-white transition-colors">
                  <Instagram size={14} />
                  <span className="text-xs font-medium">@visaofficefoundation</span>
                </a>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-text hover:text-gold-base transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageToggle />
              <a href={buildWhatsAppLink('Olá! Gostaria de fazer um diagnóstico do meu caso imigratório. Pode me ajudar?')} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-semibold text-gold-base border-2 border-gold-base/60 rounded-lg hover:bg-gold-base/10 hover:border-gold-base transition-all duration-300">
                {t('cta.whatsapp')}
              </a>
              <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-semibold text-navy-deep bg-gold-base rounded-lg hover:bg-gold-600 transition-all duration-300 shadow-lg">
                {t('cta.schedule')}
              </a>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-text hover:text-gold-base transition-colors">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-deep/95 backdrop-blur-md border-t border-gold-base/15">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-base font-medium text-gray-text hover:text-gold-base transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gold-base/20">
                <LanguageToggle />
                <a href={buildWhatsAppLink('Olá! Gostaria de fazer um diagnóstico do meu caso imigratório. Pode me ajudar?')} target="_blank" rel="noopener noreferrer" className="block w-full px-5 py-3 text-center text-sm font-semibold text-gold-base border-2 border-gold-base/60 rounded-lg">
                  {t('cta.whatsapp')}
                </a>
                <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer" className="block w-full px-5 py-3 text-center text-sm font-semibold text-navy-deep bg-gold-base rounded-lg">
                  {t('cta.schedule')}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
