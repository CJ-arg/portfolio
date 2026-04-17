/**
 * Badge — a small tag used to display tech stack items.
 * Monospaced font for a technical feel.
 */

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="text-mono inline-block border border-swiss-gray-700 px-2 py-0.5 rounded text-swiss-gray-300">
      {children}
    </span>
  );
}
