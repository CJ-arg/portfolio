/**
 * TypeScript interfaces for the portfolio.
 * Serves as the single source of truth for data shapes.
 */

/** Supported locales for bilingual content. */
export type Locale = "en" | "es";

/** Bilingual text: provides values for each locale. */
export interface BilingualText {
  en: string;
  es: string;
}

/** A project displayed in an Expertise Card. */
export interface Project {
  /** Unique identifier slug */
  id: string;
  /** Project title (same in both languages) */
  title: string;
  /** Short description of what the project does */
  context: BilingualText;
  /** Image path in public directory */
  image: string;
  /** Technologies used */
  stack: string[];
  /** Optional external link */
  url?: string;
}

/** Navigation item for the header. */
export interface NavItem {
  /** Anchor hash (e.g. "#expertise") */
  href: string;
  /** Visible label */
  label: BilingualText;
}

/** Contact link displayed in the contact section. */
export interface ContactLink {
  /** Display label */
  label: string;
  /** URL (mailto:, https://, etc.) */
  href: string;
  /** Accessible description */
  ariaLabel: string;
}
