/**
 * Shared shape for translation dictionaries.
 * Both en.ts and es.ts must conform to this interface.
 */

export interface Translations {
  nav: {
    expertise: string;
    about: string;
    contact: string;
  };
  intro: {
    tagline: string;
    headline: string;
    description: string;
    cta: string;
  };
  expertise: {
    heading: string;
  };
  about: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
  };
  contact: {
    heading: string;
    description: string;
    cta: string;
  };
  footer: {
    copyright: string;
  };
}
