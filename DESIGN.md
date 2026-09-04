# Design system — Ayrus Digital Teknologi

Dark-first, purple accent, per PRD §6. Tokens live in `app/globals.css` under
`@theme`; nothing should hardcode a hex outside that block except the per-service
card accents in `app/page.tsx`.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#0A0A0A` | Page background |
| `--color-bg-alt` | `#111111` | Alternating section background |
| `--color-surface` | `#141419` | Card background |
| `--color-surface-2` | `#1C1C22` | Card footer / nested surface |
| `--color-line` | `#26262E` | Decorative dividers |
| `--color-line-strong` | `#6B6B78` | Control boundaries (3.5:1 on surface) |
| `--color-ink` | `#F5F5F5` | Body text |
| `--color-ink-muted` | `#A1A1AA` | Secondary text |
| `--color-brand` | `#CB6CE6` | Accent, links, CTA fill |
| `--color-brand-deep` | `#8E4FE0` | Gradient partner |
| `--color-brand-soft` | `#E9B8F5` | Focus ring, chips, CTA hover |
| `--color-brand-ink` | `#0A0A0A` | **Text on a purple fill** |

Type: **Sora** for headings (`--font-display`), **Plus Jakarta Sans** for body
(`--font-sans`). Section rhythm is `--spacing-section` (5.5rem).

## Contrast audit (WCAG 2.1 AA — PRD §9)

Measured, not assumed:

| Pair | Ratio | Result |
|---|---|---|
| `#F5F5F5` on `#0A0A0A` — body | 18.16:1 | AAA |
| `#A1A1AA` on `#0A0A0A` — muted | 7.72:1 | AAA |
| `#A1A1AA` on `#141419` — muted on card | 7.16:1 | AAA |
| `#CB6CE6` on `#0A0A0A` — accent text/links | 6.44:1 | AA |
| `#0A0A0A` on `#CB6CE6` — **CTA label** | 6.44:1 | AA |
| `#FFFFFF` on `#CB6CE6` | **3.08:1** | **fails AA** |
| `#E9B8F5` on `#0A0A0A` — focus ring | 11.92:1 | AAA |
| Card pill tints (`#C4B5FD` / `#E9B8F5` / `#A5B4FC` / `#F5D0FE`) on `#141419` | 9.2–13.4:1 | AAA |

### The one rule worth remembering

**Never put white text on the `#CB6CE6` purple.** It is 3.08:1 — below the 4.5:1
floor the PRD requires. Primary buttons therefore use near-black ink
(`--color-brand-ink`) on the purple fill, which measures 6.44:1. This is why the
CTA buttons read dark-on-purple rather than the more common white-on-brand.

## Motion

Two mechanisms, deliberately separate:

- **`<Rise>` (`components/rise.tsx`)** — above the fold. A pure CSS keyframe with
  no JavaScript, so the hero (which contains the LCP element) paints on the first
  frame. A JS-gated reveal here would hold the LCP element at `opacity: 0` until
  hydration and blow the PRD's 2.5s budget.
- **`<Reveal>` (`components/reveal.tsx`)** — below the fold. IntersectionObserver
  via a single shared controller in `lib/reveal-observer.ts`.

`prefers-reduced-motion: reduce` renders the final state immediately for both,
and pauses the client marquee.

### Why the reveal controller has failsafes

The failure mode of a scroll reveal is *invisible content on a lead-gen site*, so
`lib/reveal-observer.ts` carries three backstops:

1. **`<noscript>` override** (in `app/layout.tsx`) — no JS, everything visible.
   Content is server-rendered either way, so crawlers never depend on this.
2. **Scroll sweep** — an IntersectionObserver only reports threshold crossings, so
   an anchor jump or a fast flick can move a section from below the viewport to
   above it with no callback. The sweep reveals anything past the fold regardless.
3. **Liveness timeout** — if no observer callback arrives within 2.5s, everything
   is revealed. Covers throttled/non-compositing renderers.

## Section weight

Not every section should be a card grid. The page alternates deliberately:

Three card weights, deliberately distinct:

| Weight | Component | Used by |
|---|---|---|
| Heavy | `ServiceCard`, `PortfolioGrid` card | Photo-led. Media header, category pill, divided footer. The sections that have to sell. |
| Medium | `FeatureCard` (default) | Icon tile, `01`–`06` marker, brand hairline along the top edge. Kenapa Ayrus, service "Apa saja yang Anda dapat". |
| Light | `FeatureCard variant="compact"` | Icon inline with the title, no marker, no top edge. NectarPOS feature grid — supporting detail, not the point of the page. |

