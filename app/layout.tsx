import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jasa Pembuatan Aplikasi Custom untuk UMKM | Ayrus Digital Teknologi",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "jasa pembuatan aplikasi custom UMKM",
    "aplikasi laundry custom",
    "sistem kasir online berbasis web",
    "software house Indonesia",
    "aplikasi POS subscription",
    "pembuatan website UMKM",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Jasa Pembuatan Aplikasi Custom untuk UMKM | Ayrus Digital Teknologi",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Aplikasi Custom untuk UMKM | Ayrus Digital Teknologi",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  // No maximumScale / userScalable:false — pinch-zoom must stay available.
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  foundingDate: site.founded,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${site.whatsapp}`,
    contactType: "sales",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
      </body>
    </html>
  );
}
