"use client";

/**
 * IntroSection — the opening block of the portfolio.
 * Delivers the positioning narrative: Law → AI Engineering.
 * Replaces the traditional "hero" pattern with a direct, typographic statement.
 */

import Container from "../layout/Container";
import { useTranslation } from "@/i18n/useTranslation";

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center pt-14"
      aria-label="Introduction"
    >
      <Container className="py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-caption text-swiss-accent mb-6">
            {t.intro.tagline}
          </p>

          {/* Headline */}
          <h1 className="text-display text-swiss-white mb-8">
            {t.intro.headline}
          </h1>

          {/* Description */}
          <p className="text-body text-swiss-gray-100 max-w-xl mb-10">
            {t.intro.description}
          </p>

          {/* CTA */}
          <a
            href="#expertise"
            className="inline-flex items-center gap-2 text-caption border border-swiss-accent text-swiss-accent px-6 py-3 transition-all duration-300 hover:bg-swiss-accent hover:text-swiss-white"
          >
            {t.intro.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
