/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
      unoptimized: true,
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
          source: "/brand",
          destination: "/en/brand",
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
  