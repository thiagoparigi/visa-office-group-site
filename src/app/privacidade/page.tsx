import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Política de Privacidade',
  description: 'Política de privacidade da VISA OFFICE GROUP',
  path: '/privacidade',
});

export default function PrivacidadePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">Política de Privacidade</h1>

        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Coleta de Informações</h2>
            <p className="text-gray-600">Coletamos informações que você nos fornece voluntariamente através de formulários de contato, incluindo nome, email, telefone e detalhes sobre seu caso imigratório.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Uso das Informações</h2>
            <p className="text-gray-600">Utilizamos suas informações exclusivamente para fornecer nossos serviços de assistência em preparação e organização de documentos imigratórios.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Proteção de Dados</h2>
            <p className="text-gray-600">Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contato</h2>
            <p className="text-gray-600">Para questões sobre privacidade, entre em contato: contato@visaofficegroup.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
