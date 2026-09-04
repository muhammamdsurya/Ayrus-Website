import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, Tag, Wallet } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProcessFlow } from "@/components/process-flow";
import { FeatureCard } from "@/components/feature-card";
import { Rise } from "@/components/rise";
import { ButtonLink, Card, Eyebrow, SectionHeading } from "@/components/ui";
import { getService, services } from "@/lib/services";
import { site, waLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** Four static pages, generated at build time. */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};

  const url = `${site.url}/layanan/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: [...s.keywords],
    alternates: { canonical: `/layanan/${s.slug}` },
    openGraph: {
      type: "article",
      url,
      title: s.metaTitle,
      description: s.metaDescription,
      images: [{ url: s.image.src, width: 1600, height: 900, alt: s.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: s.metaTitle,
      description: s.metaDescription,
      images: [s.image.src],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((o) => o.slug !== s.slug);
  const wa = waLink(
    `Halo Ayrus, saya ingin konsultasi soal layanan ${s.title}. Boleh dijelaskan lebih lanjut?`,
  );

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      serviceType: s.category,
      description: s.metaDescription,
      url: `${site.url}/layanan/${s.slug}`,
      areaServed: { "@type": "Country", name: "Indonesia" },
      provider: { "@type": "Organization", name: site.name, url: site.url },
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        description: `Mulai dari ${s.priceFrom}, model pembayaran sekali bayar`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
        { "@type": "ListItem", position: 2, name: "Layanan", item: `${site.url}/#layanan` },
        {
          "@type": "ListItem",
          position: 3,
          name: s.title,
          item: `${site.url}/layanan/${s.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* --------------------------------- hero --------------------------------- */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
          <div
            className="absolute -top-40 left-1/2 h-[480px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(ellipse at center, ${s.accent.from}45, transparent 65%)`,
            }}
          />
        </div>

        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#layanan" className="transition-colors hover:text-brand">
                  Layanan
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" className="text-ink">
                  {s.title}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <Rise>
                <span
                  className="inline-flex w-fit rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase"
                  style={{ color: s.accent.text, backgroundColor: `${s.accent.text}1f` }}
                >
                  {s.category}
                </span>
              </Rise>

              <Rise delay={60}>
                <h1 className="mt-6 text-[2.25rem] leading-[1.1] font-extrabold sm:text-5xl">
                  {s.title}
                </h1>
              </Rise>

              <Rise delay={120}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{s.tagline}</p>
              </Rise>

              <Rise delay={180}>
                <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  {[
                    { icon: Wallet, k: "Mulai dari", v: s.priceFrom },
                    { icon: Clock, k: "Estimasi", v: s.timeline },
                    { icon: Tag, k: "Model", v: "Sekali bayar" },
                  ].map((m) => (
                    <div key={m.k} className="flex items-center gap-2.5">
                      <m.icon size={18} className="shrink-0 text-brand" aria-hidden="true" />
                      <div>
                        <dt className="text-xs text-ink-muted">{m.k}</dt>
                        <dd className="font-display text-sm font-bold">{m.v}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Rise>

              <Rise delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={wa} external className="px-7">
                    Konsultasi Gratis
                    <ArrowRight size={18} aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink href="#alur" variant="secondary" className="px-7">
                    Lihat Alur Pengerjaan
                  </ButtonLink>
                </div>
              </Rise>
            </div>

            <Rise delay={200}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/12 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                />
                {/* Light tint only — the hero photo has to stay readable. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent.from}, ${s.accent.to})`,
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"
                />
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* ------------------------------- overview ------------------------------- */}
      <section className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading align="left" eyebrow="Ringkasan" title="Layanan ini untuk apa" />
              <div className="mt-6 space-y-4">
                {s.intro.map((p) => (
                  <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Card as="div" className="h-full">
              <h3 className="font-display text-sm font-semibold tracking-wide uppercase">
                Cocok bila
              </h3>
              <ul className="mt-5 space-y-3.5">
                {s.forWho.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- includes ------------------------------- */}
      <section className="py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Cakupan pekerjaan"
              title="Apa saja yang Anda dapat"
              sub="Semua poin di bawah sudah termasuk dalam penawaran — tidak ada biaya tambahan yang muncul belakangan."
            />
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.includes.map((it, i) => (
              <Reveal key={it.title} delay={i * 60} as="li" className="h-full">
                <FeatureCard icon={it.icon} title={it.title} desc={it.desc} index={i + 1} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------- workflow ------------------------------- */}
      <section
        id="alur"
        className="scroll-mt-24 border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Alur pengerjaan"
              title="Enam tahap, dengan hasil yang jelas di tiap tahap"
              sub="Setiap tahap punya keluaran yang bisa Anda lihat dan setujui, jadi tidak ada bagian proses yang berjalan di balik layar."
            />
          </Reveal>

          <Reveal delay={80}>
            <ProcessFlow steps={s.workflow} />
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- requirements ----------------------------- */}
      <section className="py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Persiapan"
              title="Yang kami butuhkan dari Anda"
              sub="Tidak perlu disiapkan sempurna sejak awal — kami bantu melengkapinya di tahap discovery."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {s.requirements.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <Card as="div" className="h-full">
                  <h3 className="font-display text-lg font-bold">{g.title}</h3>
                  <ul className="mt-5 space-y-3.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-brand"
                          aria-hidden="true"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- FAQ --------------------------------- */}
      <section className="border-t border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering diajukan" />
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {s.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="glass group rounded-[var(--radius-card)] px-6 open:border-brand/30">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-brand transition-transform duration-300 group-open:rotate-45"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-5 leading-relaxed text-ink-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ CTA + others ------------------------------ */}
      <section className="py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface px-6 py-14 text-center sm:px-10 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-32 h-72 blur-3xl"
                style={{
                  background: `radial-gradient(ellipse at center, ${s.accent.from}55, transparent 65%)`,
                }}
              />
              <div className="relative mx-auto max-w-2xl">
                <Eyebrow>Konsultasi gratis</Eyebrow>
                <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                  Ceritakan kebutuhan Anda, kami bantu perkirakan biayanya
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  Sesi pertama tanpa biaya dan tanpa kewajiban. Kalau ternyata kebutuhan Anda lebih
                  cocok dengan solusi yang lebih murah, kami akan bilang apa adanya.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <ButtonLink href={wa} external className="px-7">
                    Konsultasi via WhatsApp
                    <ArrowRight size={18} aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink
                    href={`mailto:${site.email}?subject=Konsultasi ${s.title}`}
                    external
                    variant="secondary"
                    className="px-7"
                  >
                    Kirim Email
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display mt-16 text-sm font-semibold tracking-wide uppercase">
              Layanan lainnya
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/layanan/${o.slug}`}
                    className="glass group flex h-full items-center gap-3 rounded-[var(--radius-card)] p-5 transition-colors duration-300 hover:border-brand/35"
                  >
                    <span
                      aria-hidden="true"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${o.accent.from}, ${o.accent.to})`,
                      }}
                    >
                      <o.icon size={18} strokeWidth={2} className="text-white" />
                    </span>
                    <span className="min-w-0 flex-1 font-semibold">{o.title}</span>
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="shrink-0 text-ink-muted transition-colors group-hover:text-brand"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
