import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProcessFlow } from "@/components/process-flow";
import { FeatureCard } from "@/components/feature-card";
import { FaqList, faqSchema } from "@/components/faq";
import { Rise } from "@/components/rise";
import { Bezel, ButtonLink, Card, SectionHeading } from "@/components/ui";
import { ServiceScreen } from "@/components/service-screens";
import { getService, services } from "@/lib/services";
import { businessId, gmailLink, shareImage, site, waLink } from "@/lib/site";

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
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    keywords: [...s.keywords],
    alternates: { canonical: `/layanan/${s.slug}` },
    openGraph: {
      type: "article",
      url,
      title: s.metaTitle,
      description: s.metaDescription,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: s.metaTitle,
      description: s.metaDescription,
      images: ["/twitter-image.png"],
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
    `halaman ${s.title}`,
  );

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: s.title,
      description: s.metaDescription,
      url: `${site.url}/layanan/${s.slug}`,
      areaServed: { "@type": "Country", name: "Indonesia" },
      provider: { "@id": businessId },
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
    faqSchema(s.faqs),
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
          <div className="hero-texture absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
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
                  {s.h1}
                </h1>
              </Rise>

              <Rise delay={120}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{s.tagline}</p>
              </Rise>

              <Rise delay={180}>
                <div className="mt-8 flex items-center gap-2.5">
                  <Clock size={18} className="shrink-0 text-brand" aria-hidden="true" />
                  <dl>
                    <dt className="text-xs text-ink-muted">Estimasi pengerjaan</dt>
                    <dd className="font-display text-sm font-bold">{s.timeline}</dd>
                  </dl>
                </div>
              </Rise>

              <Rise delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={wa} external className="px-7" arrow>
                    Hubungi Kami
                  </ButtonLink>
                  <ButtonLink href="/portofolio" variant="secondary" className="px-7" arrow>
                    Lihat Karya Kami
                  </ButtonLink>
                </div>
              </Rise>
            </div>

            <Rise delay={200}>
              {/* The app's home screen, same illustration as the homepage tile. */}
              <Bezel className="shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
                <div
                  role="img"
                  aria-label={`Ilustrasi tampilan ${s.title}`}
                  className="relative aspect-[16/10]"
                >
                  <ServiceScreen slug={s.slug} />
                </div>
              </Bezel>
            </Rise>
          </div>
        </div>
      </section>

      {/* ------------------------------- overview ------------------------------- */}
      <section className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading title="Layanan ini untuk apa" />
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
              title="Apa saja yang Anda dapat"
              sub="Cakupan umum layanan ini. Detailnya kami sesuaikan dengan kebutuhan dan skala usaha Anda."
            />
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.includes.map((it, i) => (
              <Reveal key={it.title} delay={i * 60} as="li" className="h-full">
                <FeatureCard icon={it.icon} title={it.title} desc={it.desc} />
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
              title="Yang kami butuhkan dari Anda"
              sub="Tidak perlu disiapkan sempurna sejak awal, kami bantu melengkapinya di tahap discovery."
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

          <FaqList faqs={s.faqs} />
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
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Ceritakan kebutuhan Anda, kami bantu petakan solusinya
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  Tidak perlu paham teknologinya dulu. Cukup ceritakan alur kerja dan kendala yang
                  paling terasa, sisanya kami bantu susun bersama Anda.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <ButtonLink href={wa} external className="px-7">
                    Konsultasi via WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    href={gmailLink(`Konsultasi ${s.title}`)}
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
