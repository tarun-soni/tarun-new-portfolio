import Container from '../../components/Container'
import { fonts } from '@/utils/fonts'
import { FC, useState } from 'react'
import HomeSection from '@/components/sections/HomeSection'
import WroteSection from '@/components/sections/WroteSection'
import { motion } from 'framer-motion'
import MadeSection from '@/components/sections/MadeSection'
import TalkedSection from '@/components/sections/TalkedSection'
import { MyRoute } from '@/types'

import getFontClasses from '@/utils/getFontClasses'
import useViewport from '@/hooks/useViewPort'
import WebSidebar from '@/components/Websidbar'
import useAppStore from '@/store'

const Home = () => {
  // set type of selectedRoute title of LeftSideBarData
  const [selectedRoute, setSelectedRoute] = useState<MyRoute>('/about')
  const { isDarkMode, setIsDarkMode } = useAppStore()

  const viewPort = useViewport()

  const fontSizeClassName = getFontClasses(viewPort)
  const fontClasses = `${fonts.lexend} ${fontSizeClassName} tracking-wide`

  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <Container extendedClasses="lg:w-8/12 w-11/12 mx-auto my-16 flex  px-4">
        <WebSidebar
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        />
        {/* lg:w-10/12 lg:max-w-4xl md:max-w-2xl  */}

        <div
          className="
          h-full
        
     
        sm:max-w-xl
    

        lg:px-4   
      
        ">
          <div className="flex flex-col justify-center xs:mt-10 mt-10 sm:mt-20">
            <motion.h1
              className={`${fontClasses}`}
              key={selectedRoute}
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}>
              {selectedRoute}
            </motion.h1>

            <div className="mt-10 flex flex-wrap ">
              <MainSection selectedRoute={selectedRoute} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home

type MainSectionProps = {
  selectedRoute: MyRoute
}

const MainSection: FC<MainSectionProps> = ({ selectedRoute }) => {
  switch (selectedRoute) {
    case '/about':
      return <HomeSection />
    case '/wrote':
      return <WroteSection />
    case '/made':
      return <MadeSection />
    case '/talked':
      return <TalkedSection />
    default:
      return <HomeSection />
  }
}
