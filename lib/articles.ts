/**
 * Blog articles — content is hardcoded here on purpose (no CMS yet, PRD §4.2
 * lists the CMS as a later workstream). Body is a small block union rather than
 * an HTML string so the renderer keeps full control of typography and never has
 * to use dangerouslySetInnerHTML.
 *
 * Text in p/ul/ol/callout blocks may contain `[label](/path)` links.
 *
 * SEO checklist per article: target keyword in title, first 100 words and slug;
 * one real number from an Ayrus project; an in-text link to the money page in
 * the first third; a comparison table where the reader is choosing; a `cta`
 * message that names the article's topic.
 */

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "callout"; title: string; text: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  read: string;
  author: { name: string; role: string; initials: string };
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  body: Block[];
  /** Slug of a service to cross-link at the end of the article. */
  relatedService: string;
  /** Closing WhatsApp button; `message` should name the article's topic. */
  cta: { label: string; message: string };
};

export const articles: Article[] = [
  {
    slug: "biaya-bikin-website-company-profile",
    category: "Panduan",
    title: "Berapa Biaya Bikin Website Company Profile? Ini Rinciannya",
    excerpt:
      "Rincian komponen biaya bikin website company profile: domain, server, desain, CMS, sampai biaya tahunan yang sering terlupa.",
    date: "2 November 2026",
    dateTime: "2026-11-02",
    read: "7 menit",
    author: { name: "Tim Ayrus", role: "Ayrus Digital Indonesia", initials: "AY" },
    metaTitle: "Berapa Biaya Bikin Website Company Profile? Ini Rinciannya",
    metaDescription:
      "Biaya bikin website company profile terdiri dari domain, server, desain, pengembangan, CMS, dan perawatan. Pahami tiap komponennya sebelum minta penawaran.",
    keywords: [
      "biaya bikin website company profile",
      "biaya pembuatan website perusahaan",
      "harga website company profile",
      "jasa pembuatan website company profile",
    ],
    relatedService: "website",
    body: [
      {
        t: "p",
        text: "Pertanyaan pertama yang hampir selalu muncul saat bisnis ingin punya situs resmi: berapa biaya bikin website company profile? Jawaban jujurnya, rentangnya lebar sekali, dari ratusan ribu sampai puluhan juta rupiah. Penyebabnya bukan karena ada yang curang, tetapi karena isi paketnya sangat berbeda.",
      },
      {
        t: "p",
        text: "Artikel ini membedah komponen biayanya satu per satu, supaya Anda bisa membandingkan penawaran dengan adil. Kalau ingin langsung melihat apa saja yang termasuk dalam paket kami, buka halaman [jasa pembuatan website company profile](/layanan/website).",
      },

      { t: "h2", text: "1. Domain: alamat website Anda" },
      {
        t: "p",
        text: "Domain adalah nama alamat seperti namausaha.com atau namausaha.co.id. Biayanya dibayar per tahun dan berbeda tiap ekstensi. Domain .co.id biasanya butuh dokumen legal usaha, sedangkan .com bisa didaftarkan siapa saja.",
      },
      {
        t: "callout",
        title: "Pastikan domain atas nama Anda",
        text: "Minta domain didaftarkan atas nama usaha Anda, bukan atas nama vendor. Kalau suatu hari Anda pindah vendor, domain tetap milik Anda dan tidak perlu ditebus.",
      },

      { t: "h2", text: "2. Server atau hosting: tempat website disimpan" },
      {
        t: "p",
        text: "Website perlu disimpan di server agar bisa diakses 24 jam. Biayanya juga rutin, bulanan atau tahunan. Hosting murah sering cukup untuk company profile sederhana, tetapi perhatikan kecepatannya: halaman yang lambat dimuat di HP membuat pengunjung pergi sebelum membaca apa pun.",
      },

      { t: "h2", text: "3. Desain: template atau dibuat khusus" },
      {
        t: "p",
        text: "Inilah pembeda harga terbesar. Website berbasis template murah dan cepat jadi, tetapi tampilannya mirip dengan ratusan situs lain. Desain khusus disusun mengikuti identitas merek Anda, sehingga butuh waktu dan biaya lebih.",
      },
      {
        t: "ul",
        items: [
          "Template: biaya rendah, jadi dalam hitungan hari, tampilan generik",
          "Template yang dimodifikasi: jalan tengah, tetap dibatasi struktur tema",
          "Desain khusus: sesuai merek, lebih mudah dibedakan dari pesaing, biaya dan waktu lebih besar",
        ],
      },

      { t: "h2", text: "4. Jumlah halaman dan fitur" },
      {
        t: "p",
        text: "Company profile standar biasanya berisi beranda, tentang kami, layanan, portofolio, dan kontak. Setiap tambahan seperti katalog produk, blog, formulir pemesanan, multi-bahasa, atau pembayaran online akan menambah biaya pengembangan.",
      },

      { t: "h2", text: "5. CMS: bisa diubah sendiri atau tidak" },
      {
        t: "p",
        text: "Tanyakan apakah Anda bisa mengubah teks, foto, dan harga sendiri. Tanpa CMS, setiap perubahan kecil harus lewat vendor, dan biaya revisi kecil inilah yang diam-diam membengkak dalam setahun.",
      },

      { t: "h2", text: "6. SEO dasar: supaya ditemukan di Google" },
      {
        t: "p",
        text: "Website yang tidak disiapkan untuk mesin pencari hanya akan dikunjungi orang yang sudah tahu alamatnya. SEO on-page dasar mencakup struktur heading, meta title dan description, sitemap, schema markup, dan kecepatan halaman. Tanyakan apakah ini termasuk paket atau dihitung terpisah.",
      },

      { t: "h2", text: "7. Biaya tahunan yang sering terlupa" },
      {
        t: "p",
        text: "Harga pembuatan hanya biaya awal. Untuk menghitung total biaya, jumlahkan juga biaya yang datang setiap tahun:",
      },
      {
        t: "ul",
        items: [
          "Perpanjangan domain",
          "Perpanjangan server atau hosting",
          "Sertifikat SSL, kalau tidak sudah termasuk di server",
          "Perawatan, pembaruan keamanan, dan cadangan data",
        ],
      },

      { t: "h2", text: "Cara membandingkan penawaran dengan adil" },
      {
        t: "p",
        text: "Saat menerima dua penawaran dengan harga jauh berbeda, cek daftar berikut sebelum memutuskan:",
      },
      {
        t: "ol",
        items: [
          "Apakah desainnya khusus atau template?",
          "Berapa halaman yang termasuk, dan berapa biaya halaman tambahan?",
          "Apakah ada CMS dan pelatihan memakainya?",
          "Apakah domain terdaftar atas nama Anda?",
          "Berapa biaya tahunan setelah tahun pertama?",
          "Apakah source code dan akses akun diserahkan ke Anda?",
        ],
      },
      {
        t: "p",
        text: "Website katalog [Toko Bangunan Maju Jaya](/portofolio/maju-jaya) kami selesaikan dalam 4 minggu dan sekarang mendatangkan lebih dari 120 lead organik per bulan. Angka seperti itu datang dari kombinasi desain, kecepatan, dan SEO, bukan dari harga paling murah.",
      },

      { t: "h2", text: "Ringkasnya" },
      {
        t: "quote",
        text: "Jangan bandingkan harga sebelum membandingkan isi paketnya. Website termurah bisa jadi yang paling mahal kalau tiap perubahan harus dibayar dan tidak ada yang menemukannya di Google.",
      },
    ],
    cta: {
      label: "Minta Rincian Biaya Website",
      message: "Halo Ayrus, saya ingin tahu rincian biaya bikin website company profile untuk usaha saya.",
    },
  },

  {
    slug: "chatbot-whatsapp-untuk-bisnis",
    category: "AI Automation",
    title: "Chatbot WhatsApp untuk Bisnis: Kapan Perlu dan Apa Untungnya",
    excerpt:
      "Tanda bisnis Anda sudah butuh chatbot WhatsApp, apa yang bisa dan tidak bisa dikerjakannya, dan cara menghitung untung-ruginya.",
    date: "2 November 2026",
    dateTime: "2026-11-02",
    read: "7 menit",
    author: { name: "Tim Ayrus", role: "Ayrus Digital Indonesia", initials: "AY" },
    metaTitle: "Chatbot WhatsApp untuk Bisnis: Kapan Perlu dan Apa Untungnya",
    metaDescription:
      "Panduan chatbot WhatsApp untuk bisnis: tanda Anda sudah butuh, pekerjaan yang bisa diotomasi, batasannya, dan cara menghitung penghematannya.",
    keywords: [
      "chatbot whatsapp bisnis",
      "chatbot whatsapp untuk bisnis",
      "jasa chatbot whatsapp",
      "chatbot AI WhatsApp",
    ],
    relatedService: "ai-automation",
    body: [
      {
        t: "p",
        text: "Bagi banyak UMKM di Indonesia, WhatsApp adalah kasir, layanan pelanggan, dan kanal penjualan sekaligus. Masalahnya, semakin ramai usaha Anda, semakin banyak waktu admin habis untuk menjawab pertanyaan yang sama. Di titik inilah chatbot WhatsApp untuk bisnis mulai layak dipertimbangkan.",
      },
      {
        t: "p",
        text: "Artikel ini membahas kapan chatbot benar-benar perlu, apa yang bisa dikerjakannya, dan di mana batasnya. Kalau Anda sudah yakin butuh, lihat cara kerja [jasa chatbot WhatsApp dan AI automation](/layanan/ai-automation) kami.",
      },

      { t: "h2", text: "Tanda Anda sudah butuh chatbot" },
      {
        t: "ul",
        items: [
          "Sebagian besar chat masuk menanyakan hal yang sama: harga, jam buka, lokasi, status pesanan",
          "Chat di luar jam kerja baru dibalas besok pagi, dan sebagian calon pembeli sudah pindah ke pesaing",
          "Admin menyalin data dari chat ke spreadsheet atau sistem secara manual",
          "Anda menambah admin hanya untuk mengimbangi volume chat, bukan untuk pekerjaan yang butuh keputusan",
        ],
      },
      {
        t: "p",
        text: "Kalau chat masuk Anda masih sedikit dan tiap percakapan unik, chatbot belum tentu perlu. Balasan cepat dari WhatsApp Business biasa sering sudah cukup.",
      },

      { t: "h2", text: "Apa yang bisa dikerjakan chatbot WhatsApp" },
      {
        t: "p",
        text: "Chatbot modern berbasis AI berbeda dengan bot menu lama yang meminta pelanggan mengetik angka 1, 2, atau 3. Chatbot AI memahami pertanyaan dalam bahasa sehari-hari dan menjawab dari data bisnis Anda.",
      },
      {
        t: "ul",
        items: [
          "Menjawab pertanyaan umum dari daftar produk, harga, dan kebijakan Anda",
          "Mengecek status pesanan langsung dari sistem kasir atau spreadsheet",
          "Mencatat pesanan atau janji temu ke sistem tanpa diketik ulang",
          "Meneruskan percakapan ke admin saat pertanyaannya butuh keputusan manusia",
          "Mengirim ringkasan percakapan harian ke pemilik usaha",
        ],
      },

      { t: "h2", text: "Yang sebaiknya tidak diserahkan ke chatbot" },
      {
        t: "p",
        text: "Chatbot bukan pengganti tim Anda sepenuhnya. Negosiasi harga, komplain yang emosional, dan keputusan yang menyangkut uang atau pengecualian aturan sebaiknya tetap ditangani manusia.",
      },
      {
        t: "callout",
        title: "Kunci chatbot yang aman",
        text: "Batasi chatbot agar hanya menjawab dari data yang Anda tentukan, dan pastikan ada aturan jelas kapan percakapan diteruskan ke admin. Chatbot yang mengarang jawaban lebih merugikan daripada tidak punya chatbot sama sekali.",
      },

      { t: "h2", text: "Cara menghitung untung-ruginya" },
      {
        t: "p",
        text: "Sebelum memutuskan, lakukan hitungan sederhana selama satu minggu:",
      },
      {
        t: "ol",
        items: [
          "Hitung jumlah chat masuk per hari",
          "Tandai berapa persen yang berupa pertanyaan berulang",
          "Catat berapa menit rata-rata admin menghabiskan waktu per chat",
          "Kalikan untuk mendapat total jam kerja per bulan yang bisa dihemat",
          "Hitung juga chat di luar jam kerja yang tidak terbalas, karena itu calon penjualan yang hilang",
        ],
      },
      {
        t: "p",
        text: "Kalau jam kerja yang bisa dihemat setara dengan sebagian besar beban satu admin, atau banyak calon pembeli hilang karena telat dibalas, investasi chatbot biasanya kembali dengan cepat.",
      },
      {
        t: "p",
        text: "Pertanyaan status adalah titik awal yang paling mudah diotomasi. Di [Bengkel Karya](/portofolio/bengkel-karya), pelanggan dulu menelepon berkali-kali menanyakan progres servis. Setelah progres servis bisa dipantau sendiri lewat tautan yang dikirim ke WhatsApp, telepon yang menanyakan progres turun 70%. Prinsipnya sama dengan chatbot: jawaban untuk pertanyaan berulang diambil langsung dari sistem, bukan dari admin.",
      },

      { t: "h2", text: "Mulai dari yang kecil" },
      {
        t: "p",
        text: "Chatbot terbaik tidak dirilis untuk semua percakapan sekaligus. Mulailah dari satu jenis pertanyaan yang paling sering muncul, misalnya status pesanan, pantau hasilnya beberapa minggu, lalu perluas. Cara ini menekan risiko dan membuat tim Anda ikut percaya pada sistemnya.",
      },

      { t: "h2", text: "Ringkasnya" },
      {
        t: "quote",
        text: "Chatbot WhatsApp layak dipakai saat pertanyaan berulang mulai memakan waktu tim Anda. Biarkan bot menjawab yang itu-itu saja, dan biarkan tim Anda fokus ke percakapan yang menghasilkan penjualan.",
      },
    ],
    cta: {
      label: "Konsultasi Chatbot WhatsApp",
      message: "Halo Ayrus, saya ingin konsultasi chatbot WhatsApp untuk bisnis saya.",
    },
  },

  {
    slug: "cara-bisnis-muncul-di-google-maps-dan-pencarian-lokal",
    category: "Panduan",
    title: "Cara Bisnis Muncul di Google Maps dan Pencarian Lokal",
    excerpt:
      "Langkah praktis agar usaha Anda muncul saat calon pelanggan mencari di Google Maps dan pencarian lokal, dari Google Business Profile sampai website.",
    date: "2 November 2026",
    dateTime: "2026-11-02",
    read: "8 menit",
    author: { name: "Tim Ayrus", role: "Ayrus Digital Indonesia", initials: "AY" },
    metaTitle: "Cara Bisnis Muncul di Google Maps dan Pencarian Lokal",
    metaDescription:
      "Cara agar bisnis muncul di Google Maps dan pencarian lokal: optimasi Google Business Profile, ulasan, konsistensi alamat, dan website yang siap SEO lokal.",
    keywords: [
      "cara bisnis muncul di google maps",
      "SEO lokal",
      "google business profile",
      "jasa website Jakarta",
    ],
    relatedService: "website",
    body: [
      {
        t: "p",
        text: "Saat orang mengetik \"toko bangunan terdekat\" atau \"laundry di Condet\", Google menampilkan peta dengan tiga usaha teratas sebelum hasil lainnya. Kalau bisnis Anda tidak muncul di sana, sebagian besar calon pelanggan lokal tidak akan pernah tahu Anda ada. Kabar baiknya, cara bisnis muncul di Google Maps bisa dipelajari dan dikerjakan bertahap.",
      },
      {
        t: "p",
        text: "Berikut langkah-langkahnya, dari yang gratis dan bisa Anda kerjakan hari ini sampai yang butuh [website bisnis yang siap SEO lokal](/layanan/website).",
      },

      { t: "h2", text: "1. Klaim dan lengkapi Google Business Profile" },
      {
        t: "p",
        text: "Google Business Profile (dulu Google My Business) adalah kartu nama usaha Anda di Google Maps. Klaim gratis, lalu lengkapi semuanya:",
      },
      {
        t: "ul",
        items: [
          "Nama usaha persis seperti papan nama, tanpa tambahan kata kunci",
          "Kategori utama yang paling spesifik, misalnya \"Toko Bahan Bangunan\", bukan sekadar \"Toko\"",
          "Alamat, nomor WhatsApp, jam buka, dan tautan website",
          "Foto asli toko, produk, dan tim, diperbarui berkala",
          "Daftar produk atau layanan beserta deskripsinya",
        ],
      },

      { t: "h2", text: "2. Pastikan alamat dan nomor sama di mana-mana" },
      {
        t: "p",
        text: "Google mencocokkan informasi usaha Anda dari berbagai sumber: profil Google, website, media sosial, dan direktori online. Kalau alamat atau nomor telepon berbeda-beda, Google ragu informasi mana yang benar. Tulis alamat dengan format yang persis sama di semua tempat.",
      },

      { t: "h2", text: "3. Kumpulkan ulasan secara rutin" },
      {
        t: "p",
        text: "Jumlah dan kualitas ulasan adalah salah satu faktor peringkat lokal yang paling berpengaruh. Minta ulasan dari pelanggan yang puas, misalnya lewat tautan di nota atau pesan terima kasih di WhatsApp. Balas setiap ulasan, termasuk yang negatif, dengan sopan dan spesifik.",
      },
      {
        t: "callout",
        title: "Jangan beli ulasan",
        text: "Ulasan palsu melanggar kebijakan Google dan bisa membuat profil Anda diturunkan atau ditangguhkan. Sepuluh ulasan asli lebih berharga daripada seratus ulasan beli.",
      },

      { t: "h2", text: "4. Punya website yang mendukung pencarian lokal" },
      {
        t: "p",
        text: "Profil Google yang terhubung ke website yang baik cenderung lebih dipercaya. Website membantu Google memahami apa yang Anda jual dan di mana Anda melayani pelanggan. Hal yang perlu ada:",
      },
      {
        t: "ul",
        items: [
          "Halaman terpisah untuk tiap layanan atau kategori produk utama",
          "Nama kota atau area layanan di judul dan isi halaman secara wajar",
          "Alamat dan nomor yang sama persis dengan Google Business Profile",
          "Schema markup LocalBusiness supaya data usaha terbaca mesin pencari",
          "Halaman yang cepat dibuka di HP",
        ],
      },
      {
        t: "p",
        text: "Contohnya [Toko Bangunan Maju Jaya](/portofolio/maju-jaya). Sebelumnya mereka tidak punya kanal online sama sekali. Setelah katalog online dengan halaman per kategori produk dan SEO lokal, tokonya masuk tiga besar untuk 8 kata kunci lokal dan mendapat lebih dari 120 lead organik per bulan.",
      },

      { t: "h2", text: "5. Unggah konten secara konsisten" },
      {
        t: "p",
        text: "Google Business Profile punya fitur postingan untuk promo, produk baru, dan kabar usaha. Website juga sebaiknya diisi artikel yang menjawab pertanyaan calon pelanggan. Aktivitas yang rutin memberi sinyal bahwa usaha Anda masih aktif dan relevan.",
      },

      { t: "h2", text: "Berapa lama sampai hasilnya terlihat?" },
      {
        t: "p",
        text: "Perubahan di Google Business Profile bisa terlihat dalam hitungan hari sampai minggu. Untuk peringkat kata kunci lokal di pencarian biasa, umumnya butuh 3-6 bulan, dan hasilnya bergantung pada persaingan di area Anda serta konsistensi konten.",
      },

      { t: "h2", text: "Ringkasnya" },
      {
        t: "quote",
        text: "Muncul di Google Maps bukan soal trik, melainkan soal informasi yang lengkap, konsisten, dan dipercaya pelanggan. Mulai dari profil Google hari ini, lalu perkuat dengan website yang siap ditemukan.",
      },
    ],
    cta: {
      label: "Konsultasi SEO Lokal",
      message: "Halo Ayrus, saya ingin usaha saya muncul di Google Maps dan pencarian lokal.",
    },
  },

  {
    slug: "cara-memilih-sistem-pos-untuk-bisnis-laundry",
    category: "Panduan",
    title: "Cara Memilih Sistem POS untuk Bisnis Laundry",
    excerpt:
      "Tujuh hal yang wajib dicek sebelum Anda membeli sistem kasir untuk usaha laundry, dari integrasi printer sampai laporan multi-cabang.",
    date: "28 Agustus 2026",
    dateTime: "2026-08-28",
    read: "6 menit",
    author: { name: "Tim Ayrus", role: "Ayrus Digital Indonesia", initials: "AY" },
    metaTitle: "Cara Memilih Sistem POS untuk Bisnis Laundry",
    metaDescription:
      "Panduan memilih sistem kasir untuk usaha laundry: alur order, tracking cucian, integrasi printer, laporan multi-cabang, dan biaya yang perlu diperhitungkan.",
    keywords: ["sistem kasir laundry", "aplikasi laundry", "POS laundry", "software laundry"],
    relatedService: "sistem-pos",
    body: [
      {
        t: "p",
        text: "Usaha laundry punya satu hal yang membedakannya dari toko ritel biasa: transaksi tidak selesai saat pelanggan membayar. Cucian masih harus dicuci, dikeringkan, disetrika, lalu diambil, kadang beberapa hari kemudian. Sistem kasir yang tidak memahami alur ini akan terasa merepotkan sejak minggu pertama.",
      },
      {
        t: "p",
        text: "Berikut tujuh hal yang sebaiknya Anda cek sebelum memutuskan memakai sistem POS tertentu untuk usaha laundry Anda. Contoh nyatanya bisa Anda lihat di [aplikasi laundry multi cabang](/solusi/aplikasi-laundry) yang kami bangun untuk Laundry Bersih Wangi.",
      },

      { t: "h2", text: "1. Apakah alurnya mengenal status cucian?" },
      {
        t: "p",
        text: "Ini pembeda paling penting. Sistem kasir ritel hanya mengenal satu status: lunas atau belum. Laundry butuh lebih dari itu: diterima, dicuci, dikeringkan, disetrika, siap diambil, sudah diambil.",
      },
      {
        t: "p",
        text: "Tanpa status, staf Anda akan tetap memakai buku catatan terpisah untuk melacak pesanan, dan sistem kasirnya cuma jadi mesin penghitung. Pastikan status bisa diubah cepat, idealnya dengan memindai kode pada nota.",
      },

      { t: "h2", text: "2. Bagaimana cara sistem menghitung harga?" },
      {
        t: "p",
        text: "Laundry biasanya memakai lebih dari satu skema harga sekaligus: per kilogram untuk cuci reguler, per satuan untuk bed cover dan jas, serta tarif ekspres yang berbeda. Sebagian pelanggan langganan juga punya harga khusus.",
      },
      {
        t: "ul",
        items: [
          "Per kilogram dengan pembulatan yang bisa diatur",
          "Per satuan untuk item khusus",
          "Tarif ekspres atau kilat sebagai pengali",
          "Harga khusus untuk pelanggan langganan atau korporat",
        ],
      },
      {
        t: "p",
        text: "Kalau sistem hanya mendukung satu skema, Anda akan sering menghitung manual lalu memasukkan harganya sebagai angka bebas, dan di titik itu laporan margin Anda sudah tidak bisa dipercaya.",
      },

      { t: "h2", text: "3. Apakah bisa mencetak nota dengan printer yang sudah Anda punya?" },
      {
        t: "p",
        text: "Sebagian besar usaha laundry sudah punya printer thermal 58mm. Pastikan sistem yang Anda pilih mendukungnya, karena mengganti printer bisa menambah biaya yang tidak diperhitungkan di awal.",
      },
      {
        t: "callout",
        title: "Periksa sebelum membeli",
        text: "Kirimkan merek dan tipe printer Anda ke calon penyedia sistem dan minta konfirmasi tertulis bahwa perangkat itu didukung. Ini pertanyaan lima menit yang bisa menghemat biaya penggantian perangkat.",
      },

      { t: "h2", text: "4. Bagaimana kalau internet mati?" },
      {
        t: "p",
        text: "Di banyak lokasi, koneksi internet tidak selalu stabil. Sistem berbasis web yang baik tetap bisa mencatat transaksi secara lokal saat koneksi putus, lalu menyinkronkannya otomatis begitu internet kembali.",
      },
      {
        t: "p",
        text: "Tanyakan secara spesifik: apa yang terjadi kalau internet mati di tengah transaksi? Jawaban 'tidak bisa dipakai' adalah risiko operasional nyata, bukan detail teknis kecil.",
      },

      { t: "h2", text: "5. Apakah laporannya menjawab pertanyaan yang benar?" },
      {
        t: "p",
        text: "Banyak sistem menampilkan omzet harian dan berhenti di situ. Untuk laundry, pertanyaan yang lebih berguna biasanya:",
      },
      {
        t: "ul",
        items: [
          "Layanan mana yang paling menguntungkan, bukan yang paling laku",
          "Berapa banyak cucian yang belum diambil lebih dari tujuh hari",
          "Jam berapa outlet paling ramai, untuk mengatur jadwal staf",
          "Cabang mana yang performanya turun bulan ini",
        ],
      },

      { t: "h2", text: "6. Apakah bisa tumbuh bersama usaha Anda?" },
      {
        t: "p",
        text: "Kalau Anda berencana membuka cabang kedua dalam satu-dua tahun, pastikan sistemnya mendukung multi-outlet sejak awal. Memindahkan data dari sistem yang tidak mendukungnya jauh lebih mahal daripada memilih yang tepat sejak awal. Di [Laundry Bersih Wangi](/portofolio/laundry-bersih-wangi), menyatukan tiga cabang dalam satu sistem menurunkan selisih kas hingga 90%.",
      },

      { t: "h2", text: "7. Berapa total biayanya dalam tiga tahun?" },
      {
        t: "p",
        text: "Bandingkan bukan hanya harga awal, tetapi total biaya kepemilikan: langganan bulanan, biaya tambahan per outlet, biaya per pengguna, dan biaya perangkat.",
      },
      {
        t: "p",
        text: "Sistem berlangganan biasanya paling masuk akal untuk memulai karena biaya awalnya kecil. [Sistem kasir custom](/layanan/sistem-pos) mulai menarik ketika kebutuhan Anda tidak lagi standar, atau ketika total langganan tiga tahun sudah melampaui biaya membangun sendiri.",
      },

      { t: "h2", text: "Ringkasnya" },
      {
        t: "p",
        text: "Sistem POS terbaik untuk laundry bukan yang fiturnya paling banyak, melainkan yang paling sedikit memaksa staf Anda mencatat dua kali. Kalau setelah memakai sistem baru staf Anda masih membuka buku catatan, sistem itu belum menyelesaikan masalahnya.",
      },
      {
        t: "quote",
        text: "Uji dengan satu pertanyaan sederhana: setelah sistem ini dipakai, apakah masih ada catatan manual yang tersisa?",
      },
    ],
    cta: {
      label: "Konsultasi Aplikasi Laundry",
      message: "Halo Ayrus, saya punya usaha laundry dan ingin konsultasi aplikasi laundry.",
    },
  },

  {
    slug: "kenapa-umkm-perlu-sistem-kasir-digital",
    category: "Digitalisasi",
    title: "Kenapa UMKM Perlu Sistem Kasir Digital",
    excerpt:
      "Pencatatan manual terlihat hemat di awal, tapi diam-diam menggerus margin. Ini hitungan kasarnya.",
    date: "21 Agustus 2026",
    dateTime: "2026-08-21",
    read: "5 menit",
    author: { name: "Tim Ayrus", role: "Ayrus Digital Indonesia", initials: "AY" },
    metaTitle: "Kenapa UMKM Perlu Sistem Kasir Digital",
    metaDescription:
      "Pencatatan manual terlihat gratis, tapi biaya tersembunyinya nyata: selisih kas, stok hilang, dan keputusan yang terlambat. Ini hitungan kasarnya untuk UMKM.",
    keywords: [
      "sistem kasir digital",
      "aplikasi kasir online",
      "digitalisasi UMKM",
      "software kasir cloud",
    ],
    relatedService: "sistem-pos",
    body: [
      {
        t: "p",
        text: "Buku tulis tidak pernah error, tidak perlu listrik, dan tidak menagih biaya bulanan. Wajar kalau banyak pemilik usaha merasa pencatatan manual adalah pilihan paling hemat. Masalahnya, biaya pencatatan manual memang ada, hanya saja tidak pernah muncul sebagai tagihan.",
      },

      { t: "h2", text: "Biaya pertama: selisih yang tidak pernah ketemu" },
      {
        t: "p",
        text: "Pada usaha dengan omzet Rp 100 juta per bulan, selisih kas 1-2% adalah hal yang umum ketika pencatatan dilakukan manual. Itu setara Rp 1-2 juta setiap bulan yang hilang tanpa jejak. Di salah satu [klien laundry kami](/portofolio/laundry-bersih-wangi), selisih kas turun 90% setelah pencatatan pindah ke sistem kasir digital.",
      },
      {
        t: "p",
        text: "Penyebabnya jarang berupa kecurangan. Biasanya cuma hal kecil: nota lupa dicatat, diskon diberikan tanpa keterangan, atau angka tertukar saat direkap ulang malam hari.",
      },

      { t: "h2", text: "Biaya kedua: waktu pemilik" },
      {
        t: "p",
        text: "Merekap penjualan harian secara manual biasanya memakan 30-60 menit setiap malam. Dalam sebulan itu sekitar 15-30 jam, waktu yang sebenarnya bisa dipakai untuk melayani pelanggan atau mengembangkan usaha.",
      },
      {
        t: "callout",
        title: "Hitung sendiri",
        text: "Kalikan jam rekap bulanan Anda dengan nilai waktu Anda per jam. Angka itu saja biasanya sudah melebihi biaya langganan sistem kasir digital untuk satu outlet.",
      },

      { t: "h2", text: "Biaya ketiga: keputusan yang terlambat" },
      {
        t: "p",
        text: "Ini yang paling mahal dan paling jarang disadari. Kalau laporan baru selesai di akhir bulan, semua keputusan Anda didasarkan pada data yang sudah kedaluwarsa 30 hari.",
      },
      {
        t: "ul",
        items: [
          "Produk yang tidak laku baru ketahuan setelah stoknya menumpuk",
          "Promo yang merugikan baru terlihat setelah periodenya habis",
          "Jam ramai tidak terpetakan, sehingga jadwal staf tidak optimal",
          "Kenaikan harga modal baru disadari setelah margin terlanjur tergerus",
        ],
      },

      { t: "h2", text: "Apa yang berubah setelah digital" },
      {
        t: "p",
        text: "Perubahan terbesar bukan pada kecepatan mencatat, melainkan pada apa yang bisa Anda lihat. Ketika setiap transaksi tercatat otomatis, laporan bukan lagi pekerjaan tambahan. Laporan adalah efek samping dari berjualan.",
      },
      {
        t: "ol",
        items: [
          "Omzet hari ini terlihat kapan saja, tanpa menunggu tutup toko",
          "Stok berkurang otomatis, sehingga selisih stok jauh lebih mudah dilacak",
          "Produk terlaris dan termahal margin-nya terlihat berdampingan",
          "Data historis tersedia saat Anda mengajukan kredit usaha",
        ],
      },

      { t: "h2", text: "Kapan sebaiknya mulai?" },
      {
        t: "p",
        text: "Indikator paling sederhana: begitu Anda tidak lagi bisa mengingat seluruh transaksi hari itu, atau begitu ada orang lain selain Anda yang memegang kasir. Dua kondisi itu adalah titik di mana pencatatan manual mulai lebih mahal daripada sistem digital.",
      },
      {
        t: "p",
        text: "Tidak perlu langsung membangun sistem custom. Mulai dari sistem kasir berlangganan yang bisa dipakai hari itu juga, lalu pertimbangkan sistem khusus setelah kebutuhan Anda benar-benar melampaui yang tersedia di pasaran.",
      },
    ],
    cta: {
      label: "Diskusikan Kebutuhan Kasir Anda",
      message: "Halo Ayrus, saya ingin mulai memakai kasir digital untuk usaha saya.",
    },
  },

  {
    slug: "perbedaan-software-custom-vs-software-siap-pakai",
    category: "Perbandingan",
    title: "Perbedaan Software Custom vs Software Siap Pakai",
    excerpt:
      "Kapan sebaiknya berlangganan aplikasi jadi, dan kapan Anda benar-benar butuh sistem yang dibangun khusus.",
    date: "14 Agustus 2026",
    dateTime: "2026-08-14",
    read: "8 menit",
    author: { name: "Tim Ayrus", role: "Ayrus Digital Indonesia", initials: "AY" },
    metaTitle: "Perbedaan Software Custom vs Software Siap Pakai",
    metaDescription:
      "Perbandingan jujur software custom dan aplikasi siap pakai untuk UMKM: biaya, kecepatan, fleksibilitas, risiko, dan titik impas antara keduanya.",
    keywords: [
      "software custom vs siap pakai",
      "jasa pembuatan aplikasi custom",
      "software house Indonesia",
      "aplikasi bisnis UMKM",
    ],
    relatedService: "custom-software",
    body: [
      {
        t: "p",
        text: "Sebagai software house yang menawarkan [jasa pembuatan aplikasi custom](/layanan/custom-software), kami punya kepentingan jelas untuk menyarankan software custom. Justru karena itu, artikel ini kami tulis sejujur mungkin: untuk sebagian besar UMKM, aplikasi siap pakai adalah pilihan yang lebih tepat, setidaknya di awal.",
      },

      { t: "h2", text: "Software siap pakai: cepat dan murah untuk memulai" },
      {
        t: "p",
        text: "Aplikasi berlangganan bisa dipakai hari ini juga. Biaya awalnya kecil, ada yang mengurus pembaruan dan keamanan, dan kalau tidak cocok Anda bisa berhenti bulan depan.",
      },
      {
        t: "p",
        text: "Kelemahannya muncul belakangan: Anda mengikuti alur kerja yang ditentukan pembuatnya, fitur khusus jarang bisa diminta, dan biaya bulanannya ikut naik seiring bertambahnya outlet dan pengguna.",
      },

      { t: "h2", text: "Software custom: mahal di awal, fleksibel setelahnya" },
      {
        t: "p",
        text: "Software custom dibangun mengikuti proses bisnis Anda. Tidak ada fitur yang tidak terpakai, tidak ada biaya per pengguna, dan Anda memiliki source code-nya.",
      },
      {
        t: "p",
        text: "Kelemahannya juga jelas: biaya awal jauh lebih besar, butuh waktu berminggu-minggu sebelum bisa dipakai, dan Anda perlu memikirkan pemeliharaannya untuk jangka panjang.",
      },

      { t: "h2", text: "Cara membandingkan yang lebih berguna" },
      {
        t: "p",
        text: "Alih-alih membandingkan harga awal, hitung total biaya kepemilikan selama tiga tahun. Untuk aplikasi berlangganan, jumlahkan biaya bulanan dikali 36, ditambah biaya tambahan per outlet dan per pengguna yang Anda rencanakan.",
      },
      {
        t: "p",
        text: "Kalau hasilnya masih di bawah biaya membangun sistem sendiri, aplikasi siap pakai kemungkinan besar pilihan yang benar. Kalau sudah melampaui, custom mulai layak dipertimbangkan, tapi biaya bukan satu-satunya faktor.",
      },

      { t: "h2", text: "Tanda Anda sudah butuh sistem custom" },
      {
        t: "ul",
        items: [
          "Anda rutin melakukan pekerjaan manual untuk menutupi keterbatasan aplikasi",
          "Ada aturan bisnis penting yang tidak bisa diakomodasi sama sekali",
          "Anda memakai tiga aplikasi atau lebih yang datanya tidak saling terhubung",
          "Data Anda tidak boleh berada di server pihak ketiga karena alasan kepatuhan",
          "Kebutuhan Anda sudah stabil dan tidak lagi berubah tiap beberapa bulan",
        ],
      },
      {
        t: "callout",
        title: "Poin terakhir yang sering terlewat",
        text: "Membangun sistem custom saat proses bisnis Anda masih sering berubah adalah cara tercepat membuang anggaran. Pakai aplikasi siap pakai dulu sampai alur kerja Anda mengendap, baru bangun yang khusus.",
      },

      { t: "h2", text: "Jalan tengah yang sering paling masuk akal" },
      {
        t: "p",
        text: "Anda tidak harus memilih salah satu untuk seluruh bisnis. Banyak klien kami memakai aplikasi siap pakai untuk kebutuhan umum seperti kasir, lalu membangun sistem khusus hanya untuk bagian yang benar-benar unik.",
      },
      {
        t: "p",
        text: "Pendekatan ini menekan biaya awal, sekaligus memastikan anggaran pengembangan dipakai untuk bagian yang memang tidak tersedia di pasaran.",
      },

      { t: "h2", text: "Ringkasnya" },
      {
        t: "quote",
        text: "Pilih software siap pakai sampai keterbatasannya benar-benar merugikan Anda. Saat itu terjadi, Anda sudah tahu persis fitur apa yang perlu dibangun, dan itu justru membuat proyek custom Anda jauh lebih murah.",
      },
    ],
    cta: {
      label: "Tanya Mana yang Cocok",
      message:
        "Halo Ayrus, saya ingin tahu mana yang cocok untuk usaha saya: aplikasi siap pakai atau custom.",
    },
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
