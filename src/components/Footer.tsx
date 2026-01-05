'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-navy-deep text-gray-text overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src="/logo-dark.svg" alt="VISA OFFICE GROUP" width={180} height={54} className="h-14 w-auto mb-6" />
            <p className="text-sm leading-relaxed text-gray-text/80">Suporte completo na preparação e organização do seu processo imigratório.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-gold-base transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/servicos" className="text-sm hover:text-gold-base transition-colors">{t('nav.services')}</Link></li>
              <li><Link href="/sobre" className="text-sm hover:text-gold-base transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/avaliacoes" className="text-sm hover:text-gold-base transition-colors">{t('nav.reviews')}</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-gold-base transition-colors">FAQ</Link></li>
              <li><Link href="/contato" className="text-sm hover:text-gold-base transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Serviços</h3>
            <ul className="space-y-2">
              <li><Link href="/vistos-humanitarios" className="text-sm hover:text-gold-base transition-colors">Vistos Humanitários</Link></li>
              <li><Link href="/vistos-trabalho" className="text-sm hover:text-gold-base transition-colors">Vistos de Trabalho</Link></li>
              <li><Link href="/vistos-familiares" className="text-sm hover:text-gold-base transition-colors">Vistos Familiares</Link></li>
              <li><Link href="/privacidade" className="text-sm hover:text-gold-base transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-base mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-text/80">3050 Station Square, Kissimmee, FL, USA</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gold-base mt-1 flex-shrink-0" />
                <a href="mailto:contato@visaofficegroup.com" className="text-sm hover:text-gold-base transition-colors">contato@visaofficegroup.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gold-base mt-1 flex-shrink-0" />
                <a href="tel:+16892981265" className="text-sm hover:text-gold-base transition-colors">+1 (689) 298-1265</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-text/70 mb-4">Atendimento em todo os EUA e suporte remoto para clientes no Brasil.</p>
          <p className="text-xs text-gray-text/60 leading-relaxed mb-6">{t('footer.disclaimer')}</p>
          <p className="text-xs text-gray-text/50">&copy; {new Date().getFullYear()} VISA OFFICE GROUP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
