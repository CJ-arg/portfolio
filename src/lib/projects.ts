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
    image: "/projects/stoic.png",
    url: "https://stoic-ai-mentor.vercel.app/",
    stack: ["Next.js", "OpenAI API", "TypeScript", "Prompt Engineering"],
  },
  {
    id: "cow-project",
    title: "Cow Project",
    context: {
      en: "Livestock management and traceability system",
      es: "Sistema de gestión y trazabilidad ganadera",
    },
    image: "/projects/cow.png",
    url: "https://svg-proyect.vercel.app/",
    stack: ["React", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    id: "click-club",
    title: "Click Club",
    context: {
      en: "Digital community and engagement platform",
      es: "Plataforma de comunidad y engagement digital",
    },
    image: "/projects/clickclub.png",
    url: "https://click-club.vercel.app/entrar?codigo=CLICKCLUB2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];
