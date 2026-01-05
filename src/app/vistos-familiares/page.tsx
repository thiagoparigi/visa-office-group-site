import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Vistos Familiares',
  description: 'Preparação de documentos para petições e processos familiares',
  path: '/vistos-familiares',
});

export default function VistosFamiliaresPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">Vistos Familiares</h1>
        <p className="text-gray-600">Suporte completo em processos baseados em família.</p>
      </div>
    </div>
  );
}
