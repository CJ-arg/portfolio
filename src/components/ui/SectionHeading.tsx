/**
 * SectionHeading — reusable section title with a decorative accent line.
 * Used consistently across all sections for visual rhythm.
 */

interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-4 h-px w-12 bg-swiss-accent" aria-hidden="true" />
      <h2 id={id} className="text-h1 text-swiss-white">
        {children}
      </h2>
    </div>
  );
}
