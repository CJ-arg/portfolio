"use client";

/**
 * ExpertiseCard — displays a single project with title, context, and stack.
 * Follows the Swiss style: clean borders, restrained hover, clear hierarchy.
 */

import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";
import Badge from "./Badge";
import type { Project } from "@/lib/types";

interface ExpertiseCardProps {
  project: Project;
}

export default function ExpertiseCard({ project }: ExpertiseCardProps) {
  const { locale } = useTranslation();

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex flex-col border border-swiss-gray-700 bg-swiss-gray-900 transition-transform duration-300 hover:-translate-y-0.5 overflow-hidden"
      aria-labelledby={`project-${project.id}`}
    >
      {/* Animated Director Frame (Invisible to full bounds on hover) */}
      <span className="absolute top-0 left-0 w-0 h-0 border-t border-l border-swiss-accent opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-swiss-accent opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none" />

      {/* Image — Top Half */}
      <div className="relative w-full aspect-video border-b border-swiss-gray-700 bg-swiss-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content — Bottom Half */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        {/* Title */}
        <h3
          id={`project-${project.id}`}
          className="text-h2 text-swiss-white mb-3 group-hover:text-swiss-accent transition-colors duration-300"
        >
          {project.title}
        </h3>

        {/* Context */}
        <p className="text-body text-swiss-gray-300 mb-6 flex-1">
          {project.context[locale]}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </a>
  );
}
