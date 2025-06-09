/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: true,
  },
  // Ensure proper routing in production
  trailingSlash: true,
  // Disable static exports
  // output: 'export',
};

module.exports = nextConfig; 