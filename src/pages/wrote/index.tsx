import Container from '@/components/Container'
import WebSidebar from '@/components/WebSidebar'
import WroteSection from '@/components/sections/WroteSection'
import { MidComponentTitles } from '@/types'
import React, { useState } from 'react'

function Worked() {
  const [selectedRoute, setSelectedRoute] =
    useState<MidComponentTitles>('/wrote')
  return (
    <>
      <Container extendedClasses="w-8/12  mx-auto my-16  flex">
        <WebSidebar
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        />
        {/* <Container extendedClasses="w-8/12  mx-auto my-16  flex flex-col">
          <h1 className="text-4xl font-bold">Wrote</h1>
          <p className="text-lg font-medium text-gray-500">
            I write about my experiences and learnings.
          </p>
        </Container> */}
        <div className="flex flex-wrap w10/12 border-2 my-2 mx-10">
          {/* <Container extendedClasses="flex flex=wrap border-red-100 border-2"> */}
          <WroteSection />
          {/* </Container> */}
        </div>
      </Container>
    </>
  )
}

export default Worked
