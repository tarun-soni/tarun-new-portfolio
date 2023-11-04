import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import Container from '../Container'
import { DiagonalArrow } from '../Icons'
import useAppStore from '@/store'

const CommonCard: FC<CardProps<MadeData>> = ({ data }) => {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)
  return (
    <Container>
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
          w-98
          m-3
        `}>
        <div
          className="flex flex-col justify-between h-full bg-stone-900  rounded-md p-4 
          w-98
        ">
          <h4
            className={` text-base font-medium text-white-100 tracking-tight ${fonts.inter}`}>
            {data.title}
          </h4>
          <CardAction />
        </div>
      </motion.div>
    </Container>
  )
}

export default CommonCard

const CardAction = () => {
  const borderClasses = 'border-2 border-red-300 rounded px-3 py-2  w-fit -my-2'

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
    <div className="flex flex-row align-bottom mt-4 -my-2">
      <div
        className={` text-sm font-medium text-white-100 tracking-tight ${fonts.inter}`}>
        {getActionTitle()}
      </div>
      <div className="items-center">
        <DiagonalArrow />
      </div>
    </div>
  )
}
