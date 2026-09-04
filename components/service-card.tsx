import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { ServiceDetail } from "@/lib/services";

/**
 * Service card.
 *
 * Reference layout: full-bleed media header, coloured category pill, bold
 * title, muted paragraph, then a divided footer row. Rendered in the site's
 * dark palette rather than the reference's light one, so the section stays
 * consistent with the rest of the page.
 *
 * The whole card is clickable via a stretched link on the title, which keeps
 * the accessible name as the service name rather than a bare "read more".
 */
export function ServiceCard({ service: s }: { service: ServiceDetail }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-surface shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_70px_-28px_rgba(203,108,230,0.45)] focus-within:border-brand/50">
      {/* Media header */}
      <div className="relative h-40 shrink-0 overflow-hidden sm:h-44">
        <Image
          src={s.image.src}
          alt={s.image.alt}
          fill
          sizes="(min-width: 1536px) 24vw, (min-width: 640px) 46vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Brand tint keeps four different photos reading as one set. Plain
            alpha rather than mix-blend-multiply: multiply crushes a dark photo
            into a flat colour block and behaves inconsistently across
            compositors. The dark gradient below it buys contrast for the icon
            chip without dimming the whole picture. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-28"
          style={{ background: `linear-gradient(135deg, ${s.accent.from}, ${s.accent.to})` }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/12 to-transparent" />
        <span
          aria-hidden="true"
          className="absolute bottom-5 left-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
        >
          <s.icon size={24} strokeWidth={1.75} />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span
          className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold"
          style={{ color: s.accent.text, backgroundColor: `${s.accent.text}1f` }}
        >
          {s.category}
        </span>

        <h3 className="mt-3.5 text-xl leading-snug font-bold">
          <Link href={`/layanan/${s.slug}`} className="after:absolute after:inset-0">
            {s.title}
          </Link>
        </h3>
        <p className="mt-2.5 leading-relaxed text-ink-muted">{s.cardDesc}</p>

        <ul className="mt-5 space-y-2">
          {s.cardPoints.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-ink-muted">
              <CheckCircle2 size={15} className="shrink-0 text-brand" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer meta */}
      <div className="mt-auto flex items-center gap-3 border-t border-white/8 bg-surface-2 px-6 py-4 sm:px-7">
        <span
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
          style={{ background: `linear-gradient(135deg, ${s.accent.from}, ${s.accent.to})` }}
        >
          <s.icon size={17} strokeWidth={2} className="text-white" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold">{s.meta.label}</span>
          <span className="block text-xs text-ink-muted">{s.meta.sub}</span>
        </span>
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="ml-auto shrink-0 text-ink-muted transition-colors duration-300 group-hover:text-brand"
        />
      </div>
    </article>
  );
}
