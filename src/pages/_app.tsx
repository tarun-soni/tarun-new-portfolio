import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'

import '../styles/globals.css'

import useAppStore from '@/store'
import HydrationWrapper from '@/components/Hydration'

export default function App({ Component, pageProps }: AppProps) {
  // const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const { isDarkMode, setIsDarkMode } = useAppStore()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    const isDark = body?.classList.contains('dark') ?? false
    setIsDarkMode(isDark)
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    if (isDarkMode !== undefined) {
      if (isDarkMode) {
        body?.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        body?.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [isDarkMode])

  return (
    <>
      <HydrationWrapper>
        {/* @ts-ignore */}
        <Component {...pageProps} />
        <Analytics />
        <GoogleAnalytics />
      </HydrationWrapper>
    </>
  )
}
