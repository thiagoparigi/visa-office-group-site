import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Vistos de Trabalho',
  description: 'Organização de documentos para vistos de trabalho EB-3, O-1, L-1',
  path: '/vistos-trabalho',
});

export default function VistosTrabalhoPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Vistos de <span className="text-gold-base">Trabalho</span>
          </h1>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Organização profissional de evidências para categorias de trabalho.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto card-premium text-center">
            <p className="text-gray-text leading-relaxed">
              EB-1, EB-2 NIW, EB-3, O-1 (Habilidade Extraordinária), L-1 (Transferência) e outras categorias profissionais.
              Preparamos pacotes documentais completos para fortalecer sua petição.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
