import type { LucideIcon } from "lucide-react";

/**
 * Compact feature / value-prop card.
 *
 * Shared by the "Tentang Kami" values on the homepage, the "Apa saja yang Anda
 * dapat" grid on the service pages and the solution feature grids — so those
 * grids read as one component rather than near-identical one-offs.
 *
 * Deliberately lighter than the photo-led ServiceCard: no media header, tighter
 * type scale, and a single hairline of brand gradient along the top edge to
 * suggest a light source without adding another filled surface.
 */
export function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-white/8 bg-surface/70 p-6 transition-[border-color,transform,background-color] duration-500 ease-spring hover:-translate-y-1 hover:border-brand/30 hover:bg-surface-2 sm:p-7">
      {/* Top-edge highlight: brightest at the centre, fading to nothing at the
          corners, so the card reads as lit from above rather than outlined. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(203,108,230,0.5),transparent)] opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <Icon
        size={26}
        strokeWidth={1.5}
        aria-hidden="true"
        className="text-brand transition-colors duration-300 group-hover:text-brand-soft"
      />
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{desc}</p>
    </div>
  );
}
