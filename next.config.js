/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Swap in real domain once purchased — used for canonical URLs & sitemap.
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.claritycleaningco.com',
  },
};

module.exports = nextConfig;
