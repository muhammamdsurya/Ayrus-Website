/**
 * Shared scroll-reveal controller.
 *
 * One IntersectionObserver and one scroll listener serve every <Reveal> on the
 * page, instead of ~40 of each.
 *
 * Two safety nets, because the failure mode here is content that is invisible
 * forever on a lead-generation site:
 *
 * 1. Scroll sweep. An IntersectionObserver only reports threshold crossings, so
 *    an element that moves from below the viewport to above it within a single
 *    frame — an anchor jump, a restored scroll position, a fast flick — can
 *    produce no callback at all. The sweep reveals anything that has reached
 *    the fold regardless.
 *
 * 2. Liveness failsafe. An observer that never delivers its initial callback
 *    (a throttled background tab, a frozen or non-compositing renderer, an
 *    unexpected engine bug) would leave every section at opacity 0. If no
 *    callback has arrived shortly after startup, everything is revealed.
 */

const FAILSAFE_MS = 2500;

let observer: IntersectionObserver | null = null;
let pending: Set<HTMLElement> | null = null;
let frame = 0;
let sawCallback = false;

function show(el: HTMLElement) {
  el.dataset.shown = "true";
  pending?.delete(el);
  observer?.unobserve(el);
}

/** Reveal anything whose top edge has already reached the bottom of the viewport. */
function sweep() {
  frame = 0;
  if (!pending) return;

  const limit = window.innerHeight * 0.92;
  for (const el of [...pending]) {
    if (el.getBoundingClientRect().top <= limit) show(el);
  }
}

function onScroll() {
  if (frame) return;
  frame = requestAnimationFrame(sweep);
}

/** Last resort: the observer never reported in, so show everything. */
function revealAll() {
  if (sawCallback || !pending) return;
  for (const el of [...pending]) show(el);
}

function setup() {
  pending = new Set();
  sawCallback = false;

  observer = new IntersectionObserver(
    (entries) => {
      sawCallback = true;
      for (const entry of entries) {
        if (entry.isIntersecting) show(entry.target as HTMLElement);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  setTimeout(revealAll, FAILSAFE_MS);
}

/** Register an element for reveal; returns an unregister function. */
export function observeReveal(el: HTMLElement): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.dataset.shown = "true";
    return () => {};
  }

  if (!pending || !observer) setup();

  pending!.add(el);
  observer!.observe(el);
  onScroll();

  return () => {
    pending?.delete(el);
    observer?.unobserve(el);
  };
}
