import Container from '../../components/Container'
import { fonts } from '@/utils/fonts'
import { FC, useState } from 'react'
import HomeSection from '@/components/sections/HomeSection'
import WroteSection from '@/components/sections/WroteSection'
import { motion } from 'framer-motion'
import MadeSection from '@/components/sections/MadeSection'
import TalkedSection from '@/components/sections/TalkedSection'
// import twitter from '/public/images/twitter.svg'
import { MyRoute } from '@/types'

import getFontClasses from '@/utils/getFontClasses'
import useViewport from '@/hooks/useViewPort'
import WebSidebar from '@/components/Websidbar'
import Drawer from '@/components/Drawer'

const Home = () => {
  // set type of selectedRoute title of LeftSideBarData
  const [selectedRoute, setSelectedRoute] = useState<MyRoute>('/talked')

  const viewPort = useViewport()
  console.log('viewPort --', viewPort)
  const fontClasses = getFontClasses(viewPort)

  console.log('fontClasses --', fontClasses)
  return (
    <div
      className="w-screen h-screen overflow-y-scroll 
      bg-[#111010]
      ">
      {/* bg-[#121212] */}
      <Container extendedClasses="lg:w-8/12 w-11/12 mx-auto my-16 flex">
        <WebSidebar
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        />

        <div
          className="
          h-full
        
        w-10/12 lg:max-w-4xl md:max-w-2xl 
        sm:max-w-xl
    
        px-8
        sm:px-8
        lg:px-4   
      
        ">
          <div className="flex flex-col justify-center mt-20">
            <motion.h1
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
              }}
              className={`${fonts.lexend} ${fontClasses} tracking-wide`}>
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
