import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* ---------------------------------------------------------------
   Button — `primary` puts near-black text on the purple fill.
   White on #CB6CE6 is only 3.08:1 and fails WCAG AA (PRD §9),
   so the ink colour is deliberately dark, not white.
   --------------------------------------------------------------- */
type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap " +
  "min-h-12 px-6 text-[15px] cursor-pointer transition-[background-color,border-color,color,transform] " +
  "duration-300 ease-spring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Inner top highlight instead of an outer purple glow.
  primary: "bg-brand text-brand-ink hover:bg-brand-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
  secondary:
    "border border-white/14 bg-white/[0.04] text-ink hover:border-white/28 hover:bg-white/[0.08]",
  ghost: "text-ink-muted hover:text-ink",
};

/** Trailing arrow nested in its own circle ("button-in-button"). */
function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="-mr-[1.125rem] ml-1 grid h-9 w-9 place-items-center rounded-full bg-current/12 transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
    >
      <ArrowUpRight size={16} strokeWidth={2} />
    </span>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
  arrow = false,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
  /** Append the nested arrow circle. */
  arrow?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

/* ---------------------------------------------------------------
   Nav link — same internal/external split as ButtonLink, but unstyled
   so each nav list keeps its own classes. Lets `nav` mix routes with
   off-site destinations (the SaaS products) without every list re-branching.
   --------------------------------------------------------------- */

export function NavLink({
  href,
  external = false,
  children,
  ...rest
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href">) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

/* --------------------------------------------------------------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-brand-soft uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
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
    <div className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="text-[2rem] leading-[1.08] font-bold sm:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      {sub ? (
        <p className="max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">{sub}</p>
      ) : null}
    </div>
  );
}

/** Double-bezel frame (see .bezel in globals.css). */
export function Bezel({
  children,
  className = "",
  coreClassName = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  coreClassName?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag className={`bezel ${className}`}>
      <div className={`bezel-core ${coreClassName}`}>{children}</div>
    </Tag>
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
