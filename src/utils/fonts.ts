import { Lexend_Exa, Source_Code_Pro, Inter, DM_Mono } from '@next/font/google'

const lexend = Lexend_Exa({
  subsets: ['latin'],
  variable: '--font-lexend-exa',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  preload: false,
  variable: '--font-source-code-pro',
})

const inter = Inter({
  subsets: ['latin'],
  preload: false,
  variable: '--font-inter',
})

export const dmMono = DM_Mono({
  preload: false,
  weight: '400',
})

// TODO - add DM Sans
// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   adjustFontFallback: true,
// })

export const fonts = {
  lexend: `${lexend.variable} font-serif`,
  sourceCodePro: `${sourceCodePro.variable} font-sans`,
  inter: `${inter.variable} font-serif-2`,
  // dmMono: `${dmMono} font-mono`,
  // dmMono: `${dmMono.variable} font-mono`,
  // dmSans: `${dmSans.variable} font-sans-2`,
}
