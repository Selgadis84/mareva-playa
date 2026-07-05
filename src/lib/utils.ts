import type { Locale } from '../i18n';

export function whatsappUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/\D/g, '')}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telUrl(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function hotelJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Mareva Playa',
    description:
      locale === 'es'
        ? 'Suites, penthouse y departamentos de lujo en Acapulco Diamante'
        : 'Luxury suites and apartments in Acapulco Diamante',
    url: 'https://marevaplaya.com.mx',
    telephone: '+527445860428',
    email: 'info@marevaplaya.com.mx',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lázaro Cárdenas 231',
      addressLocality: 'Acapulco de Juárez',
      addressRegion: 'Guerrero',
      postalCode: '39893',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.7622,
      longitude: -99.8236,
    },
    priceRange: '$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4',
    },
  };
}
