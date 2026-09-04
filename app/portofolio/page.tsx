import type { Metadata } from "next";
import Link from "next/link";
import { Rise } from "@/components/rise";
import { Reveal } from "@/components/reveal";
import { Eyebrow, ButtonLink } from "@/components/ui";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { caseCategories, caseStudies } from "@/lib/portfolio";
import { site, waLink, waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus — Proyek UMKM yang Kami Kerjakan",
  description:
    "Studi kasus proyek Ayrus Digital Teknologi: aplikasi custom, sistem POS, aplikasi keuangan, dan website untuk UMKM Indonesia — lengkap dengan hasil terukurnya.",
  alternates: { canonical: "/portofolio" },
};

const stats = [
  { value: "50+", label: "Proyek selesai" },
  { value: "40+", label: "UMKM terbantu" },
  { value: "4", label: "Tahun pengalaman" },
  { value: "98%", label: "Klien puas" },
];

export default function PortfolioIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portofolio & Studi Kasus",
    url: `${site.url}/portofolio`,
    inLanguage: "id-ID",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.title,
        url: `${site.url}/portofolio/${c.slug}`,
      })),
    },
  };

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
                  Portofolio
                </span>
              </li>
            </ol>
          </nav>

          <Rise>
            <Eyebrow>Portofolio</Eyebrow>
          </Rise>
          <Rise delay={60}>
            <h1 className="mt-6 max-w-3xl text-[2.25rem] leading-[1.1] font-extrabold sm:text-5xl">
              Masalah nyata, hasil yang terukur
            </h1>
          </Rise>
          <Rise delay={120}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Setiap proyek di bawah dimulai dari satu masalah operasional yang konkret. Angka yang
              kami cantumkan berasal dari data klien setelah sistemnya berjalan.
            </p>
          </Rise>

          <Rise delay={180}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/8 pt-8 sm:gap-8 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="font-display block text-3xl font-extrabold text-brand">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-sm text-ink-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Rise>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <div className="container-page">
          <PortfolioGrid items={caseStudies} categories={caseCategories} />
        </div>
      </section>

      <section className="border-t border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <div className="glass-brand glow-brand relative overflow-hidden rounded-[1.75rem] px-6 py-14 text-center sm:px-10">
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Punya masalah operasional yang mirip?
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  Ceritakan bagian yang paling merepotkan di usaha Anda. Kami bantu petakan
                  solusinya lebih dulu, tanpa biaya dan tanpa kewajiban.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <ButtonLink href={waLink(waMessages.general)} external className="px-7">
                    Konsultasi Gratis
                  </ButtonLink>
                  <ButtonLink href="/#layanan" variant="secondary" className="px-7">
                    Lihat Layanan
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
