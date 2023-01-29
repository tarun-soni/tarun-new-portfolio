import Image from 'next/image'

import Container from '../../components/Container'
import profilePic from '/public/images/profilePic-cropped.png'

import leftSideBarData from '@/utils/leftSidebarData'
import { fonts } from '@/utils/fonts'
import { FC, useState } from 'react'
import { MidComponentTitles } from './types'
import HomeSection from '@/components/HomeSection'
import WroteSection from '@/components/WroteSection'
import { motion } from 'framer-motion'

const Home = () => {
  // set type of selectedRoute title of LeftSideBarData
  const [selectedRoute, setSelectedRoute] =
    useState<MidComponentTitles>('/home')
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Container extendedClasses="w-10/12  mx-auto my-16  flex ">
        {/* replace the webside bar with hamburger on small devices */}

        <WebSidebar
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        />

        <div className="w-10/12 lg:max-w-4xl md:max-w-2xl">
          <div className="flex flex-col justify-center mt-20">
            <motion.div>
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
                className={`
                ${fonts.lexend} text-3xl tracking-widest`}>
                {selectedRoute}
              </motion.h1>
            </motion.div>
            <div className="mt-10 flex flex-wrap">
              <MainSection selectedRoute={selectedRoute} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home

type WebSidebarProps = {
  selectedRoute: MidComponentTitles
  setSelectedRoute: React.Dispatch<React.SetStateAction<MidComponentTitles>>
}

const WebSidebar: FC<WebSidebarProps> = ({
  selectedRoute,
  setSelectedRoute,
}) => (
  <div className="flex flex-col w-1/5 h-screen">
    <div className="flex flex-col justify-center ">
      <motion.button
        onClick={() => setSelectedRoute('/home')}
        className="w-28 h-w-28 "
        whileHover={{
          scale: 1.07,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 0.1,
        }}>
        <Image
          src={profilePic}
          alt="profile-photo"
          width={100}
          height={100}
          className="rounded-xl ml-2 my-4"
        />
      </motion.button>

      <h1 className={`text-2xl font-bold mt-10 ${fonts.lexend}`}>Tarun Soni</h1>
    </div>

    <div className="flex flex-col items-center justify-center w-10/12 h-1/2 ">
      <ul className="flex flex-col w-full h-full mt-10">
        {leftSideBarData.map(link => (
          <div className="space-y-2 my-8" key={link.title}>
            <button
              onClick={() => setSelectedRoute(link.title)}
              className={`${fonts.sourceCodePro}
            ${selectedRoute === link.title && 'text-white'}
                    text-xl font-bold text-gray-600 hover:text-gray-300 hover:bg-gray-400 hover:bg-opacity-20 rounded-md p-3 py-2`}>
              {link.title}
            </button>
          </div>
        ))}
      </ul>
    </div>
  </div>
)

type MainSectionProps = {
  selectedRoute: MidComponentTitles
}

const MainSection: FC<MainSectionProps> = ({ selectedRoute }) => {
  switch (selectedRoute) {
    case '/wrote':
      return <WroteSection />
    case '/made':
      return <></>

    //  <MadeSection />

    case '/talked':
      return <></>
    //  <TalkedSection />'
    // return <BlogSection />
    default:
      return <HomeSection />
  }
}
