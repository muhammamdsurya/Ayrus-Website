import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Scroll-reveal wrapper for below-the-fold content.
 *
 * This is a server component: it emits a class and a delay custom property and
 * nothing else. A single <RevealController> in the root layout finds every
 * .reveal in the document and drives them all from one IntersectionObserver, so
 * a page with forty revealed blocks ships one client component rather than
 * forty hydration boundaries.
 *
 * The children are always in the server-rendered HTML and only opacity and
 * transform are toggled, so crawlers and no-JS visitors still see the content
 * (see the <noscript> block in app/layout.tsx). Respects prefers-reduced-motion.
 *
 * Above-the-fold content should use <Rise> instead — it is pure CSS and does
 * not make first paint wait on hydration.
 */
export function Reveal({
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
    <Tag
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
