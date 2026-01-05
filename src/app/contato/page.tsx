import { MapPin, Mail, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import { getCalendlyUrl } from '@/lib/utils';

export const metadata = generatePageMetadata({
  title: 'Contato',
  description: 'Entre em contato com a VISA OFFICE GROUP',
  path: '/contato',
});

export default function ContatoPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">Entre em Contato</h1>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Informações de Contato</h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold-500 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-gray-600">3050 Station Square, Kissimmee, FL, USA</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-gold-500 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contato@visaofficegroup.com" className="text-gray-600 hover:text-gold-500">contato@visaofficegroup.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-gold-500 mt-1" size={24} />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="tel:+16892981265" className="text-gray-600 hover:text-gold-500">+1 (689) 298-1265</a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
                Agendar Consulta
              </a>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Aviso Legal:</strong> A Visa Office Group oferece assistência na preparação e organização de documentos imigratórios. Não substituímos aconselhamento jurídico. Para questões legais e representação, podemos recomendar um advogado licenciado parceiro, quando necessário.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Mapa - Google Maps Embed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
