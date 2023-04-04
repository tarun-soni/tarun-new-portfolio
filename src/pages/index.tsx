import React, { useState } from 'react'
import Home from './home'
import WebSidebar from '@/components/WebSidebar'
import { MidComponentTitles } from '@/types'

const Main = () => {
  const [selectedRoute, setSelectedRoute] =
    useState<MidComponentTitles>('/about-me')
  return (
    <>
      <WebSidebar
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
      />
      <Home />
    </>
  )
}

export default Main
