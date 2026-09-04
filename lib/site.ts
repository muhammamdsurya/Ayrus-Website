/**
 * Single source of truth for site config + copy.
 *
 * i18n readiness (PRD §4.3): every user-facing string lives here rather than
 * inline in JSX, so introducing `next-intl` in Phase 2 means moving this object
 * into `messages/id.json` + `messages/en.json` — not rewriting components.
 */

export const site = {
  name: "Ayrus Digital Teknologi",
  shortName: "Ayrus",
  url: "https://ayrusdigital.my.id",
  locale: "id_ID",
  founded: "2021",
  tagline: "Software house untuk UMKM Indonesia",
  description:
    "Ayrus Digital Teknologi membangun aplikasi custom untuk UMKM Indonesia — aplikasi laundry, website bisnis, dan sistem POS. Berdiri sejak 2021.",
  email: "muhammadsurya2812@gmail.com",
  phoneDisplay: "+62 857-1735-8096",
  whatsapp: "6285717358096",
  hours: "Setiap Hari, 09.00–18.00 WIB",
  address: {
    street: "Jl. Raya Condet No. 21",
    city: "Jakarta",
    region: "Jawa Barat",
    postalCode: "40115",
    country: "ID",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: "Halo Ayrus, saya ingin konsultasi gratis soal kebutuhan aplikasi bisnis saya.",
  custom: "Halo Ayrus, saya ingin konsultasi soal pembuatan aplikasi custom.",
  nectarpos: "Halo Ayrus, saya ingin mencoba demo NectarPOS untuk usaha saya.",
} as const;

/**
 * `section` marks a homepage anchor the navbar scroll-spies.
 * `match` marks a route prefix that should light the same item up
 * (e.g. /layanan/website keeps "Layanan" active).
 */
export const nav = [
  { label: "Layanan", href: "/#layanan", section: "layanan", match: "/layanan" },
  { label: "NectarPOS", href: "/produk/nectarpos", match: "/produk/nectarpos" },
  { label: "Portofolio", href: "/#portofolio", section: "portofolio", match: "/portofolio" },
  { label: "Tentang Kami", href: "/#tentang", section: "tentang" },
  { label: "Artikel", href: "/blog", match: "/blog" },
] as const;

export const navSections = nav.flatMap((n) => ("section" in n ? [n.section] : []));
