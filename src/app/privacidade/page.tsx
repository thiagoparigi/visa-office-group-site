import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Política de Privacidade',
  description: 'Política de privacidade da VISA OFFICE GROUP',
  path: '/privacidade',
});

export default function PrivacidadePage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Política de <span className="text-gold-base">Privacidade</span>
          </h1>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="card-premium">
              <h2 className="text-2xl font-bold text-gold-base mb-4">Coleta de Informações</h2>
              <p className="text-gray-text leading-relaxed">Coletamos informações que você nos fornece voluntariamente através de formulários de contato, incluindo nome, email, telefone e detalhes sobre seu caso imigratório.</p>
            </section>

            <section className="card-premium">
              <h2 className="text-2xl font-bold text-gold-base mb-4">Uso das Informações</h2>
              <p className="text-gray-text leading-relaxed">Utilizamos suas informações exclusivamente para fornecer nossos serviços de assistência em preparação e organização de documentos imigratórios.</p>
            </section>

            <section className="card-premium">
              <h2 className="text-2xl font-bold text-gold-base mb-4">Proteção de Dados</h2>
              <p className="text-gray-text leading-relaxed">Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado.</p>
            </section>

            <section className="card-premium">
              <h2 className="text-2xl font-bold text-gold-base mb-4">Contato</h2>
              <p className="text-gray-text leading-relaxed">Para questões sobre privacidade, entre em contato: contato@visaofficegroup.com</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
