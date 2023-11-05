import { FC, PropsWithChildren, useEffect, useState } from 'react'

const HydrationWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false)

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <div>{children}</div> : null}</>
}

export default HydrationWrapper
