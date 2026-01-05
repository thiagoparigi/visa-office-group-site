import { Metadata } from 'next';

export function generatePageMetadata({ title, description, path = '' }: { title: string; description: string; path?: string }): Metadata {
  const siteName = 'VISA OFFICE GROUP';
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://visaofficegroup.com${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: 'pt_BR',
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'VISA OFFICE GROUP',
    telephone: '+16892981265',
    email: 'contato@visaofficegroup.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3050 Station Square',
      addressLocality: 'Kissimmee',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
