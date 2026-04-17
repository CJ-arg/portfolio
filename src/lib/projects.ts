/**
 * Project data for the Expertise section.
 * Content is bilingual — update context values to match your real projects.
 */

import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "stoic-ai-mentor",
    title: "Stoic AI Mentor",
    context: {
      en: "Philosophical AI mentorship platform with conversational reasoning",
      es: "Plataforma de mentoría filosófica con IA conversacional",
    },
    stack: ["Next.js", "OpenAI API", "TypeScript", "Prompt Engineering"],
  },
  {
    id: "cow-project",
    title: "Cow Project",
    context: {
      en: "Livestock management and traceability system",
      es: "Sistema de gestión y trazabilidad ganadera",
    },
    stack: ["React", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    id: "click-club",
    title: "Click Club",
    context: {
      en: "Digital community and engagement platform",
      es: "Plataforma de comunidad y engagement digital",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];
