import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Reveal } from "./reveal";
import { ButtonLink } from "./ui";
import { tierRange, type ServicePricing } from "@/lib/pricing";
import { waLink } from "@/lib/site";

/** Three tier cards, each with its own "Minta estimasi" WhatsApp button. */
export function PriceTiers({ pricing, source }: { pricing: ServicePricing; source: string }) {
  return (
    <ul className="mt-10 grid items-start gap-5 lg:grid-cols-3">
      {pricing.tiers.map((t, i) => (
        <Reveal key={t.name} delay={i * 70} as="li" className="h-full">
          <div className="glass flex h-full flex-col rounded-[var(--radius-card)] p-7">
            <h3 className="font-display text-lg font-bold">{t.name}</h3>
            <p className="font-display mt-3 text-2xl font-extrabold text-brand">{tierRange(t)}</p>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-muted">
              <Clock size={14} aria-hidden="true" />
              Estimasi {t.timeline}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{t.desc}</p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {t.includes.map((it) => (
                <li key={it} className="flex gap-2.5 text-[15px] text-ink-muted">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
            <ButtonLink
              href={waLink(
                `Halo Ayrus, saya ingin estimasi biaya untuk ${pricing.label} paket ${t.name}.`,
                source,
              )}
              external
              variant={i === 1 ? "primary" : "secondary"}
              className="mt-7 w-full"
            >
              Minta Estimasi
              <ArrowRight size={17} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
