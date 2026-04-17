"use client";

/**
 * Header — minimal navigation with anchor links and language toggle.
 * Fixed at the top with a subtle backdrop blur.
 */

import Container from "./Container";
import LanguageToggle from "../ui/LanguageToggle";
import { useTranslation } from "@/i18n/useTranslation";

const NAV_ITEMS = [
  { href: "#expertise", key: "expertise" as const },
  { href: "#about", key: "about" as const },
  { href: "#contact", key: "contact" as const },
];

export default function Header() {
  const { t } = useTranslation();

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full border-b border-swiss-gray-700/50 bg-swiss-black/80 backdrop-blur-md"
      role="banner"
    >
      <Container className="flex h-14 items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-caption text-swiss-white tracking-widest hover:text-swiss-accent transition-colors duration-300"
          aria-label="Carlos M Janon — Home"
        >

        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group px-1 flex items-center justify-center text-caption text-swiss-gray-300 hover:text-swiss-white transition-colors duration-300"
            >
              <span className="absolute -top-1 -left-1 w-0 h-0 border-t border-l border-swiss-accent opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-300" />
              <span className="absolute -bottom-1 -right-1 w-0 h-0 border-b border-r border-swiss-accent opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-300" />
              <span className="relative z-10 px-2 py-1">{t.nav[item.key]}</span>
            </a>
          ))}
          <LanguageToggle />
        </nav>
      </Container>
    </header>
  );
}
