import type { LucideIcon } from "lucide-react";

/**
 * Compact feature / value-prop card.
 *
 * Shared by "Alasan UMKM memilih kami" on the homepage, the "Apa saja yang Anda
 * dapat" grid on the service pages, and "Semua yang dibutuhkan kasir harian
 * Anda" on the NectarPOS page — so those grids read as one component rather
 * than three near-identical one-offs.
 *
 * Deliberately lighter than the photo-led ServiceCard: no media header, tighter
 * type scale, and a single hairline of brand gradient along the top edge to
 * suggest a light source without adding another filled surface.
 *
 * `variant="compact"` strips it back further — icon inline with the title, no
 * index marker, no top-edge highlight — for grids that are supporting detail
 * rather than the point of the section.
 */
export function FeatureCard({
  icon: Icon,
  title,
  desc,
  index,
  variant = "default",
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** 1-based position, rendered as a muted 01/02 marker. Ignored when compact. */
  index?: number;
  variant?: "default" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div className="group h-full rounded-2xl border border-white/10 bg-surface p-5 transition-[border-color,background-color] duration-300 hover:border-brand/35 hover:bg-surface-2">
        <div className="flex items-center gap-2.5">
          <Icon
            size={17}
            strokeWidth={2}
            aria-hidden="true"
            className="shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-soft"
          />
          <h3 className="text-[15px] font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
      </div>
    );
  }

  return (
    <div className="group relative h-full overflow-hidden rounded-[1.1rem] border border-white/10 bg-surface p-6 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-brand/35 hover:bg-surface-2">
      {/* Top-edge highlight: brightest at the centre, fading to nothing at the
          corners, so the card reads as lit from above rather than outlined. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(203,108,230,0.55),transparent)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand/25 bg-gradient-to-br from-brand/25 to-brand-deep/10 text-brand transition-colors duration-300 group-hover:border-brand/45 group-hover:text-brand-soft"
        >
          <Icon size={19} strokeWidth={1.9} />
        </span>

        {index !== undefined ? (
          <span
            aria-hidden="true"
            className="font-display text-xs font-bold text-ink-muted/60 transition-colors duration-300 group-hover:text-brand"
          >
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-base font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
    </div>
  );
}
