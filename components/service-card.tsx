import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";
import { ServiceScreen } from "./service-screens";

/**
 * Bento tile for one service. The top shows that app's home screen in a
 * framed window that peeks out of the tile and lifts on hover; the copy sits
 * below it (or beside it when `wide`). The whole tile is one stretched link
 * whose accessible name is the service title.
 *
 * Size and placement come from the caller's `className`.
 */
export function ServiceCard({
  service: s,
  className = "",
  wide = false,
}: {
  service: ServiceDetail;
  className?: string;
  wide?: boolean;
}) {
  return (
    <article
      className={`group relative isolate flex flex-col overflow-hidden rounded-[var(--radius-shell)] border border-white/10 bg-surface transition-[border-color] duration-500 ease-spring hover:border-brand/40 focus-within:border-brand/50 ${
        wide ? "lg:flex-row" : ""
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-72 w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.2),transparent_70%)] blur-2xl"
      />

      {/* App screen */}
      <div
        aria-hidden="true"
        className={`relative min-h-56 flex-1 ${wide ? "lg:order-2 lg:min-h-0 lg:w-[58%] lg:flex-none" : ""}`}
      >
        <div
          className={`absolute inset-x-5 top-5 bottom-0 overflow-hidden rounded-t-2xl border border-b-0 border-white/12 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-spring group-hover:-translate-y-1.5 sm:inset-x-8 sm:top-8 ${
            wide ? "lg:right-8 lg:left-0" : ""
          }`}
        >
          <ServiceScreen slug={s.slug} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Copy */}
      <div className={`relative flex flex-col p-6 sm:p-8 ${wide ? "lg:w-[42%] lg:justify-center" : ""}`}>
        <s.icon size={26} strokeWidth={1.5} aria-hidden="true" className="text-brand" />
        <h3 className="mt-4 text-2xl leading-tight font-bold">
          <Link href={`/layanan/${s.slug}`} className="after:absolute after:inset-0">
            {s.title}
          </Link>
        </h3>
        <p className="mt-2.5 max-w-md leading-relaxed text-ink-muted">{s.cardDesc}</p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-sm text-ink-muted">Estimasi {s.timeline}</span>
          <span
            aria-hidden="true"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-ink transition-[transform,background-color,color] duration-500 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-brand-ink"
          >
            <ArrowUpRight size={18} strokeWidth={2} />
          </span>
        </div>
      </div>
    </article>
  );
}
