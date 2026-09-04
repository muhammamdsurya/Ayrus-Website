import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { nav, site, waLink, waMessages } from "@/lib/site";
import { services } from "@/lib/services";


export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bg-alt">
      <div className="container-page grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/images/logo-mark.png"
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 object-contain"
            />
            <span className="font-display text-[17px] font-bold">
              Ayrus<span className="text-brand">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Software house asal Indonesia yang membantu UMKM naik kelas lewat aplikasi custom, sejak {site.founded}.
          </p>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="font-display text-sm font-semibold tracking-wide uppercase">
            Navigasi
          </h2>
          <ul className="mt-4 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors duration-200 hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="font-display text-sm font-semibold tracking-wide uppercase">
            Layanan
          </h2>
          <ul className="mt-4 space-y-1">
            {services.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/layanan/${item.slug}`}
                  className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors duration-200 hover:text-brand"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide uppercase">Kontak</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li className="flex gap-2.5">
              <Mail size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {site.address.street}, {site.address.city}, {site.address.region}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Clock size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-page py-6 text-center text-sm text-ink-muted">
          <p>
            © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
