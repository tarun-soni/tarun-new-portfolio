import { FC } from 'react'
import { Props } from './types'

const Container: FC<Props> = ({ children, extendedClasses }) => {
  return (
    <div
      className={`max-w-screen-2xl ${extendedClasses} md:w-8/12 lg:flex-row flex flex-col`}
    >
      {children}
    </div>
  )
}

export default Container
