"use client";

/**
 * ExpertiseCard — displays a single project with title, context, and stack.
 * Follows the Swiss style: clean borders, restrained hover, clear hierarchy.
 */

import { useTranslation } from "@/i18n/useTranslation";
import Badge from "./Badge";
import type { Project } from "@/lib/types";

interface ExpertiseCardProps {
  project: Project;
}

export default function ExpertiseCard({ project }: ExpertiseCardProps) {
  const { locale } = useTranslation();

  return (
    <article
      className="group border border-swiss-gray-700 bg-swiss-gray-900 p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-swiss-accent"
      aria-labelledby={`project-${project.id}`}
    >
      {/* Title */}
      <h3
        id={`project-${project.id}`}
        className="text-h2 text-swiss-white mb-3 group-hover:text-swiss-accent transition-colors duration-300"
      >
        {project.title}
      </h3>

      {/* Context */}
      <p className="text-body text-swiss-gray-300 mb-6">
        {project.context[locale]}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </article>
  );
}
