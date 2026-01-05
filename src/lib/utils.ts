export function buildWhatsAppLink(message: string): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '16892981265';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function getCalendlyUrl(): string {
  return process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/SEU-LINK-AQUI';
}
