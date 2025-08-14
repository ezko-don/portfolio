/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: false, // Enable optimization for Vercel
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ensure proper routing in production
  trailingSlash: true,
  // Webpack configuration to handle module resolution
  webpack: (config, { isServer }) => {
    // Add any necessary webpack configurations
    return config;
  },
  // Optimize for mobile performance
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;