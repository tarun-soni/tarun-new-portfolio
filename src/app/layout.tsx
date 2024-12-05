import '../styles/globals.css'
import { Metadata } from 'next'
import Providers from '@/components/Providers'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: "Tarun's Portfolio",
  description:
    "This is Tarun Soni's portfolio made to showcase the skills and talks and projects he has done.",
  openGraph: {
    title: "Tarun's Portfolio",
    description: 'Showcasing skills, talks, and projects by Tarun Soni.',
    images: [
      'https://res.cloudinary.com/dro3nqmss/image/upload/e_sharpen:50/e_upscale/tarun-new-portfolio/dhlzig9wqsenzywaeibv.jpg',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tarun's Portfolio",
    description: 'Showcasing skills, talks, and projects by Tarun Soni.',
    images: [
      'https://res.cloudinary.com/dro3nqmss/image/upload/e_sharpen:50/e_upscale/tarun-new-portfolio/dhlzig9wqsenzywaeibv.jpg',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
