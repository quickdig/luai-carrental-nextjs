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
          source: "/:locale((?!en$|ar$|ch$|ru$)[\\w-]+)",
          destination: "/en/:locale*",
        },
        {
          source: "/test/:path*",
          destination: "/en/test/:path*",
        },
      ];
    },
  };
  
  export default nextConfig;
  