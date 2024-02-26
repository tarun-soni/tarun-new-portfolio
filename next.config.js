/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: '*',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '*',
      },
    ],
  },
}

module.exports = nextConfig
