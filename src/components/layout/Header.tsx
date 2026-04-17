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
          CMJ
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-caption text-swiss-gray-300 hover:text-swiss-white transition-colors duration-300"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <LanguageToggle />
        </nav>
      </Container>
    </header>
  );
}
