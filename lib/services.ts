import {
  Code2,
  Calculator,
  Globe,
  ScanBarcode,
  type LucideIcon,
  Workflow,
  ShieldCheck,
  Smartphone,
  Users,
  FileSpreadsheet,
  Wallet,
  Receipt,
  PieChart,
  Search,
  ShoppingCart,
  Gauge,
  Layers,
  Printer,
  Boxes,
  Store,
  BookOpen,
  Landmark,
  PenTool,
  Server,
  Blocks,
  Bot,
  Plug,
  Warehouse,
  MessageSquareText,
  ScanText,
  FileText,
} from "lucide-react";

/**
 * Single source of truth for the services.
 *
 * Both the homepage cards and the /layanan/[slug] detail pages read from here,
 * so a service's copy, icon and accent only ever live in one place. Its
 * illustration lives in components/service-screens.tsx, keyed by slug.
 */

export type ServiceDetail = {
  slug: string;
  category: string;
  /** Short label for cards, footer links and breadcrumbs. */
  title: string;
  /** Detail-page H1 — the page's primary keyword, in the words buyers search. */
  h1: string;
  /** One line under the H1 on the detail page. */
  tagline: string;
  icon: LucideIcon;
  accent: { from: string; to: string; text: string };

  /* --- homepage card --- */
  cardDesc: string;

  /* --- detail page --- */
  /** Used as-is (no site-name suffix), so it can carry its own brand. */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  timeline: string;
  intro: string[];
  forWho: string[];
  includes: { icon: LucideIcon; title: string; desc: string }[];
  workflow: { step: string; title: string; desc: string; deliverable: string }[];
  requirements: { title: string; items: string[] }[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "custom-software",
    category: "Custom Software",
    title: "Aplikasi Web & Mobile",
    h1: "Jasa Pembuatan Aplikasi Web, Android & iOS",
    tagline:
      "Aplikasi custom yang dibangun dari nol mengikuti alur kerja bisnis Anda, bukan template yang dipaksakan.",
    icon: Code2,
    accent: { from: "#7C3AED", to: "#4F46E5", text: "#C4B5FD" },
    cardDesc:
      "Aplikasi web, Android, dan iOS yang dibangun dari nol mengikuti alur kerja bisnis Anda.",

    metaTitle: "Jasa Pembuatan Aplikasi Web, Android & iOS Custom | Ayrus Digital",
    metaDescription:
      "Jasa pembuatan aplikasi custom: aplikasi web, Android, dan iOS yang dibangun sesuai alur bisnis Anda. Source code diserahkan ke Anda. Estimasi 6-10 minggu.",
    keywords: [
      "jasa pembuatan aplikasi",
      "jasa pembuatan aplikasi android",
      "jasa pembuatan aplikasi mobile",
      "jasa pembuatan aplikasi android dan ios",
      "jasa pembuatan aplikasi web",
      "jasa pembuatan software custom",
      "custom software sesuai alur bisnis",
    ],
    timeline: "6-10 minggu",
    intro: [
      "Software siap pakai memaksa Anda mengubah cara kerja supaya cocok dengan aplikasinya. Jasa pembuatan aplikasi custom kami bekerja sebaliknya: kami pelajari dulu bagaimana bisnis Anda benar-benar berjalan, lalu membangun sistem yang mengikuti alur itu.",
      "Pendekatan ini paling masuk akal ketika proses Anda punya aturan khusus yang tidak ada di aplikasi jadi, misalnya skema harga bertingkat, alur approval internal, atau perhitungan komisi yang unik untuk usaha Anda.",
    ],
    forWho: [
      "Proses bisnis Anda punya aturan yang tidak tersedia di aplikasi siap pakai",
      "Anda sudah memakai beberapa aplikasi terpisah dan datanya tidak nyambung",
      "Tim Anda masih merekap data yang sama berulang kali secara manual",
      "Anda butuh sistem yang bisa dikembangkan terus tanpa izin vendor",
    ],
    includes: [
      {
        icon: Workflow,
        title: "Analisis proses bisnis",
        desc: "Kami petakan alur kerja Anda saat ini, cari titik yang paling banyak memakan waktu, lalu susun rancangan sistemnya bersama Anda.",
      },
      {
        icon: PenTool,
        title: "Desain UI/UX",
        desc: "Wireframe dan desain antarmuka yang disetujui lebih dulu, dibuat supaya staf non-teknis pun langsung bisa memakainya.",
      },
      {
        icon: Server,
        title: "Web, Android & iOS",
        desc: "Satu sistem yang bisa dibuka dari browser maupun aplikasi di HP, lengkap dengan server, domain, dan SSL.",
      },
      {
        icon: Users,
        title: "Manajemen pengguna & hak akses",
        desc: "Atur siapa boleh melihat dan mengubah apa, sampai level per menu, penting begitu tim Anda lebih dari beberapa orang.",
      },
      {
        icon: ShieldCheck,
        title: "Source code diserahkan",
        desc: "Setelah proyek selesai, source code beserta dokumentasinya jadi milik Anda. Bebas dikembangkan lebih lanjut tanpa terkunci pada satu vendor.",
      },
      {
        icon: BookOpen,
        title: "Dokumentasi & pelatihan",
        desc: "Panduan pemakaian dalam Bahasa Indonesia plus sesi pelatihan untuk tim Anda, supaya sistemnya benar-benar terpakai.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery",
        desc: "Sesi diskusi untuk memetakan alur kerja, masalah utama, dan target yang ingin dicapai. Di tahap ini kami juga menentukan fitur mana yang masuk versi pertama.",
        deliverable: "Dokumen kebutuhan & rencana kerja",
      },
      {
        step: "02",
        title: "Design",
        desc: "Wireframe lalu desain antarmuka lengkap. Anda menyetujui tampilannya sebelum sebaris kode ditulis, supaya tidak ada revisi besar di tengah jalan.",
        deliverable: "Desain UI seluruh halaman",
      },
      {
        step: "03",
        title: "Development",
        desc: "Pengerjaan dibagi ke beberapa sprint. Setiap dua minggu ada demo progres, jadi Anda selalu tahu posisi pengerjaan.",
        deliverable: "Akses staging + demo berkala",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Pengujian bersama tim Anda memakai data nyata, bukan data contoh. Semua temuan dicatat dan diperbaiki sebelum rilis.",
        deliverable: "Laporan pengujian & perbaikan",
      },
      {
        step: "05",
        title: "Deployment",
        desc: "Rilis ke server produksi, migrasi data lama bila ada, konfigurasi domain, lalu pelatihan untuk tim yang akan memakainya.",
        deliverable: "Aplikasi live + pelatihan tim",
      },
      {
        step: "06",
        title: "Support",
        desc: "Pendampingan setelah rilis. Selanjutnya Anda bisa tetap bekerja sama dengan kami atau mengelolanya sendiri, karena source code sudah di tangan Anda.",
        deliverable: "Source code & dokumentasi",
      },
    ],
    requirements: [
      {
        title: "Dari sisi bisnis",
        items: [
          "Satu penanggung jawab dari pihak Anda yang bisa mengambil keputusan",
          "Gambaran alur kerja saat ini, cukup diceritakan, tidak perlu dokumen formal",
          "Contoh dokumen yang dipakai sehari-hari (nota, laporan, form)",
          "Waktu sekitar 2-3 jam per minggu untuk review dan demo progres",
        ],
      },
      {
        title: "Dari sisi teknis",
        items: [
          "Nama domain (kami bantu daftarkan bila belum punya)",
          "Data lama dalam format Excel/CSV bila perlu dimigrasikan",
          "Akses ke sistem lain yang perlu diintegrasikan, bila ada",
          "Keputusan hosting: server sendiri atau cloud yang kami sediakan",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa lama pengerjaannya?",
        a: "Umumnya 6-10 minggu untuk versi pertama, tergantung jumlah modul. Setelah sesi discovery kami berikan estimasi yang lebih pasti beserta rinciannya per modul.",
      },
      {
        q: "Apakah source code benar-benar jadi milik saya?",
        a: "Ya. Setelah proyek selesai, seluruh source code beserta dokumentasinya diserahkan ke Anda. Anda bebas mengembangkannya sendiri atau dengan pihak lain, tanpa kunci vendor.",
      },
      {
        q: "Bagaimana kalau di tengah jalan saya ingin menambah fitur?",
        a: "Bisa. Penambahan di luar kesepakatan awal kami diskusikan lebih dulu, termasuk dampaknya ke jadwal, sebelum mulai dikerjakan, jadi tidak ada kejutan di tengah jalan.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "aplikasi-keuangan",
    category: "Aplikasi Keuangan",
    title: "Aplikasi Keuangan & Pembukuan",
    h1: "Jasa Pembuatan Aplikasi Keuangan & Pembukuan Custom",
    tagline:
      "Pembukuan, arus kas, dan laporan laba rugi yang rapi tanpa perlu jadi akuntan lebih dulu.",
    icon: Calculator,
    accent: { from: "#CB6CE6", to: "#8E4FE0", text: "#E9B8F5" },
    cardDesc:
      "Catat kas masuk dan keluar, pantau piutang, dan lihat laba rugi usaha Anda tanpa perlu Excel manual.",

    metaTitle: "Jasa Pembuatan Aplikasi Keuangan & Pembukuan | Ayrus Digital",
    metaDescription:
      "Aplikasi pembukuan dan keuangan custom untuk UMKM: arus kas, laba rugi, piutang, hutang, dan laporan pajak. Dibuat untuk pemilik usaha, bukan untuk akuntan.",
    keywords: [
      "jasa pembuatan aplikasi keuangan",
      "aplikasi pembukuan custom",
      "aplikasi keuangan multi cabang",
      "aplikasi piutang pengingat WhatsApp",
    ],
    timeline: "5-8 minggu",
    intro: [
      "Sebagian besar UMKM tahu omzetnya, tapi tidak tahu untungnya. Uang masuk tercatat di buku, pengeluaran di catatan lain, dan piutang cuma diingat-ingat. Akhir bulan angkanya tidak pernah benar-benar cocok.",
      "Aplikasi keuangan dan pembukuan custom yang kami bangun menyatukan semuanya dalam satu tempat: kas masuk dan keluar, piutang pelanggan, hutang ke supplier, sampai laporan laba rugi yang terbentuk otomatis. Dibuat untuk pemilik usaha, bukan untuk akuntan, istilahnya sederhana dan alurnya mengikuti kebiasaan mencatat Anda.",
    ],
    forWho: [
      "Pembukuan masih dicampur antara buku tulis, Excel, dan ingatan",
      "Anda belum tahu pasti produk atau cabang mana yang benar-benar untung",
      "Piutang pelanggan sering terlewat karena tidak ada pengingat",
      "Menyiapkan laporan untuk pajak atau pengajuan kredit selalu memakan waktu berhari-hari",
    ],
    includes: [
      {
        icon: Wallet,
        title: "Kas masuk & keluar",
        desc: "Catat setiap transaksi lengkap dengan kategori dan bukti foto. Saldo kas dan bank terlihat real-time, tidak perlu menghitung ulang.",
      },
      {
        icon: PieChart,
        title: "Laporan laba rugi",
        desc: "Laba rugi, arus kas, dan neraca sederhana terbentuk otomatis dari transaksi harian, tidak perlu menyusun ulang di Excel.",
      },
      {
        icon: Receipt,
        title: "Piutang & hutang",
        desc: "Rekap tagihan pelanggan dan kewajiban ke supplier, lengkap dengan jatuh tempo dan pengingat otomatis lewat WhatsApp.",
      },
      {
        icon: FileSpreadsheet,
        title: "Ekspor & siap pajak",
        desc: "Semua laporan bisa diekspor ke Excel atau PDF dengan format yang mudah dipakai konsultan pajak Anda.",
      },
      {
        icon: Landmark,
        title: "Multi-kas & multi-cabang",
        desc: "Pisahkan kas kecil, rekening bank, dan dompet digital. Bila punya beberapa cabang, performanya bisa dibandingkan langsung.",
      },
      {
        icon: Users,
        title: "Hak akses bertingkat",
        desc: "Kasir hanya bisa mencatat, supervisor bisa menyetujui, pemilik melihat semuanya. Setiap perubahan tercatat di log.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery",
        desc: "Kami pelajari cara Anda mencatat sekarang, jenis transaksi yang ada, dan laporan apa saja yang benar-benar dipakai untuk mengambil keputusan.",
        deliverable: "Daftar akun & struktur laporan",
      },
      {
        step: "02",
        title: "Design",
        desc: "Rancangan form pencatatan dan tampilan laporan. Fokusnya membuat input harian secepat mungkin, karena bagian itu yang dipakai tiap hari.",
        deliverable: "Desain UI seluruh halaman",
      },
      {
        step: "03",
        title: "Development",
        desc: "Modul dibangun bertahap: pencatatan dulu, lalu piutang dan hutang, terakhir laporan. Anda bisa mulai mencoba sebelum semuanya selesai.",
        deliverable: "Akses staging + demo berkala",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Kami uji dengan transaksi nyata satu bulan terakhir milik Anda, lalu cocokkan hasilnya dengan catatan manual sampai angkanya sama persis.",
        deliverable: "Hasil rekonsiliasi & perbaikan",
      },
      {
        step: "05",
        title: "Deployment",
        desc: "Rilis ke server, migrasi saldo awal dan data piutang berjalan, lalu pelatihan untuk yang akan mencatat sehari-hari.",
        deliverable: "Aplikasi live + saldo awal termigrasi",
      },
      {
        step: "06",
        title: "Support",
        desc: "Pendampingan melewati satu siklus tutup buku bulanan, supaya Anda yakin laporannya benar sebelum jalan sendiri.",
        deliverable: "Source code & dokumentasi",
      },
    ],
    requirements: [
      {
        title: "Dari sisi bisnis",
        items: [
          "Contoh catatan keuangan tiga bulan terakhir, dalam bentuk apa pun",
          "Daftar kategori pemasukan dan pengeluaran yang biasa Anda pakai",
          "Saldo awal kas, bank, piutang, dan hutang per tanggal mulai",
          "Satu orang yang memahami pembukuan Anda untuk sesi verifikasi",
        ],
      },
      {
        title: "Dari sisi teknis",
        items: [
          "Nama domain (kami bantu daftarkan bila belum punya)",
          "Data lama dalam format Excel/CSV bila perlu dimigrasikan",
          "Nomor WhatsApp bisnis bila ingin memakai pengingat tagihan otomatis",
          "Daftar rekening bank dan dompet digital yang dipakai usaha",
        ],
      },
    ],
    faqs: [
      {
        q: "Saya tidak paham akuntansi. Apakah tetap bisa memakainya?",
        a: "Bisa. Antarmukanya dibuat memakai istilah sehari-hari seperti 'uang masuk' dan 'uang keluar', bukan istilah akuntansi seperti debit dan kredit. Laporan formalnya tetap terbentuk di belakang layar.",
      },
      {
        q: "Apakah bisa terhubung ke rekening bank saya?",
        a: "Untuk sebagian besar bank di Indonesia, integrasi otomatis belum terbuka untuk usaha kecil. Yang kami sediakan adalah impor mutasi rekening dari file Excel/CSV, yang hasilnya sama rapinya dan jauh lebih cepat daripada mencatat satu per satu.",
      },
      {
        q: "Apa bedanya dengan aplikasi pembukuan yang sudah ada di pasaran?",
        a: "Aplikasi jadi cocok kalau kebutuhan Anda standar, dan biasanya lebih murah untuk memulai. Custom masuk akal ketika Anda punya perhitungan khusus, misalnya bagi hasil dengan mitra, harga bertingkat, atau format laporan yang diminta pemberi kredit.",
      },
      {
        q: "Apakah data keuangan saya aman?",
        a: "Semua koneksi memakai HTTPS, data dicadangkan harian, dan hak akses diatur per peran. Bila Anda memilih hosting di server sendiri, datanya tidak pernah keluar dari infrastruktur Anda.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "website",
    category: "Website",
    title: "Website Bisnis",
    h1: "Jasa Pembuatan Website Company Profile & Toko Online",
    tagline:
      "Company profile, katalog produk, sampai toko online yang cepat dan siap ditemukan di Google.",
    icon: Globe,
    accent: { from: "#4F46E5", to: "#6366F1", text: "#A5B4FC" },
    cardDesc:
      "Company profile, katalog produk, sampai toko online yang cepat dan siap ditemukan di Google.",

    metaTitle: "Jasa Pembuatan Website Company Profile & Toko Online | Ayrus Digital",
    metaDescription:
      "Website UMKM dengan desain khusus, bukan template: company profile, katalog produk dengan tombol pesan WhatsApp, sampai toko online. Cepat di HP dan siap ditemukan di Google.",
    keywords: [
      "jasa pembuatan website",
      "jasa pembuatan website company profile",
      "jasa pembuatan website perusahaan",
      "jasa pembuatan website profesional",
      "jasa pembuatan website UMKM",
      "jasa pembuatan website katalog produk",
      "jasa pembuatan toko online",
      "website UMKM tanpa template",
    ],
    timeline: "2-4 minggu",
    intro: [
      "Calon pelanggan mencari Anda di Google sebelum menghubungi. Kalau yang muncul hanya akun media sosial yang jarang diurus, mereka akan ragu, apalagi untuk transaksi bernilai besar.",
      "Sebagai jasa pembuatan website UMKM, kami membangun website dengan desain khusus, bukan template, yang cepat, tampil rapi di layar HP, dan disiapkan sejak awal supaya mudah ditemukan mesin pencari. Kontennya bisa Anda ubah sendiri lewat CMS, tanpa perlu menghubungi kami setiap kali ada perubahan harga atau produk baru.",
    ],
    forWho: [
      "Bisnis Anda belum punya alamat resmi di internet selain media sosial",
      "Website lama sudah lambat, tampil berantakan di HP, atau tidak bisa diperbarui",
      "Anda ingin katalog produk yang bisa dikirim lewat satu tautan",
      "Anda mulai kehilangan calon pembeli ke pesaing yang muncul lebih dulu di Google",
    ],
    includes: [
      {
        icon: Layers,
        title: "Desain khusus, bukan template",
        desc: "Tampilan disusun mengikuti identitas merek Anda (warna, logo, dan gaya foto), bukan tema jadi yang dipakai ratusan situs lain.",
      },
      {
        icon: Smartphone,
        title: "Responsif di semua layar",
        desc: "Diuji di HP, tablet, dan desktop. Mayoritas pengunjung UMKM Indonesia datang dari HP, jadi tampilan mobile jadi prioritas pertama.",
      },
      {
        icon: Search,
        title: "SEO on-page lengkap",
        desc: "Struktur heading, meta title dan description, sitemap, schema markup, serta alt text gambar sudah disiapkan sejak awal.",
      },
      {
        icon: Gauge,
        title: "Skor performa tinggi",
        desc: "Gambar dioptimasi otomatis dan halaman dirender statis, supaya waktu muat tetap di bawah 2,5 detik, salah satu faktor peringkat Google.",
      },
      {
        icon: BookOpen,
        title: "CMS untuk kelola konten",
        desc: "Tambah artikel, ubah harga, atau ganti foto produk sendiri lewat panel yang sederhana. Tidak perlu menyentuh kode.",
      },
      {
        icon: ShoppingCart,
        title: "Katalog atau toko online",
        desc: "Mulai dari katalog dengan tombol pesan lewat WhatsApp, sampai keranjang belanja penuh dengan pembayaran online.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery",
        desc: "Menentukan tujuan website, siapa yang ingin dijangkau, dan kata kunci apa yang mereka pakai saat mencari usaha seperti Anda di Google.",
        deliverable: "Sitemap & riset kata kunci",
      },
      {
        step: "02",
        title: "Design",
        desc: "Desain halaman utama lebih dulu untuk menyepakati arah visual, baru dilanjutkan ke halaman lainnya setelah Anda setuju.",
        deliverable: "Desain UI seluruh halaman",
      },
      {
        step: "03",
        title: "Development",
        desc: "Halaman dibangun statis supaya cepat dan mudah diindeks Google, lalu CMS disambungkan agar konten bisa Anda kelola sendiri.",
        deliverable: "Website di staging",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Uji tampilan lintas perangkat dan browser, cek kecepatan, aksesibilitas, dan pastikan semua tautan serta formulir berfungsi.",
        deliverable: "Laporan performa & perbaikan",
      },
      {
        step: "05",
        title: "Deployment",
        desc: "Pasang domain dan SSL, daftarkan sitemap ke Google Search Console, pasang Google Analytics, lalu pelatihan singkat memakai CMS.",
        deliverable: "Website live + terdaftar di Google",
      },
      {
        step: "06",
        title: "Support",
        desc: "Pendampingan saat Anda mengisi dan memperbarui konten untuk pertama kali.",
        deliverable: "Source code & panduan CMS",
      },
    ],
    requirements: [
      {
        title: "Dari sisi konten",
        items: [
          "Logo dalam format vektor bila ada (AI, SVG, atau PDF)",
          "Profil singkat perusahaan, daftar layanan, dan informasi kontak",
          "Foto produk atau dokumentasi kegiatan dengan resolusi memadai",
          "Testimoni pelanggan bila sudah ada",
        ],
      },
      {
        title: "Dari sisi teknis",
        items: [
          "Nama domain (kami bantu daftarkan bila belum punya)",
          "Akses akun domain lama bila website ingin dipindahkan",
          "Nomor WhatsApp bisnis untuk tombol pemesanan",
          "Akun Google Business Profile bila sudah terdaftar",
        ],
      },
    ],
    faqs: [
      {
        q: "Berapa lama sampai website saya muncul di halaman pertama Google?",
        a: "Struktur SEO-nya kami siapkan sejak hari pertama, tapi peringkat tetap butuh waktu. Untuk kata kunci lokal biasanya mulai terlihat dalam 3-6 bulan, dan itu pun perlu didukung konten yang terbit rutin.",
      },
      {
        q: "Apakah saya bisa menambah halaman atau artikel sendiri?",
        a: "Bisa. Halaman, artikel, dan produk dikelola lewat CMS. Kami berikan pelatihan singkat dan panduan tertulis dalam Bahasa Indonesia saat serah terima.",
      },
      {
        q: "Bisakah website ini menerima pembayaran online?",
        a: "Bisa. Kami dapat menyambungkan payment gateway lokal seperti Midtrans atau Xendit. Pendaftaran akunnya atas nama usaha Anda, dan kami bantu proses verifikasinya.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sistem-pos",
    category: "Sistem POS",
    title: "Aplikasi Kasir (POS) Custom",
    h1: "Jasa Pembuatan Aplikasi Kasir (POS) Custom",
    tagline:
      "Sistem kasir yang menyesuaikan alur outlet Anda, terintegrasi dengan stok dan pembukuan.",
    icon: ScanBarcode,
    accent: { from: "#C026D3", to: "#9333EA", text: "#F5D0FE" },
    cardDesc:
      "Sistem kasir yang menyesuaikan alur outlet Anda, terintegrasi dengan stok dan akuntansi.",

    metaTitle: "Jasa Pembuatan Aplikasi Kasir (POS) Custom | Ayrus Digital",
    metaDescription:
      "Aplikasi kasir custom yang tetap jalan saat internet mati, terhubung ke stok dan pembukuan, multi-outlet, dan mengikuti alur outlet Anda.",
    keywords: [
      "jasa pembuatan aplikasi kasir",
      "jasa pembuatan aplikasi kasir android",
      "jasa pembuatan aplikasi pos custom",
      "jasa pembuatan program kasir",
      "aplikasi kasir multi cabang custom",
    ],
    timeline: "5-8 minggu",
    intro: [
      "Aplikasi kasir siap pakai cocok untuk usaha yang alurnya standar. Begitu Anda punya aturan sendiri (paket bundling, harga khusus pelanggan langganan, deposit di muka, atau perhitungan komisi kasir), aplikasi jadi mulai terasa memaksa.",
      "Aplikasi kasir (POS) custom kami bangun mengikuti alur outlet Anda dan tersambung langsung ke stok serta pembukuan.",
    ],
    forWho: [
      "Alur transaksi Anda punya aturan yang tidak ada di aplikasi kasir umum",
      "Stok, kasir, dan pembukuan masih dicatat di sistem yang terpisah",
      "Anda punya beberapa outlet dengan harga atau promo yang berbeda-beda",
      "Anda butuh integrasi ke perangkat atau sistem lain yang sudah dipakai",
    ],
    includes: [
      {
        icon: ScanBarcode,
        title: "Antarmuka kasir cepat",
        desc: "Dirancang untuk dipakai ratusan kali sehari: minim klik, mendukung shortcut keyboard, dan tetap jalan saat internet putus.",
      },
      {
        icon: Printer,
        title: "Integrasi perangkat",
        desc: "Printer thermal 58mm dan 80mm, barcode scanner, cash drawer, dan timbangan digital untuk usaha yang menjual per satuan berat.",
      },
      {
        icon: Boxes,
        title: "Manajemen stok",
        desc: "Stok berkurang otomatis tiap transaksi, lengkap dengan pencatatan stok masuk, retur, opname, dan peringatan stok menipis.",
      },
      {
        icon: Store,
        title: "Multi-outlet",
        desc: "Harga, promo, dan stok bisa berbeda per outlet, sementara laporannya tetap bisa dilihat gabungan dari satu dashboard.",
      },
      {
        icon: PieChart,
        title: "Laporan penjualan",
        desc: "Omzet per jam, produk terlaris, performa kasir, sampai margin per produk, semuanya real-time tanpa menunggu tutup buku.",
      },
      {
        icon: Users,
        title: "Shift & hak akses kasir",
        desc: "Buka dan tutup shift dengan perhitungan selisih kas otomatis, plus batas wewenang diskon per peran.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery",
        desc: "Kami amati langsung alur transaksi di outlet Anda, dari pelanggan datang sampai struk tercetak, untuk menemukan langkah yang bisa dipangkas.",
        deliverable: "Peta alur kasir & daftar fitur",
      },
      {
        step: "02",
        title: "Design",
        desc: "Desain layar kasir dijadikan prioritas karena paling sering dipakai, baru dilanjut ke halaman stok, laporan, dan pengaturan.",
        deliverable: "Desain UI seluruh halaman",
      },
      {
        step: "03",
        title: "Development",
        desc: "Modul kasir dibangun lebih dulu supaya bisa segera dicoba di outlet, disusul stok, lalu laporan dan integrasi perangkat.",
        deliverable: "Akses staging + demo berkala",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Uji coba langsung di outlet pada jam ramai, termasuk simulasi internet putus dan pengujian semua perangkat yang terhubung.",
        deliverable: "Hasil uji di outlet & perbaikan",
      },
      {
        step: "05",
        title: "Deployment",
        desc: "Rilis bertahap per outlet, migrasi data produk dan stok awal, lalu pelatihan untuk seluruh kasir yang bertugas.",
        deliverable: "Sistem live + pelatihan kasir",
      },
      {
        step: "06",
        title: "Support",
        desc: "Pendampingan intensif di minggu pertama pemakaian, saat sebagian besar pertanyaan operasional biasanya muncul.",
        deliverable: "Source code & dokumentasi",
      },
    ],
    requirements: [
      {
        title: "Dari sisi operasional",
        items: [
          "Daftar produk lengkap dengan harga jual dan harga modal",
          "Contoh struk yang dipakai sekarang beserta informasi yang wajib tercantum",
          "Aturan diskon, promo, dan paket bundling yang berlaku",
          "Jumlah outlet dan kasir yang akan memakai sistem",
        ],
      },
      {
        title: "Dari sisi perangkat",
        items: [
          "Merek dan tipe printer struk yang sudah dimiliki",
          "Perangkat kasir yang dipakai: PC, laptop, atau tablet",
          "Barcode scanner dan cash drawer bila ada",
          "Kondisi jaringan internet di setiap outlet",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah tetap bisa dipakai saat internet mati?",
        a: "Ya. Transaksi tetap tercatat di perangkat dan otomatis tersinkronisasi begitu koneksi kembali. Bagian ini selalu kami uji sebelum rilis karena paling krusial di outlet.",
      },
      {
        q: "Apakah printer dan scanner saya sekarang bisa dipakai?",
        a: "Sebagian besar printer thermal 58mm dan 80mm serta scanner USB standar didukung. Kirimkan merek dan tipenya lebih dulu, akan kami cek di tahap discovery.",
      },
      {
        q: "Bisakah tersambung dengan aplikasi keuangan yang kami pakai?",
        a: "Bisa, selama aplikasi tersebut punya API atau mendukung impor file. Bila Anda juga membangun aplikasi keuangan bersama kami, keduanya bisa dirancang menyatu sejak awal.",
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "erp",
    category: "ERP",
    title: "Sistem ERP",
    h1: "Jasa Pembuatan Sistem ERP Custom",
    tagline:
      "Penjualan, stok, pembelian, keuangan, dan SDM dalam satu sistem yang mengikuti alur kerja perusahaan Anda.",
    icon: Blocks,
    accent: { from: "#8E4FE0", to: "#5B21B6", text: "#D8B4FE" },
    cardDesc: "Penjualan, stok, pembelian, keuangan, dan SDM dalam satu sistem yang saling terhubung.",

    metaTitle: "Jasa Pembuatan Sistem ERP Custom untuk Perusahaan | Ayrus Digital",
    metaDescription:
      "Jasa ERP custom: penjualan, gudang, pembelian, keuangan, dan SDM dalam satu sistem sesuai alur bisnis Anda. Dibangun bertahap per modul, source code milik Anda.",
    keywords: [
      "jasa erp",
      "jasa erp custom",
      "jasa pembuatan sistem erp",
      "jasa erp indonesia",
      "software erp custom",
    ],
    timeline: "10-16 minggu",
    intro: [
      "Begitu usaha tumbuh, data mulai tercecer: penjualan di satu aplikasi, stok di spreadsheet, keuangan di aplikasi lain. Setiap divisi bekerja dengan angka versinya sendiri, dan laporan bulanan butuh berhari-hari untuk dicocokkan.",
      "Sistem ERP custom menyatukan semuanya. Pesanan yang masuk langsung mengurangi stok, membuat faktur, dan tercatat di keuangan, dengan alur persetujuan yang mengikuti struktur perusahaan Anda. Kami membangunnya bertahap per modul, jadi tim bisa mulai memakai bagian yang paling mendesak lebih dulu.",
    ],
    forWho: [
      "Data penjualan, stok, dan keuangan masih tersebar di beberapa aplikasi",
      "Anda punya beberapa cabang atau gudang yang sulit dipantau",
      "ERP siap pakai terlalu kaku atau biaya lisensinya terus naik",
      "Laporan untuk manajemen selalu terlambat karena harus direkap manual",
    ],
    includes: [
      {
        icon: ShoppingCart,
        title: "Penjualan & pembelian",
        desc: "Penawaran, pesanan, faktur, dan purchase order dengan alur persetujuan sesuai struktur perusahaan.",
      },
      {
        icon: Warehouse,
        title: "Gudang & stok multi-lokasi",
        desc: "Stok per gudang, transfer antar lokasi, stok opname, dan peringatan stok minimum.",
      },
      {
        icon: Landmark,
        title: "Keuangan & akuntansi",
        desc: "Jurnal otomatis dari setiap transaksi, hutang piutang, dan laporan laba rugi per cabang.",
      },
      {
        icon: Users,
        title: "SDM & penggajian",
        desc: "Data karyawan, absensi, cuti, dan penggajian yang terhubung ke pembukuan.",
      },
      {
        icon: PieChart,
        title: "Dashboard manajemen",
        desc: "Ringkasan seluruh divisi secara real-time, bisa dilihat per cabang atau gabungan.",
      },
      {
        icon: Plug,
        title: "Integrasi sistem",
        desc: "Tersambung ke aplikasi kasir, marketplace, payment gateway, atau sistem lain yang sudah dipakai.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery",
        desc: "Kami petakan proses lintas divisi, dari pesanan masuk sampai laporan keuangan, lalu tentukan modul mana yang dibangun lebih dulu.",
        deliverable: "Peta proses & prioritas modul",
      },
      {
        step: "02",
        title: "Design",
        desc: "Alur kerja, hak akses per peran, dan tampilan setiap modul disetujui sebelum pengembangan dimulai.",
        deliverable: "Desain alur & UI per modul",
      },
      {
        step: "03",
        title: "Development",
        desc: "Dibangun bertahap per modul dengan demo berkala, supaya tim bisa mencoba dan memberi masukan sejak awal.",
        deliverable: "Modul pertama di staging",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Uji coba bersama perwakilan setiap divisi memakai data nyata, termasuk skenario antar modul.",
        deliverable: "Hasil UAT & perbaikan",
      },
      {
        step: "05",
        title: "Deployment",
        desc: "Migrasi data lama, rilis bertahap per divisi, dan pelatihan untuk setiap pengguna.",
        deliverable: "Sistem live + migrasi data",
      },
      {
        step: "06",
        title: "Support",
        desc: "Pendampingan setelah rilis dan pengembangan modul berikutnya sesuai kebutuhan.",
        deliverable: "Source code & dokumentasi",
      },
    ],
    requirements: [
      {
        title: "Dari sisi bisnis",
        items: [
          "Penanggung jawab dari setiap divisi yang akan memakai sistem",
          "Gambaran alur kerja dan struktur persetujuan saat ini",
          "Contoh dokumen: faktur, PO, laporan stok, dan laporan keuangan",
          "Daftar cabang, gudang, dan jumlah pengguna",
        ],
      },
      {
        title: "Dari sisi teknis",
        items: [
          "Data lama dalam format Excel/CSV atau akses ke sistem lama",
          "Daftar aplikasi lain yang perlu diintegrasikan",
          "Kebutuhan akses dari HP untuk tim lapangan, bila ada",
          "Keputusan hosting: server sendiri atau cloud",
        ],
      },
    ],
    faqs: [
      {
        q: "Apakah semua modul harus dibangun sekaligus?",
        a: "Tidak. Kami mulai dari modul yang paling mendesak, biasanya penjualan dan stok, lalu menambah modul lain bertahap. Tim Anda sudah bisa memakai sistemnya sebelum semua modul selesai.",
      },
      {
        q: "Bisa terhubung dengan aplikasi yang sudah kami pakai?",
        a: "Bisa. ERP dapat disambungkan ke aplikasi kasir, marketplace, payment gateway, atau sistem lain lewat API maupun impor data terjadwal.",
      },
      {
        q: "Apakah bisa diakses dari HP?",
        a: "Bisa. Sistem berbasis web sehingga bisa dibuka dari browser HP, dan untuk tim lapangan kami bisa buatkan aplikasi Android atau iOS.",
      },
      {
        q: "Siapa pemilik data dan source code-nya?",
        a: "Anda. Data tersimpan di server pilihan Anda, dan source code beserta dokumentasinya diserahkan saat proyek selesai.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ai-automation",
    category: "AI Automation",
    title: "AI Automation",
    h1: "Jasa AI Automation & Chatbot WhatsApp untuk Bisnis",
    tagline:
      "Pekerjaan berulang dikerjakan AI: membalas chat pelanggan, membaca dokumen, sampai menyusun laporan, langsung dari sistem Anda.",
    icon: Bot,
    accent: { from: "#C026D3", to: "#7C3AED", text: "#F0ABFC" },
    cardDesc: "Chatbot WhatsApp, pembacaan dokumen otomatis, dan alur kerja AI yang terhubung ke sistem Anda.",

    metaTitle: "Jasa AI Automation & Chatbot WhatsApp untuk Bisnis | Ayrus Digital",
    metaDescription:
      "Jasa AI automation: chatbot WhatsApp yang menjawab dari data bisnis Anda, pembacaan dokumen otomatis, dan alur kerja AI yang terhubung ke sistem yang sudah ada.",
    keywords: [
      "jasa ai automation",
      "jasa chatbot whatsapp",
      "jasa chatbot ai",
      "jasa pembuatan chatbot ai",
      "jasa ai agent",
    ],
    timeline: "4-8 minggu",
    intro: [
      "Banyak jam kerja habis untuk pekerjaan yang sama setiap hari: menjawab pertanyaan pelanggan yang itu-itu saja, memindahkan data dari nota ke sistem, atau menyusun laporan dari beberapa sumber.",
      "Kami membangun otomasi berbasis AI yang terhubung ke data bisnis Anda. Chatbot bisa menjawab status pesanan dari sistem, dokumen dibaca dan dicatat otomatis, dan pekerjaan yang butuh keputusan manusia tetap diteruskan ke tim Anda.",
    ],
    forWho: [
      "Admin kewalahan membalas chat WhatsApp dengan pertanyaan yang berulang",
      "Tim masih mengetik ulang data dari nota, invoice, atau formulir",
      "Laporan rutin disusun manual dari beberapa sumber data",
      "Anda ingin memakai AI tapi datanya harus tetap aman dan terkendali",
    ],
    includes: [
      {
        icon: MessageSquareText,
        title: "Chatbot WhatsApp & web",
        desc: "Menjawab pertanyaan pelanggan dalam Bahasa Indonesia, mengambil jawaban dari data dan dokumen bisnis Anda.",
      },
      {
        icon: ScanText,
        title: "Pembacaan dokumen otomatis",
        desc: "Nota, invoice, dan formulir dibaca AI lalu dicatat ke sistem tanpa diketik ulang.",
      },
      {
        icon: FileText,
        title: "Ringkasan & laporan",
        desc: "Laporan harian atau mingguan disusun otomatis dan dikirim ke WhatsApp atau email Anda.",
      },
      {
        icon: Workflow,
        title: "Alur kerja otomatis",
        desc: "Rangkaian tugas berjalan sendiri: dari pesan masuk, cek data, sampai membuat tiket atau pesanan.",
      },
      {
        icon: Plug,
        title: "Terhubung ke sistem Anda",
        desc: "Bekerja dengan aplikasi yang sudah ada, dari kasir dan ERP sampai spreadsheet.",
      },
      {
        icon: ShieldCheck,
        title: "Kendali di tangan Anda",
        desc: "Batasan jawaban, eskalasi ke manusia, dan log setiap percakapan untuk ditinjau.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery",
        desc: "Kami cari pekerjaan berulang yang paling banyak memakan waktu dan paling aman untuk diotomasi lebih dulu.",
        deliverable: "Daftar proses & prioritas otomasi",
      },
      {
        step: "02",
        title: "Design",
        desc: "Alur percakapan, sumber data, dan aturan kapan AI harus meneruskan ke tim Anda disusun bersama.",
        deliverable: "Rancangan alur & batasan AI",
      },
      {
        step: "03",
        title: "Development",
        desc: "Otomasi dibangun dan disambungkan ke WhatsApp, dokumen, serta sistem yang sudah Anda pakai.",
        deliverable: "Prototipe yang bisa dicoba",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Diuji dengan percakapan dan dokumen nyata, lalu jawabannya disempurnakan sampai akurat.",
        deliverable: "Hasil uji & penyempurnaan",
      },
      {
        step: "05",
        title: "Deployment",
        desc: "Dirilis bertahap, dimulai dari sebagian percakapan, sambil dipantau bersama tim Anda.",
        deliverable: "Otomasi live + dashboard log",
      },
      {
        step: "06",
        title: "Support",
        desc: "Pemantauan dan penyesuaian berkala seiring bertambahnya pertanyaan dan data baru.",
        deliverable: "Dokumentasi & panduan admin",
      },
    ],
    requirements: [
      {
        title: "Dari sisi bisnis",
        items: [
          "Contoh pertanyaan pelanggan yang paling sering masuk",
          "Dokumen rujukan: daftar produk, harga, kebijakan, dan FAQ",
          "Aturan kapan percakapan harus diteruskan ke admin",
          "Penanggung jawab yang meninjau hasil di minggu-minggu awal",
        ],
      },
      {
        title: "Dari sisi teknis",
        items: [
          "Nomor WhatsApp Business yang akan dipakai",
          "Akses ke sistem atau spreadsheet yang menjadi sumber data",
          "Contoh dokumen yang akan dibaca otomatis",
          "Kebijakan internal soal data yang boleh dan tidak boleh dipakai AI",
        ],
      },
    ],
    faqs: [
      {
        q: "Bagaimana kalau AI salah menjawab?",
        a: "AI hanya menjawab dari data dan dokumen yang Anda tentukan. Pertanyaan di luar itu, atau yang butuh keputusan, diteruskan ke tim Anda. Setiap percakapan juga tercatat untuk ditinjau.",
      },
      {
        q: "Apakah data bisnis kami aman?",
        a: "Akses data dibatasi sesuai kebutuhan otomasi, dan aturan soal data yang boleh dipakai kami sepakati di awal bersama Anda.",
      },
      {
        q: "Apakah harus mengganti sistem yang sudah ada?",
        a: "Tidak. Otomasi kami sambungkan ke aplikasi yang sudah Anda pakai, mulai dari WhatsApp, spreadsheet, aplikasi kasir, sampai ERP.",
      },
      {
        q: "Apakah bisa berbahasa Indonesia?",
        a: "Bisa. Chatbot memahami dan membalas dalam Bahasa Indonesia, termasuk gaya bahasa sehari-hari yang biasa dipakai pelanggan.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
