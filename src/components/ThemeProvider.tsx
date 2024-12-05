'use client'

import { ReactNode, useEffect } from 'react'
import useAppStore from '@/store'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { isDarkMode, setIsDarkMode } = useAppStore()

  useEffect(() => {
    // Set dark mode on mount
    setIsDarkMode(true)
  }, [setIsDarkMode])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="dark:bg-neutral-900 min-h-screen dark:text-white">
        {children}
      </div>
    </div>
  )
}
