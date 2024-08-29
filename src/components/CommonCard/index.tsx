import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import { DiagonalArrow } from '../Icons'
import useAppStore from '@/store'
import Image from 'next/image'
import TestImage from './TestImage'

const CommonCard: FC<CardProps<MadeData>> = ({ data }) => {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)

  return (
    <motion.div
      onClick={() => window.open(data.liveURL, '_blank')}
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.1,
      }}
      whileHover={{
        scale: 1.02,
      }}
      key={data.title}
      className={`
        ${fontClasses}
        cursor-pointer
        rounded-md   
        m-3
        w-5/6
      `}>
      <div className="flex flex-col justify-between bg-stone-100 dark:bg-stone-800 rounded-md w-full h-full">
        <div className="p-4 w-4 h-10">
          {/* <div className="p-4 w-full"> */}
          <TestImage alt="test" />
          {/* </div> */}
        </div>

        <div className="px-6 py-2">
          <h4
            className={`text-base font-medium text-white-100 tracking-tight ${fonts.inter}`}>
            {data.title}
          </h4>
          <CardAction />
        </div>
      </div>
    </motion.div>
  )
}

export default CommonCard

const CardAction = () => {
  const { selectedRoute } = useAppStore()

  const getActionTitle = () => {
    switch (selectedRoute) {
      case '/about':
        return null
      case '/made':
        return 'View'
      case '/wrote':
        return 'Read'
      case '/talked':
        return 'Watch'
      default:
        return null
    }
  }

  return (
    <div className="align-bottom flex flex-row -my-2 mt-4">
      <div
        className={`underline text-sm font-medium text-white-100 tracking-tight ${fonts.inter}`}>
        {getActionTitle()}
      </div>
      <div className="items-center">
        <div style={{ marginTop: '2px' }}>
          <DiagonalArrow size={18} />
        </div>
      </div>
    </div>
  )
}
