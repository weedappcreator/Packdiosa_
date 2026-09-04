/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    appDir: true,
    turboBuild: false,
    optimizePackageOnBuild: false,
    forceSwc: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Use legacy CSS handling
  generateStaticParams: async (params) => {
    return [];
  },
  // Compress output but don't use SWC for minification
  compress: true,
  // Disable font optimization that might cause issues
  images: {
    deviceSizes: [640, 750, 828, 1024, 1280, 1536, 1680, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental legacy routes
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

module.exports = nextConfig;