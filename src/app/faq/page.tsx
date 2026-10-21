import { generatePageMetadata, generateFAQSchema } from '@/lib/seo';
import BackgroundLayer from '@/components/BackgroundLayer';

const faqs = [
  {
    question: 'Vocês são um escritório de advocacia?',
    answer: 'Não somos advogados. Oferecemos assistência na preparação e organização de documentos imigratórios. Para questões legais, podemos recomendar um advogado licenciado parceiro.',
  },
  {
    question: 'Como funciona o processo?',
    answer: 'Começamos com um diagnóstico gratuito, fornecemos checklist personalizado, orientamos na coleta de documentos e organizamos tudo em formato profissional.',
  },
  {
    question: 'Quanto tempo leva?',
    answer: 'Depende da complexidade do caso. Em média, 2-6 semanas para preparação completa do pacote de documentos.',
  },
  {
    question: 'Atendem em todo os EUA?',
    answer: 'Sim! Atendemos remotamente via WhatsApp, email e videoconferência em todos os estados americanos e também clientes no Brasil.',
  },
];

export const metadata = generatePageMetadata({
  title: 'FAQ',
  description: 'Perguntas frequentes sobre nossos serviços',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <BackgroundLayer intensity="full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Perguntas <span className="text-gold-base">Frequentes</span>
          </h1>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundLayer intensity="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium">
                <h3 className="font-bold text-gold-base text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-text leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
