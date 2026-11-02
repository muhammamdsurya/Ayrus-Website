import { site, saasProducts } from "@/lib/site";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import { articles } from "@/lib/articles";

/**
 * /llms.txt: plain-text site map for AI assistants (ChatGPT, Perplexity, Claude).
 * Google Search ignores this file (its AI optimization guide says so), so it is
 * a small optional extra, not a ranking lever. Built from the same lib/ data as
 * the pages, so it never drifts from the site.
 */
export const dynamic = "force-static";

export function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const body = `# ${site.name}

> ${site.description} Berdiri sejak ${site.founded}, berbasis di ${site.address.street}, ${site.address.city}, ${site.address.region}.

## Layanan
${services.map((s) => `- [${s.title}](${u(`/layanan/${s.slug}`)}): ${s.metaDescription}`).join("\n")}

## Solusi per industri
${solutions.map((s) => `- [Aplikasi ${s.industry}](${u(`/solusi/${s.slug}`)}): ${s.metaDescription}`).join("\n")}

## Produk SaaS milik Ayrus
${saasProducts.map((p) => `- [${p.name}](${p.url}): ${p.category}. ${p.desc}`).join("\n")}

## Artikel
${articles.map((a) => `- [${a.title}](${u(`/blog/${a.slug}`)}): ${a.metaDescription}`).join("\n")}

## Kontak
- WhatsApp: ${site.phoneDisplay} (https://wa.me/${site.whatsapp})
- Email: ${site.email}
- Jam layanan: ${site.hours}
- Area layanan: Jakarta dan seluruh Indonesia
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
