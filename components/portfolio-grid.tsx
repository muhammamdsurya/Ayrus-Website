"use client";

import Link from "next/link";
import { CaseScreen } from "./case-screens";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/portfolio";

/**
 * Filterable case-study grid (PRD §5.5).
 *
 * Every card is rendered on the server and only hidden client-side when a
 * filter excludes it, so crawlers and no-JS visitors always get the full list.
 * Filters are buttons with `aria-pressed` rather than links, because they change
 * a view rather than navigate, and the result count is announced politely.
 */
export function PortfolioGrid({
  items,
  categories,
}: {
  items: CaseStudy[];
  categories: string[];
}) {
  const [active, setActive] = useState("Semua");

  const shown = useMemo(
    () => (active === "Semua" ? items : items.filter((i) => i.category === active)),
    [items, active],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={on}
              className={`min-h-11 cursor-pointer rounded-full border px-4.5 text-sm font-semibold transition-colors duration-200 ${
                on
                  ? "border-brand bg-brand text-brand-ink"
                  : "border-white/15 text-ink-muted hover:border-white/30 hover:text-ink"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-5 text-sm text-ink-muted">
        Menampilkan {shown.length} dari {items.length} studi kasus
        {active !== "Semua" ? ` pada kategori ${active}` : ""}.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <li key={c.slug} hidden={!shown.includes(c)} className="h-full">
            <CaseCard item={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseCard({ item: c }: { item: CaseStudy }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-surface transition-[border-color,transform] duration-500 ease-spring hover:-translate-y-1 hover:border-brand/40 focus-within:border-brand/50">
      <div aria-hidden="true" className="relative h-44 shrink-0 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 origin-top transition-transform duration-700 ease-spring group-hover:scale-[1.04]">
          <CaseScreen slug={c.slug} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-ink-muted">
          <span className="font-semibold text-brand-soft">{c.category}</span> · {c.client}
        </p>
        <h3 className="mt-2 text-lg leading-snug font-bold">
          <Link href={`/portofolio/${c.slug}`} className="after:absolute after:inset-0">
            {c.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-muted">{c.problem}</p>

        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
          <span className="font-display text-sm font-bold text-brand">{c.result}</span>
          <ArrowUpRight
            size={17}
            aria-hidden="true"
            className="text-ink-muted transition-colors duration-300 group-hover:text-brand"
          />
        </div>
      </div>
    </article>
  );
}
