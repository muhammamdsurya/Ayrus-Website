import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Receipt,
  BarChart3,
  Store,
  Boxes,
  Printer,
  MonitorSmartphone,
  CheckCircle2,
  XCircle,
  Quote,
  CloudOff,
  ClipboardX,
  TrendingDown,
  UserPlus,
  PackagePlus,
  ScanLine,
  LineChart,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Rise } from "@/components/rise";
import { ButtonLink, Card, Eyebrow, SectionHeading } from "@/components/ui";
import { PosMockup } from "@/components/pos-mockup";
import { FeatureCard } from "@/components/feature-card";
import { site, waLink, waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "NectarPOS — Sistem Kasir Online Berbasis Web untuk UMKM",
  description:
    "NectarPOS adalah aplikasi kasir online berbasis web. Kelola transaksi, stok, dan laporan penjualan real-time dari HP, tablet, atau laptop tanpa instalasi. Coba gratis 14 hari.",
  keywords: [
    "sistem kasir online berbasis web",
    "aplikasi kasir online",
    "software kasir cloud",
    "aplikasi POS subscription",
    "sistem kasir laundry",
  ],
  alternates: { canonical: "/produk/nectarpos" },
  openGraph: {
    type: "website",
    url: `${site.url}/produk/nectarpos`,
    title: "NectarPOS — Sistem Kasir Online Berbasis Web untuk UMKM",
    description:
      "Kelola transaksi kasir Anda kapan saja, di mana saja — cukup dari browser. Coba gratis 14 hari.",
  },
};

/* ------------------------------- content ------------------------------- */

const problems = [
  {
    icon: ClipboardX,
    title: "Catatan masih manual",
    desc: "Buku tulis dan spreadsheet gampang selisih, dan tidak ada yang tahu angka mana yang benar.",
  },
  {
    icon: TrendingDown,
    title: "Omzet baru ketahuan akhir bulan",
    desc: "Saat laporan akhirnya jadi, keputusan yang bisa diambil sudah telanjur terlambat.",
  },
  {
    icon: CloudOff,
    title: "Data terkunci di satu komputer",
    desc: "Aplikasi kasir desktop bikin Anda harus datang ke outlet hanya untuk melihat penjualan.",
  },
];

const features = [
  {
    icon: Receipt,
    title: "Manajemen transaksi",
    desc: "Catat penjualan, diskon, dan metode pembayaran dalam hitungan detik. Antarmuka kasir dibuat supaya staf baru langsung bisa.",
  },
  {
    icon: BarChart3,
    title: "Laporan penjualan real-time",
    desc: "Omzet, produk terlaris, dan jam tersibuk terlihat saat itu juga — bukan menunggu tutup buku.",
  },
  {
    icon: Store,
    title: "Dukungan multi-outlet",
    desc: "Pantau semua cabang dari satu dashboard, lengkap dengan perbandingan performa antar outlet.",
  },
  {
    icon: Boxes,
    title: "Manajemen stok",
    desc: "Stok berkurang otomatis setiap transaksi, plus peringatan ketika barang mulai menipis.",
  },
  {
    icon: Printer,
    title: "Cetak struk & integrasi perangkat",
    desc: "Terhubung dengan printer thermal dan barcode scanner yang umum dipakai UMKM.",
  },
  {
    icon: MonitorSmartphone,
    title: "Akses multi-perangkat",
    desc: "Buka dari HP, tablet, atau laptop. Tidak ada aplikasi yang perlu di-install atau di-update.",
  },
];

/** Sample images. Stock photography standing in for real product shots. */
const gallery = [
  {
    src: "/images/nectarpos-kafe.jpg",
    alt: "Barista mencatat pesanan lewat NectarPOS di tablet pada meja kasir kedai kopi",
    caption: "Kedai kopi — pesanan dicatat langsung dari tablet di meja bar",
  },
  {
    src: "/images/nectarpos-toko.jpg",
    alt: "Kasir toko melayani pelanggan menggunakan NectarPOS di layar sentuh",
    caption: "Toko ritel — kasir dan pelanggan berbagi satu layar saat konfirmasi",
  },
  {
    src: "/images/nectarpos-pembayaran.jpg",
    alt: "Tampilan dari atas meja kasir dengan tablet dan mesin pembayaran kartu",
    caption: "Pembayaran tunai, kartu, maupun QRIS dicatat pada transaksi yang sama",
  },
  {
    src: "/images/nectarpos-qr.jpg",
    alt: "Pelanggan memindai kode QR pembayaran dari layar ponsel",
    caption: "Struk digital bisa dikirim lewat QR atau WhatsApp, tanpa cetak kertas",
  },
];

