import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Price list and the on-site KaselaPOS page were removed when the site
      // became a company profile; keep old search/bookmark links working.
      { source: "/harga", destination: "/#layanan", permanent: true },
      // Local page dropped "Timur" from its name and URL.
      {
        source: "/jasa-pembuatan-aplikasi-jakarta-timur",
        destination: "/jasa-pembuatan-aplikasi-jakarta",
        permanent: true,
      },
      {
        source: "/produk/:slug(kaselapos|nectarpos)",
        destination: "https://kaselapos.ayrusdigital.my.id/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
