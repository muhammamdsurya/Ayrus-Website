import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Served at /robots.txt. Everything is crawlable on purpose: /_next assets must
 * stay allowed so Google can render pages, and there are no private routes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
