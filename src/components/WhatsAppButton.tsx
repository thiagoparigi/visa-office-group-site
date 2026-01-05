'use client';

import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/utils';

export default function WhatsAppButton() {
  const message = 'Olá! Gostaria de fazer um diagnóstico do meu caso imigratório. Pode me ajudar?';

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <MessageCircle size={28} />
    </a>
  );
}
