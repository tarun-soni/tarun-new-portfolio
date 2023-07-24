import type { AppType } from 'next/dist/shared/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import HydrationWrapper from '@/components/Hydration'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => (
  <HydrationWrapper>
    <Component {...pageProps} />
    <Analytics />
    <GoogleAnalytics />
  </HydrationWrapper>
)

export default MyApp
