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
      className="relative group px-1 flex items-center justify-center text-caption transition-colors duration-300"
      aria-label={`Switch language to ${locale === "en" ? "Spanish" : "English"}`}
      type="button"
    >
      <span className="absolute -top-1 -left-1 w-0 h-0 border-t border-l border-swiss-accent opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-300" />
      <span className="absolute -bottom-1 -right-1 w-0 h-0 border-b border-r border-swiss-accent opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-300" />
      <div className="relative z-10 px-2 py-1 flex items-center gap-1 group-hover:text-swiss-white transition-colors duration-300">
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
      </div>
    </button>
  );
}
