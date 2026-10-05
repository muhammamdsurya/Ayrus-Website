/**
 * Single source of truth for site config + copy.
 *
 * i18n readiness (PRD §4.3): every user-facing string lives here rather than
 * inline in JSX, so introducing `next-intl` in Phase 2 means moving this object
 * into `messages/id.json` + `messages/en.json` — not rewriting components.
 */

export const site = {
  name: "Ayrus Digital Indonesia",
  shortName: "Ayrus",
  url: "https://ayrusdigital.my.id",
  locale: "id_ID",
  founded: "2021",
  tagline: "Software house Indonesia",
  description:
    "Ayrus Digital Indonesia adalah software house yang membangun custom software sesuai alur bisnis: aplikasi web, Android & iOS, ERP, AI automation, dan website company profile.",
  email: "ayrusdigitalindonesia@gmail.com",
  phoneDisplay: "+62 851-3976-3390",
  whatsapp: "6285139763390",
  hours: "Setiap hari, 09.00-18.00 WIB",
  social: {
    instagram: "https://www.instagram.com/ayrusdigital",
    facebook: "https://www.facebook.com/people/Ayrus-Digital-Indonesia/61594778053714/",
    tiktok: "https://www.tiktok.com/@ayrusdigital",
  },
  /** Must match the Google Business Profile listing character for character. */
  address: {
    street: "Jl. Raya Condet No. 21",
    city: "Jakarta Timur",
    region: "DKI Jakarta",
    country: "ID",
  },
} as const;

/**
 * Site-wide share image (app/opengraph-image.png). A page that sets its own
 * `openGraph` block no longer inherits the root file image, so pages without
 * a specific picture spread this in explicitly.
 */
export const shareImage = { url: "/opengraph-image.png", width: 1200, height: 630, alt: site.name };

/** JSON-LD `@id` of the business node declared once in app/layout.tsx. */
export const businessId = `${site.url}/#bisnis`;

/**
 * Ayrus' own SaaS products. Each lives on its own subdomain, which owns its
 * pricing and sign-up; this site only introduces them (homepage #saas, footer).
 */
export const saasProducts = [
  {
    name: "KaselaPOS",
    category: "Aplikasi kasir online",
    url: "https://kaselapos.ayrusdigital.my.id/",
    image: "/images/saas-kaselapos.webp",
    desc: "Sistem kasir berbasis browser untuk UMKM: catat penjualan, kelola stok, dan pantau laporan dari HP, tablet, atau laptop tanpa instalasi.",
  },
  {
    name: "AutoJobs",
    category: "Otomasi lamaran kerja",
    url: "https://autojobs.ayrusdigital.my.id/",
    image: "/images/saas-autojobs.webp",
    desc: "Cari lowongan di JobStreet, Glints, dan LinkedIn dalam satu pencarian, lalu kirim lamaran otomatis dari satu profil dan CV.",
  },
] as const;

/**
 * `source` is appended as "(dari …)" so whoever answers WhatsApp can log which
 * page produced the chat.
 */
export function waLink(message: string, source?: string) {
  const text = source ? `${message} (dari ${source})` : message;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Gmail web compose with the address (and optional subject) prefilled.
 * Used instead of `mailto:`, which does nothing on machines with no default
 * mail app and so reads as a dead link.
 */
export function gmailLink(subject?: string) {
  const q = new URLSearchParams({ view: "cm", fs: "1", to: site.email });
  if (subject) q.set("su", subject);
  return `https://mail.google.com/mail/?${q}`;
}

export const waMessages = {
  general: "Halo Ayrus, saya ingin bertanya soal kebutuhan aplikasi bisnis saya.",
  custom: "Halo Ayrus, saya ingin konsultasi soal pembuatan aplikasi custom.",
} as const;

/**
 * `section` marks a homepage anchor the navbar scroll-spies.
 * `match` marks a route prefix that should light the same item up
 * (e.g. /layanan/website keeps "Layanan" active).
 */
export const nav = [
  { label: "Tentang Kami", href: "/#tentang", section: "tentang" },
  { label: "Layanan", href: "/#layanan", section: "layanan", match: "/layanan" },
  { label: "SaaS", href: "/#saas", section: "saas" },
  { label: "Karya Kami", href: "/#portofolio", section: "portofolio", match: "/portofolio" },
  { label: "Artikel", href: "/blog", match: "/blog" },
] as const;

export const navSections = nav.flatMap((n) => ("section" in n ? [n.section] : []));
