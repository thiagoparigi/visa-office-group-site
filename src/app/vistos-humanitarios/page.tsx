import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Vistos Humanitários',
  description: 'Suporte para vistos humanitários T, U, VAWA e Asylum',
  path: '/vistos-humanitarios',
});

export default function VistosHumanitariosPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Vistos <span className="text-gold-base">Humanitários</span>
          </h1>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Suporte especializado em documentação para casos humanitários.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto card-premium text-center">
            <p className="text-gray-text leading-relaxed">
              T (Tráfico), U (Vítimas de Crime), VAWA (Violência Doméstica) e Asylum.
              Organizamos evidências com cuidado e sensibilidade para fortalecer seu caso.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
