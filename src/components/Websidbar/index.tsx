import { MidComponentTitles } from '@/types'
import { fonts } from '@/utils/fonts'
import leftSideBarData from '@/utils/leftSidebarData'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import profilePic from '/public/images/profilePic-cropped.png'
import useViewport from '@/hooks/useViewPort'

type WebSidebarProps = {
  selectedRoute: MidComponentTitles
  setSelectedRoute: React.Dispatch<React.SetStateAction<MidComponentTitles>>
}

const WebSidebar: FC<WebSidebarProps> = ({
  selectedRoute,
  setSelectedRoute,
}) => {
  const viewPort = useViewport()

  const getDynamicProfilePicWidth = (): number => {
    switch (viewPort) {
      case 'xs':
      case 'sm':
        return 70
      case 'md':
        return 80
      case 'lg':
        return 100
      default:
        return 80
    }
  }

  return (
    <div className="flex flex-col w-1/5 h-screen">
      <div className="flex flex-col justify-center ">
        <motion.button
          onClick={() => setSelectedRoute('/about')}
          className="w-28"
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
            width={getDynamicProfilePicWidth()}
            height={getDynamicProfilePicWidth()}
            className="rounded-xl ml-2 my-4"
          />
        </motion.button>

        <h1 className={`text-xl font-semibold mt-8  ${fonts.lexend}`}>
          Tarun Soni
        </h1>
      </div>

      <div className="flex flex-col w-10/12 h-1/2 ">
        <ul className="flex flex-col w-full h-full mt-8">
          {leftSideBarData.map(link => (
            <div className="my-2" key={link.path}>
              <button
                onClick={() => setSelectedRoute(link.title)}
                className={clsx(
                  `transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex 
               text-lg  text-gray-600  
               ${selectedRoute === link.title && 'text-white'}
               ${fonts.sourceCodePro}
                `,
                  {
                    'font-bold': true,
                  },
                )}>
                <span className="relative py-[5px] px-[10px]">
                  {link.title}

                  {link.path === selectedRoute ? (
                    <motion.div
                      className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                      layoutId="sidebar"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}></motion.div>
                  ) : null}
                </span>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WebSidebar
