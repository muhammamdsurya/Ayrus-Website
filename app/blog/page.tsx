import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { Eyebrow } from "@/components/ui";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Artikel — Panduan Digitalisasi untuk UMKM",
  description:
    "Panduan praktis seputar digitalisasi UMKM: memilih sistem kasir, pembukuan digital, dan kapan sebaiknya memakai software custom.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Artikel ${site.name}`,
    url: `${site.url}/blog`,
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      datePublished: a.dateTime,
      url: `${site.url}/blog/${a.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36">
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
                  Artikel
                </span>
              </li>
            </ol>
          </nav>

          <Rise>
            <Eyebrow>Artikel</Eyebrow>
          </Rise>
          <Rise delay={60}>
            <h1 className="mt-6 max-w-3xl text-[2.25rem] leading-[1.1] font-extrabold sm:text-5xl">
              Bacaan singkat soal digitalisasi UMKM
            </h1>
          </Rise>
          <Rise delay={120}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Panduan praktis yang kami tulis dari pengalaman mendampingi usaha kecil dan menengah
              di Indonesia — tanpa jargon teknis yang tidak perlu.
            </p>
          </Rise>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <div className="container-page">
          <ul className="grid gap-5 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70} as="li" className="h-full">
                <article className="glass group relative h-full rounded-[var(--radius-card)] p-7 transition-colors duration-300 hover:border-brand/30">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                    <span className="font-semibold text-brand">{a.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={a.dateTime}>{a.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{a.read}</span>
                  </div>
                  <h2 className="mt-3.5 text-lg leading-snug font-bold">
                    <Link href={`/blog/${a.slug}`} className="after:absolute after:inset-0">
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{a.excerpt}</p>
                  <span
                    aria-hidden="true"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                  >
                    Baca artikel
                    <ArrowRight size={15} />
                  </span>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
