import { MapPin, Mail, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import { getCalendlyUrl } from '@/lib/utils';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Contato',
  description: 'Entre em contato com a VISA OFFICE GROUP',
  path: '/contato',
});

export default function ContatoPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Entre em <span className="text-gold-base">Contato</span>
          </h1>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Estamos prontos para acolher você e seu caso.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="card-premium">
              <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold-base/10 rounded-lg flex-shrink-0">
                    <MapPin className="text-gold-base" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Endereço</p>
                    <p className="text-gray-text/80 text-sm">3050 Station Square, Kissimmee, FL, USA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold-base/10 rounded-lg flex-shrink-0">
                    <Mail className="text-gold-base" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:contato@visaofficegroup.com" className="text-gray-text/80 text-sm hover:text-gold-base transition-colors">contato@visaofficegroup.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold-base/10 rounded-lg flex-shrink-0">
                    <Phone className="text-gold-base" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <a href="tel:+16892981265" className="text-gray-text/80 text-sm hover:text-gold-base transition-colors">+1 (689) 298-1265</a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                  Agendar Consulta
                </a>
              </div>

              <div className="mt-8 p-5 rounded-lg bg-gold-base/5 border border-gold-base/20">
                <p className="text-sm text-gray-text/80 leading-relaxed">
                  <strong className="text-gold-soft">Aviso Legal:</strong> A Visa Office Group oferece assistência na preparação e organização de documentos imigratórios. Não substituímos aconselhamento jurídico. Para questões legais e representação, podemos recomendar um advogado licenciado parceiro, quando necessário.
                </p>
              </div>
            </div>

            <div className="card-premium flex items-center justify-center min-h-[24rem]">
              <p className="text-gray-text/60 text-center">
                <span className="block text-gold-base text-lg font-semibold mb-2">Mapa</span>
                Google Maps Embed
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
