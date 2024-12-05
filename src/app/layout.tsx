import '../styles/globals.css'
import { Metadata } from 'next'
import Providers from '@/components/Providers'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: "Tarun's Portfolio",
  description:
    "This is Tarun Soni's portfolio made to showcase the skills and talks and projects he has done.",
  metadataBase: new URL('https://tarun.website'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tarun's Portfolio",
    description: 'Showcasing skills, talks, and projects by Tarun Soni.',
    url: 'https://tarun.website',
    siteName: "Tarun's Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      'https://res.cloudinary.com/dro3nqmss/image/upload/e_sharpen:50/e_upscale/tarun-new-portfolio/dhlzig9wqsenzywaeibv.jpg',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tarun's Portfolio",
    description: 'Showcasing skills, talks, and projects by Tarun Soni.',
    creator: '@TarunSoni',
    images: [
      'https://res.cloudinary.com/dro3nqmss/image/upload/e_sharpen:50/e_upscale/tarun-new-portfolio/dhlzig9wqsenzywaeibv.jpg',
    ],
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
