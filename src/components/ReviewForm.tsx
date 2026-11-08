'use client';

import { useState, type FormEvent } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppLink } from '@/lib/utils';

const inputClassName =
  'w-full px-4 py-3 bg-navy-base/50 border border-white/10 rounded-lg text-white placeholder-gray-text/40 focus:outline-none focus:border-gold-base/50 transition-colors';

export default function ReviewForm() {
  const { language } = useLanguage();
  const isPT = language === 'pt';
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError(
        isPT
          ? 'Preencha seu nome e seu depoimento.'
          : 'Please fill in your name and your testimonial.'
      );
      return;
    }
    setError('');
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const text = isPT
      ? `Olá! Quero deixar meu testemunho sobre a Visa Office Group.\n\nNome: ${name.trim()}\nAvaliação: ${rating}/5 ${stars}\nServiço: ${service.trim() || '-'}\n\nDepoimento: ${message.trim()}`
      : `Hello! I would like to leave my testimonial about Visa Office Group.\n\nName: ${name.trim()}\nRating: ${rating}/5 ${stars}\nService: ${service.trim() || '-'}\n\nTestimonial: ${message.trim()}`;
    window.open(buildWhatsAppLink(text), '_blank');
  };

  return (
    <div className="card-premium">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
        {isPT ? 'Deixe seu testemunho' : 'Leave your testimonial'}
      </h2>
      <p className="text-gray-text text-center mb-8">
        {isPT
          ? 'Conte como foi sua experiência com a Visa Office Group.'
          : 'Tell us about your experience with Visa Office Group.'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="review-name" className="block text-sm font-semibold text-white mb-2">
            {isPT ? 'Seu nome' : 'Your name'} *
          </label>
          <input
            id="review-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={isPT ? 'Seu nome' : 'Your name'}
            className={inputClassName}
          />
        </div>
        <div>
          <span className="block text-sm font-semibold text-white mb-2">
            {isPT ? 'Sua avaliação' : 'Your rating'}
          </span>
          <div className="flex items-center gap-1" role="radiogroup" aria-label={isPT ? 'Sua avaliação' : 'Your rating'}>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                aria-label={`${value} ${isPT ? 'estrelas' : 'stars'}`}
                aria-checked={rating === value}
                role="radio"
                className="p-1 transition-colors"
              >
                <Star
                  size={32}
                  className={value <= rating ? 'text-gold-base' : 'text-gray-text/40'}
                  fill={value <= rating ? 'currentColor' : 'none'}
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-gold-soft">
              {rating}/5
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="review-service" className="block text-sm font-semibold text-white mb-2">
            {isPT ? 'Serviço recebido (opcional)' : 'Service received (optional)'}
          </label>
          <input
            id="review-service"
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder={isPT ? 'Ex.: Green Card por casamento' : 'E.g.: Marriage-based Green Card'}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="review-message" className="block text-sm font-semibold text-white mb-2">
            {isPT ? 'Seu depoimento' : 'Your testimonial'} *
          </label>
          <textarea
            id="review-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              isPT
                ? 'Escreva aqui o seu depoimento...'
                : 'Write your testimonial here...'
            }
            rows={5}
            className={`${inputClassName} resize-vertical`}
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}
        <button type="submit" className="btn-primary w-full">
          {isPT ? 'Enviar depoimento pelo WhatsApp' : 'Send testimonial via WhatsApp'}
        </button>
        <p className="text-sm text-gray-text/70 text-center">
          {isPT
            ? 'Seu depoimento será enviado pelo WhatsApp e passará por nossa revisão antes de ser publicado nesta página.'
            : 'Your testimonial will be sent via WhatsApp and reviewed by us before being published on this page.'}
        </p>
      </form>
    </div>
  );
}
