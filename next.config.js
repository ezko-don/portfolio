/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export as it's causing routing issues
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