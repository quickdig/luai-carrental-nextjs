/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/frontend',  // Serve static files from this path
  images: {
    unoptimized: true,
    domains: ['https://api.luaicarrentals.com'],  // External image domains
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/en",
      },
      {
        source: "/about",
        destination: "/en/about",
      },
      {
        source: "/faq",
        destination: "/en/faq",
      },
      {
        source: "/blog",
        destination: "/en/blog",
      },
      {
        source: "/brand/:path*",
        destination: "/en/brand/:path*",
      },
      {
        source: "/cars/:path*",
        destination: "/en/cars/:path*",
      },
      {
        source: "/contact-us",
        destination: "/en/contact-us",
      },
      {
        source: "/:locale((?!en$|ar$|ch$|ru$)[\\w-]+)",
        destination: "/en/:locale*",
      },
      {
        source: "/blog/:path*",
        destination: "/en/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
