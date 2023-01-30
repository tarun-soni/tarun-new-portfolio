import { Lexend_Exa, Source_Code_Pro, Inter } from '@next/font/google'

const lexend = Lexend_Exa({
  subsets: ['latin'],
  variable: '--font-lexend-exa',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const fonts = {
  lexend: `${lexend.variable} font-serif`,
  sourceCodePro: `${sourceCodePro.variable} font-sans`,
  inter: `${inter.variable} font-serif-2`,
}
