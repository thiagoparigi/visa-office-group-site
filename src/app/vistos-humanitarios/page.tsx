import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Vistos Humanitários',
  description: 'Suporte para vistos humanitários T, U, VAWA e Asylum',
  path: '/vistos-humanitarios',
});

export default function VistosHumanitariosPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">Vistos Humanitários</h1>
        <p className="text-gray-600">Suporte especializado em documentação para casos humanitários.</p>
      </div>
    </div>
  );
}
