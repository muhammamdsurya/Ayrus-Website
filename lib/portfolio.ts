/**
 * Case studies. Hardcoded here alongside services and articles — same pattern,
 * so the index page, the detail pages, the homepage preview and the sitemap all
 * read from one list.
 */

export type CaseStudy = {
  slug: string;
  /** Must match a `category` in lib/services.ts so the filter chips line up. */
  category: string;
  client: string;
  industry: string;
  title: string;
  /** One-line problem summary, used on the cards. */
  problem: string;
  /** Headline metric shown on the card footer. */
  result: string;
  year: string;
  duration: string;
  serviceSlug: string;
  image: { src: string; alt: string };

  metaTitle: string;
  metaDescription: string;
  challenge: string[];
  solution: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  testimonial?: { quote: string; name: string; role: string; initials: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "laundry-bersih-wangi",
    category: "Custom Software",
    client: "Laundry Bersih Wangi",
    industry: "Jasa laundry, 3 cabang",
    title: "Menyatukan 3 cabang laundry dalam satu sistem",
    problem: "Rekap manual antar cabang bikin omzet sering selisih.",
    result: "Selisih kas turun 90%",
    year: "2025",
    duration: "8 minggu",
    serviceSlug: "custom-software",
    image: {
      src: "/images/portofolio-laundry.jpg",
      alt: "Petugas laundry memasukkan cucian ke dalam mesin cuci di sebuah gerai",
    },
    metaTitle: "Studi Kasus: Sistem Laundry Multi-Cabang — Laundry Bersih Wangi",
    metaDescription:
      "Bagaimana Ayrus membangun sistem manajemen laundry multi-cabang yang menurunkan selisih kas hingga 90% dan memangkas waktu tutup buku harian.",
    challenge: [
      "Tiga cabang mencatat order di buku masing-masing, lalu direkap ulang oleh pemilik setiap malam. Setiap rekap memakan waktu satu sampai dua jam, dan angkanya sering tidak cocok dengan uang di laci.",
      "Pelanggan juga kerap menanyakan status cucian lewat telepon, sementara staf harus mencari catatannya satu per satu. Cucian yang sudah selesai tapi belum diambil menumpuk tanpa ada yang memantau.",
    ],
    solution: [
      {
        title: "Satu antrean untuk semua cabang",
        desc: "Setiap order masuk ke satu sistem dengan kode unik. Status cucian diperbarui dengan memindai kode pada nota, jadi staf tidak perlu mencatat ulang di buku.",
      },
      {
        title: "Harga per kilogram dan per satuan",
        desc: "Sistem menghitung cuci kiloan, item satuan seperti bed cover, dan tarif ekspres dalam satu nota — termasuk harga khusus untuk pelanggan langganan.",
      },
      {
        title: "Notifikasi WhatsApp otomatis",
        desc: "Pelanggan menerima pesan saat cucian selesai, lalu pengingat bila belum diambil setelah tiga hari. Telepon masuk untuk menanyakan status turun drastis.",
      },
      {
        title: "Laporan per cabang dan gabungan",
        desc: "Pemilik melihat omzet, layanan terlaris, dan selisih kas tiap cabang dari satu dashboard, kapan saja, tanpa menunggu rekap malam.",
      },
    ],
    outcomes: [
      { value: "90%", label: "Penurunan selisih kas" },
      { value: "5 menit", label: "Waktu tutup buku harian" },
      { value: "60%", label: "Penurunan telepon status cucian" },
      { value: "3", label: "Cabang dalam satu sistem" },
    ],
    stack: ["Next.js", "PostgreSQL", "WhatsApp API", "Printer thermal 58mm"],
    testimonial: {
      quote:
        "Dulu rekap order laundry masih pakai buku dan sering selisih. Sekarang semua cabang kelihatan dari satu dashboard, dan closing harian cuma butuh lima menit.",
      name: "Budi Santoso",
      role: "Pemilik, Laundry Bersih Wangi",
      initials: "BS",
    },
  },

  {
    slug: "kopi-ruang-tengah",
    category: "Sistem POS",
    client: "Kopi Ruang Tengah",
    industry: "Kedai kopi",
    title: "Kasir coffee shop yang siap dipakai staf baru",
    problem: "Training kasir baru butuh berhari-hari.",
    result: "Onboarding staf jadi 1 hari",
    year: "2025",
    duration: "6 minggu",
    serviceSlug: "sistem-pos",
    image: {
      src: "/images/nectarpos-kafe.jpg",
      alt: "Barista mencatat pesanan lewat tablet kasir di meja bar kedai kopi",
    },
    metaTitle: "Studi Kasus: Sistem Kasir Kedai Kopi — Kopi Ruang Tengah",
    metaDescription:
      "Bagaimana Ayrus merancang antarmuka kasir yang memangkas waktu pelatihan staf baru dari beberapa hari menjadi satu hari di sebuah kedai kopi.",
    challenge: [
      "Kedai ini punya perputaran staf paruh waktu yang tinggi. Setiap kali ada barista baru, pemilik harus mendampingi dua sampai tiga hari sampai kasirnya lancar — waktu yang sebenarnya dibutuhkan untuk mengurus hal lain.",
      "Menu juga punya banyak varian: ukuran, jenis susu, level gula, dan tambahan. Di sistem lama semuanya diketik manual, jadi pesanan sering salah saat jam ramai.",
    ],
    solution: [
      {
        title: "Layar kasir berbasis varian",
        desc: "Barista memilih menu, lalu varian muncul sebagai tombol besar. Tidak ada yang perlu diketik, sehingga kesalahan pesanan turun dan antrean bergerak lebih cepat.",
      },
      {
        title: "Mode belajar untuk staf baru",
        desc: "Staf baru bisa berlatih transaksi dengan data contoh tanpa memengaruhi laporan asli, jadi mereka sudah familier sebelum melayani pelanggan sungguhan.",
      },
      {
        title: "Tetap jalan saat internet putus",
        desc: "Transaksi tercatat lokal saat koneksi terganggu, lalu tersinkronisasi otomatis. Kasir tidak pernah berhenti melayani karena masalah jaringan.",
      },
      {
        title: "Laporan jam sibuk",
        desc: "Grafik penjualan per jam membantu pemilik menyusun jadwal barista, sehingga jam ramai tidak lagi kekurangan orang.",
      },
    ],
    outcomes: [
      { value: "1 hari", label: "Waktu onboarding staf baru" },
      { value: "35%", label: "Antrean lebih cepat saat jam sibuk" },
      { value: "0", label: "Transaksi hilang saat internet putus" },
      { value: "2×", label: "Frekuensi penyesuaian jadwal staf" },
    ],
    stack: ["Next.js", "PostgreSQL", "IndexedDB offline", "Printer thermal 80mm"],
    testimonial: {
      quote:
        "Tim Ayrus mau duduk bareng dan benar-benar mendengarkan alur kerja kami dulu. Hasilnya aplikasinya kepakai, bukan cuma jadi lalu ditinggal.",
      name: "Sinta Rahmawati",
      role: "Owner, Kopi Ruang Tengah",
      initials: "SR",
    },
  },

  {
    slug: "maju-jaya",
    category: "Website",
    client: "Toko Bangunan Maju Jaya",
    industry: "Material bangunan",
    title: "Katalog bangunan yang mendatangkan order dari Google",
    problem: "Belum ada kanal online sama sekali.",
    result: "+120 lead organik / bulan",
    year: "2024",
    duration: "4 minggu",
    serviceSlug: "website",
    image: {
      src: "/images/portofolio-bangunan.jpg",
      alt: "Rak berisi berbagai material dan perkakas di dalam toko bangunan",
    },
    metaTitle: "Studi Kasus: Website Katalog Toko Bangunan — Maju Jaya",
    metaDescription:
      "Bagaimana katalog online yang dioptimasi untuk pencarian lokal membawa lebih dari 120 lead organik per bulan bagi sebuah toko material bangunan.",
    challenge: [
      "Seluruh penjualan bergantung pada pelanggan yang lewat depan toko. Calon pembeli yang mencari material di Google tidak pernah menemukan mereka, dan pertanyaan harga selalu harus dijawab satu per satu lewat telepon.",
      "Daftar produk mencapai ratusan item dengan harga yang berubah mengikuti pasar, sehingga katalog cetak selalu ketinggalan.",
    ],
    solution: [
      {
        title: "Katalog yang dikelola sendiri",
        desc: "Ratusan produk dikelola lewat CMS. Staf toko bisa memperbarui harga sendiri dalam hitungan menit, tanpa menghubungi kami.",
      },
      {
        title: "SEO lokal",
        desc: "Setiap kategori produk punya halaman sendiri dengan judul dan deskripsi yang menargetkan pencarian lokal, ditambah data terstruktur untuk hasil pencarian.",
      },
      {
        title: "Pemesanan lewat WhatsApp",
        desc: "Tombol pesan mengirim nama produk dan jumlah langsung ke WhatsApp toko, jadi percakapan dimulai dengan konteks yang sudah lengkap.",
      },
      {
        title: "Cepat di jaringan seluler",
        desc: "Halaman dirender statis dan gambar dioptimasi otomatis, karena mayoritas pengunjung membuka situs dari HP dengan koneksi seadanya.",
      },
    ],
    outcomes: [
      { value: "+120", label: "Lead organik per bulan" },
      { value: "Top 3", label: "Peringkat untuk 8 kata kunci lokal" },
      { value: "1,4 dtk", label: "Waktu muat halaman (LCP)" },
      { value: "4 minggu", label: "Dari kickoff sampai live" },
    ],
    stack: ["Next.js", "Sanity CMS", "Vercel", "Google Search Console"],
    testimonial: {
      quote:
        "Yang paling saya hargai itu harganya jelas dari awal dan komunikasinya enak. Setelah rilis pun masih dibantu waktu ada kendala.",
      name: "Andi Prasetyo",
      role: "Direktur, Toko Bangunan Maju Jaya",
      initials: "AP",
    },
  },

  {
    slug: "apotek-sehat",
    category: "Sistem POS",
    client: "Apotek Sehat",
    industry: "Apotek",
    title: "Kasir apotek yang mengawasi tanggal kedaluwarsa",
    problem: "Obat kedaluwarsa baru ketahuan saat stok opname.",
    result: "Kerugian stok turun 75%",
    year: "2025",
    duration: "7 minggu",
    serviceSlug: "sistem-pos",
    image: {
      src: "/images/portofolio-apotek.jpg",
      alt: "Interior apotek modern dengan rak obat tertata rapi",
    },
    metaTitle: "Studi Kasus: Sistem Kasir Apotek dengan Kontrol Kedaluwarsa",
    metaDescription:
      "Bagaimana sistem kasir dengan pelacakan nomor batch dan tanggal kedaluwarsa menurunkan kerugian stok apotek hingga 75%.",
    challenge: [
      "Obat dicatat hanya sampai level nama produk, bukan per batch. Akibatnya tanggal kedaluwarsa tidak terpantau dan baru ketahuan saat stok opname tiga bulanan — saat itu obatnya sudah tidak bisa dijual.",
      "Petugas juga harus memisahkan penjualan obat bebas dan obat dengan resep secara manual untuk keperluan pelaporan.",
    ],
    solution: [
      {
        title: "Stok per batch",
        desc: "Setiap penerimaan barang dicatat dengan nomor batch dan tanggal kedaluwarsa. Sistem otomatis menjual batch terdekat kedaluwarsanya lebih dulu.",
      },
      {
        title: "Peringatan bertingkat",
        desc: "Notifikasi muncul 90, 60, dan 30 hari sebelum kedaluwarsa, jadi masih ada waktu untuk retur ke distributor atau menjalankan promo.",
      },
      {
        title: "Pemisahan golongan obat",
        desc: "Obat bebas, bebas terbatas, dan keras dipisahkan otomatis di setiap transaksi dan laporan, mengikuti kebutuhan pencatatan apotek.",
      },
      {
        title: "Riwayat pembelian pelanggan",
        desc: "Apoteker bisa melihat riwayat pembelian pelanggan tetap untuk membantu pengecekan sebelum menyerahkan obat.",
      },
    ],
    outcomes: [
      { value: "75%", label: "Penurunan kerugian stok kedaluwarsa" },
      { value: "100%", label: "Batch terlacak tanggal kedaluwarsanya" },
      { value: "3 jam", label: "Waktu stok opname, dari 2 hari" },
      { value: "Otomatis", label: "Laporan per golongan obat" },
    ],
    stack: ["Next.js", "PostgreSQL", "Barcode scanner", "Printer thermal 58mm"],
  },

  {
    slug: "bengkel-karya",
    category: "Custom Software",
    client: "Bengkel Karya",
    industry: "Bengkel mobil",
    title: "Antrean servis yang bisa dipantau pelanggan sendiri",
    problem: "Pelanggan menelepon berkali-kali menanyakan progres servis.",
    result: "Telepon masuk turun 70%",
    year: "2026",
    duration: "9 minggu",
    serviceSlug: "custom-software",
    image: {
      src: "/images/portofolio-bengkel.jpg",
      alt: "Teknisi bengkel memeriksa mesin mobil menggunakan alat diagnostik",
    },
    metaTitle: "Studi Kasus: Sistem Antrean & Servis Bengkel — Bengkel Karya",
    metaDescription:
      "Bagaimana sistem work order dengan pelacakan progres yang bisa dibuka pelanggan menurunkan telepon masuk hingga 70% di sebuah bengkel mobil.",
    challenge: [
      "Setiap kendaraan masuk dicatat di lembar kerja kertas yang berpindah tangan antar mekanik. Ketika pelanggan menelepon, resepsionis harus mencari lembarnya dulu, lalu bertanya ke mekanik yang menangani.",
      "Estimasi biaya juga ditulis tangan, sehingga sering ada selisih antara yang dijanjikan di awal dan tagihan akhir — sumber keluhan yang paling sering muncul.",
    ],
    solution: [
      {
        title: "Work order digital",
        desc: "Setiap kendaraan masuk membuat work order dengan foto kondisi awal, keluhan pelanggan, dan daftar pekerjaan yang disetujui sebelum dikerjakan.",
      },
      {
        title: "Tautan pelacakan untuk pelanggan",
        desc: "Pelanggan menerima tautan lewat WhatsApp untuk melihat progres servis dan foto pekerjaan, tanpa perlu login atau memasang aplikasi.",
      },
      {
        title: "Persetujuan pekerjaan tambahan",
        desc: "Bila mekanik menemukan kerusakan lain, estimasi tambahan dikirim untuk disetujui pelanggan lebih dulu. Selisih tagihan akhir hampir hilang.",
      },
      {
        title: "Riwayat servis per kendaraan",
        desc: "Semua pekerjaan tersimpan per nomor polisi, sehingga mekanik tahu apa yang pernah dikerjakan saat kendaraan yang sama kembali.",
      },
    ],
    outcomes: [
      { value: "70%", label: "Penurunan telepon menanyakan progres" },
      { value: "95%", label: "Tagihan akhir sesuai estimasi awal" },
      { value: "40%", label: "Kenaikan servis berkala berulang" },
      { value: "9 minggu", label: "Dari discovery sampai rilis" },
    ],
    stack: ["Next.js", "PostgreSQL", "WhatsApp API", "Upload foto terkompresi"],
  },

  {
    slug: "dapur-nusantara",
    category: "Aplikasi Keuangan",
    client: "Dapur Nusantara",
    industry: "Katering & rumah makan",
    title: "Pembukuan katering yang akhirnya menunjukkan margin per menu",
    problem: "Omzet naik tapi pemilik tidak tahu menu mana yang untung.",
    result: "Margin naik 12 poin",
    year: "2026",
    duration: "7 minggu",
    serviceSlug: "aplikasi-keuangan",
    image: {
      src: "/images/portofolio-warung.jpg",
      alt: "Pemilik warung memasak pesanan di dapur rumah makan",
    },
    metaTitle: "Studi Kasus: Aplikasi Pembukuan Katering — Dapur Nusantara",
    metaDescription:
      "Bagaimana aplikasi pembukuan dengan perhitungan harga pokok per menu membantu sebuah usaha katering menaikkan margin sebesar 12 poin persen.",
    challenge: [
      "Pemasukan dicatat di buku, belanja bahan disimpan sebagai nota di kotak, dan piutang katering korporat hanya diingat. Setiap akhir bulan pemilik tahu berapa uang yang masuk, tapi tidak tahu berapa yang benar-benar tersisa.",
      "Beberapa menu yang paling laku ternyata paling tipis marginnya, tapi hal itu tidak pernah terlihat karena biaya bahan tidak pernah dihubungkan ke penjualan.",
    ],
    solution: [
      {
        title: "Harga pokok per menu",
        desc: "Setiap menu punya daftar bahan dan takarannya. Saat harga bahan diperbarui, margin tiap menu ikut terhitung ulang otomatis.",
      },
      {
        title: "Pencatatan belanja lewat foto",
        desc: "Staf memotret nota belanja dari HP, lalu mengisi nominal dan kategorinya. Notanya tersimpan sebagai bukti dan tidak lagi menumpuk di kotak.",
      },
      {
        title: "Piutang katering korporat",
        desc: "Tagihan klien korporat punya jatuh tempo dan pengingat otomatis, sehingga pembayaran tidak lagi terlewat berminggu-minggu.",
      },
      {
        title: "Laba rugi bulanan otomatis",
        desc: "Laporan terbentuk dari transaksi harian, siap diserahkan ke konsultan pajak tanpa perlu disusun ulang di Excel.",
      },
    ],
    outcomes: [
      { value: "+12 poin", label: "Kenaikan margin kotor" },
      { value: "3 menu", label: "Direvisi karena margin negatif" },
      { value: "18 hari", label: "Percepatan penagihan piutang" },
      { value: "1 jam", label: "Waktu tutup buku bulanan" },
    ],
    stack: ["Next.js", "PostgreSQL", "Ekspor Excel & PDF", "WhatsApp API"],
    testimonial: {
      quote:
        "Staf baru saya bisa pakai sistemnya di hari pertama tanpa perlu ditemani. Itu yang paling menghemat waktu saya.",
      name: "Dewi Lestari",
      role: "Pemilik, Dapur Nusantara",
      initials: "DL",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/** Filter chips on the portfolio index, in a stable order. */
export const caseCategories = [
  "Semua",
  ...Array.from(new Set(caseStudies.map((c) => c.category))),
];
