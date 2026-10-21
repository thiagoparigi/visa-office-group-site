import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Avaliações',
  description: 'O que nossos clientes dizem sobre nós',
  path: '/avaliacoes',
});

export default function AvaliacoesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Avaliações de <span className="text-gold-base">Clientes</span>
          </h1>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nosso trabalho.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center card-premium">
            <p className="text-gray-text leading-relaxed">
              Em breve, traremos depoimentos reais de clientes que confiaram na Visa Office Group para organizar seus processos imigratórios.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
