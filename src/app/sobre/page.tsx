import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Sobre',
  description: 'Conheça a VISA OFFICE GROUP',
  path: '/sobre',
});

export default function SobrePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">Sobre Nós</h1>
        <p className="text-gray-600 mb-8">Missão: Transformar o processo imigratório com clareza, organização e humanidade.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Thiago Parigi</h3>
            <p className="text-gold-600 font-semibold mb-4">Direção</p>
            <p className="text-gray-600">Especialista em organização de processos imigratórios.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Gabriella Parigi</h3>
            <p className="text-gold-600 font-semibold mb-4">Case Manager</p>
            <p className="text-gray-600">Especialista em acompanhamento e suporte ao cliente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
