import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { FeatureCard } from "@/components/feature-card";
import { FaqList, faqSchema } from "@/components/faq";
import { Bezel, ButtonLink, Card, Eyebrow, SectionHeading } from "@/components/ui";
import { CaseScreen } from "@/components/case-screens";
import { getSolution, solutions } from "@/lib/solutions";
import { getCaseStudy } from "@/lib/portfolio";
import { businessId, shareImage, site, waLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  const c = getCaseStudy(s.caseSlug);

  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/solusi/${s.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/solusi/${s.slug}`,
      title: s.metaTitle,
      description: s.metaDescription,
      images: [shareImage],
    },
  };
}

export default async function SolutionPage({ params }: Params) {
  const { slug } = await params;
  const s = getSolution(slug);
  const c = s && getCaseStudy(s.caseSlug);
  if (!s || !c) notFound();

  const wa = waLink(s.wa, `halaman solusi ${s.industry.toLowerCase()}`);
  const url = `${site.url}/solusi/${s.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: `Aplikasi kasir ${s.industry.toLowerCase()}`,
      description: s.metaDescription,
      url,
      areaServed: { "@type": "Country", name: "Indonesia" },
      provider: { "@id": businessId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
        { "@type": "ListItem", position: 2, name: `Aplikasi ${s.industry}`, item: url },
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
          <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.28),transparent_65%)] blur-3xl" />
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
                <span aria-current="page" className="text-ink">
                  Aplikasi {s.industry}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <Rise>
                <Eyebrow>Solusi {s.industry}</Eyebrow>
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
                    Konsultasi via WhatsApp
                  </ButtonLink>
                  <ButtonLink href={`/portofolio/${c.slug}`} variant="secondary" className="px-7" arrow>
                    Lihat Studi Kasus
                  </ButtonLink>
                </div>
              </Rise>
            </div>

            <Rise delay={200}>
              <Bezel className="shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
                <div role="img" aria-label={`Ilustrasi aplikasi untuk ${c.client}`} className="relative aspect-[16/10]">
                  <CaseScreen slug={c.slug} />
                </div>
              </Bezel>
            </Rise>
          </div>
        </div>
      </section>

      {/* ------------------------------ intro + proof ------------------------------ */}
      <section className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="space-y-4">
              {s.intro.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Card as="article" className="relative h-full">
              <span className="font-display text-xs font-semibold tracking-wide text-brand-soft uppercase">
                Studi kasus · {c.client}
              </span>
              <h2 className="mt-3 text-xl leading-snug font-bold">
                <Link href={`/portofolio/${c.slug}`} className="after:absolute after:inset-0">
                  {c.title}
                </Link>
              </h2>
              <dl className="mt-6 grid grid-cols-2 gap-5">
                {c.outcomes.map((o) => (
                  <div key={o.label}>
                    <dt className="sr-only">{o.label}</dt>
                    <dd>
                      <span className="font-display block text-2xl font-extrabold text-brand">
                        {o.value}
                      </span>
                      <span className="mt-1 block text-sm text-ink-muted">{o.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              {c.testimonial ? (
                <figure className="mt-6 border-t border-white/8 pt-5">
                  <Quote size={20} className="text-brand/60" aria-hidden="true" />
                  <blockquote className="mt-2 leading-relaxed text-ink">
                    <p>&ldquo;{c.testimonial.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-ink-muted">
                    {c.testimonial.name}, {c.testimonial.role}
                  </figcaption>
                </figure>
              ) : null}
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                Baca studi kasus
                <ArrowUpRight size={15} />
              </span>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- features -------------------------------- */}
      <section className="py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title={`Dibangun untuk alur kerja ${s.industry.toLowerCase()}`}
            />
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60} as="li" className="h-full">
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------- FAQ ----------------------------------- */}
      <section className="border-t border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          <FaqList faqs={s.faqs} />

          <Reveal delay={80}>
            <div className="mt-14">
              <ButtonLink href={wa} external className="px-7">
                Konsultasi Aplikasi {s.industry}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
