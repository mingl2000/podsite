/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure static export
  output: 'export',
  distDir: 'dist',
  // Ensure images can be optimized during build
  images: {
    unoptimized: true,
  },
  // Set base path if needed (e.g., for GitHub Pages)
  // basePath: '',
  // Generate trailing slashes for better static export
  trailingSlash: false,
};

module.exports = nextConfig;
