import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Halaman tidak ditemukan</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        Alamat yang Anda tuju mungkin sudah dipindahkan atau tidak pernah ada.
      </p>
      <ButtonLink href="/" className="mt-8">
        Kembali ke Beranda
      </ButtonLink>
    </section>
  );
}
