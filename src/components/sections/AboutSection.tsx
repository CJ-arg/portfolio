"use client";

/**
 * AboutSection — professional context: Law → AI Engineering.
 * Uses structured paragraphs with generous negative space.
 */

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { useTranslation } from "@/i18n/useTranslation";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 md:py-32" aria-label="About">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Heading — left column */}
          <div className="lg:col-span-4">
            <SectionHeading>{t.about.heading}</SectionHeading>
          </div>

          {/* Content — right column */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-body text-swiss-gray-100">{t.about.p1}</p>
            <p className="text-body text-swiss-gray-100">{t.about.p2}</p>
            <p className="text-body text-swiss-accent font-medium">
              {t.about.p3}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
