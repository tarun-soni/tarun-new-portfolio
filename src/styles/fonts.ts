import { Inter, Source_Code_Pro, Lexend } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
})

export const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export const fonts = {
  inter: inter.variable,
  sourceCodePro: sourceCodePro.variable,
  lexend: lexend.variable,
}
