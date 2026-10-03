import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { RevealController } from "@/components/reveal-controller";
import { Analytics } from "@/components/analytics";
import { businessId, site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

// Brand shows as the Google site name (og:site_name), so the title spends its
// ~60 characters on the positioning.
const homeTitle = "Software House Indonesia: Custom Software Sesuai Alur Bisnis";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    // Short brand suffix: Google cuts titles around 60 characters.
    template: "%s | Ayrus Digital",
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  // Pages that set their own openGraph replace this whole object, so it only
  // reaches pages that set none. twitter:title/description are deliberately
  // left out: X falls back to each page's og:title/og:description, which stops
  // every page without its own twitter block from showing the homepage title.
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: homeTitle,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "IVOJXbeMR9p4_APmLy0_SqhxKVgcfZX2Z4Mwd9mVoaE",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  // No maximumScale / userScalable:false — pinch-zoom must stay available.
};

/**
 * ProfessionalService is a LocalBusiness subtype, which is what makes the
 * address, phone and hours eligible for local results. Every other schema on
 * the site points back here through `@id` instead of repeating the business.
 */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": businessId,
  name: site.name,
  alternateName: ["Ayrus Digital", "Ayrus"],
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/opengraph-image.png`,
  description: site.description,
  foundingDate: site.founded,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  sameAs: Object.values(site.social),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Jakarta" },
    { "@type": "Country", name: "Indonesia" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${site.whatsapp}`,
    url: `https://wa.me/${site.whatsapp}`,
    contactType: "customer service",
    availableLanguage: ["id", "en"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${sora.variable} ${jakarta.variable}`}>
      <head>
        {/* Without JS the IntersectionObserver never runs, so scroll-revealed
            sections would stay at opacity 0. This restores them for no-JS
            visitors and non-executing crawlers. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-semibold focus:text-brand-ink"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="konten-utama">{children}</main>
        <Footer />
        <WhatsAppFab />
        <RevealController />
        <Analytics />
      </body>
    </html>
  );
}
