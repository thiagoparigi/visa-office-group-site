import { generatePageMetadata } from '@/lib/seo';
import VagasEB3Content from './VagasEB3Content';

export const metadata = generatePageMetadata({
  title: 'Vagas EB-3 - Trabalho nos EUA com Patrocínio de Empregador',
  description: 'Conheça vagas reais em empresas americanas que participam de programas de patrocínio para green card (categoria EB-3). Verifique sua elegibilidade com a Visa Office Group.',
  path: '/vagas-eb3',
});

export default function VagasEB3Page() {
  return <VagasEB3Content />;
}
