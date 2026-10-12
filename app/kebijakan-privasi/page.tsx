import type { Metadata } from "next";
import Link from "next/link";
import { gmailLink, shareImage, site } from "@/lib/site";

const title = "Kebijakan Privasi";
const description =
  "Kebijakan privasi Ayrus Digital Indonesia: data apa yang kami kumpulkan, cara kami memakai YouTube API Services, serta cara menghapus data dan mencabut akses.";
const updated = "12 Oktober 2026";
const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region}, Indonesia`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kebijakan-privasi" },
  openGraph: { type: "website", url: `${site.url}/kebijakan-privasi`, title, description, images: [shareImage] },
};

const ext = "font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-soft";

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={ext}>
      {children}
    </a>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-12 scroll-mt-28 text-2xl font-extrabold sm:text-[1.75rem]">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[17px] leading-[1.75] text-ink-muted">{children}</p>;
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[17px] leading-[1.7] text-ink-muted">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const toc = [
  ["ringkasan", "Ringkasan"],
  ["data-dikumpulkan", "Data yang kami kumpulkan"],
  ["youtube", "Penggunaan YouTube API Services"],
  ["penggunaan", "Cara kami menggunakan data"],
  ["berbagi", "Berbagi data dengan pihak lain"],
  ["penyimpanan", "Penyimpanan dan keamanan"],
  ["penghapusan", "Penghapusan data dan pencabutan akses"],
  ["cookie", "Cookie dan analitik website"],
  ["hak", "Hak Anda"],
  ["perubahan", "Perubahan kebijakan"],
  ["kontak", "Kontak"],
] as const;

export default function PrivacyPolicy() {
  return (
    <>
      <header className="relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-texture absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(203,108,230,0.26),transparent_65%)] blur-3xl" />
        </div>
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" className="text-ink">
                  Kebijakan Privasi
                </span>
              </li>
            </ol>
          </nav>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[2.1rem] leading-[1.14] font-extrabold sm:text-[2.75rem]">Kebijakan Privasi</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Halaman ini menjelaskan bagaimana {site.name} mengumpulkan, menggunakan, menyimpan, dan menghapus
              data, termasuk data yang kami akses melalui YouTube API Services.
            </p>
            <p className="mt-4 text-sm text-ink-muted">Terakhir diperbarui: {updated}</p>
          </div>
        </div>
      </header>

      <div className="container-page pb-[var(--spacing-section)]">
        <article className="mx-auto max-w-3xl">
          <nav aria-label="Daftar isi" className="glass rounded-[var(--radius-card)] p-6">
            <p className="font-display text-sm font-semibold tracking-wide uppercase">Daftar isi</p>
            <ol className="mt-4 grid gap-1.5 text-[15px] text-ink-muted sm:grid-cols-2">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="transition-colors hover:text-brand">
                    {i + 1}. {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <H2 id="ringkasan">1. Ringkasan</H2>
          <P>
            {site.name} (&quot;Ayrus&quot;, &quot;kami&quot;) adalah software house yang beralamat di {fullAddress}.
            Kebijakan ini berlaku untuk website {site.url.replace("https://", "")} dan untuk alat internal kami yang
            mengunggah video ke channel YouTube milik kami sendiri menggunakan YouTube API Services.
          </P>
          <P>
            Dengan menggunakan website atau layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
          </P>

          <H2 id="data-dikumpulkan">2. Data yang kami kumpulkan</H2>
          <UL
            items={[
              <>
                <strong className="text-ink">Data yang Anda kirim sendiri</strong>, misalnya nama, nomor WhatsApp,
                atau email saat Anda menghubungi kami untuk konsultasi.
              </>,
              <>
                <strong className="text-ink">Data penggunaan website</strong> yang bersifat agregat (halaman yang
                dikunjungi, jenis perangkat, perkiraan lokasi tingkat kota) melalui Google Analytics dan Google Tag
                Manager.
              </>,
              <>
                <strong className="text-ink">Data akun YouTube milik Ayrus sendiri</strong>: token otorisasi OAuth,
                ID channel, serta metadata video yang kami unggah (judul, deskripsi, tag, status privasi, dan status
                pemrosesan). Lihat bagian 3.
              </>,
            ]}
          />

          <H2 id="youtube">3. Penggunaan YouTube API Services</H2>
          <P>
            Kami menggunakan <strong className="text-ink">YouTube API Services</strong> untuk mengunggah video
            promosi dan edukasi buatan kami sendiri ke channel YouTube resmi kami,{" "}
            <A href="https://www.youtube.com/@AyrusDigitalIndonesia">Ayrus Digital Indonesia</A>. Dengan menggunakan
            fitur yang terhubung ke YouTube, Anda juga terikat pada{" "}
            <A href="https://www.youtube.com/t/terms">Persyaratan Layanan YouTube</A>, dan data yang diproses oleh
            Google tunduk pada <A href="https://policies.google.com/privacy">Kebijakan Privasi Google</A>.
          </P>
          <UL
            items={[
              <>
                Alat ini bersifat internal: hanya dipakai oleh tim Ayrus dan hanya terhubung ke satu channel milik
                kami. Tidak ada pengguna luar yang login atau menghubungkan akun YouTube mereka.
              </>,
              <>
                Data yang diakses dari YouTube hanya data channel kami sendiri: ID channel serta status dan metadata
                video yang kami unggah, untuk memastikan unggahan berhasil diproses.
              </>,
              <>
                Kami <strong className="text-ink">tidak</strong> mengakses, mengumpulkan, atau menyimpan data pengguna
                YouTube lain, termasuk komentar, subscriber, atau data penonton.
              </>,
              <>
                Kami tidak mengunduh, menyalin, atau mendistribusikan ulang konten YouTube, dan tidak menjual atau
                membagikan data API kepada pihak ketiga.
              </>,
              <>
                Setiap video baru diunggah setelah disetujui oleh pemilik bisnis.
              </>,
            ]}
          />

          <H2 id="penggunaan">4. Cara kami menggunakan data</H2>
          <UL
            items={[
              "Menjawab pertanyaan dan menyiapkan penawaran yang Anda minta.",
              "Mengunggah dan mengelola video di channel YouTube milik Ayrus.",
              "Memahami performa website secara agregat supaya kontennya bisa kami perbaiki.",
              "Memenuhi kewajiban hukum yang berlaku di Indonesia.",
            ]}
          />
          <P>Kami tidak menjual data pribadi dan tidak memakainya untuk iklan yang dipersonalisasi.</P>

          <H2 id="berbagi">5. Berbagi data dengan pihak lain</H2>
          <P>Data hanya dibagikan sejauh diperlukan untuk menjalankan layanan:</P>
          <UL
            items={[
              <>
                <strong className="text-ink">Google LLC</strong> (YouTube, Google Analytics, Google Tag Manager)
                sebagai penyedia layanan, sesuai <A href="https://policies.google.com/privacy">Kebijakan Privasi
                Google</A>.
              </>,
              <>
                <strong className="text-ink">Vercel</strong> sebagai penyedia hosting website.
              </>,
              "Otoritas yang berwenang, apabila diwajibkan oleh hukum.",
            ]}
          />

          <H2 id="penyimpanan">6. Penyimpanan dan keamanan</H2>
          <UL
            items={[
              "Token OAuth YouTube disimpan di server kami dengan akses terbatas hanya untuk tim Ayrus, dan diperbarui otomatis oleh sistem Google.",
              "Metadata video kami simpan selama video tersebut masih ada di channel kami. File video lokal dihapus dari server setelah unggahan berhasil.",
              "Data kontak dari konsultasi disimpan selama masih diperlukan untuk komunikasi dan proyek, lalu dihapus bila tidak lagi dibutuhkan.",
              "Kami menerapkan langkah keamanan yang wajar, termasuk koneksi terenkripsi (HTTPS) dan pembatasan akses server.",
            ]}
          />

          <H2 id="penghapusan">7. Penghapusan data dan pencabutan akses</H2>
          <P>Anda dapat meminta penghapusan data kapan saja:</P>
          <UL
            items={[
              <>
                Kirim permintaan ke <A href={gmailLink("Permintaan Penghapusan Data")}>{site.email}</A> dengan judul
                &quot;Permintaan Penghapusan Data&quot;. Kami akan memproses dan menghapus data terkait paling lambat{" "}
                <strong className="text-ink">30 hari</strong> setelah permintaan diterima, kecuali ada kewajiban
                hukum untuk menyimpannya.
              </>,
              <>
                Akses aplikasi pihak ketiga ke akun Google dapat dicabut kapan saja melalui halaman{" "}
                <A href="https://security.google.com/settings/security/permissions">
                  Izin Keamanan Akun Google
                </A>
                . Setelah akses dicabut, alat kami tidak lagi dapat menggunakan YouTube API atas nama akun tersebut.
              </>,
              <>
                Bila akses dicabut, token dan data yang kami peroleh melalui YouTube API Services kami hapus paling
                lambat 7 hari setelahnya.
              </>,
            ]}
          />

          <H2 id="cookie">8. Cookie dan analitik website</H2>
          <P>
            Website ini memakai cookie dari Google Analytics dan Google Tag Manager untuk mengukur kunjungan secara
            agregat. Anda dapat menolak atau menghapus cookie melalui pengaturan browser, atau memasang{" "}
            <A href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Add-on</A>.
          </P>

          <H2 id="hak">9. Hak Anda</H2>
          <P>
            Sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak meminta akses,
            koreksi, dan penghapusan data pribadi Anda, serta menarik persetujuan pemrosesan data. Hubungi kami
            melalui kontak di bawah untuk menggunakan hak tersebut.
          </P>

          <H2 id="perubahan">10. Perubahan kebijakan</H2>
          <P>
            Kebijakan ini dapat kami perbarui sewaktu-waktu. Tanggal &quot;Terakhir diperbarui&quot; di bagian atas
            halaman akan selalu menunjukkan versi terbaru.
          </P>

          <H2 id="kontak">11. Kontak</H2>
          <P>Pertanyaan atau permintaan terkait privasi dapat dikirim ke:</P>
          <UL
            items={[
              <>
                <strong className="text-ink">{site.name}</strong>
              </>,
              <>
                Email: <A href={gmailLink("Pertanyaan Privasi")}>{site.email}</A>
              </>,
              <>Alamat: {fullAddress}</>,
            ]}
          />
        </article>
      </div>
    </>
  );
}
