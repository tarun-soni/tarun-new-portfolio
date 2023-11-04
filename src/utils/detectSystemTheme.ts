import { TTheme } from '@/types'

export const detectSystemTheme = (): TTheme => {
  // Check if the user's system has a dark mode preference
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  } else {
    return 'light'
  }
}
export const systemTheme = detectSystemTheme()
