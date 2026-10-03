import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Gauge,
  Headset,
  KeyRound,
  Landmark,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { Bezel, ButtonLink, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/service-card";
import { HeroDevices } from "@/components/hero-devices";
import { CaseScreen } from "@/components/case-screens";
import { SaasMark } from "@/components/saas-marks";
import { ProcessFlow } from "@/components/process-flow";
import { getService } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import { articles } from "@/lib/articles";
import { getCaseStudy } from "@/lib/portfolio";
import { gmailLink, saasProducts, site, waLink, waMessages } from "@/lib/site";

// Title/og come from the root layout defaults ("Software House Indonesia").
// Service keywords are left to the /layanan pages so they don't compete.
export const metadata: Metadata = {
  description:
    "Software house Indonesia untuk custom software sesuai alur bisnis: aplikasi web, Android & iOS, ERP, AI automation, dan website company profile.",
  alternates: { canonical: "/" },
};

/* ------------------------------- content ------------------------------- */

/** Build-time lookups; a renamed slug fails the build instead of the page. */
function caseStudy(slug: string) {
  const c = getCaseStudy(slug);
  if (!c) throw new Error(`Unknown case study: ${slug}`);
  return c;
}

function service(slug: string) {
  const s = getService(slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}

const stats = [
  { value: "50+", label: "Proyek selesai" },
  { value: String(new Date().getFullYear() - Number(site.founded)), label: "Tahun pengalaman" },
  { value: "40+", label: "UMKM terbantu" },
  { value: "98%", label: "Klien puas" },
];

const clients = [
  "Laundry Bersih Wangi",
  "Kopi Ruang Tengah",
  "Maju Jaya",
  "Dapur Nusantara",
  "Apotek Sehat",
  "Bengkel Karya",
];

/** Legal standing. Numbers are not shown until the owner supplies them. */
const legal = [
  { icon: BadgeCheck, title: "Memiliki NIB", desc: "Nomor Induk Berusaha terdaftar di OSS" },
  { icon: Landmark, title: "Terdaftar di AHU", desc: "Administrasi Hukum Umum, Kementerian Hukum RI" },
];

const values = [
  {
    icon: Sparkles,
    title: "Benar-benar custom",
    desc: "Setiap fitur dibangun karena Anda membutuhkannya, bukan karena ada di template.",
  },
  {
    icon: MessagesSquare,
    title: "Komunikasi terbuka",
    desc: "Demo progres berkala, jadi Anda selalu tahu posisi pengerjaan.",
  },
  {
    icon: KeyRound,
    title: "Source code milik Anda",
    desc: "Diserahkan penuh saat proyek selesai. Tidak terkunci pada satu vendor.",
  },
  {
    icon: Gauge,
    title: "Cepat dipakai",
    desc: "Performa jadi prioritas, karena tim Anda membukanya ratusan kali sehari.",
  },
  {
    icon: Headset,
    title: "Didampingi setelah rilis",
    desc: "Pelatihan tim dan pendampingan sampai aplikasinya benar-benar terpakai.",
  },
  {
    icon: Building2,
    title: "UMKM hingga perusahaan",
    desc: "Skala proyek mengikuti kebutuhan, dari satu outlet sampai multi-cabang.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Kami pelajari alur bisnis dan titik masalah Anda." },
  { step: "02", title: "Design", desc: "Desain disetujui sebelum sebaris kode ditulis." },
  { step: "03", title: "Development", desc: "Dikerjakan bertahap dengan demo progres berkala." },
  { step: "04", title: "Testing", desc: "Diuji bersama tim Anda memakai data nyata." },
  { step: "05", title: "Deployment", desc: "Rilis, migrasi data, dan pelatihan tim." },
  { step: "06", title: "Support", desc: "Pendampingan setelah aplikasi berjalan." },
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
      <Proof />
      <About />
      <Services />
      <Saas />
      <Work />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}

/* --------------------------------- hero --------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36 lg:pt-40 lg:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-texture absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_10%,#000_10%,transparent_70%)]" />
        <div className="absolute -top-48 -left-40 h-[560px] w-[760px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.22),transparent_65%)] blur-3xl" />
        <div className="absolute top-24 -right-40 h-[520px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(142,79,224,0.18),transparent_65%)] blur-3xl" />
      </div>

      <div className="container-page">
        {/* Full-width headline: Sora is wide, so a half-width column would
            break each line in two. Sized so the longer second line still fits
            the container on one line from lg up. */}
        <Rise>
          <h1 className="text-[clamp(2.5rem,4.9vw,4rem)] leading-[1.04] font-extrabold">
            <span className="block">Software house Indonesia,</span>
            <span className="block text-brand">custom software sesuai alur bisnis.</span>
          </h1>
        </Rise>

        <div className="mt-10 grid items-start gap-14 lg:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Rise delay={80}>
              <p className="max-w-[34rem] text-lg leading-relaxed text-ink-muted sm:text-xl">
                Pembuatan aplikasi web, Android &amp; iOS, ERP, AI Automation, company profile,
                sampai sistem integrasi digital lainnya yang dirancang dari proses bisnis Anda.
              </p>
            </Rise>

            <Rise delay={160}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={waLink(waMessages.general)} external arrow>
                  Hubungi Kami
                </ButtonLink>
                <ButtonLink href="/portofolio" variant="secondary">
                  Lihat Karya Kami
                </ButtonLink>
              </div>
            </Rise>
          </div>

          <Rise delay={120} className="relative mx-auto w-full max-w-xl lg:mt-2 lg:max-w-none">
            <HeroDevices />
          </Rise>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ proof strip ------------------------------ */

function Proof() {
  return (
    <section aria-label="Bukti pengalaman" className="border-y border-white/8 bg-bg-alt py-14">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/8">
          {stats.map((s, i) => (
            /* One <div> wrapper max between <dl> and its <dt>/<dd> pair, as
               the HTML spec allows. */
            <Reveal key={s.label} delay={i * 60} className="lg:px-8 lg:first:pl-0">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display block text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-sm text-ink-muted">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* Auto-scrolling strip: pauses on hover and on keyboard focus, and is
            static under prefers-reduced-motion (see globals.css). */}
        <div className="marquee mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <p className="sr-only">Dipercaya oleh: {clients.join(", ")}.</p>
          <ul aria-hidden="true" className="marquee-track flex w-max items-center gap-12 sm:gap-16">
            {[...clients, ...clients].map((c, i) => (
              <li
                key={c + i}
                className="font-display shrink-0 text-lg font-bold whitespace-nowrap text-ink-muted/70 sm:text-xl"
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

/* --------------------------------- about --------------------------------- */

function About() {
  return (
    <section id="tentang" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            title="Teknologi yang mengikuti cara kerja Anda"
            sub={`${site.name} berdiri sejak ${site.founded} di Jakarta. Kami memulai dari proses bisnis Anda, bukan dari template.`}
          />
          {/* Legal standing: a trust signal for buyers who check vendors. */}
          <div className="mt-10">
            <p className="text-sm font-semibold text-ink">Badan usaha resmi dan legal</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {legal.map((l) => (
                <li
                  key={l.title}
                  className="flex items-start gap-3.5 rounded-[var(--radius-card)] border border-white/10 bg-surface/60 p-4"
                >
                  <l.icon size={22} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    <span className="block font-semibold">{l.title}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-ink-muted">{l.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 80} as="li">
              <v.icon size={28} strokeWidth={1.5} aria-hidden="true" className="text-brand" />
              <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{v.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- services -------------------------------- */

function Services() {
  return (
    <section
      id="layanan"
      className="scroll-mt-24 border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Jasa pembuatan aplikasi & website"
            sub="Enam layanan inti, dikerjakan dari analisis proses sampai pendampingan setelah rilis."
          />
        </Reveal>

        {/* Bento: one hero tile with two stacked beside it, a pair, then one
            wide tile. Exactly six cells for six services; one column below lg. */}
        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          <Reveal className="lg:col-span-4 lg:row-span-2">
            <ServiceCard service={service("custom-software")} className="h-full" />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-2">
            <ServiceCard service={service("sistem-pos")} className="h-full" />
          </Reveal>
          <Reveal delay={140} className="lg:col-span-2">
            <ServiceCard service={service("aplikasi-keuangan")} className="h-full" />
          </Reveal>
          <Reveal className="lg:col-span-3">
            <ServiceCard service={service("erp")} className="h-full lg:min-h-[30rem]" />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-3">
            <ServiceCard service={service("ai-automation")} className="h-full lg:min-h-[30rem]" />
          </Reveal>
          <Reveal className="lg:col-span-6">
            <ServiceCard service={service("website")} wide className="h-full lg:min-h-[20rem]" />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="mr-1 text-ink-muted">Solusi per industri:</span>
            {solutions.map((so) => (
              <Link
                key={so.slug}
                href={`/solusi/${so.slug}`}
                className="inline-flex min-h-10 items-center rounded-full border border-white/12 px-4 text-sm font-medium transition-colors duration-300 hover:border-brand/50 hover:text-brand-soft"
              >
                Aplikasi {so.shortTitle.toLowerCase()}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- SaaS ---------------------------------- */

/** Ayrus' own products, kept apart from the custom-software services above. */
function Saas() {
  return (
    <section id="saas" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Produk SaaS buatan kami"
            sub="Selain proyek custom, kami membangun dan mengelola produk software sendiri."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {saasProducts.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} as="li" className="h-full">
              <Bezel
                as="article"
                className="group h-full"
                coreClassName="isolate flex min-h-[32rem] flex-col justify-end p-7 sm:p-9"
              >
                {/* The product's own landing page as backdrop; the scrim keeps
                    the copy at AA contrast over it. */}
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 46vw, 92vw"
                  className="-z-20 object-cover object-top opacity-90 transition-transform duration-700 ease-spring group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-surface from-40% via-surface/75 via-60% to-surface/0"
                />
                <SaasMark name={p.name} className="h-14 w-14" />
                <h3 className="mt-6 text-3xl font-bold">
                  {/* Stretched link: the whole card opens the product site. */}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0"
                  >
                    {p.name}
                  </a>
                </h3>
                <p className="mt-1 text-brand-soft">{p.category}</p>
                <p className="mt-4 max-w-md leading-relaxed text-ink-muted">{p.desc}</p>
                <span
                  aria-hidden="true"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  {new URL(p.url).hostname}
                  <ArrowUpRight
                    size={16}
                    className="text-brand transition-transform duration-500 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Bezel>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- work --------------------------------- */

function Work() {
  const featured = caseStudy("maju-jaya");
  const rest = [caseStudy("dapur-nusantara"), caseStudy("laundry-bersih-wangi")];

  return (
    <section
      id="portofolio"
      className="scroll-mt-24 border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Karya kami, hasil yang terukur"
              sub="Setiap proyek berangkat dari satu masalah operasional yang nyata."
            />
            <ButtonLink href="/portofolio" variant="secondary" className="shrink-0">
              Lihat Karya Kami
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="h-full">
            <Bezel as="article" className="group h-full" coreClassName="flex flex-col">
              <div aria-hidden="true" className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 origin-top transition-transform duration-700 ease-spring group-hover:scale-[1.03]">
                  <CaseScreen slug={featured.slug} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <p className="text-sm text-ink-muted">
                  {featured.client}, {featured.year}
                </p>
                <h3 className="mt-3 text-2xl leading-snug font-bold sm:text-3xl">
                  <Link href={`/portofolio/${featured.slug}`} className="after:absolute after:inset-0">
                    {featured.title}
                  </Link>
                </h3>
                <p className="font-display mt-auto pt-8 text-2xl font-extrabold text-brand">
                  {featured.result}
                </p>
              </div>
            </Bezel>
          </Reveal>

          <ul className="grid gap-5">
            {rest.map((c, i) => (
              <Reveal key={c.slug} delay={(i + 1) * 80} as="li" className="h-full">
                <Bezel as="article" className="group h-full" coreClassName="grid sm:grid-cols-[0.9fr_1.1fr]">
                  <div aria-hidden="true" className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                    <div className="absolute inset-0 origin-top-left transition-transform duration-700 ease-spring group-hover:scale-[1.04]">
                      <CaseScreen slug={c.slug} />
                    </div>
                  </div>
                  <div className="flex flex-col p-6">
                    <p className="text-sm text-ink-muted">{c.client}</p>
                    <h3 className="mt-2 text-lg leading-snug font-bold">
                      <Link href={`/portofolio/${c.slug}`} className="after:absolute after:inset-0">
                        {c.title}
                      </Link>
                    </h3>
                    <p className="font-display mt-auto pt-6 text-lg font-extrabold text-brand">{c.result}</p>
                  </div>
                </Bezel>
              </Reveal>
            ))}
          </ul>
        </div>
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
            title="Enam tahap, tanpa kejutan"
            sub="Anda selalu tahu sedang di tahap mana dan apa yang diterima berikutnya."
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
  const [lead, ...others] = testimonials;

  return (
    <section
      aria-labelledby="testimoni"
      className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Kata klien kami" id="testimoni" />
        </Reveal>

        {/* One lead quote at display size, two supporting quotes beside it.
            Static: nothing rotates, so every quote is reachable by keyboard. */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="h-full">
            <Bezel className="h-full">
              <figure className="flex h-full flex-col justify-between gap-10 p-8 sm:p-11">
                <blockquote className="font-display text-2xl leading-snug font-semibold sm:text-[1.9rem]">
                  <p>&ldquo;{lead.quote}&rdquo;</p>
                </blockquote>
                <Author t={lead} />
              </figure>
            </Bezel>
          </Reveal>

          <div className="grid gap-5">
            {others.map((t, i) => (
              <Reveal key={t.name} delay={(i + 1) * 80} className="h-full">
                <Bezel className="h-full">
                  <figure className="flex h-full flex-col justify-between gap-8 p-7">
                    <blockquote className="leading-relaxed text-ink">
                      <p>&ldquo;{t.quote}&rdquo;</p>
                    </blockquote>
                    <Author t={t} />
                  </figure>
                </Bezel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Author({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figcaption className="flex items-center gap-3.5">
      <span
        aria-hidden="true"
        className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-sm font-bold text-brand-ink"
      >
        {t.initials}
      </span>
      <span className="min-w-0">
        <span className="block font-semibold">{t.name}</span>
        <span className="block text-sm text-ink-muted">{t.role}</span>
      </span>
    </figcaption>
  );
}

/* ---------------------------------- blog ---------------------------------- */

function Blog() {
  return (
    <section id="artikel" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title="Wawasan digitalisasi bisnis" />
            <ButtonLink href="/blog" variant="secondary" className="shrink-0">
              Semua Artikel
            </ButtonLink>
          </div>
        </Reveal>

        <ul className="mt-12 border-t border-white/8">
          {articles.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 70} as="li">
              <article className="group relative grid gap-3 border-b border-white/8 py-8 transition-colors duration-300 sm:grid-cols-[12rem_1fr_auto] sm:items-center sm:gap-10">
                <div className="text-sm text-ink-muted">
                  <span className="font-semibold text-brand">{p.category}</span>
                  <time dateTime={p.dateTime} className="mt-1 block">
                    {p.date}
                  </time>
                </div>
                <div>
                  <h3 className="text-xl leading-snug font-semibold transition-colors duration-300 group-hover:text-brand-soft sm:text-2xl">
                    {/* Stretched link keeps the whole row clickable while the
                        accessible name stays the article title. */}
                    <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-[65ch] text-ink-muted">{p.excerpt}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-12 w-12 place-items-center rounded-full border border-white/12 transition-[transform,background-color,color] duration-500 ease-spring group-hover:translate-x-1 group-hover:bg-brand group-hover:text-brand-ink sm:grid"
                >
                  <ArrowUpRight size={18} />
                </span>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- contact --------------------------------- */

function Contact() {
  return (
    <section id="kontak" className="scroll-mt-24 pb-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <Bezel coreClassName="isolate px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 -right-24 -z-10 h-[30rem] w-[38rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.3),transparent_65%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-48 -left-24 -z-10 h-[26rem] w-[32rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(142,79,224,0.22),transparent_65%)] blur-3xl"
            />

            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <h2 className="text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-[3.5rem]">
                  Punya ide aplikasi? Mari wujudkan.
                </h2>
                <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-muted">
                  Ceritakan kebutuhan Anda. Kami bantu petakan solusi dan langkah pertamanya.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={waLink(waMessages.general)} external arrow>
                    Hubungi Kami
                  </ButtonLink>
                  <ButtonLink href={gmailLink()} external variant="secondary">
                    Kirim Email
                  </ButtonLink>
                </div>
              </div>

              <dl className="grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <dt className="text-ink-muted">WhatsApp</dt>
                  <dd className="font-display mt-1 text-lg font-semibold">{site.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Email</dt>
                  <dd className="font-display mt-1 text-lg font-semibold break-all">{site.email}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Jam operasional</dt>
                  <dd className="font-display mt-1 text-lg font-semibold">{site.hours}</dd>
                </div>
              </dl>
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
