'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import { ReactNode, useEffect } from 'react'
import useAppStore from '@/store'

export default function Providers({ children }: { children: ReactNode }) {
  const { setIsDarkMode } = useAppStore()

  useEffect(() => {
    setIsDarkMode(true)
  }, [setIsDarkMode])

  return (
    <TooltipProvider>
      {children}
      <Analytics />
      <GoogleAnalytics />
    </TooltipProvider>
  )
}
