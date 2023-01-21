import { FC } from 'react'
import { Props } from './types'

const Container: FC<Props> = ({ children, extendedClasses }) => {
  return (
    <div className={`max-w-screen-2xl  ${extendedClasses} w-11/12`}>
      {children}
    </div>
  )
}

export default Container
