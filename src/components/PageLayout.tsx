'use client'

import Container from '@/components/Container'
import WebSidebar from '@/components/Websidbar'
import { fonts } from '@/utils/fonts'
import getLengthOfTabData from '@/data/getLengthOfTabData'
import { MyRoute } from '@/types'
import { useEffect } from 'react'
import useAppStore from '@/store'

type PageLayoutProps = {
  children: React.ReactNode
  route: MyRoute
  showCount?: boolean
}

export default function PageLayout({
  children,
  route,
  showCount = true,
}: PageLayoutProps) {
  const { setSelectedRoute } = useAppStore()
  const selectedRouteCount = getLengthOfTabData(route)

  useEffect(() => {
    setSelectedRoute(route)
  }, [setSelectedRoute, route])

  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <Container extendedClasses="lg:w-8/12 w-11/12 mx-auto my-16 flex px-4">
        <WebSidebar selectedRoute={route} setSelectedRoute={() => {}} />
        <div className="lg:px-4 sm:max-w-xl h-full">
          <div className="flex flex-col justify-center mt-10 sm:mt-20 xs:mt-10">
            {showCount && (
              <h1 className={`${fonts.lexend}`}>
                {route}
                {selectedRouteCount && (
                  <span className="text-sm text-stone-500">
                    {' '}
                    ({selectedRouteCount})
                  </span>
                )}
              </h1>
            )}
            <div className="flex flex-wrap mt-10">{children}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
