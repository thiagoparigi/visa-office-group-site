import { CheckCircle, MessageCircle, FileText } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: FileText,
      title: 'Checklist & Evidências',
      description: 'Organização profissional',
    },
    {
      icon: CheckCircle,
      title: 'Processo em Etapas',
      description: 'Clareza do início ao fim',
    },
    {
      icon: MessageCircle,
      title: 'Suporte PT/EN',
      description: 'Atendimento humanizado',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="card-premium flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center w-14 h-14 bg-gold-base/10 rounded-full mb-4">
            <badge.icon className="text-gold-base" size={28} />
          </div>
          <h3 className="text-white font-semibold mb-2">{badge.title}</h3>
          <p className="text-gray-text text-sm">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
