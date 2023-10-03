import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import { useRouter } from 'next/router'
import { RESUME_URL } from '@/data/profileURLs'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const route = useRouter()

  const params = route?.query?.redirect

  if (params === 'resume') {
    // redirect to RESUME_URL
    if (typeof window !== 'undefined') {
      window.location.href = RESUME_URL
    }
  }

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <GoogleAnalytics />
    </>
  )
}

export default MyApp
