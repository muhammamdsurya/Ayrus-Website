export type Step = {
  step: string;
  title: string;
  desc: string;
  /** Optional per-stage output, shown on the service detail pages. */
  deliverable?: string;
};

/**
 * Process flow.
 *
 * Desktop: six steps threaded onto a single flowing SVG curve, alternating
 * above and below the line. The curve lives in a fixed-height band with a
 * `preserveAspectRatio="none"` viewBox, so the node dots stay welded to the
 * curve at any container width — the band's height never changes, and the x
 * positions scale with the same 6-column grid the cards sit in.
 *
 * Below lg the curve is replaced by a vertical spine, which stays legible on a
 * phone where six horizontal columns would not.
 *
 * The markup is one <ol> in step order at every breakpoint; only the grid
 * placement alternates, so reading order matches visual order.
 */

// Node x positions = the centre of each column in a 6-column 1200-unit grid.
const NODES = [100, 300, 500, 700, 900, 1100];
const HIGH = 34;
const LOW = 78;

/** Even steps sit on a crest, odd steps in a trough. */
const nodeY = (i: number) => (i % 2 === 0 ? HIGH : LOW);

const CURVE = [
  "M 0,56",
  "C 40,56 62,34 100,34",
  "C 168,34 232,78 300,78",
  "C 368,78 432,34 500,34",
  "C 568,34 632,78 700,78",
  "C 768,78 832,34 900,34",
  "C 968,34 1032,78 1100,78",
  "C 1145,78 1172,66 1200,56",
].join(" ");

export function ProcessFlow({ steps }: { steps: Step[] }) {
  return (
    <>
      {/* ---------------- Desktop: flowing curve ---------------- */}
      {/* No column gap: with 6 equal gapless columns each centre lands exactly
          on the curve's node x (viewBox 100, 300, … 1100) at any width. The
          visual gutter comes from padding inside each item instead. */}
      <ol className="mt-16 hidden grid-cols-6 grid-rows-[1fr_7rem_1fr] lg:grid">
        {/* The curve band spans every column in the middle row. */}
        <li
          aria-hidden="true"
          className="pointer-events-none col-span-6 col-start-1 row-start-2 self-stretch"
        >
          <svg
            viewBox="0 0 1200 112"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
            focusable="false"
          >
            <defs>
              <linearGradient id="ayrus-flow" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#cb6ce6" stopOpacity="0.15" />
                <stop offset="0.5" stopColor="#cb6ce6" stopOpacity="0.9" />
                <stop offset="1" stopColor="#8e4fe0" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            <path d={CURVE} fill="none" stroke="url(#ayrus-flow)" strokeWidth="2" strokeLinecap="round" />

            {NODES.map((x, i) => {
              const y = nodeY(i);
              // Tick joining each node to the card on its side of the band.
              const tickTo = i % 2 === 0 ? 0 : 112;
              return (
                <g key={x}>
                  <line x1={x} y1={y} x2={x} y2={tickTo} stroke="#cb6ce6" strokeOpacity="0.28" strokeWidth="2" />
                  <circle cx={x} cy={y} r="11" fill="#cb6ce6" fillOpacity="0.16" />
                  <circle cx={x} cy={y} r="5" fill="#cb6ce6" />
                </g>
              );
            })}
          </svg>
        </li>

        {steps.slice(0, 6).map((s, i) => (
          <li
            key={s.step}
            className="min-w-0 px-2"
            style={{
              gridColumn: i + 1,
              gridRow: i % 2 === 0 ? 1 : 3,
              // Pull each card toward the band so the tick reads as a join.
              [i % 2 === 0 ? "paddingBottom" : "paddingTop"]: "0.5rem",
            }}
          >
            <StepCard step={s} align={i % 2 === 0 ? "bottom" : "top"} />
          </li>
        ))}
      </ol>

      {/* ---------------- Mobile / tablet: vertical spine ---------------- */}
      <ol className="mt-12 lg:hidden">
        {steps.map((s, i) => (
          <li key={s.step} className="relative flex gap-5 pb-8 last:pb-0">
            <span aria-hidden="true" className="relative flex w-6 shrink-0 justify-center">
              {i < steps.length - 1 ? (
                <span className="absolute top-6 bottom-[-2rem] w-px bg-gradient-to-b from-brand/60 to-brand/15" />
              ) : null}
              <span className="relative mt-1 grid h-6 w-6 place-items-center rounded-full bg-brand/15">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
            </span>
            <div className="glass min-w-0 flex-1 rounded-[var(--radius-card)] p-5">
              <span className="font-display text-sm font-extrabold text-brand">{s.step}</span>
              <h3 className="mt-1.5 text-lg font-bold">{s.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{s.desc}</p>
              {s.deliverable ? (
                <p className="mt-3.5 border-t border-white/8 pt-3.5 text-sm">
                  <span className="text-ink-muted">Hasil tahap ini: </span>
                  <span className="font-semibold text-brand">{s.deliverable}</span>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function StepCard({ step, align }: { step: Step; align: "top" | "bottom" }) {
  return (
    <div
      className={`glass h-full rounded-[var(--radius-card)] p-5 transition-colors duration-300 hover:border-brand/35 ${
        align === "bottom" ? "flex flex-col justify-end" : ""
      }`}
    >
      <span className="font-display text-sm font-extrabold text-brand">{step.step}</span>
      <h3 className="mt-1.5 text-base font-bold">{step.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
      {step.deliverable ? (
        <p className="mt-3 border-t border-white/8 pt-3 text-xs leading-relaxed">
          <span className="text-ink-muted">Hasil: </span>
          <span className="font-semibold text-brand">{step.deliverable}</span>
        </p>
      ) : null}
    </div>
  );
}
