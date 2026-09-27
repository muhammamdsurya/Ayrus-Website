import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { FaqList, faqSchema } from "@/components/faq";
import { PriceTiers } from "@/components/price-tiers";
import { ButtonLink, Card, Eyebrow, SectionHeading } from "@/components/ui";
import { pricing } from "@/lib/pricing";
import { businessId, site, waLink } from "@/lib/site";

const title = "Harga Pembuatan Aplikasi Kasir & Website UMKM 2026";
const description =
  "Harga pembuatan aplikasi kasir (POS), aplikasi keuangan, website UMKM, dan aplikasi custom: kisaran biaya per paket, estimasi waktu, dan apa saja yang termasuk. Sekali bayar.";
const source = "halaman harga";

const factors = [
  "Jumlah modul — kasir saja, atau ditambah stok, piutang, dan laporan",
  "Jumlah outlet atau cabang yang perlu tersambung",
  "Integrasi dengan perangkat (printer, timbangan) atau sistem lain",
  "Migrasi data lama dari Excel atau aplikasi sebelumnya",
  "Kebutuhan desain: tampilan standar yang rapi atau identitas merek penuh",
];

const faqs = [
  {
    q: "Kenapa ada aplikasi kasir sekali bayar yang hanya ratusan ribu?",
    a: "Itu lisensi aplikasi jadi: Anda membeli hak pakai software yang sama dengan ribuan toko lain, dengan fitur yang tidak bisa diubah. Harga di halaman ini untuk aplikasi yang dibangun khusus mengikuti alur usaha Anda, dan source code-nya diserahkan ke Anda.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Umumnya dibagi tiga termin: di awal sebagai tanda jadi, saat desain disetujui, dan saat aplikasi selesai diserahkan. Tidak perlu lunas di awal.",
  },
  {
    q: "Apakah ada biaya setelah aplikasi selesai?",
    a: "Hosting dan domain tahun pertama kami sertakan; setelah itu dibayar langsung ke penyedia, biasanya ratusan ribu per tahun. Paket maintenance bersifat opsional, karena source code sudah milik Anda.",
  },
  {
    q: "Budget saya terbatas. Bisa dibangun bertahap?",
    a: "Bisa, dan sering kami sarankan. Versi pertama berisi modul yang paling mendesak, lalu modul lain ditambahkan setelah versi pertama terpakai dan kebutuhannya lebih jelas.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/harga" },
  openGraph: { type: "website", url: `${site.url}/harga`, title, description },
};

export default function PricingPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: title,
      url: `${site.url}/harga`,
      itemListElement: pricing.flatMap((p) =>
        p.tiers.map((t) => ({
          "@type": "Offer",
          name: `${p.label} — ${t.name}`,
          description: t.desc,
          url: `${site.url}/layanan/${p.serviceSlug}`,
          seller: { "@id": businessId },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IDR",
            minPrice: t.min * 1_000_000,
            ...(t.max === null ? {} : { maxPrice: t.max * 1_000_000 }),
          },
        })),
      ),
    },
    faqSchema(faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.28),transparent_65%)] blur-3xl" />
        </div>

        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-ink-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" className="text-ink">
                  Harga
                </span>
              </li>
            </ol>
          </nav>

          <Rise>
            <Eyebrow>Harga 2026</Eyebrow>
          </Rise>
          <Rise delay={60}>
            <h1 className="mt-6 max-w-4xl text-[2.25rem] leading-[1.1] font-extrabold sm:text-5xl">
              Harga pembuatan aplikasi kasir, aplikasi keuangan &amp; website UMKM
            </h1>
          </Rise>
          <Rise delay={120}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Kisaran biaya di bawah untuk aplikasi yang dibangun khusus dengan model sekali bayar —
              source code diserahkan ke Anda. Angka pastinya kami rinci per modul setelah konsultasi
              gratis. Butuh kasir yang bisa dipakai hari ini?{" "}
              <Link
                href="/produk/kaselapos"
                className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-soft"
              >
                KaselaPOS mulai Rp 99 ribu/bulan
              </Link>
              .
            </p>
          </Rise>
          <Rise delay={180}>
            <nav aria-label="Pilih layanan" className="mt-8 flex flex-wrap gap-2.5">
              {pricing.map((p) => (
                <a
                  key={p.serviceSlug}
                  href={`#${p.serviceSlug}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-ink-muted transition-colors hover:border-brand/50 hover:text-ink"
                >
                  {p.label}
                </a>
              ))}
            </nav>
          </Rise>
        </div>
      </section>

      {pricing.map((p, i) => (
        <section
          key={p.serviceSlug}
          id={p.serviceSlug}
          className={`scroll-mt-24 py-16 ${i % 2 === 0 ? "border-y border-white/8 bg-bg-alt" : ""}`}
        >
          <div className="container-page">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-bold sm:text-3xl">Harga {p.label}</h2>
                <Link
                  href={`/layanan/${p.serviceSlug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-soft"
                >
                  Detail layanan
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <PriceTiers pricing={p} source={source} />
          </div>
        </section>
      ))}

      <section className="py-[var(--spacing-section)]">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Rincian"
              title="Apa yang menentukan harga"
              sub="Dua aplikasi kasir bisa berbeda harga beberapa kali lipat. Biasanya karena lima hal ini."
            />
          </Reveal>
          <Reveal delay={80}>
            <Card as="div">
              <ul className="space-y-3.5">
                {factors.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Pertanyaan soal harga" />
          </Reveal>
          <FaqList faqs={faqs} />
          <Reveal delay={80}>
            <div className="mt-14 text-center">
              <ButtonLink
                href={waLink("Halo Ayrus, saya ingin estimasi biaya untuk aplikasi usaha saya.", source)}
                external
                className="px-7"
              >
                Minta Estimasi via WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
