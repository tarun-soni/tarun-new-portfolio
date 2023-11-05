import { motion } from 'framer-motion'
import React, { FC, PropsWithChildren } from 'react'

type TypographyProps = {
  h1: 'h1'
  h2: 'h2'
  h3: 'h3'
  h4: 'h4'
  h5: 'h5'
  p: 'p'
  blockquote: 'blockquote'
  ul: 'ul'
  li: 'li'
  span: 'span'
}

type Props = {
  type: keyof TypographyProps
  font: string // Font style as a string (e.g., 'font-inter')
  styles?: Object
  className?: string
}

const typographyStyles: Record<keyof TypographyProps, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  p: 'text-base',
  blockquote: 'text-lg font-medium',
  ul: 'text-base',
  li: 'text-base',
  span: 'text-base',
}

const TypographyDemo: FC<PropsWithChildren<Props>> = props => {
  const { type, font, children, styles, className } = props

  // eslint-disable-next-line react/no-children-prop
  return React.createElement(type, {
    className: `${font} ${typographyStyles[type]} ${className}`,
    children,
    style: styles,
  })
}

export default TypographyDemo
