export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';
export const locales: Locale[] = ['es', 'en'];

export const ui = {
  es: {
    nav: {
      home: 'Inicio',
      rooms: 'Alojamientos',
      services: 'Servicios',
      gallery: 'Galería',
      location: 'Ubicación',
      contact: 'Contacto',
    },
    cta: {
      reserve: 'Reservar',
      whatsapp: 'WhatsApp',
      call: 'Llamar',
      contact: 'Contáctanos',
      viewRooms: 'Ver alojamientos',
      viewGallery: 'Ver galería',
      send: 'Enviar',
      learnMore: 'Conocer más',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      privacy: 'Aviso de privacidad',
      reviews: 'Google Reviews',
    },
    pages: {
      home: {
        title: 'Mareva Playa — Hotel y Deptos en Acapulco Diamante',
        description:
          'Suites, penthouse y departamentos de lujo frente al Pacífico en Acapulco Diamante. Reserva por WhatsApp o formulario.',
      },
      rooms: {
        title: 'Alojamientos',
        description: 'Departamentos y suites con vista al mar en Mareva Playa, Acapulco Diamante.',
        perNight: 'MXN / noche',
        idealFor: 'Ideal para',
        guests: 'personas',
      },
      services: {
        title: 'Servicios',
        description: 'Amenidades y servicios durante tu estancia en Mareva Playa.',
        coreTitle: 'Comodidad durante tu estancia',
        expTitle: 'Experiencias',
      },
      gallery: {
        title: 'Galería',
        description: 'Conoce Mareva Playa — suites y departamentos en Acapulco Diamante.',
      },
      location: {
        title: 'Ubicación',
        description: 'Cómo llegar a Mareva Playa en Acapulco Diamante.',
        directions: 'Cómo llegar',
      },
      contact: {
        title: 'Contacto',
        description: 'Reserva tu estancia en Mareva Playa. WhatsApp, teléfono o formulario.',
        formTitle: 'Contáctanos',
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        checkIn: 'Fecha de llegada',
        checkOut: 'Fecha de salida',
        message: 'Mensaje',
        consent: 'Acepto el aviso de privacidad y el tratamiento de mis datos personales.',
        success: '¡Mensaje enviado! Nos pondremos en contacto pronto.',
        error: 'Hubo un error. Verifique los campos e intente de nuevo.',
        reservationTitle: 'Reservación',
      },
      privacy: {
        title: 'Aviso de privacidad',
        description: 'Aviso de privacidad de Mareva Playa conforme a la LFPDPPP.',
      },
      notFound: {
        title: 'Página no encontrada',
        description: 'La página que buscas no existe.',
        back: 'Volver al inicio',
      },
    },
    langSwitch: 'English',
  },
  en: {
    nav: {
      home: 'Home',
      rooms: 'Accommodations',
      services: 'Services',
      gallery: 'Gallery',
      location: 'Location',
      contact: 'Contact',
    },
    cta: {
      reserve: 'Book now',
      whatsapp: 'WhatsApp',
      call: 'Call',
      contact: 'Contact us',
      viewRooms: 'View accommodations',
      viewGallery: 'View gallery',
      send: 'Send',
      learnMore: 'Learn more',
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy notice',
      reviews: 'Google Reviews',
    },
    pages: {
      home: {
        title: 'Mareva Playa — Hotel & Apartments in Acapulco Diamante',
        description:
          'Luxury suites and apartments facing the Pacific in Acapulco Diamante. Book via WhatsApp or contact form.',
      },
      rooms: {
        title: 'Accommodations',
        description: 'Ocean-view apartments and suites at Mareva Playa, Acapulco Diamante.',
        perNight: 'MXN / night',
        idealFor: 'Ideal for',
        guests: 'guests',
      },
      services: {
        title: 'Services',
        description: 'Amenities and services during your stay at Mareva Playa.',
        coreTitle: 'Comfort during your stay',
        expTitle: 'Experiences',
      },
      gallery: {
        title: 'Gallery',
        description: 'Discover Mareva Playa — suites and apartments in Acapulco Diamante.',
      },
      location: {
        title: 'Location',
        description: 'How to get to Mareva Playa in Acapulco Diamante.',
        directions: 'Getting here',
      },
      contact: {
        title: 'Contact',
        description: 'Book your stay at Mareva Playa. WhatsApp, phone, or contact form.',
        formTitle: 'Contact us',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        checkIn: 'Check-in date',
        checkOut: 'Check-out date',
        message: 'Message',
        consent: 'I accept the privacy notice and the processing of my personal data.',
        success: 'Message sent! We will get back to you soon.',
        error: 'Something went wrong. Please check the fields and try again.',
        reservationTitle: 'Reservation',
      },
      privacy: {
        title: 'Privacy notice',
        description: 'Mareva Playa privacy notice under Mexican LFPDPPP.',
      },
      notFound: {
        title: 'Page not found',
        description: 'The page you are looking for does not exist.',
        back: 'Back to home',
      },
    },
    langSwitch: 'Español',
  },
} as const;

export type UiStrings = (typeof ui)[Locale];

export function getUi(locale: Locale): UiStrings {
  return ui[locale];
}

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'es') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/** Map ES slugs to EN slugs for language switcher */
export const slugMap: Record<string, { es: string; en: string }> = {
  '/': { es: '/', en: '/en/' },
  '/alojamientos': { es: '/alojamientos', en: '/en/accommodations' },
  '/servicios': { es: '/servicios', en: '/en/services' },
  '/galeria': { es: '/galeria', en: '/en/gallery' },
  '/ubicacion': { es: '/ubicacion', en: '/en/location' },
  '/contacto': { es: '/contacto', en: '/en/contact' },
  '/aviso-de-privacidad': { es: '/aviso-de-privacidad', en: '/en/privacy' },
  '/en/': { es: '/', en: '/en/' },
  '/en/accommodations': { es: '/alojamientos', en: '/en/accommodations' },
  '/en/services': { es: '/servicios', en: '/en/services' },
  '/en/gallery': { es: '/galeria', en: '/en/gallery' },
  '/en/location': { es: '/ubicacion', en: '/en/location' },
  '/en/contact': { es: '/contacto', en: '/en/contact' },
  '/en/privacy': { es: '/aviso-de-privacidad', en: '/en/privacy' },
};

export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  const normalized = currentPath.replace(/\/$/, '') || '/';
  const entry = Object.values(slugMap).find(
    (m) => m.es === normalized || m.es === currentPath || m.en === normalized || m.en === currentPath
  );
  if (entry) return entry[targetLocale];
  return targetLocale === 'es' ? '/' : '/en/';
}

export function navLinks(locale: Locale) {
  const t = getUi(locale);
  const paths =
    locale === 'es'
      ? [
          { href: '/', label: t.nav.home },
          { href: '/alojamientos', label: t.nav.rooms },
          { href: '/servicios', label: t.nav.services },
          { href: '/galeria', label: t.nav.gallery },
          { href: '/ubicacion', label: t.nav.location },
          { href: '/contacto', label: t.nav.contact },
        ]
      : [
          { href: '/en/', label: t.nav.home },
          { href: '/en/accommodations', label: t.nav.rooms },
          { href: '/en/services', label: t.nav.services },
          { href: '/en/gallery', label: t.nav.gallery },
          { href: '/en/location', label: t.nav.location },
          { href: '/en/contact', label: t.nav.contact },
        ];
  return paths;
}

export function formatPrice(mxn: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(mxn);
}
