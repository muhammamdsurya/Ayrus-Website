import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Wallet,
  Headset,
  Gauge,
  Quote,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { ButtonLink, Card, SectionHeading } from "@/components/ui";
import { PosMockup } from "@/components/pos-mockup";
import { ServiceCard } from "@/components/service-card";
import { ProcessFlow } from "@/components/process-flow";
import { FeatureCard } from "@/components/feature-card";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles";
import { caseStudies } from "@/lib/portfolio";
import { site, waLink, waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Custom untuk UMKM | Ayrus Digital Teknologi",
  description:
    "Ayrus Digital Teknologi membangun aplikasi keuangan, website bisnis, dan sistem POS custom untuk UMKM Indonesia. Sekali bayar, tanpa biaya bulanan. Konsultasi gratis.",
  alternates: { canonical: "/" },
};

/* ------------------------------- content ------------------------------- */

const stats = [
  { value: "50+", label: "Proyek selesai" },
  { value: "4", label: "Tahun pengalaman" },
  { value: "40+", label: "UMKM terbantu" },
  { value: "98%", label: "Klien puas" },
];

const advantages = [
  {
    icon: Sparkles,
    title: "Benar-benar custom",
    desc: "Kami mulai dari proses bisnis Anda, bukan dari template. Setiap fitur dibangun karena Anda memang membutuhkannya.",
  },
  {
    icon: Wallet,
    title: "Harga transparan",
    desc: "Penawaran dirinci per modul sejak awal. Tidak ada biaya tersembunyi di tengah jalan.",
  },
  {
    icon: Headset,
    title: "Pendampingan setelah rilis",
    desc: "Garansi bug 3 bulan plus pelatihan tim Anda, supaya aplikasinya benar-benar terpakai.",
  },
  {
    icon: ShieldCheck,
    title: "Kode jadi milik Anda",
    desc: "Selesai proyek, source code diserahkan sepenuhnya. Anda tidak terkunci pada satu vendor.",
  },
  {
    icon: Gauge,
    title: "Dibangun untuk cepat",
    desc: "Performa dan kemudahan pakai jadi prioritas, karena kasir Anda memakainya ratusan kali sehari.",
  },
  {
    icon: CheckCircle2,
    title: "Paham skala UMKM",
    desc: "Sejak 2021 kami hanya fokus di UMKM. Kami tahu kendala budget dan SDM yang Anda hadapi.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Kami pelajari alur bisnis dan titik masalah Anda." },
  { step: "02", title: "Design", desc: "Wireframe dan UI disetujui sebelum sebaris kode ditulis." },
  { step: "03", title: "Development", desc: "Pengerjaan bertahap dengan demo progres berkala." },
  { step: "04", title: "Testing", desc: "Pengujian bersama tim Anda memakai data nyata." },
  { step: "05", title: "Deployment", desc: "Rilis ke server, migrasi data, dan pelatihan tim." },
  { step: "06", title: "Support", desc: "Garansi bug dan pendampingan setelah aplikasi berjalan." },
];

const testimonials = [
  {
    quote:
      "Dulu rekap order laundry masih pakai buku dan sering selisih. Sekarang semua cabang kelihatan dari satu dashboard, dan closing harian cuma butuh lima menit.",
    name: "Budi Santoso",
    role: "Pemilik, Laundry Bersih Wangi (3 cabang)",
    initials: "BS",
  },
  {
    quote:
      "Tim Ayrus mau duduk bareng dan benar-benar mendengarkan alur kerja kami dulu. Hasilnya aplikasinya kepakai, bukan cuma jadi lalu ditinggal.",
    name: "Sinta Rahmawati",
    role: "Owner, Kopi Ruang Tengah",
    initials: "SR",
  },
  {
    quote:
      "Yang paling saya hargai itu harganya jelas dari awal dan komunikasinya enak. Setelah rilis pun masih dibantu waktu ada kendala.",
    name: "Andi Prasetyo",
    role: "Direktur, Toko Bangunan Maju Jaya",
    initials: "AP",
  },
];

/* --------------------------------- page --------------------------------- */

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <NectarBanner />
      <WhyUs />
      <Process />
      <Testimonials />
      <CaseStudies />
      <Blog />
      <ClosingCta />
    </>
  );
}

