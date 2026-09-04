import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Clock,
  Quote,
  Store,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { ButtonLink, Card, SectionHeading } from "@/components/ui";
import { caseStudies, getCaseStudy } from "@/lib/portfolio";
import { getService } from "@/lib/services";
import { site, waLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/portofolio/${c.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/portofolio/${c.slug}`,
      title: c.metaTitle,
      description: c.metaDescription,
      images: [{ url: c.image.src, width: 1600, height: 900, alt: c.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
      images: [c.image.src],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const service = getService(c.serviceSlug);
  const more = caseStudies.filter((o) => o.slug !== c.slug).slice(0, 3);
  const wa = waLink(
    `Halo Ayrus, saya baca studi kasus ${c.client} dan punya kebutuhan yang mirip. Boleh diskusi?`,
  );

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.metaDescription,
      inLanguage: "id-ID",
      image: `${site.url}${c.image.src}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/portofolio/${c.slug}` },
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
        { "@type": "ListItem", position: 2, name: "Portofolio", item: `${site.url}/portofolio` },
        {
          "@type": "ListItem",
          position: 3,
          name: c.title,
          item: `${site.url}/portofolio/${c.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* --------------------------------- hero --------------------------------- */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
          <div className="absolute -top-40 left-1/2 h-[440px] w-[860px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.26),transparent_65%)] blur-3xl" />
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
                <Link href="/portofolio" className="transition-colors hover:text-brand">
                  Portofolio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="max-w-full truncate">
                <span aria-current="page" className="text-ink">
                  {c.client}
                </span>
              </li>
            </ol>
          </nav>

          {/* Same split as the service detail hero: copy left, photo right from
              lg up, stacking to one column below that. */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <Rise>
                <span className="inline-flex rounded-full border border-brand/30 bg-brand/12 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-soft uppercase">
                  {c.category}
                </span>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 text-[2.1rem] leading-[1.12] font-extrabold sm:text-[2.5rem]">
                  {c.title}
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{c.problem}</p>
              </Rise>

              <Rise delay={180}>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/8 pt-6 sm:max-w-md">
                  {[
                    { icon: Building2, k: "Klien", v: c.client },
                    { icon: Store, k: "Industri", v: c.industry },
                    { icon: CalendarDays, k: "Tahun", v: c.year },
                    { icon: Clock, k: "Durasi", v: c.duration },
                  ].map((m) => (
                    <div key={m.k} className="flex items-center gap-2.5">
                      <m.icon size={18} className="shrink-0 text-brand" aria-hidden="true" />
                      <div>
                        <dt className="text-xs text-ink-muted">{m.k}</dt>
                        <dd className="text-sm font-semibold">{m.v}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Rise>
            </div>

            <Rise delay={200}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/12 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
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

      {/* ------------------------------- outcomes ------------------------------- */}
      <section
        aria-labelledby="hasil"
        className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading align="left" eyebrow="Hasil" title="Dampak setelah sistem berjalan" id="hasil" />
          </Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {c.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 60}>
                <div className="border-t border-white/12 pt-5">
                  <dt className="sr-only">{o.label}</dt>
                  <dd>
                    <span className="font-display block text-3xl font-extrabold text-brand sm:text-4xl">
                      {o.value}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-ink-muted">
                      {o.label}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------- challenge ------------------------------- */}
      <section className="py-[var(--spacing-section)]">
        <div className="container-page grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading align="left" eyebrow="Tantangan" title="Masalah yang dihadapi" />
              <div className="mt-6 space-y-4">
                {c.challenge.map((p) => (
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
                Teknologi yang dipakai
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-ink-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {service ? (
                <>
                  <h3 className="font-display mt-8 text-sm font-semibold tracking-wide uppercase">
                    Layanan terkait
                  </h3>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="group mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-brand/35"
                  >
                    <span
                      aria-hidden="true"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})`,
                      }}
                    >
                      <service.icon size={18} strokeWidth={2} className="text-white" />
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-semibold">{service.title}</span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-ink-muted transition-colors group-hover:text-brand"
                    />
                  </Link>
                </>
              ) : null}
            </Card>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- solution -------------------------------- */}
      <section className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Solusi"
              title="Apa yang kami bangun"
              sub="Setiap bagian di bawah menjawab satu hambatan yang muncul di tahap discovery."
            />
          </Reveal>

          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {c.solution.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} as="li">
                <Card as="div" className="h-full hover:border-brand/30">
                  <span className="font-display text-sm font-extrabold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2.5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{s.desc}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------ testimonial ------------------------------ */}
      {c.testimonial ? (
        <section className="py-[var(--spacing-section)]">
          <div className="container-page">
            <Reveal>
              <figure className="glass-brand mx-auto max-w-3xl rounded-[1.5rem] p-8 sm:p-10">
                <Quote size={28} className="text-brand" aria-hidden="true" />
                <blockquote className="mt-4 text-xl leading-relaxed font-medium text-ink">
                  <p>&ldquo;{c.testimonial.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                  <span
                    aria-hidden="true"
                    className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-sm font-bold text-brand-ink"
                  >
                    {c.testimonial.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{c.testimonial.name}</span>
                    <span className="block text-sm text-ink-muted">{c.testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* -------------------------------- CTA + more -------------------------------- */}
      <section className="pb-[var(--spacing-section)]">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface px-6 py-14 text-center sm:px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.3),transparent_65%)] blur-3xl"
              />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Kendala Anda mirip dengan {c.client}?
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  Sesi konsultasi pertama gratis. Kami bantu petakan masalahnya dulu sebelum bicara
                  soal biaya.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <ButtonLink href={wa} external className="px-7">
                    Konsultasi via WhatsApp
                    <ArrowRight size={18} aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink href="/portofolio" variant="secondary" className="px-7">
                    Lihat Studi Kasus Lain
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display mt-16 text-sm font-semibold tracking-wide uppercase">
              Studi kasus lainnya
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {more.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/portofolio/${o.slug}`}
                    className="glass group flex h-full flex-col rounded-[var(--radius-card)] p-5 transition-colors duration-300 hover:border-brand/35"
                  >
                    <span className="text-xs font-semibold text-brand">{o.category}</span>
                    <span className="mt-2 flex-1 text-[15px] leading-snug font-bold">
                      {o.title}
                    </span>
                    <span className="mt-4 flex items-center justify-between border-t border-white/8 pt-4">
                      <span className="font-display text-xs font-bold text-brand">{o.result}</span>
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="text-ink-muted transition-colors group-hover:text-brand"
                      />
                    </span>
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
