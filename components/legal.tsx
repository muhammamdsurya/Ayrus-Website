import Link from "next/link";

/** Shared building blocks for legal pages (/kebijakan-privasi, /syarat-ketentuan). */

const ext = "font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-soft";

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const internal = href.startsWith("/");
  if (internal) {
    return (
      <Link href={href} className={ext}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={ext}>
      {children}
    </a>
  );
}

export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-12 scroll-mt-28 text-2xl font-extrabold sm:text-[1.75rem]">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[17px] leading-[1.75] text-ink-muted">{children}</p>;
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[17px] leading-[1.7] text-ink-muted">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalHeader({ title, lead, updated }: { title: string; lead: React.ReactNode; updated: string }) {
  return (
    <header className="relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-texture absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
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
              <span aria-current="page" className="text-ink">
                {title}
              </span>
            </li>
          </ol>
        </nav>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[2.1rem] leading-[1.14] font-extrabold sm:text-[2.75rem]">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">{lead}</p>
          <p className="mt-4 text-sm text-ink-muted">Terakhir diperbarui: {updated}</p>
        </div>
      </div>
    </header>
  );
}

export function Toc({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <nav aria-label="Daftar isi" className="glass rounded-[var(--radius-card)] p-6">
      <p className="font-display text-sm font-semibold tracking-wide uppercase">Daftar isi</p>
      <ol className="mt-4 grid gap-1.5 text-[15px] text-ink-muted sm:grid-cols-2">
        {items.map(([id, label], i) => (
          <li key={id}>
            <a href={`#${id}`} className="transition-colors hover:text-brand">
              {i + 1}. {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
