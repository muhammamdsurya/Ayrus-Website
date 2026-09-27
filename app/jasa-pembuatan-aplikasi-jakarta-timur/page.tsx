import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { FaqList, faqSchema } from "@/components/faq";
import { ButtonLink, Card, Eyebrow, SectionHeading } from "@/components/ui";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import { businessId, site, waLink } from "@/lib/site";

const title = "Jasa Pembuatan Aplikasi & Website di Jakarta Timur";
const description =
  "Software house di Condet, Jakarta Timur: jasa pembuatan aplikasi kasir, aplikasi keuangan, website, dan aplikasi custom untuk UMKM. Bisa bertemu langsung. Konsultasi gratis.";

const address = `${site.address.street}, ${site.address.city}, ${site.address.region}`;
// TODO(owner): replace with the Google Business Profile share link once claimed.
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${address}`)}`;
const wa = waLink(
  "Halo Ayrus, saya di Jakarta Timur dan ingin bertemu untuk konsultasi.",
  "halaman Jakarta Timur",
);

const areas = [
  "Condet",
  "Kramat Jati",
  "Cililitan",
  "Cawang",
  "Pasar Rebo",
  "Ciracas",
  "Makasar",
  "Jatinegara",
  "Duren Sawit",
  "Cipayung",
];

const faqs = [
  {
    q: "Apakah bisa bertemu langsung?",
    a: `Bisa. Konsultasi pertama gratis, di kantor kami di ${site.address.street} atau lewat video call. Untuk proyek aplikasi kasir, tim kami datang ke outlet Anda di tahap discovery untuk melihat alur transaksinya langsung.`,
  },
  {
    q: "Apakah hanya melayani Jakarta Timur?",
    a: "Tidak. Kami mengerjakan proyek untuk UMKM di seluruh Indonesia secara online. Bedanya, untuk usaha di Jakarta Timur dan sekitarnya, pertemuan tatap muka lebih mudah diatur.",
  },
  {
    q: "Berapa lama pengerjaan aplikasi atau website?",
    a: "Website umumnya 2–4 minggu, aplikasi kasir dan keuangan 5–8 minggu, dan aplikasi custom 6–10 minggu, tergantung jumlah modul.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/jasa-pembuatan-aplikasi-jakarta-timur" },
  openGraph: {
    type: "website",
    url: `${site.url}/jasa-pembuatan-aplikasi-jakarta-timur`,
    title,
    description,
  },
};

export default function JakartaTimurPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Jasa pembuatan aplikasi dan website di Jakarta Timur",
      description,
      url: `${site.url}/jasa-pembuatan-aplikasi-jakarta-timur`,
      areaServed: { "@type": "City", name: "Jakarta Timur" },
      provider: { "@id": businessId },
    },
    faqSchema(faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.28),transparent_65%)] blur-3xl" />
        </div>

        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Rise>
              <Eyebrow>Jakarta Timur</Eyebrow>
            </Rise>
            <Rise delay={60}>
              <h1 className="mt-6 text-[2.25rem] leading-[1.1] font-extrabold sm:text-5xl">
                Jasa pembuatan aplikasi di Jakarta Timur
              </h1>
            </Rise>
            <Rise delay={120}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                Ayrus Digital adalah software house di Condet, Jakarta Timur, yang membangun aplikasi
                kasir, aplikasi keuangan, dan website untuk UMKM sejak {site.founded}. Anda bisa
                bertemu tim kami langsung — di kantor, atau kami yang datang ke outlet Anda.
              </p>
            </Rise>
            <Rise delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={wa} external className="px-7">
                  Atur Pertemuan via WhatsApp
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/harga" variant="secondary" className="px-7">
                  Lihat Harga
                </ButtonLink>
              </div>
            </Rise>
          </div>

          <Rise delay={200}>
            <Card as="div">
              <h2 className="font-display text-sm font-semibold tracking-wide uppercase">
                Kantor kami
              </h2>
              <ul className="mt-5 space-y-4 text-[15px] text-ink-muted">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    {address}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 font-semibold text-brand hover:text-brand-soft"
                    >
                      Buka di Google Maps
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  {site.hours}
                </li>
              </ul>
            </Card>
          </Rise>
        </div>
      </section>

      <section className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Yang bisa kami bangun untuk usaha Anda"
              sub="Semua layanan memakai model sekali bayar, dan source code diserahkan ke Anda."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/layanan/${s.slug}`}
                  className="glass group flex h-full flex-col rounded-[var(--radius-card)] p-6 transition-colors duration-300 hover:border-brand/35"
                >
                  <span className="font-bold">{s.h1}</span>
                  <span className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.cardDesc}</span>
                  <span className="mt-4 text-sm font-semibold text-brand">
                    Mulai dari {s.priceFrom} · {s.timeline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Reveal delay={80}>
            <p className="mt-10 text-center text-ink-muted">
              Contoh per jenis usaha:{" "}
              {solutions.map((so, i) => (
                <span key={so.slug}>
                  {i > 0 ? " · " : null}
                  <Link
                    href={`/solusi/${so.slug}`}
                    className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:text-brand-soft"
                  >
                    aplikasi {so.shortTitle.toLowerCase()}
                  </Link>
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Area yang mudah kami datangi"
              sub="Untuk usaha di sekitar Condet, pertemuan tatap muka dan kunjungan ke outlet bisa diatur dalam hitungan hari."
            />
          </Reveal>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-white/12 px-4 py-2 text-sm text-ink-muted"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering diajukan" />
          </Reveal>
          <FaqList faqs={faqs} />
          <Reveal delay={80}>
            <div className="mt-14 text-center">
              <ButtonLink href={wa} external className="px-7">
                Atur Pertemuan via WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
