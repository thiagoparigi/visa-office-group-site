import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

export const metadata = generatePageMetadata({
  title: 'Sobre',
  description: 'Conheça a VISA OFFICE GROUP',
  path: '/sobre',
});

export default function SobrePage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Sobre <span className="text-gold-base">Nós</span>
          </h1>
          <p className="text-lg text-gold-soft font-medium italic mb-4">Você chega. A gente acolhe.</p>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Missão: Transformar o processo imigratório com clareza, organização e humanidade.
          </p>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-gold-base mb-4">Our Mission</h3>
              <p className="text-gray-text leading-relaxed">
                Our mission is to transform the immigration process with clarity, organization, and humanity.
                We are committed to guiding individuals and families with responsibility, transparency, and respect, understanding that every case represents a life, a story, and a future.
              </p>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-gold-base mb-4">Our Values</h3>
              <p className="text-gray-text leading-relaxed mb-6">
                We operate with integrity, responsibility, and compassion.
                We value truth, ethical practice, and personalized service, believing that immigration work must always be done with care, excellence, and purpose.
              </p>
              <p className="text-gray-text/80 italic border-l-2 border-gold-base/30 pl-4">
                &ldquo;For all the promises of God find their Yes in Him.&rdquo;<br />
                <span className="text-sm text-gray-text/60">2 Corinthians 1:20</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
