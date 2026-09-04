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
} from "lucide-react";

/**
 * Single source of truth for the four services.
 *
 * Both the homepage cards and the /layanan/[slug] detail pages read from here,
 * so a service's copy, icon, accent and photo only ever live in one place.
 */

export type ServiceDetail = {
  slug: string;
  category: string;
  title: string;
  /** One line under the H1 on the detail page. */
  tagline: string;
  icon: LucideIcon;
  accent: { from: string; to: string; text: string };
  image: { src: string; alt: string };

  /* --- homepage card --- */
  cardDesc: string;
  cardPoints: string[];
  meta: { label: string; sub: string };

  /* --- detail page --- */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  priceFrom: string;
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
    title: "Custom Software Development",
    tagline:
      "Aplikasi yang dibangun dari nol mengikuti alur kerja bisnis Anda — bukan template yang dipaksakan.",
    icon: Code2,
    accent: { from: "#7C3AED", to: "#4F46E5", text: "#C4B5FD" },
    image: {
      src: "/images/layanan-custom-software.jpg",
      alt: "Laptop menampilkan baris kode program di atas meja kerja",
    },
    cardDesc:
      "Aplikasi dibangun dari nol mengikuti alur kerja bisnis Anda — bukan template yang dipaksakan.",
    cardPoints: ["Analisis proses bisnis", "Fitur sesuai kebutuhan", "Hak pakai penuh"],
    meta: { label: "Sekali bayar", sub: "Estimasi 6–10 minggu" },

    metaTitle: "Jasa Pembuatan Aplikasi Custom untuk UMKM",
    metaDescription:
      "Jasa pembuatan software custom untuk UMKM Indonesia. Dibangun mengikuti alur bisnis Anda, sekali bayar, source code diserahkan. Estimasi 6–10 minggu.",
    keywords: [
      "jasa pembuatan aplikasi custom UMKM",
      "software house Indonesia",
      "jasa pembuatan software custom",
      "aplikasi bisnis custom",
    ],
    priceFrom: "Rp 1 juta",
    timeline: "6–10 minggu",
    intro: [
      "Software siap pakai memaksa Anda mengubah cara kerja supaya cocok dengan aplikasinya. Custom software bekerja sebaliknya: kami pelajari dulu bagaimana bisnis Anda benar-benar berjalan, lalu membangun sistem yang mengikuti alur itu.",
      "Pendekatan ini paling masuk akal ketika proses Anda punya aturan khusus yang tidak ada di aplikasi jadi — misalnya skema harga bertingkat, alur approval internal, atau perhitungan komisi yang unik untuk usaha Anda.",
    ],
    forWho: [
      "Proses bisnis Anda punya aturan yang tidak tersedia di aplikasi siap pakai",
      "Anda sudah memakai beberapa aplikasi terpisah dan datanya tidak nyambung",
      "Biaya langganan bulanan sudah lebih mahal daripada membangun sendiri",
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
        title: "Pengembangan & hosting",
        desc: "Aplikasi web yang berjalan di server Anda sendiri atau cloud pilihan kami, lengkap dengan konfigurasi domain dan SSL.",
      },
      {
        icon: Users,
        title: "Manajemen pengguna & hak akses",
        desc: "Atur siapa boleh melihat dan mengubah apa, sampai level per menu — penting begitu tim Anda lebih dari beberapa orang.",
      },
      {
        icon: ShieldCheck,
        title: "Garansi bug 6 bulan",
        desc: "Setiap bug yang muncul dari pengerjaan kami diperbaiki tanpa biaya tambahan selama enam bulan setelah rilis.",
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
        deliverable: "Dokumen kebutuhan & estimasi biaya",
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
        desc: "Garansi bug tiga bulan. Setelahnya Anda bisa lanjut dengan paket maintenance atau mengelola sendiri — source code sudah di tangan Anda.",
        deliverable: "Source code & dokumentasi",
      },
    ],
    requirements: [
      {
        title: "Dari sisi bisnis",
        items: [
          "Satu penanggung jawab dari pihak Anda yang bisa mengambil keputusan",
          "Gambaran alur kerja saat ini — cukup diceritakan, tidak perlu dokumen formal",
          "Contoh dokumen yang dipakai sehari-hari (nota, laporan, form)",
          "Waktu sekitar 2–3 jam per minggu untuk review dan demo progres",
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
        a: "Umumnya 6–10 minggu untuk versi pertama, tergantung jumlah modul. Setelah sesi discovery kami berikan estimasi yang lebih pasti beserta rinciannya per modul.",
      },
      {
        q: "Apakah source code benar-benar jadi milik saya?",
        a: "Ya. Setelah pelunasan, seluruh source code beserta dokumentasinya diserahkan ke Anda. Anda bebas mengembangkannya sendiri atau dengan pihak lain — tidak ada kunci vendor.",
      },
      {
        q: "Bagaimana kalau di tengah jalan saya ingin menambah fitur?",
        a: "Bisa. Penambahan di luar kesepakatan awal dihitung terpisah dan kami sampaikan estimasinya lebih dulu sebelum dikerjakan, jadi tidak ada biaya yang muncul mendadak.",
      },
      {
        q: "Apakah pembayarannya harus lunas di awal?",
        a: "Tidak. Umumnya dibagi tiga termin: di awal sebagai tanda jadi, saat desain disetujui, dan saat aplikasi selesai diserahkan.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "aplikasi-keuangan",
    category: "Aplikasi Keuangan",
    title: "Aplikasi Keuangan",
    tagline:
      "Pembukuan, arus kas, dan laporan laba rugi yang rapi tanpa perlu jadi akuntan lebih dulu.",
    icon: Calculator,
    accent: { from: "#CB6CE6", to: "#8E4FE0", text: "#E9B8F5" },
    image: {
      src: "/images/layanan-keuangan.jpg",
      alt: "Laptop menampilkan grafik laporan keuangan di layar",
    },
    cardDesc:
      "Catat kas masuk dan keluar, pantau piutang, dan lihat laba rugi usaha Anda tanpa perlu Excel manual.",
    cardPoints: ["Arus kas masuk & keluar", "Laporan laba rugi otomatis", "Rekap piutang & hutang"],
    meta: { label: "Sekali bayar", sub: "Estimasi 5–8 minggu" },

    metaTitle: "Aplikasi Keuangan & Pembukuan Custom untuk UMKM",
    metaDescription:
      "Aplikasi pembukuan dan keuangan custom untuk UMKM: arus kas, laba rugi, piutang, hutang, dan laporan pajak. Sekali bayar, tanpa langganan bulanan.",
    keywords: [
      "aplikasi keuangan UMKM",
      "aplikasi pembukuan custom",
      "software akuntansi UMKM",
      "aplikasi arus kas usaha",
    ],
    priceFrom: "Rp 1 juta",
    timeline: "5–8 minggu",
    intro: [
      "Sebagian besar UMKM tahu omzetnya, tapi tidak tahu untungnya. Uang masuk tercatat di buku, pengeluaran di catatan lain, dan piutang cuma diingat-ingat. Akhir bulan angkanya tidak pernah benar-benar cocok.",
      "Aplikasi keuangan yang kami bangun menyatukan semuanya dalam satu tempat: kas masuk dan keluar, piutang pelanggan, hutang ke supplier, sampai laporan laba rugi yang terbentuk otomatis. Dibuat untuk pemilik usaha, bukan untuk akuntan — istilahnya sederhana dan alurnya mengikuti kebiasaan mencatat Anda.",
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
        desc: "Laba rugi, arus kas, dan neraca sederhana terbentuk otomatis dari transaksi harian — tidak perlu menyusun ulang di Excel.",
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
        a: "Aplikasi jadi cocok kalau kebutuhan Anda standar, dan biasanya lebih murah untuk memulai. Custom masuk akal ketika Anda punya perhitungan khusus — misalnya bagi hasil dengan mitra, harga bertingkat, atau format laporan yang diminta pemberi kredit.",
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
    title: "Website Development",
    tagline:
      "Company profile, katalog produk, sampai toko online yang cepat dan siap ditemukan di Google.",
    icon: Globe,
    accent: { from: "#4F46E5", to: "#6366F1", text: "#A5B4FC" },
    image: {
      src: "/images/layanan-website.jpg",
      alt: "Laptop menampilkan halaman produk sebuah toko online",
    },
    cardDesc:
      "Company profile, katalog produk, sampai toko online yang cepat dan siap ditemukan di Google.",
    cardPoints: ["SEO-ready", "Responsif di semua layar", "Kelola konten sendiri"],
    meta: { label: "Sekali bayar", sub: "Estimasi 2–4 minggu" },

    metaTitle: "Jasa Pembuatan Website UMKM — Company Profile & Toko Online",
    metaDescription:
      "Jasa pembuatan website untuk UMKM: company profile, katalog produk, dan toko online. Cepat, responsif, SEO-ready, dan kontennya bisa Anda kelola sendiri.",
    keywords: [
      "pembuatan website UMKM",
      "jasa pembuatan company profile",
      "jasa pembuatan toko online",
      "website bisnis Indonesia",
    ],
    priceFrom: "Rp 1 juta",
    timeline: "2–4 minggu",
    intro: [
      "Calon pelanggan mencari Anda di Google sebelum menghubungi. Kalau yang muncul hanya akun media sosial yang jarang diurus, mereka akan ragu — apalagi untuk transaksi bernilai besar.",
      "Kami membangun website yang cepat, tampil rapi di layar HP, dan disiapkan sejak awal supaya mudah ditemukan mesin pencari. Kontennya bisa Anda ubah sendiri lewat CMS, tanpa perlu menghubungi kami setiap kali ada perubahan harga atau produk baru.",
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
        desc: "Tampilan disusun mengikuti identitas merek Anda — warna, logo, dan gaya foto — bukan tema jadi yang dipakai ratusan situs lain.",
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
        desc: "Gambar dioptimasi otomatis dan halaman dirender statis, supaya waktu muat tetap di bawah 2,5 detik — salah satu faktor peringkat Google.",
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
        desc: "Garansi bug tiga bulan dan pendampingan saat Anda mengisi konten pertama kali.",
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
        a: "Struktur SEO-nya kami siapkan sejak hari pertama, tapi peringkat tetap butuh waktu. Untuk kata kunci lokal biasanya mulai terlihat dalam 3–6 bulan, dan itu pun perlu didukung konten yang terbit rutin.",
      },
      {
        q: "Apakah saya bisa menambah halaman atau artikel sendiri?",
        a: "Bisa. Halaman, artikel, dan produk dikelola lewat CMS. Kami berikan pelatihan singkat dan panduan tertulis dalam Bahasa Indonesia saat serah terima.",
      },
      {
        q: "Apakah biaya hosting dan domain sudah termasuk?",
        a: "Tahun pertama kami sertakan. Setelah itu perpanjangannya dibayar langsung ke penyedia — biasanya di kisaran ratusan ribu per tahun, dan Anda tetap pemilik akunnya.",
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
    title: "Sistem POS Custom",
    tagline:
      "Sistem kasir yang menyesuaikan alur outlet Anda, terintegrasi dengan stok dan pembukuan.",
    icon: ScanBarcode,
    accent: { from: "#C026D3", to: "#9333EA", text: "#F5D0FE" },
    image: {
      src: "/images/layanan-pos.jpg",
      alt: "Kasir melayani pelanggan menggunakan sistem POS berbasis tablet di sebuah toko",
    },
    cardDesc:
      "Sistem kasir yang menyesuaikan alur outlet Anda, terintegrasi dengan stok dan akuntansi.",
    cardPoints: ["Integrasi printer & scanner", "Manajemen stok", "Multi-outlet"],
    meta: { label: "Sekali bayar", sub: "Estimasi 5–8 minggu" },

    metaTitle: "Jasa Pembuatan Sistem POS & Kasir Custom untuk UMKM",
    metaDescription:
      "Sistem POS custom untuk UMKM: alur kasir sesuai outlet Anda, integrasi printer dan scanner, manajemen stok, dan laporan multi-outlet. Sekali bayar.",
    keywords: [
      "sistem POS custom",
      "aplikasi kasir custom",
      "software kasir UMKM",
      "sistem kasir multi outlet",
    ],
    priceFrom: "Rp 1 juta",
    timeline: "5–8 minggu",
    intro: [
      "Aplikasi kasir siap pakai cocok untuk usaha yang alurnya standar. Begitu Anda punya aturan sendiri — paket bundling, harga khusus pelanggan langganan, deposit di muka, atau perhitungan komisi kasir — aplikasi jadi mulai terasa memaksa.",
      "Sistem POS custom dibangun mengikuti alur outlet Anda dan tersambung langsung ke stok serta pembukuan. Kalau kebutuhan Anda masih umum, kami akan jujur menyarankan NectarPOS yang berlangganan — jauh lebih hemat untuk memulai.",
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
        desc: "Omzet per jam, produk terlaris, performa kasir, sampai margin per produk — semuanya real-time tanpa menunggu tutup buku.",
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
        desc: "Kami amati langsung alur transaksi di outlet Anda — dari pelanggan datang sampai struk tercetak — untuk menemukan langkah yang bisa dipangkas.",
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
        q: "Kapan sebaiknya memilih POS custom dan kapan NectarPOS?",
        a: "Kalau kebutuhan Anda masih umum — catat penjualan, kelola stok, lihat laporan — NectarPOS jauh lebih hemat dan bisa dipakai hari ini juga. POS custom masuk akal ketika ada aturan khusus yang tidak bisa diakomodasi sistem siap pakai.",
      },
      {
        q: "Apakah tetap bisa dipakai saat internet mati?",
        a: "Ya. Transaksi tetap tercatat di perangkat dan otomatis tersinkronisasi begitu koneksi kembali. Bagian ini selalu kami uji sebelum rilis karena paling krusial di outlet.",
      },
      {
        q: "Apakah printer dan scanner saya sekarang bisa dipakai?",
        a: "Sebagian besar printer thermal 58mm dan 80mm serta scanner USB standar didukung. Kirimkan merek dan tipenya lebih dulu, akan kami cek sebelum penawaran dibuat.",
      },
      {
        q: "Bisakah tersambung dengan aplikasi keuangan yang kami pakai?",
        a: "Bisa, selama aplikasi tersebut punya API atau mendukung impor file. Bila Anda juga membangun aplikasi keuangan bersama kami, keduanya bisa dirancang menyatu sejak awal.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
