import type { AppType } from 'next/dist/shared/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => (
  <>
    <Component {...pageProps} />
    <Analytics />
    <GoogleAnalytics />
  </>
)

export default MyApp
