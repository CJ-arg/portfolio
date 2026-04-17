"use client";

/**
 * Lightweight i18n system using React Context.
 * Provides locale state, a toggle function, and a t() accessor.
 * Persists language preference in localStorage.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale } from "@/lib/types";
import type { Translations } from "./types";
import en from "./en";
import es from "./es";

const dictionaries: Record<Locale, Translations> = { en, es };

interface LanguageContextValue {
  /** Current locale */
  locale: Locale;
  /** Toggle between en ↔ es */
  toggleLocale: () => void;
  /** Translation accessor — returns the full dictionary for the current locale */
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "cj-portfolio-locale";

/** Wraps the app and provides i18n context. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  /* Rehydrate from localStorage on mount */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "es") {
      setLocale(stored);
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value: LanguageContextValue = {
    locale,
    toggleLocale,
    t: dictionaries[locale],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

/**
 * Hook to access the current locale and translations.
 * Must be used inside a LanguageProvider.
 */
export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return ctx;
}
