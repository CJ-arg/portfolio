"use client";

/**
 * Footer — minimal copyright line.
 */

import Container from "./Container";
import { useTranslation } from "@/i18n/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-swiss-gray-700/50 py-8"
      role="contentinfo"
    >
      <Container className="flex items-center justify-between">
        <p className="text-caption text-swiss-gray-300">
          © {year} {t.footer.copyright}
        </p>
        <a
          href="#"
          className="text-caption text-swiss-gray-300 hover:text-swiss-white transition-colors duration-300"
          aria-label="Back to top"
        >
          ↑
        </a>
      </Container>
    </footer>
  );
}
