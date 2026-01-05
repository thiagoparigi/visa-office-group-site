import { generatePageMetadata, generateFAQSchema } from '@/lib/seo';

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

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy-900 mb-6">Perguntas Frequentes</h1>

          <div className="max-w-3xl mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
