export function buildWhatsAppLink(message: string): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '16892981265';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function getBookingUrl(): string {
  return 'https://calendar.app.google/jXMvt7ZtpdcbghSx7';
}
