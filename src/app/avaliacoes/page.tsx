import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Avaliações',
  description: 'O que nossos clientes dizem sobre nós',
  path: '/avaliacoes',
});

export default function AvaliacoesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">Avaliações de Clientes</h1>
        <p className="text-gray-600">Veja o que nossos clientes dizem sobre nosso trabalho.</p>
      </div>
    </div>
  );
}
