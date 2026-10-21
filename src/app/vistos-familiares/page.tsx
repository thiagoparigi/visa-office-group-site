import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Vistos Familiares',
  description: 'Preparação de documentos para petições e processos familiares',
  path: '/vistos-familiares',
});

export default function VistosFamiliaresPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Vistos <span className="text-gold-base">Familiares</span>
          </h1>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Suporte completo em processos baseados em família.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto card-premium text-center">
            <p className="text-gray-text leading-relaxed">
              Preparação de petições I-130, I-485 (ajuste de status), I-601A (perdão), processo consular e reunificação familiar.
              Cada caso é único — entre em contato para uma avaliação personalizada.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
