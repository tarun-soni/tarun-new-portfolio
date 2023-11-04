import { MyRoute } from '@/types'
import { fonts } from '@/utils/fonts'
import leftSideBarData from '@/utils/leftSidebarData'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useState } from 'react'
import profilePic from '/public/images/profilePic-cropped.png'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import useAppStore from '@/store'
import { Moon, Sun } from '../Icons'

type WebSidebarProps = {
  selectedRoute: MyRoute
  setSelectedRoute: React.Dispatch<React.SetStateAction<MyRoute>>
}

const WebSidebar: FC<WebSidebarProps> = ({
  selectedRoute,
  setSelectedRoute,
}) => {
  const viewPort = useViewport()
  const [showSidebar, setShowSidebar] = useState(false)
  const fontClasses = getFontClasses(viewPort)

  const store = useAppStore()

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const onSideBarLinkClick = (title: MyRoute) => {
    setShowSidebar(false)
    setSelectedRoute(title)
    store.setSelectedRoute(title)
  }

  const SidebarContent = () => {
    const { isDarkMode, setIsDarkMode } = useAppStore()

    return (
      <div
        // border-2 border-red-400
        className={`

        flex flex-col h-full justify-center  ${
          showSidebar ? 'bg-stone-900 w-1/2' : 'bg-netural-900'
        }
        
        `}>
        {/* bg-red-500 */}
        <ProfilePhoto viewPort={viewPort} setSelectedRoute={setSelectedRoute} />
        <h1
          className={`
       ${fontClasses}  
    text-xl font-semibold mt-8  ${fonts.lexend}`}>
          Tarun Soni
        </h1>
        <ul className="flex flex-col w-full h-full mt-8">
          {leftSideBarData.map(link => (
            <div className="my-2" key={link.path}>
              <button
                onClick={() => onSideBarLinkClick(link.title)}
                className={`
                  transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex 
                  text-xl  text-gray-600  
                  ${selectedRoute === link.title && 'text-white'}
                  ${fonts.sourceCodePro}
                  font-bold`}>
                <span className="relative py-[5px] px-[10px]">
                  {link.title}

                  {link.path === selectedRoute ? (
                    <motion.div
                      className="absolute inset-0  dark:bg-neutral-800 rounded-md z-[-1]"
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

          {/* <ToggleButton /> */}

          <div className="relative w-20 h-10 rounded-full bg-gray-400 flex items-center">
            <button
              className={`absolute w-10 h-10 rounded-full bg-white-100 flex items-center justify-center transition-transform transform ${
                isDarkMode
                  ? 'translate-x-0 transition-transform ease-in-out duration-300'
                  : 'translate-x-full transition-transform ease-in-out duration-300'
              }`}
              onClick={() => setIsDarkMode(!isDarkMode)}>
              <span className="text-skin-primary">
                {isDarkMode ? <Moon /> : <Sun />}
              </span>
            </button>
          </div>
          <button
            onClick={() => {
              setIsDarkMode(!isDarkMode)
            }}
            // className={`
            //       transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex
            //       text-xl  text-gray-600

            //       font-bold`}
            style={{
              display: 'flex',
              marginTop: '2rem',
            }}>
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
        </ul>
      </div>
    )
  }

  return (
    <>
      <motion.div
        // initial should be the cuurent state depending on the viewport and showSidebar
        initial={{ x: showSidebar ? '0' : '-100%' }}
        animate={{ x: showSidebar ? '0' : '-100%' }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-0 left-0 h-full w-4/5 ">
        {/* Sidebar content goes here */}
        <SidebarContent />
      </motion.div>

      <div className="hidden md:block md:w-1/5 ">
        {/* Sidebar content goes here */}
        <SidebarContent />
      </div>
    </>
  )
}

type ProfilePhotoProps = {
  viewPort: string
  setSelectedRoute: React.Dispatch<React.SetStateAction<MyRoute>>
}

const ProfilePhoto: FC<ProfilePhotoProps> = ({
  viewPort,
  setSelectedRoute,
}) => {
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
  )
}

export default WebSidebar

// const ToggleButton = () => {

//   return (

//   )
// }
