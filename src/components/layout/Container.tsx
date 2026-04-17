/**
 * Container — max-width wrapper with consistent horizontal padding.
 * Constrains content to the 12-column grid area (1280px).
 */

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}
    >
      {children}
    </Component>
  );
}