/* --------------------------------- hero --------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.28),transparent_65%)] blur-3xl" />
        <div className="absolute top-40 -right-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(142,79,224,0.22),transparent_65%)] blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>

          <Rise delay={60}>
            <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold sm:text-6xl lg:text-[4rem]">
              Aplikasi custom yang <span className="text-gradient">tumbuh bersama</span> usaha Anda
            </h1>
          </Rise>

          <Rise delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Kami membangun aplikasi keuangan, website bisnis, dan sistem kasir yang mengikuti cara
              kerja UMKM Anda. Sekali bayar, source code jadi milik Anda.
            </p>
          </Rise>

          <Rise delay={180}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={waLink(waMessages.custom)} external className="px-7">
                Konsultasi Gratis
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/produk/nectarpos" variant="secondary" className="px-7">
                Coba NectarPOS
              </ButtonLink>
            </div>
          </Rise>

          <Rise delay={240}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-ink-muted">
              {["Tanpa biaya bulanan", "Garansi bug", "Source code diserahkan"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Rise>
        </div>

        <Rise delay={200} className="lg:pl-4">
          <PosMockup />
        </Rise>
      </div>
    </section>
  );
}

/* ------------------------------- trust bar ------------------------------- */

const clients = [
  "Laundry Bersih Wangi",
  "Kopi Ruang Tengah",
  "Maju Jaya",
  "Dapur Nusantara",
  "Apotek Sehat",
  "Bengkel Karya",
];

