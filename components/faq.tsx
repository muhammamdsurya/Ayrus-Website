import { Plus } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./ui";

export type Faq = { q: string; a: string };

/**
 * FAQ block: heading pinned on the left, questions on the right, so a short
 * list does not float alone in the middle of a wide section.
 * Native <details>: keyboard-operable and announces expanded state without JS.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading title="Pertanyaan yang sering diajukan" />
      </Reveal>

      <div className="divide-y divide-white/8 border-y border-white/8">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 50}>
            <details className="group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold transition-colors hover:text-brand-soft [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/14 text-brand transition-transform duration-300 ease-spring group-open:rotate-45"
                >
                  <Plus size={16} strokeWidth={2} />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-6 leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
