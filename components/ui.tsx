import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* ---------------------------------------------------------------
   Button — `primary` puts near-black text on the purple fill.
   White on #CB6CE6 is only 3.08:1 and fails WCAG AA (PRD §9),
   so the ink colour is deliberately dark, not white.
   --------------------------------------------------------------- */
type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "min-h-11 px-6 text-[15px] cursor-pointer transition-[background-color,border-color,color,box-shadow,transform] " +
  "duration-200 ease-out active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-brand-ink hover:bg-brand-soft shadow-[0_10px_34px_-12px_rgba(203,108,230,0.75)]",
  secondary:
    "border border-white/18 bg-white/[0.045] text-ink hover:border-brand/60 hover:bg-white/[0.09]",
  ghost: "text-ink-muted hover:text-ink",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

/* --------------------------------------------------------------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/12 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-soft uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
  id?: string;
}) {
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {sub ? <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{sub}</p> : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={`glass rounded-[var(--radius-card)] p-6 transition-[border-color,transform,box-shadow] duration-300 sm:p-7 ${className}`}
    >
      {children}
    </Tag>
  );
}
