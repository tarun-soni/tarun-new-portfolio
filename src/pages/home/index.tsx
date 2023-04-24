import Image from 'next/image'
import Container from '../../components/Container'
import profilePic from '/public/images/profilePic-cropped.png'
import leftSideBarData from '@/utils/leftSidebarData'
import { fonts } from '@/utils/fonts'
import { FC, useState } from 'react'
import HomeSection from '@/components/sections/HomeSection'
import WroteSection from '@/components/sections/WroteSection'
import { motion } from 'framer-motion'
import MadeSection from '@/components/sections/MadeSection'
import TalkedSection from '@/components/sections/TalkedSection'
import twitter from '/public/images/twitter.svg'
import { MidComponentTitles } from '@/types'

const Home = () => {
  // set type of selectedRoute title of LeftSideBarData
  const [selectedRoute, setSelectedRoute] =
    useState<MidComponentTitles>('/about-me')
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <Container extendedClasses="w-8/12  mx-auto my-16  flex">
        {/* // TODO - replace the webside bar with hamburger on small devices */}
        <WebSidebar
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        />

        <div className="absolute  right-24 flex align-baseline ">
          <Image src={twitter} alt="twitter" width={30} height={30} />

          <button
            onClick={() =>
              window.open('https://twitter.com/tarun_soni_', '_blank')
            }>
            <h1
              className={`text-xl font-semibold 
            italic
            ${fonts.sourceCodePro} text-md tracking-wide`}>
              tarun_soni_
            </h1>
          </button>
        </div>
        <div className="w-10/12 lg:max-w-4xl md:max-w-2xl px-4">
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
              className={`
                ${fonts.lexend} text-3xl tracking-wide`}>
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
        onClick={() => setSelectedRoute('/about-me')}
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

      <h1 className={`text-2xl font-semibold mt-10 ${fonts.lexend}`}>
        Tarun Soni
      </h1>
    </div>

    <div className="flex flex-col items-center justify-center w-10/12 h-1/2 ">
      <ul className="flex flex-col w-full h-full mt-10">
        {leftSideBarData.map(link => (
          <div className="space-y-2 my-8" key={link.path}>
            <button
              onClick={() => setSelectedRoute(link.title)}
              className={`
              ${fonts.sourceCodePro}
              text-2xl font-bold text-gray-600  hover:bg-gray-400 hover:bg-opacity-20 rounded-md p-3 py-2
              tracking-wider
              ${selectedRoute === link.title && 'text-white '}
                    `}>
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
    case '/about-me':
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
