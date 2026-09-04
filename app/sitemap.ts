import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles";
import { caseStudies } from "@/lib/portfolio";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/produk/nectarpos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...services.map((s) => ({
      url: `${site.url}/layanan/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/portofolio`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...caseStudies.map((c) => ({
      url: `${site.url}/portofolio/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 },
    ...articles.map((a) => ({
      url: `${site.url}/blog/${a.slug}`,
      lastModified: new Date(a.dateTime),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