function TrustBar() {
  return (
    <section aria-label="Bukti pengalaman" className="border-y border-white/8 bg-bg-alt py-12">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="text-center lg:text-left">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display block text-3xl font-extrabold text-brand sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">{s.label}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className="mt-12 text-center text-xs font-semibold tracking-[0.16em] text-ink-muted uppercase">
          Dipercaya oleh UMKM di Indonesia
        </p>

        {/* Auto-scrolling strip: pauses on hover and on keyboard focus, and is
            static under prefers-reduced-motion (see globals.css). */}
        <div className="marquee mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="marquee-track flex w-max items-center gap-10 sm:gap-14">
            {[...clients, ...clients].map((c, i) => (
              <li
                key={c + i}
                aria-hidden={i >= clients.length}
                className="font-display shrink-0 text-base font-bold whitespace-nowrap text-ink-muted/70 sm:text-lg"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- services -------------------------------- */

function Services() {
  return (
    <section id="layanan" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Empat cara kami membantu bisnis Anda"
            sub="Semua layanan di bawah memakai model sekali bayar. Tidak ada langganan bulanan yang menempel di biaya operasional Anda."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 2xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} as="li" className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-ink-muted">
            Butuh sesuatu yang belum disebut di atas?{" "}
            <a
              href={waLink(waMessages.custom)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-soft"
            >
              Ceritakan kebutuhan Anda
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- NectarPOS banner ---------------------------- */

function NectarBanner() {
  const features = ["Laporan real-time", "Multi-outlet", "Tanpa instalasi", "Cukup dari browser"];

  return (
    <section aria-labelledby="nectar-banner" className="pb-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <div className="glass-brand glow-brand relative overflow-hidden rounded-[1.75rem] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(203,108,230,0.35),transparent_65%)] blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[11px] font-bold tracking-wide text-brand-ink uppercase">
                  Produk kami
                </span>
                <h2 id="nectar-banner" className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  NectarPOS — kasir online, langsung dari browser
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
                  Kalau Anda belum butuh sistem custom, mulai saja dari NectarPOS. Sistem kasir
                  berlangganan yang bisa dipakai dari HP, tablet, atau laptop tanpa perlu install
                  apa pun.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink">
                      <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href="/produk/nectarpos" className="px-7 whitespace-nowrap">
                  Lihat NectarPOS
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href={waLink(waMessages.nectarpos)}
                  external
                  variant="secondary"
                  className="px-7 whitespace-nowrap"
                >
                  Minta Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- why us --------------------------------- */

function WhyUs() {
  return (
    <section
      id="tentang"
      className="scroll-mt-24 border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Alasan UMKM memilih kami"
            sub={`Berdiri sejak ${site.founded}, kami hanya mengerjakan satu hal: membantu usaha kecil dan menengah Indonesia bekerja lebih rapi lewat teknologi.`}
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={i * 60} as="li" className="h-full">
              <FeatureCard icon={a.icon} title={a.title} desc={a.desc} index={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- process --------------------------------- */

function Process() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Enam tahap, tanpa kejutan di tengah jalan"
            sub="Anda tahu persis sedang di tahap mana dan apa yang akan diterima berikutnya."
          />
        </Reveal>

        <Reveal delay={80}>
          <ProcessFlow steps={process} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ testimonials ------------------------------ */

function Testimonials() {
  return (
    <section
      aria-labelledby="testimoni"
      className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Kata mereka yang sudah jalan" id="testimoni" />
        </Reveal>

        {/* A static grid, not a carousel — nothing auto-rotates, so there is no
            motion to pause and every quote is reachable by keyboard. */}
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} as="li">
              <figure className="glass flex h-full flex-col rounded-[var(--radius-card)] p-7">
                <Quote size={26} className="text-brand/60" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <span
                    aria-hidden="true"
                    className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-sm font-bold text-brand-ink"
                  >
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-ink-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ case studies ------------------------------ */

function CaseStudies() {
  return (
    <section id="portofolio" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              title="Masalah nyata, hasil yang terukur"
            />
            <ButtonLink href="/portofolio" variant="secondary" className="shrink-0">
              Lihat semua studi kasus
              <ArrowUpRight size={17} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 80} as="li" className="h-full">
              <Card as="article" className="group relative h-full hover:border-brand/35">
                <span className="inline-flex rounded-full border border-brand/30 bg-brand/12 px-3 py-1 text-xs font-semibold text-brand-soft">
                  {c.category}
                </span>
                <h3 className="mt-4 text-lg leading-snug font-bold">
                  <Link href={`/portofolio/${c.slug}`} className="after:absolute after:inset-0">
                    {c.title}
                  </Link>
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{c.problem}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                  <span className="font-display text-sm font-bold text-brand">{c.result}</span>
                  <span className="text-xs text-ink-muted">{c.client}</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------- blog ---------------------------------- */

function Blog() {
  return (
    <section
      id="artikel"
      className="scroll-mt-24 border-t border-white/8 bg-bg-alt py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              title="Bacaan singkat soal digitalisasi UMKM"
            />
            <ButtonLink href="/blog" variant="secondary" className="shrink-0">
              Semua artikel
              <ArrowUpRight size={17} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {articles.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} as="li">
              <article className="glass group relative h-full rounded-[var(--radius-card)] p-7 transition-colors duration-300 hover:border-brand/30">
                <div className="flex items-center gap-3 text-xs text-ink-muted">
                  <span className="font-semibold text-brand">{p.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={p.dateTime}>{p.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="mt-3.5 text-lg leading-snug font-bold">
                  {/* Stretched link keeps the whole card clickable while the
                      accessible name stays the article title. */}
                  <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{p.excerpt}</p>
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
  );
}

/* ------------------------------- closing CTA ------------------------------- */

function ClosingCta() {
  return (
    <section id="kontak" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface px-6 py-14 text-center sm:px-10 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.3),transparent_65%)] blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="mt-6 text-3xl font-extrabold sm:text-[2.75rem] sm:leading-[1.12]">
                Ceritakan kendala bisnis Anda, kami bantu petakan solusinya
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                Tidak perlu tahu teknologinya dulu. Cukup ceritakan bagian yang paling merepotkan —
                sisanya kami yang bantu susun.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href={waLink(waMessages.general)} external className="px-7">
                  Konsultasi via WhatsApp
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${site.email}`}
                  external
                  variant="secondary"
                  className="px-7"
                >
                  Kirim Email
                </ButtonLink>
              </div>

              <dl className="mt-12 grid gap-6 border-t border-white/8 pt-9 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-ink-muted">Email</dt>
                  <dd className="mt-1 font-semibold">{site.email}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">WhatsApp</dt>
                  <dd className="mt-1 font-semibold">{site.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Jam operasional</dt>
                  <dd className="mt-1 font-semibold">{site.hours}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
