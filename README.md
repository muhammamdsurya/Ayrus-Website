# Ayrus Digital Teknologi — Website

Company profile + conversion landing page, built from `PRD_Ayrus_Digital_Teknologi_EN.md`.
Default content language is **Bahasa Indonesia** (PRD §4.3).

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 (`@theme` tokens in `app/globals.css`) |
| Icons | `lucide-react` |
| Fonts | Sora (headings) + Plus Jakarta Sans (body), self-hosted via `next/font` |
| Rendering | Fully static (SSG) — every route prerenders |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

> `next/font` downloads Sora and Plus Jakarta Sans from Google Fonts at build
> time. On a machine without outbound access to `fonts.googleapis.com` the build
> still succeeds but falls back to a system font — set `HTTPS_PROXY` or switch to
> `next/font/local` if that matters in your CI.

## Structure

```
app/
  layout.tsx              Fonts, metadata, Organization JSON-LD, skip link, chrome
  page.tsx                Beranda — PRD §5.1
  layanan/[slug]/         4 service detail pages (Service/FAQ/Breadcrumb JSON-LD)
  portofolio/             Case-study index + [slug] detail (Article JSON-LD)
  blog/                   Article index + [slug] detail (BlogPosting JSON-LD)
  produk/nectarpos/       NectarPOS landing — PRD §5.4 (+ SoftwareApplication JSON-LD)
  sitemap.ts robots.ts    Generated from lib/services + lib/articles
  globals.css             Design tokens + reveal/rise animation
components/
  navbar / footer / whatsapp-fab
  service-card.tsx        Media-header service card
  feature-card.tsx        Shared feature card (default + compact variants)
  portfolio-grid.tsx      Filterable case-study grid (client component)
  process-flow.tsx        Six-step flow (SVG curve on desktop, spine on mobile)
  pos-mockup.tsx          NectarPOS dashboard mockup (pure markup, no image assets)
  reveal.tsx / rise.tsx   Scroll reveal / above-the-fold entrance
lib/
  site.ts                 Config, nav, contact — the i18n seam
  services.ts             All 4 services: card copy + full detail-page content
  portfolio.ts            All 6 case studies: challenge, solution, outcomes
  articles.ts             All 3 articles, body as typed content blocks
  reveal-observer.ts      Shared IntersectionObserver + failsafes
public/images/            Service and NectarPOS photography
```

## Routes

| Route | What |
|---|---|
| `/` | Beranda |
| `/layanan/custom-software` | Custom Software Development |
| `/layanan/aplikasi-keuangan` | Aplikasi Keuangan |
| `/layanan/website` | Website Development |
| `/layanan/sistem-pos` | Sistem POS Custom |
| `/produk/nectarpos` | NectarPOS product page |
| `/portofolio` + `/portofolio/[slug]` | Case-study index (filterable) and 6 detail pages |
| `/blog` + `/blog/[slug]` | Article index and 3 detail pages |

Every route is prerendered at build time.

## Editing content

Company details, phone, email and WhatsApp number live in **`lib/site.ts`**. The
placeholder values there (`ayrusdigital.com`, `halo@ayrusdigital.com`,
`6281234567890`, the Bandung address) **must be replaced with real ones before
launch** — they also feed the JSON-LD and the WhatsApp deep links.

Service content — card copy, detail-page sections, workflow, requirements and
FAQs — lives in **`lib/services.ts`**, one object per service. Articles live in
**`lib/articles.ts`**, with the body as typed blocks (`p`, `h2`, `ul`, `ol`,
`quote`, `callout`) rather than an HTML string, so the renderer keeps control of
typography and nothing needs `dangerouslySetInnerHTML`.

Case studies live in **`lib/portfolio.ts`**. A case study's `category` must match
a `category` in `lib/services.ts` so the portfolio filter chips line up, and its
`serviceSlug` drives the "Layanan terkait" cross-link.

Adding a service, case study or article means adding one object; the homepage
cards, footer links, detail page, filter chips and sitemap all pick it up
automatically.

### Logo & brand assets

The source lockup is `public/images/logo.png` (mark + wordmark + tagline, on a
near-black `#060607` field). Three assets are derived from it:

| File | What | Used by |
|---|---|---|
| `public/images/logo-mark.png` | The "A" mark alone, background cut to transparent, 512² | Navbar and footer |
| `app/icon.png` / `app/apple-icon.png` | Favicon (256²) and touch icon (180²) | Auto-wired by Next's file convention |
| `app/opengraph-image.png` / `app/twitter-image.png` | Full lockup on `#0A0A0A`, 1200×630 | Social share cards, auto-wired |

Only the mark goes in the navbar — the full lockup is square and carries a
tagline, so at 36px it would be illegible. The "Ayrus." wordmark beside it stays
as HTML text: crisper at small sizes and it scales with the user's font settings.

To regenerate after replacing `logo.png`, redo the same three crops; the mark's
transparency comes from an alpha ramp on luminance (fully transparent below 9,
fully opaque above 26), which cuts cleanly because the source sits on flat black.

### Images

Photos in `public/images/` are stock from [Unsplash](https://unsplash.com),
downloaded rather than hotlinked so the site has no external runtime dependency
and `next/image` can optimise them to AVIF/WebP. The Unsplash License permits
commercial use without attribution.

**These are placeholders.** Swap in real project screenshots and client
photography before launch — genuine product shots convert better than stock, and
the NectarPOS "sample images" are currently context photos rather than actual
screenshots of the app.

### i18n readiness (PRD §4.3)

No user-facing string is hardcoded inside JSX logic — everything is in `lib/site.ts`
or a page-level data array. Adding `next-intl` in Phase 2 means moving those objects
into `messages/id.json` + `messages/en.json`, not rewriting components.

## What is built vs. not

**Built:** Beranda, 4 service detail pages, NectarPOS product page, portfolio
index + 6 case-study detail pages, blog index + 3 article detail pages, 404,
sitemap, robots, schema markup, floating WhatsApp CTA, navbar active state, full
responsive + accessibility pass.

**Not built (PRD scope, needs its own pass):** a standalone Tentang Kami page and
the privacy/terms pages (PRD §4.1 lists both). Nothing links to them any more, so
there are no broken links — but Kebijakan Privasi is worth adding before launch,
since the contact CTAs collect personal data. Homepage in-page anchors
(`/#layanan`, `/#tentang`, `/#portofolio`, `/#artikel`) all work.

Also out of scope here, per PRD §4.3: CMS wiring, the consultation form backend
(the CTAs deep-link to WhatsApp/email instead), and GA4/Search Console tags.

## Design notes

See [DESIGN.md](DESIGN.md) for the token system, the contrast audit, and the
reasoning behind the motion and performance choices.
