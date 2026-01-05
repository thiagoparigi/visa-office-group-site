import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Vistos de Trabalho',
  description: 'Organização de documentos para vistos de trabalho EB-3, O-1, L-1',
  path: '/vistos-trabalho',
});

export default function VistosTrabalhoPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">Vistos de Trabalho</h1>
        <p className="text-gray-600">Organização profissional de evidências para categorias de trabalho.</p>
      </div>
    </div>
  );
}
