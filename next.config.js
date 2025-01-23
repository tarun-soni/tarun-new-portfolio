/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',
      'img.youtube.com',
      'res.cloudinary.com',
      'api.microlink.io',
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
      ],
    },
  ],
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: '/404',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
