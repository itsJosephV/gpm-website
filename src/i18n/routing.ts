import {defineRouting} from "next-intl/routing";
import {createNavigation} from "next-intl/navigation";

export const locales = ["es", "en"] as const;

const basePaths = {
  group: {
    es: "/grupo",
    en: "/group",
  },
  business: {
    es: "/negocios",
    en: "/business",
  },
  news: {
    es: "/noticias",
    en: "/news",
  },
  contact: {
    es: "/contacto",
    en: "/contact",
  },
};

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "es",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/noticias": {
      es: basePaths.news.es,
      en: basePaths.news.en,
    },
    "/noticias/[slug]": {
      es: `${basePaths.news.es}/[slug]`,
      en: `${basePaths.news.en}/[slug]`,
    },
    "/contacto": {
      es: basePaths.contact.es,
      en: basePaths.contact.en,
    },
    "/grupo/historia": {
      es: `${basePaths.group.es}/historia`,
      en: `${basePaths.group.en}/history`,
    },
    "/grupo/responsabilidad": {
      es: `${basePaths.group.es}/responsabilidad`,
      en: `${basePaths.group.en}/responsibility`,
    },
    "/grupo/calidad": {
      es: `${basePaths.group.es}/calidad`,
      en: `${basePaths.group.en}/quality`,
    },
    "/grupo/codigo-etico": {
      es: `${basePaths.group.es}/codigo-etico`,
      en: `${basePaths.group.en}/ethical-code`,
    },
    "/negocios/construccion": {
      es: `${basePaths.business.es}/construccion`,
      en: `${basePaths.business.en}/construction`,
    },
    "/negocios/turismo": {
      es: `${basePaths.business.es}/turismo`,
      en: `${basePaths.business.en}/tourism`,
    },
    "/negocios/promocion-inmobiliaria": {
      es: `${basePaths.business.es}/promocion-inmobiliaria`,
      en: `${basePaths.business.en}/real-estate-promotion`,
    },
    "/negocios/medioambiente": {
      es: `${basePaths.business.es}/medioambiente`,
      en: `${basePaths.business.en}/environment`,
    },
  },
});

export type Locale = (typeof locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
