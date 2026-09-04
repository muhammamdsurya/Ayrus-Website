import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Above-the-fold entrance animation.
 *
 * Unlike <Reveal>, this is a pure CSS animation with no client JavaScript, so
 * hero content — including the LCP element — paints on the first frame instead
 * of waiting for hydration. Falls back to a static render under
 * prefers-reduced-motion (see globals.css).
 */
export function Rise({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={`rise ${className}`} style={{ "--rise-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
