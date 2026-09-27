import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import { articles } from "@/lib/articles";
import { caseStudies } from "@/lib/portfolio";
import { site } from "@/lib/site";

/**
 * Served at /sitemap.xml. Google ignores changefreq/priority and only trusts
 * lastmod when it is accurate, so lastmod is set only where a real date exists
 * (articles) instead of stamping every URL with the build time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, lastModified?: string) => ({
    url: `${site.url}${path}`,
    ...(lastModified ? { lastModified } : {}),
  });

  return [
    page("/"),
    ...services.map((s) => page(`/layanan/${s.slug}`)),
    ...solutions.map((s) => page(`/solusi/${s.slug}`)),
    page("/harga"),
    page("/produk/kaselapos"),
    page("/jasa-pembuatan-aplikasi-jakarta-timur"),
    page("/portofolio"),
    ...caseStudies.map((c) => page(`/portofolio/${c.slug}`)),
    page("/blog", articles.map((a) => a.dateTime).sort().at(-1)),
    ...articles.map((a) => page(`/blog/${a.slug}`, a.dateTime)),
  ];
}
