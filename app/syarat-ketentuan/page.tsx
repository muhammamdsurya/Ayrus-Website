import type { Metadata } from "next";
import { A, H2, LegalHeader, P, Toc, UL } from "@/components/legal";
import { gmailLink, shareImage, site, waLink, waMessages } from "@/lib/site";

const title = "Syarat dan Ketentuan";
const description =
  "Syarat dan ketentuan penggunaan website dan layanan Ayrus Digital Indonesia, termasuk konten yang kami publikasikan di YouTube dan TikTok.";
const updated = "12 Oktober 2026";
const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region}, Indonesia`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/syarat-ketentuan" },
  openGraph: { type: "website", url: `${site.url}/syarat-ketentuan`, title, description, images: [shareImage] },
};

const toc = [
  ["penerimaan", "Penerimaan syarat"],
  ["penyelenggara", "Penyelenggara"],
  ["layanan", "Layanan kami"],
  ["website", "Penggunaan website"],
  ["platform", "Konten di YouTube dan TikTok"],
  ["hki", "Hak kekayaan intelektual"],
  ["proyek", "Proyek dan layanan berbayar"],
  ["batasan", "Batasan tanggung jawab"],
  ["privasi", "Privasi"],
  ["hukum", "Hukum yang berlaku"],
  ["perubahan", "Perubahan syarat"],
  ["kontak", "Kontak"],
] as const;

export default function Terms() {
  return (
    <>
      <LegalHeader
        title={title}
        updated={updated}
        lead={
          <>
            Syarat ini mengatur penggunaan website {site.url.replace("https://", "")} dan layanan {site.name},
            termasuk konten yang kami publikasikan di channel YouTube dan akun TikTok milik kami.
          </>
        }
      />

      <div className="container-page pb-[var(--spacing-section)]">
        <article className="mx-auto max-w-3xl">
          <Toc items={toc} />

          <H2 id="penerimaan">1. Penerimaan syarat</H2>
          <P>
            Dengan mengakses website atau menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini serta{" "}
            <A href="/kebijakan-privasi">Kebijakan Privasi</A> kami. Jika Anda tidak setuju, mohon tidak menggunakan
            website atau layanan kami.
          </P>

          <H2 id="penyelenggara">2. Penyelenggara</H2>
          <P>
            Website dan layanan ini diselenggarakan oleh {site.name} (nama usaha Ayrus Digital Teknologi), usaha
            perorangan milik Muhammad Surya Rusfauzi, beralamat di {fullAddress}. Dalam dokumen ini disebut
            &quot;kami&quot;. Pengunjung dan pengguna layanan disebut &quot;Anda&quot;.
          </P>

          <H2 id="layanan">3. Layanan kami</H2>
          <P>
            Kami adalah software house yang membangun custom software sesuai alur bisnis: aplikasi web, Android dan
            iOS, ERP, AI automation, dan website company profile. Kami juga mengelola produk SaaS sendiri seperti
            KaselaPOS dan AutoJobs, yang masing-masing memiliki syarat dan ketentuan sendiri di websitenya.
          </P>

          <H2 id="website">4. Penggunaan website</H2>
          <P>Saat menggunakan website ini, Anda setuju untuk tidak:</P>
          <UL
            items={[
              "Menggunakan website untuk tujuan yang melanggar hukum yang berlaku di Indonesia.",
              "Mencoba mengakses sistem, server, atau data kami tanpa izin, atau mengganggu kinerja website.",
              "Menyalin, mengambil data secara otomatis (scraping), atau memperbanyak konten website untuk kepentingan komersial tanpa izin tertulis dari kami.",
              "Memberikan informasi palsu saat menghubungi kami.",
            ]}
          />

          <H2 id="platform">5. Konten di YouTube dan TikTok</H2>
          <P>
            Kami memublikasikan video promosi dan edukasi buatan kami sendiri di channel YouTube{" "}
            <A href="https://www.youtube.com/@AyrusDigitalIndonesia">Ayrus Digital Indonesia</A> dan akun TikTok{" "}
            <A href={site.social.tiktok}>@ayrusdigital</A>. Untuk itu kami memakai alat internal yang terhubung ke
            YouTube API Services dan TikTok API, hanya untuk akun milik kami sendiri.
          </P>
          <UL
            items={[
              <>
                Penggunaan YouTube tunduk pada{" "}
                <A href="https://www.youtube.com/t/terms">Persyaratan Layanan YouTube</A> dan{" "}
                <A href="https://policies.google.com/privacy">Kebijakan Privasi Google</A>.
              </>,
              <>
                Penggunaan TikTok tunduk pada{" "}
                <A href="https://www.tiktok.com/legal/page/row/terms-of-service/id">Ketentuan Layanan TikTok</A> dan{" "}
                <A href="https://www.tiktok.com/legal/page/row/privacy-policy/id">Kebijakan Privasi TikTok</A>.
              </>,
              "Alat internal tersebut tidak tersedia untuk publik, dan kami tidak menghubungkan atau memublikasikan konten ke akun YouTube atau TikTok milik pihak lain.",
              "Konten yang kami unggah adalah karya kami sendiri atau materi yang kami miliki izin penggunaannya, dan dipublikasikan setelah disetujui oleh pemilik bisnis.",
              "Data contoh yang tampil di video (nama usaha, angka transaksi) bersifat ilustrasi kecuali disebutkan lain.",
            ]}
          />

          <H2 id="hki">6. Hak kekayaan intelektual</H2>
          <P>
            Seluruh konten di website ini dan di akun media sosial kami, termasuk teks, desain, logo, gambar, dan
            video, adalah milik {site.name} atau digunakan dengan izin. Anda boleh membagikan tautan ke konten kami,
            tetapi tidak boleh mengubah, menjual, atau memakainya sebagai milik sendiri tanpa izin tertulis.
          </P>

          <H2 id="proyek">7. Proyek dan layanan berbayar</H2>
          <P>
            Informasi di website ini bersifat umum dan bukan penawaran yang mengikat. Ruang lingkup pekerjaan, biaya,
            jadwal, pembayaran, dan kepemilikan hasil pekerjaan untuk setiap proyek diatur dalam penawaran atau
            perjanjian tertulis yang disepakati bersama sebelum pekerjaan dimulai.
          </P>

          <H2 id="batasan">8. Batasan tanggung jawab</H2>
          <UL
            items={[
              "Kami berusaha menjaga informasi di website tetap akurat dan terbaru, tetapi tidak menjamin bebas dari kesalahan atau selalu tersedia tanpa gangguan.",
              "Kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan informasi di website ini.",
              "Website ini dapat memuat tautan ke situs pihak ketiga (misalnya YouTube, TikTok, Google). Kami tidak bertanggung jawab atas isi maupun kebijakan situs tersebut.",
            ]}
          />

          <H2 id="privasi">9. Privasi</H2>
          <P>
            Cara kami mengumpulkan, menggunakan, dan menghapus data, termasuk data dari YouTube API Services dan
            TikTok API, dijelaskan di <A href="/kebijakan-privasi">Kebijakan Privasi</A>, yang merupakan bagian tidak
            terpisahkan dari syarat dan ketentuan ini.
          </P>

          <H2 id="hukum">10. Hukum yang berlaku</H2>
          <P>
            Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia. Setiap perselisihan akan diselesaikan
            lebih dulu secara musyawarah. Jika tidak tercapai kesepakatan, perselisihan diselesaikan melalui
            pengadilan negeri yang berwenang di Jakarta.
          </P>

          <H2 id="perubahan">11. Perubahan syarat</H2>
          <P>
            Kami dapat memperbarui syarat dan ketentuan ini sewaktu-waktu. Tanggal &quot;Terakhir diperbarui&quot; di
            bagian atas halaman menunjukkan versi terbaru. Dengan tetap menggunakan website atau layanan kami setelah
            perubahan, Anda dianggap menyetujui versi terbaru.
          </P>

          <H2 id="kontak">12. Kontak</H2>
          <P>Pertanyaan tentang syarat dan ketentuan ini dapat dikirim ke:</P>
          <UL
            items={[
              <>
                <strong className="text-ink">{site.name}</strong>
              </>,
              <>
                Email: <A href={gmailLink("Pertanyaan Syarat dan Ketentuan")}>{site.email}</A>
              </>,
              <>
                WhatsApp: <A href={waLink(waMessages.general)}>{site.phoneDisplay}</A>
              </>,
              <>Alamat: {fullAddress}</>,
            ]}
          />
        </article>
      </div>
    </>
  );
}
