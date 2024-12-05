/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'img.youtube.com', 'res.cloudinary.com'],
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
          value: 'on'
        }
      ]
    }
  ],
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: '/404',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
