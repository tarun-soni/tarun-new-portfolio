import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import '../styles/globals.css'
import useAppStore from '@/store'
import HydrationWrapper from '@/components/Hydration'
import Head from '@/head'

export default function App({ Component, pageProps }: AppProps) {
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
    let isDark = body?.classList.contains('dark') ?? false
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark') {
      isDark = true
    } else if (storedTheme === 'light') {
      isDark = false
    } else {
      // This is the first visit, so set the default theme to dark
      isDark = true
      localStorage.setItem('theme', 'dark')
    }

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
        <Head />
        <Component {...pageProps} />
        <Analytics />
        <GoogleAnalytics />
      </HydrationWrapper>
    </>
  )
}
