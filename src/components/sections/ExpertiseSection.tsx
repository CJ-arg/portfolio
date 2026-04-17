"use client";

/**
 * ExpertiseSection — grid of project cards.
 * Uniform grid (no number, no span differentiation).
 */

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ExpertiseCard from "../ui/ExpertiseCard";
import { useTranslation } from "@/i18n/useTranslation";
import { projects } from "@/lib/projects";

export default function ExpertiseSection() {
  const { t } = useTranslation();

  return (
    <section id="expertise" className="py-20 md:py-32" aria-label="Work">
      <Container>
        <SectionHeading>{t.expertise.heading}</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ExpertiseCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
