/**
 * Shared scroll-reveal controller.
 *
 * One IntersectionObserver, one scroll listener and one DOM scan serve every
 * <Reveal> on the page. <Reveal> renders entirely on the server, so none of the
 * ~40 revealed blocks costs a client component or a hydration boundary; this
 * module is the only JavaScript the effect needs.
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
let failsafe: ReturnType<typeof setTimeout> | null = null;

function reduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function show(el: HTMLElement) {
  el.dataset.shown = "true";
  pending?.delete(el);
  observer?.unobserve(el);
}

/** Reveal anything whose top edge has already reached the bottom of the viewport. */
function sweep() {
  frame = 0;
  if (!pending || pending.size === 0) return;

  const limit = window.innerHeight * 0.92;

  // Every rect is read before anything is shown. Interleaving the reads with
  // show(), which writes to dataset and so invalidates layout, would force a
  // synchronous reflow on each of the ~40 elements instead of none.
  const reached: HTMLElement[] = [];
  for (const el of pending) {
    if (el.getBoundingClientRect().top <= limit) reached.push(el);
  }
  for (const el of reached) show(el);
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

  failsafe = setTimeout(revealAll, FAILSAFE_MS);
}

/**
 * Register every not-yet-revealed element in the document.
 *
 * Safe to call repeatedly: re-observing an element the observer already holds
 * is a no-op, and revealed elements are excluded by the attribute selector.
 * Call it after a navigation, when a new page's markup has been committed.
 */
export function scanReveal() {
  const els = document.querySelectorAll<HTMLElement>(".reveal:not([data-shown])");
  if (els.length === 0) return;

  if (reduced()) {
    for (const el of els) el.dataset.shown = "true";
    return;
  }

  if (!pending || !observer) setup();

  for (const el of els) {
    pending!.add(el);
    observer!.observe(el);
  }
  onScroll();
}

/** Start the controller for this session; returns a teardown function. */
export function startReveal(): () => void {
  scanReveal();

  return () => {
    if (failsafe) clearTimeout(failsafe);
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    observer?.disconnect();
    observer = null;
    pending = null;
    frame = 0;
    failsafe = null;
  };
}