const usage = [
  {
    icon: UserPlus,
    step: "01",
    title: "Buat akun outlet",
    desc: "Tim kami menyiapkan akun dan outlet pertama Anda. Anda cukup login dari browser — tidak ada yang perlu di-install.",
  },
  {
    icon: PackagePlus,
    step: "02",
    title: "Masukkan produk & harga",
    desc: "Impor daftar produk dari Excel atau tambahkan satu per satu. Kami bantu impor pertama supaya Anda tidak mulai dari nol.",
  },
  {
    icon: ScanLine,
    step: "03",
    title: "Mulai berjualan",
    desc: "Pilih produk, terima pembayaran tunai, kartu, atau QRIS, lalu cetak struk. Kasir baru biasanya sudah lancar di hari pertama.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Pantau dari mana saja",
    desc: "Buka dashboard dari HP di rumah untuk melihat omzet, produk terlaris, dan performa tiap outlet secara real-time.",
  },
];

const comparison = [
  { label: "Perlu instalasi & update manual", web: false, desktop: true },
  { label: "Bisa diakses dari mana saja", web: true, desktop: false },
  { label: "Butuh hardware khusus", web: false, desktop: true },
  { label: "Data aman kalau perangkat rusak", web: true, desktop: false },
  { label: "Tambah outlet tanpa setup ulang", web: true, desktop: false },
  { label: "Dapat update fitur otomatis", web: true, desktop: false },
];

const plans = [
  {
    name: "Basic",
    price: "99rb",
    period: "/bulan",
    desc: "Untuk satu outlet yang baru mulai merapikan pencatatan.",
    features: [
      "1 outlet",
      "2 akun pengguna",
      "Transaksi tanpa batas",
      "Laporan penjualan harian",
      "Cetak struk thermal",
      "Dukungan email",
    ],
    cta: "Mulai dari Basic",
    featured: false,
  },
  {
    name: "Pro",
    price: "249rb",
    period: "/bulan",
    desc: "Untuk usaha yang sudah punya beberapa cabang dan tim.",
    features: [
      "Hingga 5 outlet",
      "10 akun pengguna",
      "Semua fitur Basic",
      "Manajemen stok & supplier",
      "Laporan multi-outlet real-time",
      "Integrasi barcode scanner",
      "Dukungan WhatsApp prioritas",
    ],
    cta: "Pilih Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Untuk jaringan outlet dengan kebutuhan khusus.",
    features: [
      "Outlet & pengguna tanpa batas",
      "Semua fitur Pro",
      "Custom report & integrasi API",
      "Onboarding dan pelatihan tim",
      "SLA dan account manager khusus",
    ],
    cta: "Hubungi Sales",
    featured: false,
  },
];

const faqs = [
  {
    q: "Apakah NectarPOS perlu di-install?",
    a: "Tidak. NectarPOS berjalan sepenuhnya di browser. Cukup buka alamatnya dari HP, tablet, atau laptop lalu login — tidak ada aplikasi yang perlu di-install maupun di-update manual.",
  },
  {
    q: "Bagaimana kalau internet di outlet mati?",
    a: "Transaksi tetap bisa dicatat lewat mode offline pada perangkat yang sudah pernah login, lalu otomatis tersinkronisasi begitu koneksi kembali tersedia.",
  },
  {
    q: "Apakah bisa dipakai dengan printer struk yang sudah saya punya?",
    a: "Sebagian besar printer thermal 58mm dan 80mm yang umum dipakai UMKM sudah didukung. Kirimkan tipe printer Anda ke tim kami dan akan kami cek lebih dulu.",
  },
  {
    q: "Apakah data penjualan saya aman?",
    a: "Semua koneksi dienkripsi lewat HTTPS dan data dicadangkan setiap hari. Anda juga bisa mengekspor data kapan saja dalam format Excel atau CSV.",
  },
  {
    q: "Bisakah saya pindah paket di tengah jalan?",
    a: "Bisa. Naik atau turun paket dapat dilakukan kapan saja, dan tagihannya disesuaikan secara prorata pada periode berikutnya.",
  },
  {
    q: "Apa bedanya NectarPOS dengan sistem POS custom Ayrus?",
    a: "NectarPOS adalah produk berlangganan siap pakai dengan fitur standar. Sistem POS custom dibangun khusus mengikuti alur bisnis Anda dengan model sekali bayar. Kalau kebutuhan Anda masih umum, NectarPOS biasanya paling masuk akal untuk memulai.",
  },
];

const testimonials = [
  {
    quote:
      "Sebelumnya saya harus ke outlet cuma buat lihat penjualan. Sekarang buka HP di rumah pun sudah kelihatan semuanya.",
    name: "Sinta Rahmawati",
    role: "Owner, Kopi Ruang Tengah",
    initials: "SR",
  },
  {
    quote:
      "Staf baru saya bisa pakai NectarPOS di hari pertama tanpa perlu ditemani. Itu yang paling menghemat waktu saya.",
    name: "Dewi Lestari",
    role: "Pemilik, Dapur Nusantara",
    initials: "DL",
  },
];

