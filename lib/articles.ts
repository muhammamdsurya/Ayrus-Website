/**
 * Blog articles — content is hardcoded here on purpose (no CMS yet, PRD §4.2
 * lists the CMS as a later workstream). Body is a small block union rather than
 * an HTML string so the renderer keeps full control of typography and never has
 * to use dangerouslySetInnerHTML.
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
};

export const articles: Article[] = [
  {
    slug: "cara-memilih-sistem-pos-untuk-bisnis-laundry",
    category: "Panduan",
    title: "Cara Memilih Sistem POS untuk Bisnis Laundry",
    excerpt:
      "Tujuh hal yang wajib dicek sebelum Anda membeli sistem kasir untuk usaha laundry, dari integrasi printer sampai laporan multi-cabang.",
    date: "28 Agustus 2026",
    dateTime: "2026-08-28",
    read: "6 menit",
    author: { name: "Tim Ayrus", role: "Ayrus Digital Teknologi", initials: "AY" },
    metaTitle: "Cara Memilih Sistem POS untuk Bisnis Laundry",
    metaDescription:
      "Panduan memilih sistem kasir untuk usaha laundry: alur order, tracking cucian, integrasi printer, laporan multi-cabang, dan biaya yang perlu diperhitungkan.",
    keywords: ["sistem kasir laundry", "aplikasi laundry", "POS laundry", "software laundry"],
    relatedService: "sistem-pos",
    body: [
      {
        t: "p",
        text: "Usaha laundry punya satu hal yang membedakannya dari toko ritel biasa: transaksi tidak selesai saat pelanggan membayar. Cucian masih harus dicuci, dikeringkan, disetrika, lalu diambil — kadang beberapa hari kemudian. Sistem kasir yang tidak memahami alur ini akan terasa merepotkan sejak minggu pertama.",
      },
      {
        t: "p",
        text: "Berikut tujuh hal yang sebaiknya Anda cek sebelum memutuskan memakai sistem POS tertentu untuk usaha laundry Anda.",
      },

      { t: "h2", text: "1. Apakah alurnya mengenal status cucian?" },
      {
        t: "p",
        text: "Ini pembeda paling penting. Sistem kasir ritel hanya mengenal satu status: lunas atau belum. Laundry butuh lebih dari itu — diterima, dicuci, dikeringkan, disetrika, siap diambil, sudah diambil.",
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
        text: "Kalau sistem hanya mendukung satu skema, Anda akan sering menghitung manual lalu memasukkan harganya sebagai angka bebas — dan di titik itu laporan margin Anda sudah tidak bisa dipercaya.",
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
        text: "Kalau Anda berencana membuka cabang kedua dalam satu-dua tahun, pastikan sistemnya mendukung multi-outlet sejak awal. Memindahkan data dari sistem yang tidak mendukungnya jauh lebih mahal daripada memilih yang tepat sejak awal.",
      },

      { t: "h2", text: "7. Berapa total biayanya dalam tiga tahun?" },
      {
        t: "p",
        text: "Bandingkan bukan hanya harga awal, tetapi total biaya kepemilikan: langganan bulanan, biaya tambahan per outlet, biaya per pengguna, dan biaya perangkat.",
      },
      {
        t: "p",
        text: "Sistem berlangganan biasanya paling masuk akal untuk memulai karena biaya awalnya kecil. Sistem custom mulai menarik ketika kebutuhan Anda tidak lagi standar, atau ketika total langganan tiga tahun sudah melampaui biaya membangun sendiri.",
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
    author: { name: "Tim Ayrus", role: "Ayrus Digital Teknologi", initials: "AY" },
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
        text: "Buku tulis tidak pernah error, tidak perlu listrik, dan tidak menagih biaya bulanan. Wajar kalau banyak pemilik usaha merasa pencatatan manual adalah pilihan paling hemat. Masalahnya, biaya pencatatan manual memang ada — hanya saja tidak pernah muncul sebagai tagihan.",
      },

      { t: "h2", text: "Biaya pertama: selisih yang tidak pernah ketemu" },
      {
        t: "p",
        text: "Pada usaha dengan omzet Rp 100 juta per bulan, selisih kas 1–2% adalah hal yang umum ketika pencatatan dilakukan manual. Itu setara Rp 1–2 juta setiap bulan yang hilang tanpa jejak.",
      },
      {
        t: "p",
        text: "Penyebabnya jarang berupa kecurangan. Biasanya cuma hal kecil: nota lupa dicatat, diskon diberikan tanpa keterangan, atau angka tertukar saat direkap ulang malam hari.",
      },

      { t: "h2", text: "Biaya kedua: waktu pemilik" },
      {
        t: "p",
        text: "Merekap penjualan harian secara manual biasanya memakan 30–60 menit setiap malam. Dalam sebulan itu sekitar 15–30 jam — waktu yang sebenarnya bisa dipakai untuk melayani pelanggan atau mengembangkan usaha.",
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
        text: "Perubahan terbesar bukan pada kecepatan mencatat, melainkan pada apa yang bisa Anda lihat. Ketika setiap transaksi tercatat otomatis, laporan bukan lagi pekerjaan tambahan — laporan adalah efek samping dari berjualan.",
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
        text: "Tidak perlu langsung membangun sistem custom. Mulai dari sistem berlangganan yang bisa dipakai hari itu juga, lalu pertimbangkan sistem khusus setelah kebutuhan Anda benar-benar melampaui yang tersedia di pasaran.",
      },
    ],
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
    author: { name: "Tim Ayrus", role: "Ayrus Digital Teknologi", initials: "AY" },
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
        text: "Sebagai software house, kami punya kepentingan jelas untuk menyarankan software custom. Justru karena itu, artikel ini kami tulis sejujur mungkin: untuk sebagian besar UMKM, aplikasi siap pakai adalah pilihan yang lebih tepat — setidaknya di awal.",
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
        text: "Kalau hasilnya masih di bawah biaya membangun sistem sendiri, aplikasi siap pakai kemungkinan besar pilihan yang benar. Kalau sudah melampaui, custom mulai layak dipertimbangkan — tapi biaya bukan satu-satunya faktor.",
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
        text: "Pilih software siap pakai sampai keterbatasannya benar-benar merugikan Anda. Saat itu terjadi, Anda sudah tahu persis fitur apa yang perlu dibangun — dan itu justru membuat proyek custom Anda jauh lebih murah.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
