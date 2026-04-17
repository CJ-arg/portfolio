"use client";

/**
 * LanguageToggle — a minimal EN/ES switch button.
 * Reads and sets locale via the useTranslation hook.
 */

import { useTranslation } from "@/i18n/useTranslation";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useTranslation();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 text-caption border border-swiss-gray-700 px-2 py-1 rounded transition-colors duration-300 hover:border-swiss-accent hover:text-swiss-accent"
      aria-label={`Switch language to ${locale === "en" ? "Spanish" : "English"}`}
      type="button"
    >
      <span
        className={
          locale === "en" ? "text-swiss-white" : "text-swiss-gray-300"
        }
      >
        EN
      </span>
      <span className="text-swiss-gray-700">|</span>
      <span
        className={
          locale === "es" ? "text-swiss-white" : "text-swiss-gray-300"
        }
      >
        ES
      </span>
    </button>
  );
}
