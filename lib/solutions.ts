import {
  type LucideIcon,
  Scale,
  ListChecks,
  MessageCircle,
  Store,
  Wallet,
  Clock,
  Coffee,
  ListOrdered,
  GraduationCap,
  WifiOff,
  BarChart3,
  Boxes,
  Ruler,
  Tags,
  Receipt,
  Warehouse,
  RefreshCw,
  Globe,
} from "lucide-react";

/**
 * Industry pages under /solusi/[slug]. Each one is built on a case study that
 * already exists in lib/portfolio.ts, and describes that industry's own
 * workflow — not the POS page with the industry name swapped in.
 */

export type Solution = {
  slug: string;
  /** Link label on the homepage and footer. */
  shortTitle: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  /** Case study slug in lib/portfolio.ts used as proof. */
  caseSlug: string;
  timeline: string;
  intro: string[];
  features: { icon: LucideIcon; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  wa: string;
};

export const solutions: Solution[] = [
  {
    slug: "aplikasi-laundry",
    shortTitle: "Laundry",
    industry: "Laundry",
    metaTitle: "Aplikasi Laundry Multi Cabang: Nota WhatsApp & Status Cucian | Ayrus",
    metaDescription:
      "Aplikasi kasir laundry custom untuk kiloan dan satuan: timbang, status cucian, nota dan notifikasi WhatsApp, laporan tiap cabang. Terbukti menurunkan selisih kas 90%.",
    h1: "Aplikasi Laundry Multi Cabang, Dibuat Mengikuti Alur Usaha Anda",
    tagline:
      "Dari timbang cucian, status proses, sampai nota dan pengingat ambil lewat WhatsApp, semua cabang terpantau dari satu dashboard.",
    caseSlug: "laundry-bersih-wangi",
    timeline: "5-8 minggu",
    intro: [
      "Aplikasi laundry multi cabang yang kami bangun berangkat dari satu masalah yang hampir selalu sama: setiap cabang mencatat di bukunya sendiri, pemilik merekap ulang tiap malam, dan angkanya jarang cocok dengan uang di laci.",
      "Berbeda dengan aplikasi kasir ritel, transaksi laundry belum selesai saat pelanggan membayar. Cucian masih harus ditimbang, dicuci, disetrika, lalu diambil beberapa hari kemudian. Karena itu aplikasinya kami susun mengikuti perjalanan cucian, bukan sekadar mencatat pembayaran.",
    ],
    features: [
      {
        icon: Scale,
        title: "Timbang & hitung otomatis",
        desc: "Harga kiloan dengan pembulatan yang bisa diatur, item satuan seperti bed cover dan jas, serta tarif ekspres, semua dalam satu nota.",
      },
      {
        icon: ListChecks,
        title: "Status cucian per tahap",
        desc: "Diterima, dicuci, dikeringkan, disetrika, siap diambil. Status diperbarui dengan memindai kode di nota, tanpa mencatat ulang di buku.",
      },
      {
        icon: MessageCircle,
        title: "Nota & notifikasi WhatsApp",
        desc: "Nota digital terkirim ke WhatsApp pelanggan, pesan otomatis saat cucian selesai, dan pengingat bila belum diambil setelah tiga hari.",
      },
      {
        icon: Store,
        title: "Laporan per cabang",
        desc: "Omzet, layanan terlaris, dan selisih kas tiap cabang terlihat dari satu dashboard, kapan saja, tanpa menunggu rekap malam.",
      },
      {
        icon: Wallet,
        title: "Pelanggan langganan & deposit",
        desc: "Harga khusus untuk pelanggan tetap atau korporat, plus saldo deposit yang terpotong otomatis setiap transaksi.",
      },
      {
        icon: Clock,
        title: "Cucian menumpuk terpantau",
        desc: "Daftar cucian yang belum diambil lebih dari tujuh hari, supaya rak tidak penuh dan pelanggan bisa diingatkan.",
      },
    ],
    faqs: [
      {
        q: "Apakah bisa memakai timbangan dan printer nota yang sudah ada?",
        a: "Sebagian besar printer thermal 58mm dan 80mm didukung, begitu juga timbangan digital yang punya koneksi USB atau serial. Kirimkan merek dan tipenya, kami cek sebelum penawaran dibuat.",
      },
      {
        q: "Bagaimana kalau internet di outlet mati?",
        a: "Transaksi tetap tercatat di perangkat dan tersinkron otomatis begitu koneksi kembali. Notifikasi WhatsApp yang tertunda akan terkirim setelah online.",
      },
      {
        q: "Bisakah pelanggan mengecek status cuciannya sendiri?",
        a: "Bisa. Pelanggan menerima tautan lewat WhatsApp untuk melihat status cuciannya tanpa perlu memasang aplikasi. Telepon yang menanyakan status di Laundry Bersih Wangi turun 60%.",
      },
    ],
    wa: "Halo Ayrus, saya punya usaha laundry dan ingin konsultasi aplikasi laundry.",
  },

  {
    slug: "aplikasi-kasir-coffee-shop",
    shortTitle: "Coffee shop",
    industry: "Coffee shop",
    metaTitle: "Aplikasi Kasir Coffee Shop Custom: Varian Menu, Antrean & Offline | Ayrus",
    metaDescription:
      "Aplikasi kasir coffee shop dan cafe: varian menu tanpa mengetik, antrean dan nomor meja, resep dan stok bahan, tetap jalan saat internet putus. Staf baru lancar dalam 1 hari.",
    h1: "Aplikasi Kasir Coffee Shop yang Langsung Dikuasai Barista Baru",
    tagline:
      "Varian menu jadi tombol, pesanan langsung masuk antrean bar, dan kasir tetap jalan saat internet putus.",
    caseSlug: "kopi-ruang-tengah",
    timeline: "5-7 minggu",
    intro: [
      "Aplikasi kasir coffee shop punya tantangan yang tidak dimiliki toko biasa: satu menu bisa punya belasan kombinasi ukuran, jenis susu, level gula, dan tambahan. Kalau semuanya diketik manual, pesanan salah saat jam ramai dan antrean memanjang.",
      "Kedai kopi juga sering berganti staf paruh waktu. Karena itu kami merancang layar kasir yang bisa dikuasai barista baru di hari pertama. Di Kopi Ruang Tengah, waktu pelatihan turun dari dua-tiga hari menjadi satu hari.",
    ],
    features: [
      {
        icon: Coffee,
        title: "Varian & modifier sebagai tombol",
        desc: "Ukuran, jenis susu, level gula, dan extra shot muncul sebagai tombol besar setelah menu dipilih. Tidak ada yang perlu diketik.",
      },
      {
        icon: ListOrdered,
        title: "Antrean & nomor meja",
        desc: "Pesanan masuk ke layar bar lengkap dengan nama pemesan atau nomor meja, jadi barista tahu urutan yang harus dibuat.",
      },
      {
        icon: GraduationCap,
        title: "Mode latihan staf",
        desc: "Staf baru berlatih dengan data contoh tanpa mengganggu laporan asli, sehingga sudah lancar sebelum melayani pelanggan.",
      },
      {
        icon: WifiOff,
        title: "Tetap jalan saat offline",
        desc: "Transaksi tercatat lokal saat koneksi terganggu dan tersinkron otomatis. Nol transaksi hilang di Kopi Ruang Tengah.",
      },
      {
        icon: Boxes,
        title: "Resep & stok bahan",
        desc: "Setiap cup mengurangi stok biji kopi, susu, dan sirup sesuai resep, sehingga HPP per menu dan kebutuhan belanja terlihat jelas.",
      },
      {
        icon: BarChart3,
        title: "Laporan jam sibuk",
        desc: "Grafik penjualan per jam membantu menyusun jadwal barista, supaya jam ramai tidak kekurangan orang.",
      },
    ],
    faqs: [
      {
        q: "Apakah mendukung pembayaran QRIS?",
        a: "Bisa. QRIS, tunai, kartu, dan dompet digital dicatat pada transaksi yang sama, dan laporan kas dipisahkan per metode pembayaran.",
      },
      {
        q: "Bisa dipakai di tablet?",
        a: "Bisa. Aplikasinya berbasis web, jadi berjalan di tablet Android, iPad, maupun laptop, dan tersambung ke printer thermal 58mm atau 80mm.",
      },
    ],
    wa: "Halo Ayrus, saya ingin konsultasi aplikasi kasir untuk coffee shop saya.",
  },

  {
    slug: "aplikasi-toko-bangunan",
    shortTitle: "Toko bangunan",
    industry: "Toko bangunan",
    metaTitle: "Aplikasi Kasir Toko Bangunan: Multi Satuan, Stok & Piutang | Ayrus",
    metaDescription:
      "Aplikasi kasir toko bangunan dan material: satuan sak, batang, meter dan dus dalam satu produk, harga kontraktor, piutang bertempo, stok gudang, plus website katalog WhatsApp.",
    h1: "Aplikasi Kasir Toko Bangunan: Satuan, Stok, dan Piutang dalam Satu Sistem",
    tagline:
      "Jual per sak, batang, atau meter dari produk yang sama, catat bon kontraktor dengan jatuh tempo, dan tampilkan katalog Anda di Google.",
    caseSlug: "maju-jaya",
    timeline: "5-8 minggu",
    intro: [
      "Aplikasi kasir toko bangunan harus mengerti hal yang tidak dikenal kasir biasa: semen dijual per sak, besi per batang, kabel per meter, keramik per dus, dan kadang produk yang sama dijual dalam dua satuan sekaligus. Ditambah lagi pelanggan kontraktor yang mengambil barang sekarang dan membayar belakangan.",
      "Kami membangun sistem kasir, stok, dan piutang yang mengikuti cara toko material bekerja. Untuk menjangkau pembeli baru, sistem ini bisa disambungkan dengan website katalog, seperti yang kami buat untuk Toko Bangunan Maju Jaya, yang kini mendapat lebih dari 120 calon pembeli dari Google setiap bulan.",
    ],
    features: [
      {
        icon: Ruler,
        title: "Multi satuan per produk",
        desc: "Sak, batang, meter, kg, dus, atau lembar dalam satu produk dengan konversi otomatis, sehingga stok tetap akurat apa pun satuan jualnya.",
      },
      {
        icon: Tags,
        title: "Harga eceran, grosir & kontraktor",
        desc: "Harga bertingkat per jumlah beli dan harga khusus per pelanggan, dipilih otomatis saat nama pelanggan dimasukkan.",
      },
      {
        icon: Receipt,
        title: "Piutang & tempo pembayaran",
        desc: "Bon kontraktor tercatat dengan jatuh tempo dan batas kredit, lengkap dengan pengingat tagihan lewat WhatsApp.",
      },
      {
        icon: Warehouse,
        title: "Stok gudang & surat jalan",
        desc: "Stok per gudang atau toko, surat jalan untuk pengiriman, dan catatan barang yang sudah dibayar tapi belum diantar.",
      },
      {
        icon: RefreshCw,
        title: "Update harga massal",
        desc: "Saat harga pasar naik, perbarui ratusan harga sekaligus dari Excel, tanpa mengubah satu per satu di kasir.",
      },
      {
        icon: Globe,
        title: "Website katalog + WhatsApp",
        desc: "Katalog online yang tersambung ke data produk, dengan tombol pesan WhatsApp berisi nama barang dan jumlahnya.",
      },
    ],
    faqs: [
      {
        q: "Produk saya ratusan. Harus diinput satu per satu?",
        a: "Tidak. Daftar produk, satuan, dan harga diimpor dari Excel saat serah terima, dan kami bantu merapikan datanya lebih dulu.",
      },
      {
        q: "Apakah bisa mencatat pelanggan yang bayar belakangan?",
        a: "Bisa. Setiap bon punya jatuh tempo dan batas kredit per pelanggan. Tagihan yang mendekati jatuh tempo muncul di dashboard dan bisa diingatkan lewat WhatsApp.",
      },
      {
        q: "Website katalognya wajib?",
        a: "Tidak. Kasir dan website bisa dibangun terpisah. Tapi bila keduanya tersambung, harga di website ikut berubah saat harga di kasir diperbarui.",
      },
    ],
    wa: "Halo Ayrus, saya punya toko bangunan dan ingin konsultasi.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