/* --------------------------------- schema --------------------------------- */

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NectarPOS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web browser",
  description:
    "Sistem kasir (POS) online berbasis web untuk UMKM Indonesia. Kelola transaksi, stok, dan laporan penjualan real-time dari perangkat apa pun.",
  url: `${site.url}/produk/nectarpos`,
  publisher: { "@type": "Organization", name: site.name, url: site.url },
  offers: [
    {
      "@type": "Offer",
      name: "Basic",
      price: "99000",
      priceCurrency: "IDR",
      category: "subscription",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "249000",
      priceCurrency: "IDR",
      category: "subscription",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
    { "@type": "ListItem", position: 2, name: "Produk", item: `${site.url}/produk` },
    {
      "@type": "ListItem",
      position: 3,
      name: "NectarPOS",
      item: `${site.url}/produk/nectarpos`,
    },
  ],
};

/* ---------------------------------- page ---------------------------------- */

export default function NectarPosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <Hero />
      <Problems />
      <Features />
      <Gallery />
      <Usage />
      <WhyWeb />
      <Pricing />
      <Testimonials />
      <Faq />
      <DemoCta />
    </>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.3),transparent_65%)] blur-3xl" />
      </div>

      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-ink-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-brand">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page" className="text-ink">
                NectarPOS
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <Rise delay={60}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.5rem]">
                Kelola transaksi kasir Anda, kapan saja, di mana saja —{" "}
                <span className="text-gradient">cukup dari browser</span>
              </h1>
            </Rise>

            <Rise delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                NectarPOS adalah sistem kasir online untuk UMKM. Tidak perlu install, tidak perlu
                beli mesin kasir khusus. Buka dari HP, tablet, atau laptop — laporan penjualan
                langsung terlihat.
              </p>
            </Rise>

            <Rise delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={waLink(waMessages.nectarpos)} external className="px-7">
                  Coba Gratis 14 Hari
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="#harga" variant="secondary" className="px-7">
                  Lihat Harga
                </ButtonLink>
              </div>
            </Rise>

            <Rise delay={240}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-ink-muted">
                {["Tanpa kartu kredit", "Tanpa instalasi", "Bisa berhenti kapan saja"].map((t) => (
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
      </div>
    </section>
  );
}

/* -------------------------------- problems -------------------------------- */

function Problems() {
  return (
    <section className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Kalau salah satu ini terdengar familier, Anda tidak sendirian"
            sub="Tiga hal berikut paling sering kami temui saat berbicara dengan pemilik UMKM di Indonesia."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} as="li">
              <Card as="div" className="h-full text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white/6 text-ink-muted"
                >
                  <p.icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-muted">{p.desc}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- features -------------------------------- */

function Features() {
  return (
    <section id="fitur" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Semua yang dibutuhkan kasir harian Anda"
            sub="Bukan daftar fitur panjang yang tidak terpakai — hanya yang memang dipakai setiap hari oleh outlet UMKM."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60} as="li" className="h-full">
              <FeatureCard icon={f.icon} title={f.title} desc={f.desc} variant="compact" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- gallery -------------------------------- */

function Gallery() {
  return (
    <section aria-labelledby="galeri" className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="NectarPOS di meja kasir sungguhan"
            sub="Satu sistem yang sama menyesuaikan diri dengan kedai kopi, toko ritel, maupun gerai layanan — cukup dibuka dari perangkat yang sudah Anda punya."
            id="galeri"
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 70} as="li">
              <figure className="group h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-surface">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"
                  />
                </div>
                <figcaption className="p-5 text-[15px] leading-relaxed text-ink-muted sm:p-6">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- usage --------------------------------- */

function Usage() {
  return (
    <section id="cara-pakai" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Dari daftar sampai transaksi pertama"
            sub="Sebagian besar outlet sudah bisa berjualan di hari yang sama, karena tidak ada perangkat khusus yang perlu dipasang lebih dulu."
          />
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {usage.map((u, i) => (
            <Reveal key={u.step} delay={i * 70} as="li">
              <Card as="div" className="h-full hover:border-brand/30">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-xl bg-brand/14 text-brand"
                  >
                    <u.icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-sm font-extrabold text-brand">{u.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{u.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{u.desc}</p>
              </Card>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-ink-muted">
            Butuh alur yang lebih spesifik untuk usaha Anda?{" "}
            <Link
              href="/layanan/sistem-pos"
              className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-soft"
            >
              Lihat layanan POS custom
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- why web -------------------------------- */

function WhyWeb() {
  return (
    <section className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Dibanding aplikasi desktop dan mesin kasir khusus"
            sub="Sistem kasir lama mengikat Anda pada satu perangkat di satu tempat. NectarPOS tidak."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left">
              <caption className="sr-only">
                Perbandingan sistem kasir berbasis web NectarPOS dengan aplikasi kasir desktop
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="pb-4 text-sm font-semibold text-ink-muted">
                    Aspek
                  </th>
                  <th
                    scope="col"
                    className="pb-4 text-center text-sm font-bold text-brand"
                  >
                    NectarPOS (web)
                  </th>
                  <th
                    scope="col"
                    className="pb-4 text-center text-sm font-semibold text-ink-muted"
                  >
                    Aplikasi desktop
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-t border-white/8 py-4 pr-4 text-[15px] font-medium"
                    >
                      {row.label}
                    </th>
                    <td className="border-t border-white/8 py-4 text-center">
                      <Mark on={row.web} />
                    </td>
                    <td className="border-t border-white/8 py-4 text-center">
                      <Mark on={row.desktop} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Icon + visually-hidden text, so the answer never depends on colour alone. */
function Mark({ on }: { on: boolean }) {
  return (
    <span className="inline-flex items-center justify-center">
      {on ? (
        <CheckCircle2 size={20} className="text-[#4ade80]" aria-hidden="true" />
      ) : (
        <XCircle size={20} className="text-ink-muted" aria-hidden="true" />
      )}
      <span className="sr-only">{on ? "Ya" : "Tidak"}</span>
    </span>
  );
}

/* --------------------------------- pricing --------------------------------- */

function Pricing() {
  return (
    <section id="harga" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Berlangganan bulanan, tanpa biaya setup"
            sub="Semua paket sudah termasuk update fitur dan backup harian. Hemat 2 bulan jika membayar tahunan."
          />
        </Reveal>

        <ul className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} as="li">
              <div
                className={`relative flex h-full flex-col rounded-[var(--radius-card)] p-7 sm:p-8 ${
                  plan.featured
                    ? "glass-brand glow-brand lg:-mt-4 lg:pb-10"
                    : "glass"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[11px] font-bold tracking-wide text-brand-ink uppercase">
                    Paling populer
                  </span>
                ) : null}

                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 min-h-11 text-[15px] leading-relaxed text-ink-muted">
                  {plan.desc}
                </p>

                <p className="mt-6 flex items-baseline gap-1">
                  {plan.price !== "Custom" ? (
                    <span className="text-sm font-semibold text-ink-muted">Rp</span>
                  ) : null}
                  <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-sm text-ink-muted">{plan.period}</span>
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[15px] text-ink-muted">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={waLink(
                    `Halo Ayrus, saya tertarik dengan NectarPOS paket ${plan.name}. Boleh dijelaskan lebih lanjut?`,
                  )}
                  external
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-ink-muted">
            Butuh sistem yang benar-benar mengikuti alur bisnis Anda?{" "}
            <Link
              href="/#layanan"
              className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-soft"
            >
              Lihat layanan POS custom
            </Link>{" "}
            dengan model sekali bayar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ testimonials ------------------------------ */

function Testimonials() {
  return (
    <section
      aria-labelledby="testimoni-nectar"
      className="border-y border-white/8 bg-bg-alt py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Sudah dipakai setiap hari"
            id="testimoni-nectar"
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} as="li">
              <figure className="glass flex h-full flex-col rounded-[var(--radius-card)] p-7">
                <Quote size={26} className="text-brand/60" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">
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

/* ----------------------------------- FAQ ----------------------------------- */

function Faq() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Pertanyaan yang sering diajukan" />
        </Reveal>

        {/* Native <details> — keyboard-operable and expanded state announced
            without any custom ARIA or JavaScript. */}
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="glass group rounded-[var(--radius-card)] px-6 open:border-brand/30">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-brand transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- demo CTA --------------------------------- */

function DemoCta() {
  return (
    <section id="demo" className="scroll-mt-24 pb-[var(--spacing-section)]">
      <div className="container-page">
        <Reveal>
          <div className="glass-brand glow-brand relative overflow-hidden rounded-[1.75rem] px-6 py-14 text-center sm:px-10 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.32),transparent_65%)] blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold sm:text-[2.75rem] sm:leading-[1.12]">
                Coba NectarPOS gratis 14 hari
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                Tim kami akan membantu menyiapkan produk, harga, dan akun kasir Anda — supaya di
                hari pertama sistemnya sudah siap dipakai berjualan.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href={waLink(waMessages.nectarpos)} external className="px-7">
                  Minta Demo via WhatsApp
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${site.email}?subject=Demo NectarPOS`}
                  external
                  variant="secondary"
                  className="px-7"
                >
                  Kirim Email
                </ButtonLink>
              </div>

              <p className="mt-6 text-sm text-ink-muted">
                Tanpa kartu kredit · Dibalas pada {site.hours}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
