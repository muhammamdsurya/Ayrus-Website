import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Info, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { ButtonLink } from "@/components/ui";
import { articles, getArticle, type Block } from "@/lib/articles";
import { getService } from "@/lib/services";
import { site, waLink, waMessages } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};

  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: [...a.keywords],
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/blog/${a.slug}`,
      title: a.metaTitle,
      description: a.metaDescription,
      publishedTime: a.dateTime,
      authors: [a.author.name],
    },
    twitter: { card: "summary_large_image", title: a.metaTitle, description: a.metaDescription },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = getService(a.relatedService);
  const more = articles.filter((o) => o.slug !== a.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: a.title,
      description: a.metaDescription,
      datePublished: a.dateTime,
      dateModified: a.dateTime,
      inLanguage: "id-ID",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${a.slug}` },
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
        { "@type": "ListItem", position: 2, name: "Artikel", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: a.title, item: `${site.url}/blog/${a.slug}` },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* --------------------------------- header --------------------------------- */}
      <article>
        <header className="relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-36">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
            <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.26),transparent_65%)] blur-3xl" />
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
                  <Link href="/blog" className="transition-colors hover:text-brand">
                    Artikel
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="max-w-full truncate">
                  <span aria-current="page" className="text-ink">
                    {a.title}
                  </span>
                </li>
              </ol>
            </nav>

            <div className="mx-auto max-w-3xl">
              <Rise>
                <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                  <span className="rounded-full border border-brand/30 bg-brand/12 px-3 py-1 text-xs font-semibold text-brand-soft">
                    {a.category}
                  </span>
                  <time dateTime={a.dateTime}>{a.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{a.read} baca</span>
                </div>
              </Rise>

              <Rise delay={60}>
                <h1 className="mt-6 text-[2.1rem] leading-[1.14] font-extrabold sm:text-[2.75rem]">
                  {a.title}
                </h1>
              </Rise>

              <Rise delay={120}>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">{a.excerpt}</p>
              </Rise>

              <Rise delay={180}>
                <div className="mt-8 flex items-center gap-3 border-t border-white/8 pt-6">
                  <span
                    aria-hidden="true"
                    className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-sm font-bold text-brand-ink"
                  >
                    {a.author.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{a.author.name}</span>
                    <span className="block text-sm text-ink-muted">{a.author.role}</span>
                  </span>
                </div>
              </Rise>
            </div>
          </div>
        </header>

        {/* --------------------------------- body --------------------------------- */}
        <div className="container-page pb-[var(--spacing-section)]">
          <div className="mx-auto max-w-3xl">
            {a.body.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </div>
      </article>

      {/* ------------------------------ related CTA ------------------------------ */}
      <section className="border-t border-white/8 bg-bg-alt py-[var(--spacing-section)]">
        <div className="container-page">
          {related ? (
            <Reveal>
              <div className="glass-brand relative overflow-hidden rounded-[1.5rem] px-6 py-10 sm:px-10">
                <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_auto]">
                  <div>
                    <span className="font-display text-xs font-semibold tracking-wide text-brand-soft uppercase">
                      Layanan terkait
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{related.title}</h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                      {related.tagline}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <ButtonLink
                      href={`/layanan/${related.slug}`}
                      className="px-7 whitespace-nowrap"
                    >
                      Lihat Layanan
                      <ArrowRight size={18} aria-hidden="true" />
                    </ButtonLink>
                    <ButtonLink
                      href={waLink(waMessages.general)}
                      external
                      variant="secondary"
                      className="px-7 whitespace-nowrap"
                    >
                      Konsultasi Gratis
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={80}>
            <h2 className="font-display mt-14 text-sm font-semibold tracking-wide uppercase">
              Artikel lainnya
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {more.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/blog/${o.slug}`}
                    className="glass group flex h-full flex-col rounded-[var(--radius-card)] p-6 transition-colors duration-300 hover:border-brand/35"
                  >
                    <span className="text-xs font-semibold text-brand">{o.category}</span>
                    <span className="mt-2 flex-1 text-base leading-snug font-bold">{o.title}</span>
                    <span
                      aria-hidden="true"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors group-hover:text-brand"
                    >
                      Baca artikel
                      <ArrowUpRight size={15} />
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

/* ---------------------------------------------------------------------- */

/** Renders one content block. Keeps typography rules in one place. */
function BlockView({ block: b }: { block: Block }) {
  switch (b.t) {
    case "h2":
      return <h2 className="mt-12 text-2xl font-extrabold sm:text-[1.75rem]">{b.text}</h2>;

    case "h3":
      return <h3 className="mt-8 text-xl font-bold">{b.text}</h3>;

    case "p":
      return <p className="mt-5 text-[17px] leading-[1.75] text-ink-muted">{b.text}</p>;

    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3 text-[17px] leading-[1.7] text-ink-muted">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {it}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mt-5 space-y-3">
          {b.items.map((it, i) => (
            <li key={it} className="flex gap-3 text-[17px] leading-[1.7] text-ink-muted">
              <span
                aria-hidden="true"
                className="font-display mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-xs font-bold text-brand"
              >
                {i + 1}
              </span>
              {it}
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <figure className="glass-brand mt-9 rounded-[var(--radius-card)] p-6 sm:p-7">
          <Quote size={22} className="text-brand" aria-hidden="true" />
          <blockquote className="mt-3 text-lg leading-relaxed font-medium text-ink">
            <p>{b.text}</p>
          </blockquote>
        </figure>
      );

    case "callout":
      return (
        <aside className="glass mt-9 flex gap-4 rounded-[var(--radius-card)] p-6">
          <Info size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <p className="font-display font-bold">{b.title}</p>
            <p className="mt-1.5 leading-relaxed text-ink-muted">{b.text}</p>
          </div>
        </aside>
      );
  }
}
