/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'img.youtube.com'],
  },
  experimental: {
    appDir: false,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}

module.exports = nextConfig
