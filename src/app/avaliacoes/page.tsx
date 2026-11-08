import { generatePageMetadata } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';
import ReviewForm from '@/components/ReviewForm';

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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <p className="text-gray-text leading-relaxed mb-6">{"Eu assino embaixo, hoje tive assistência por dois excelentes profissionais, me ouviu, me orientou, me ajudou a tirar um peso da alma. Logo, logo irei compartilhar minha história e experiência com meus amigos. Não existe nada no mundo do que nós sentirmos seguros, orientados por quem entende do assunto!! Me sinto leve!! e muito grata, vocês vão fazer diferença na minha vida e eu farei na de vocês!!"}</p>
              <p className="font-semibold text-white">Alice Souza</p>
              <p className="text-sm text-gold-soft">Fonte: Instagram</p>
            </div>
            <div className="card-premium">
              <p className="text-gray-text leading-relaxed mb-6">{"Quero agradecer a vocês pelo suporte que estão oferecendo para @elianefarmer num momento de muita dor e sofrimento. Esse acontecimento conforta e traz credibilidade ao trabalho de vocês, por isso comecei a seguir o seu perfil, gratidão 🙏"}</p>
              <p className="font-semibold text-white">Adriana Martins</p>
              <p className="text-sm text-gold-soft">Fonte: Instagram</p>
            </div>
            <div className="card-premium">
              <p className="text-gray-text leading-relaxed mb-6">{"Aí são os melhores 👏👏 realmente lutam pelo seu processo."}</p>
              <p className="font-semibold text-white">Wesley Molina</p>
              <p className="text-sm text-gold-soft">Fonte: Instagram</p>
            </div>
            <div className="card-premium">
              <p className="text-gray-text leading-relaxed mb-6">{"Parabéns por terem atendido tão prontamente a @elianefarmer! Muito obrigada 🙌🙏🏻"}</p>
              <p className="font-semibold text-white">Miriam Bruno</p>
              <p className="text-sm text-gold-soft">Fonte: Instagram</p>
            </div>
            <div className="card-premium">
              <p className="text-gray-text leading-relaxed mb-6">{"Essa empresa é realmente séria, trabalha com muito profissionalismo e agilidade, sempre pronta a responder e tirar quaisquer dúvidas. Eu realmente indico os trabalhos oferecidos por eles. Em tudo foram verdadeiramente profissionais. Obrigada, muito obrigada @VISAOFFICEGROUP"}</p>
              <p className="font-semibold text-white">Lubiana Souza e Marcos Antônio Torres de Paula</p>
              <p className="text-sm text-gold-soft">Fonte: WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
