import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'],

  // Used when no locale matches
  defaultLocale: 'es',

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the external path, the
  // correct internal path will be used for routing.
  pathnames: {
    '/': '/',
    '/about': {
      es: '/sobre-mi',
      en: '/about'
    },
    '/projects': {
      es: '/proyectos',
      en: '/projects'
    },
    '/skills': {
      es: '/habilidades',
      en: '/skills'
    },
    '/contact': {
      es: '/contacto',
      en: '/contact'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
