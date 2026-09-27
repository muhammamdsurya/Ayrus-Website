import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Old slug from before the product was renamed to KaselaPOS.
      { source: "/produk/nectarpos", destination: "/produk/kaselapos", permanent: true },
    ];
  },
};

export default nextConfig;
