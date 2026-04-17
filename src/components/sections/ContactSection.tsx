"use client";

/**
 * ContactSection — conversion block with email CTA and professional links.
 */

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { useTranslation } from "@/i18n/useTranslation";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 md:py-32" aria-label="Contact">
      <Container>
        <SectionHeading>{t.contact.heading}</SectionHeading>

        <div className="max-w-xl">
          <p className="text-body text-swiss-gray-100 mb-10">
            {t.contact.description}
          </p>

          {/* CTA */}
          <a
            href="mailto:hello@carlosjanon.com"
            className="inline-flex items-center gap-2 text-caption bg-swiss-accent text-swiss-white px-6 py-3 transition-all duration-300 hover:bg-swiss-white hover:text-swiss-black"
          >
            {t.contact.cta}
            <span aria-hidden="true">→</span>
          </a>

          {/* Links */}
          <div className="mt-12 flex gap-8">
            <a
              href="https://github.com/carlosjanon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-swiss-gray-300 hover:text-swiss-white transition-colors duration-300"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/carlosjanon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-swiss-gray-300 hover:text-swiss-white transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