The rule is that a section's card weight should match how much of the page's
persuasive work it is doing. A six-item grid at heavy weight reads as a wall; the
same grid compact reads as a spec list, which is what a feature roster actually
is.

`FeatureCard`'s top-edge highlight is a single gradient hairline, brightest at
the centre and fading to nothing at the corners, so the card reads as lit from
above rather than merely outlined — depth without adding another filled surface.

## Performance choices

- **`backdrop-filter` is used only on the navbar.** The `.glass` cards sit on a
  flat dark background, where blurring the backdrop is visually indistinguishable
  but forces a compositing layer per card — real cost on the mid-tier Android
  phones this audience uses.
- **No image assets on the critical path.** The NectarPOS mockup and the service
  card media headers are generated markup/gradients, so they cost no requests and
  stay crisp at any DPI.
- **No animation library.** Framer Motion (PRD §7.1) was not needed once the hero
  moved to CSS keyframes and the rest to one shared observer; skipping it keeps
  the client bundle smaller, which the same PRD section asks for.

## Portfolio filtering

The category chips on `/portofolio` are `<button>`s with `aria-pressed`, not
links: they change a view rather than navigate, so a link would lie about what
happens. The result count sits in an `aria-live="polite"` region, because
filtering a grid produces no focus change and would otherwise be silent to a
screen reader.

Every card is server-rendered and only hidden client-side when filtered out, so
crawlers and no-JS visitors always receive the complete list.

## Photography treatment

Four unrelated stock photos have to read as one set without swamping the
subject. Each service card and detail hero layers:

1. the photo,
2. a per-service brand tint at low alpha (28% on cards, 20% on detail heroes),
3. a bottom-anchored dark gradient that buys contrast for the icon chip.

**Not `mix-blend-multiply`.** Multiply was the first attempt and it crushed the
darker photos — a laptop shot on a dark desk became a flat purple rectangle with
no subject visible at all. Plain alpha is predictable across compositors and
keeps the picture legible, which is the entire reason for having a photo.

Keep the dark gradient bottom-heavy (`from-black/60 via-black/12 to-transparent`)
rather than uniform: uniform dimming costs the whole image to solve a contrast
problem that only exists behind the icon chip.

## Navbar active state

The current item is bright (`--color-ink`, semibold) against muted siblings, and
carries `aria-current="page"`. Brightness alone would be a colour-only signal, so
the active item also gets a brand underline (a left bar in the mobile panel).

Two sources feed it, in priority order:

1. **Route match** — a `match` prefix on the nav item, so `/layanan/website`
   keeps *Layanan* active and `/blog/<slug>` keeps *Artikel* active.
2. **Scroll spy** — only on `/`, an IntersectionObserver over the homepage
   anchor sections with a `-45%` band top and bottom, so a section becomes
   current once it actually occupies the reading area. The topmost visible
   section wins, so the highlight follows reading order.

If the observer never fires, nothing is marked active and the nav degrades to
its plain appearance — no broken-looking state.

## Accessibility notes

- Skip link to `#konten-utama`; `scroll-padding-top` keeps anchored headings clear
  of the sticky navbar so focus is never obscured.
- One `<h1>` per page, unbroken `h2`/`h3` hierarchy.
- Decorative icons are `aria-hidden`; icon-only controls (menu toggle, WhatsApp
  FAB) carry `aria-label`, and the toggle exposes `aria-expanded`.
- The web-vs-desktop comparison table uses `<caption>` plus `scope="col"`/`"row"`,
  and each cell pairs its icon with visually-hidden "Ya"/"Tidak" so meaning never
  rests on colour alone.
- The FAQ uses native `<details>`/`<summary>` — keyboard-operable with correct
  expanded-state announcement, no custom ARIA.
- Testimonials are a static grid, not a carousel: nothing auto-rotates, so there
  is no motion to pause and every quote is reachable by keyboard.
- The client logo marquee pauses on hover **and** on focus, and is static under
  reduced motion.
- Touch targets are ≥44px; pinch-zoom is not disabled.

## Deviations from the PRD

| PRD says | Built | Why |
|---|---|---|
| Purple `#CB6CE6` for CTA buttons | Purple fill, **near-black** label | White on that purple is 3.08:1 and fails the AA requirement in §9 |
| Framer Motion for animation | CSS keyframes + one IntersectionObserver | Same effect, no extra client JS; §6.3 asks for lightweight animation |
| Glassmorphism on cards | Glass look, `backdrop-filter` only on navbar | Over a flat dark background the blur is invisible but not free |
