import { WebSidebarProps } from '@/types'
import { fonts } from '@/utils/fonts'
import leftSideBarData from '@/utils/leftSidebarData'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import profilePic from '/public/images/profilePic-cropped.png'

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
            <Link
              href={link.path}
              onClick={() => setSelectedRoute(link.title)}
              className={`
              ${fonts.sourceCodePro}
              text-2xl font-bold text-gray-600  hover:bg-gray-400 hover:bg-opacity-20 rounded-md p-3 py-2
              tracking-wider
              ${selectedRoute === link.title && 'text-white '}
                    `}>
              {link.title}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  </div>
)

export default WebSidebar
