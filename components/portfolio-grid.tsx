"use client";

import Image from "next/image";
import Link from "next/link";
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-surface shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_70px_-28px_rgba(203,108,230,0.45)] focus-within:border-brand/50">
      <div className="relative h-44 shrink-0 overflow-hidden">
        <Image
          src={c.image.src}
          alt={c.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        />
        <span className="absolute bottom-4 left-5 rounded-full border border-brand/35 bg-black/55 px-3 py-1 text-xs font-semibold text-brand-soft backdrop-blur-sm">
          {c.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-ink-muted">
          {c.client} · {c.industry}
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
