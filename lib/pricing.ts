/**
 * Price tiers for /harga, and the source of each service's "Mulai dari" figure
 * (lib/services.ts reads `priceFrom` from here), so the two can never disagree.
 *
 * Ranges are in juta rupiah. `max: null` means "ke atas".
 *
 * TODO(owner): these ranges are a first draft proposed during the SEO audit,
 * not quotes Ayrus has published before. Confirm or correct every number
 * before deploying.
 */

export type Tier = {
  name: string;
  min: number;
  max: number | null;
  timeline: string;
  desc: string;
  includes: string[];
};

export type ServicePricing = {
  serviceSlug: string;
  label: string;
  tiers: Tier[];
};

export const pricing: ServicePricing[] = [
  {
    serviceSlug: "sistem-pos",
    label: "Aplikasi Kasir (POS) Custom",
    tiers: [
      {
        name: "Basic — 1 outlet",
        min: 5,
        max: 10,
        timeline: "4–5 minggu",
        desc: "Untuk satu outlet yang butuh alur kasir sendiri, di luar yang disediakan aplikasi jadi.",
        includes: [
          "Layar kasir, stok, dan laporan penjualan",
          "Printer thermal 58/80mm & barcode scanner",
          "Tetap jalan saat internet mati",
          "Garansi bug 3 bulan",
        ],
      },
      {
        name: "Standar",
        min: 10,
        max: 20,
        timeline: "5–7 minggu",
        desc: "Aturan harga khusus, shift kasir, dan tersambung ke pembukuan.",
        includes: [
          "Semua fitur Basic",
          "Paket, harga pelanggan, dan deposit",
          "Buka/tutup shift dengan selisih kas otomatis",
          "Integrasi ke aplikasi keuangan",
        ],
      },
      {
        name: "Multi-outlet",
        min: 20,
        max: 40,
        timeline: "6–8 minggu",
        desc: "Beberapa cabang dengan harga, promo, dan stok berbeda, dipantau dari satu dashboard.",
        includes: [
          "Semua fitur Standar",
          "Harga & stok per outlet",
          "Transfer stok antar-outlet",
          "Dashboard gabungan semua cabang",
        ],
      },
    ],
  },
  {
    serviceSlug: "website",
    label: "Website UMKM",
    tiers: [
      {
        name: "Company profile",
        min: 1,
        max: 2.5,
        timeline: "2 minggu",
        desc: "Alamat resmi usaha Anda di Google, bukan hanya akun media sosial.",
        includes: [
          "Hingga 5 halaman, desain khusus",
          "SEO on-page & terdaftar di Search Console",
          "Tombol chat WhatsApp",
          "Domain & hosting tahun pertama",
        ],
      },
      {
        name: "Katalog WhatsApp",
        min: 3,
        max: 6,
        timeline: "3 minggu",
        desc: "Katalog produk yang bisa dikirim lewat satu tautan, dengan tombol pesan WhatsApp.",
        includes: [
          "Semua isi Company profile",
          "Katalog hingga 200 produk, dikelola lewat CMS",
          "Tombol pesan WhatsApp per produk",
          "Halaman kategori yang dioptimasi untuk pencarian lokal",
        ],
      },
      {
        name: "Toko online",
        min: 7,
        max: 15,
        timeline: "4 minggu",
        desc: "Keranjang belanja dan pembayaran online atas nama usaha Anda.",
        includes: [
          "Semua isi Katalog WhatsApp",
          "Keranjang & checkout",
          "Payment gateway (Midtrans/Xendit)",
          "Manajemen pesanan & ongkos kirim",
        ],
      },
    ],
  },
  {
    serviceSlug: "aplikasi-keuangan",
    label: "Aplikasi Keuangan & Pembukuan",
    tiers: [
      {
        name: "Pembukuan dasar",
        min: 4,
        max: 8,
        timeline: "4–5 minggu",
        desc: "Kas masuk dan keluar tercatat rapi, laba rugi terbentuk otomatis.",
        includes: [
          "Kas masuk & keluar per kategori",
          "Laporan laba rugi & arus kas",
          "Ekspor Excel dan PDF",
          "Garansi bug 3 bulan",
        ],
      },
      {
        name: "Standar",
        min: 8,
        max: 15,
        timeline: "5–7 minggu",
        desc: "Piutang dan hutang terpantau, tagihan diingatkan lewat WhatsApp.",
        includes: [
          "Semua fitur Pembukuan dasar",
          "Piutang & hutang dengan jatuh tempo",
          "Pengingat tagihan lewat WhatsApp",
          "Impor mutasi rekening dari Excel/CSV",
        ],
      },
      {
        name: "Multi-cabang",
        min: 15,
        max: 30,
        timeline: "6–8 minggu",
        desc: "Performa tiap cabang dibandingkan langsung, dengan hak akses bertingkat.",
        includes: [
          "Semua fitur Standar",
          "Laporan per cabang & gabungan",
          "Hak akses kasir, supervisor, pemilik",
          "Format laporan untuk bank atau pajak",
        ],
      },
    ],
  },
  {
    serviceSlug: "custom-software",
    label: "Aplikasi Custom",
    tiers: [
      {
        name: "1–2 modul",
        min: 8,
        max: 15,
        timeline: "4–6 minggu",
        desc: "Satu proses yang paling merepotkan dijadikan aplikasi, misalnya order atau antrean servis.",
        includes: [
          "Analisis proses & desain UI",
          "Manajemen pengguna & hak akses",
          "Source code diserahkan",
          "Garansi bug 6 bulan",
        ],
      },
      {
        name: "3–5 modul",
        min: 15,
        max: 35,
        timeline: "6–10 minggu",
        desc: "Beberapa proses yang saling terhubung dalam satu sistem.",
        includes: [
          "Semua isi 1–2 modul",
          "Integrasi WhatsApp atau sistem lain",
          "Migrasi data lama",
          "Pelatihan tim",
        ],
      },
      {
        name: "Sistem lengkap",
        min: 35,
        max: null,
        timeline: "10 minggu+",
        desc: "Seluruh operasional usaha, multi-cabang, dengan kebutuhan integrasi khusus.",
        includes: [
          "Semua isi 3–5 modul",
          "Multi-cabang",
          "Integrasi API pihak ketiga",
          "Opsi paket maintenance",
        ],
      },
    ],
  },
];

const num = (juta: number) => String(juta).replace(".", ",");

/** "Rp 1 juta", "Rp 2,5 juta" */
export function rupiah(juta: number) {
  return `Rp ${num(juta)} juta`;
}

/** "Rp 5–10 juta", or "Rp 35 juta ke atas" when open-ended. */
export function tierRange(t: Tier) {
  return t.max === null ? `${rupiah(t.min)} ke atas` : `Rp ${num(t.min)}–${num(t.max)} juta`;
}

export function getPricing(serviceSlug: string) {
  return pricing.find((p) => p.serviceSlug === serviceSlug);
}

/** Lowest tier of a service, e.g. "Rp 5 juta". */
export function priceFrom(serviceSlug: string) {
  const p = getPricing(serviceSlug);
  if (!p) throw new Error(`No pricing for ${serviceSlug}`);
  return rupiah(Math.min(...p.tiers.map((t) => t.min)));
}
