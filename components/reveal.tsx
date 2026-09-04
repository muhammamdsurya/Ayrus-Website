"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { observeReveal } from "@/lib/reveal-observer";

/**
 * Scroll-reveal wrapper for below-the-fold content.
 *
 * Children are server-rendered normally and only opacity/transform are toggled,
 * so crawlers and no-JS visitors always see the content (see the <noscript>
 * block in app/layout.tsx). Respects prefers-reduced-motion.
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
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    return observeReveal(ref.current);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
