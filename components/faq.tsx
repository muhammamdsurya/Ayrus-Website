import { Reveal } from "./reveal";

export type Faq = { q: string; a: string };

/** Native <details>: keyboard-operable and announces expanded state without JS. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={i * 50}>
          <details className="glass group rounded-[var(--radius-card)] px-6 open:border-brand/30">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-brand transition-transform duration-300 group-open:rotate-45"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="pb-5 leading-relaxed text-ink-muted">{f.a}</p>
          </details>
        </Reveal>
      ))}
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
