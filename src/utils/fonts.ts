import { Lexend_Exa, Source_Code_Pro } from '@next/font/google'

const lexend = Lexend_Exa({
  subsets: ['latin'],
  variable: '--font-lexend-exa',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
})

export const fonts = {
  lexend: `${lexend.variable} font-serif`,
  sourceCodePro: `${sourceCodePro.variable} font-sans`,
}
