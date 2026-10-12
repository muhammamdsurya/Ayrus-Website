import type { Metadata } from "next";
import { A, H2, LegalHeader, P, Toc, UL } from "@/components/legal";
import { gmailLink, shareImage, site } from "@/lib/site";

const title = "Kebijakan Privasi";
const description =
  "Kebijakan privasi Ayrus Digital Indonesia: data apa yang kami kumpulkan, cara kami memakai YouTube API Services dan TikTok API, serta cara menghapus data dan mencabut akses.";
const updated = "12 Oktober 2026";
const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region}, Indonesia`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kebijakan-privasi" },
  openGraph: { type: "website", url: `${site.url}/kebijakan-privasi`, title, description, images: [shareImage] },
};

const toc = [
  ["ringkasan", "Ringkasan"],
  ["data-dikumpulkan", "Data yang kami kumpulkan"],
  ["youtube", "Penggunaan YouTube API Services"],
  ["tiktok", "Penggunaan TikTok API"],
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
      <LegalHeader
        title={title}
        updated={updated}
        lead={
          <>
            Halaman ini menjelaskan bagaimana {site.name} mengumpulkan, menggunakan, menyimpan, dan menghapus data,
            termasuk data yang kami akses melalui YouTube API Services dan TikTok API.
          </>
        }
      />

      <div className="container-page pb-[var(--spacing-section)]">
        <article className="mx-auto max-w-3xl">
          <Toc items={toc} />

          <H2 id="ringkasan">1. Ringkasan</H2>
          <P>
            {site.name} (&quot;Ayrus&quot;, &quot;kami&quot;) adalah software house yang beralamat di {fullAddress}.
            Kebijakan ini berlaku untuk website {site.url.replace("https://", "")} dan untuk alat internal kami yang
            memublikasikan video ke channel YouTube dan akun TikTok milik kami sendiri menggunakan YouTube API Services dan
            TikTok API.
          </P>
          <P>
            Dengan menggunakan website atau layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini
            serta <A href="/syarat-ketentuan">Syarat dan Ketentuan</A> kami.
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
              <>
                <strong className="text-ink">Data akun TikTok milik Ayrus sendiri</strong>: token akses, open ID, nama
                tampilan, foto profil, serta status publikasi video yang kami unggah. Lihat bagian 4.
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

          <H2 id="tiktok">4. Penggunaan TikTok API</H2>
          <P>
            Kami menggunakan <strong className="text-ink">TikTok for Developers</strong> (Login Kit dan Content
            Posting API) untuk memublikasikan video buatan kami sendiri ke akun TikTok resmi kami,{" "}
            <A href={site.social.tiktok}>@ayrusdigital</A>. Penggunaan TikTok tunduk pada{" "}
            <A href="https://www.tiktok.com/legal/page/row/terms-of-service/id">Ketentuan Layanan TikTok</A> dan{" "}
            <A href="https://www.tiktok.com/legal/page/row/privacy-policy/id">Kebijakan Privasi TikTok</A>.
          </P>
          <UL
            items={[
              <>
                Alat ini bersifat internal: hanya dipakai oleh tim Ayrus dan hanya terhubung ke satu akun TikTok milik
                kami. Tidak ada pengguna luar yang login atau menghubungkan akun TikTok mereka.
              </>,
              <>
                Data yang diakses dari TikTok hanya data akun kami sendiri: open ID, nama tampilan, dan foto profil
                (untuk memastikan akun yang benar), opsi privasi postingan, serta status publikasi video yang kami
                unggah.
              </>,
              <>
                Kami <strong className="text-ink">tidak</strong> mengakses, mengumpulkan, atau menyimpan data pengguna
                TikTok lain, termasuk komentar, pengikut, pesan, atau data penonton.
              </>,
              <>
                Kami tidak mengunduh atau mendistribusikan ulang konten TikTok, dan tidak menjual atau membagikan data
                TikTok kepada pihak ketiga.
              </>,
              <>
                Setiap video baru dipublikasikan setelah disetujui oleh pemilik bisnis.
              </>,
            ]}
          />

          <H2 id="penggunaan">5. Cara kami menggunakan data</H2>
          <UL
            items={[
              "Menjawab pertanyaan dan menyiapkan penawaran yang Anda minta.",
              "Mengunggah dan mengelola video di channel YouTube dan akun TikTok milik Ayrus.",
              "Memahami performa website secara agregat supaya kontennya bisa kami perbaiki.",
              "Memenuhi kewajiban hukum yang berlaku di Indonesia.",
            ]}
          />
          <P>Kami tidak menjual data pribadi dan tidak memakainya untuk iklan yang dipersonalisasi.</P>

          <H2 id="berbagi">6. Berbagi data dengan pihak lain</H2>
          <P>Data hanya dibagikan sejauh diperlukan untuk menjalankan layanan:</P>
          <UL
            items={[
              <>
                <strong className="text-ink">Google LLC</strong> (YouTube, Google Analytics, Google Tag Manager)
                sebagai penyedia layanan, sesuai <A href="https://policies.google.com/privacy">Kebijakan Privasi
                Google</A>.
              </>,
              <>
                <strong className="text-ink">TikTok</strong> sebagai penyedia platform, sesuai{" "}
                <A href="https://www.tiktok.com/legal/page/row/privacy-policy/id">Kebijakan Privasi TikTok</A>.
              </>,
              <>
                <strong className="text-ink">Vercel</strong> sebagai penyedia hosting website.
              </>,
              "Otoritas yang berwenang, apabila diwajibkan oleh hukum.",
            ]}
          />

          <H2 id="penyimpanan">7. Penyimpanan dan keamanan</H2>
          <UL
            items={[
              "Token akses YouTube dan TikTok disimpan di server kami dengan akses terbatas hanya untuk tim Ayrus, dan diperbarui otomatis sesuai masa berlakunya.",
              "Metadata video kami simpan selama video tersebut masih ada di channel atau akun kami. File video lokal dihapus dari server setelah unggahan berhasil.",
              "Data kontak dari konsultasi disimpan selama masih diperlukan untuk komunikasi dan proyek, lalu dihapus bila tidak lagi dibutuhkan.",
              "Kami menerapkan langkah keamanan yang wajar, termasuk koneksi terenkripsi (HTTPS) dan pembatasan akses server.",
            ]}
          />

          <H2 id="penghapusan">8. Penghapusan data dan pencabutan akses</H2>
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
                Akses aplikasi ke akun TikTok dapat dicabut di aplikasi TikTok melalui Profil → Menu → Pengaturan dan
                privasi → Keamanan dan izin → Izin aplikasi dan layanan → pilih aplikasi → Hapus akses (panduan:{" "}
                <A href="https://support.tiktok.com/id/account-and-privacy/account-privacy-settings/third-party-apps">
                  Pusat Bantuan TikTok
                </A>
                ).
              </>,
              <>
                Bila akses dicabut, token dan data yang kami peroleh melalui YouTube API Services atau TikTok API kami hapus paling
                lambat 7 hari setelahnya.
              </>,
            ]}
          />

          <H2 id="cookie">9. Cookie dan analitik website</H2>
          <P>
            Website ini memakai cookie dari Google Analytics dan Google Tag Manager untuk mengukur kunjungan secara
            agregat. Anda dapat menolak atau menghapus cookie melalui pengaturan browser, atau memasang{" "}
            <A href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Add-on</A>.
          </P>

          <H2 id="hak">10. Hak Anda</H2>
          <P>
            Sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak meminta akses,
            koreksi, dan penghapusan data pribadi Anda, serta menarik persetujuan pemrosesan data. Hubungi kami
            melalui kontak di bawah untuk menggunakan hak tersebut.
          </P>

          <H2 id="perubahan">11. Perubahan kebijakan</H2>
          <P>
            Kebijakan ini dapat kami perbarui sewaktu-waktu. Tanggal &quot;Terakhir diperbarui&quot; di bagian atas
            halaman akan selalu menunjukkan versi terbaru.
          </P>

          <H2 id="kontak">12. Kontak</H2>
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
