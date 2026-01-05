/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@website-generator/shared'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
