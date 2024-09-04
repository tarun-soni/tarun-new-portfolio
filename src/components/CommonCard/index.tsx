import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import Container from '../Container'
import { DiagonalArrow } from '../Icons'
import useAppStore from '@/store'
import CardAction from '../CardAction'

const CommonCard: FC<CardProps<MadeData>> = ({ data }) => {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)
  return (
    <>
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
        <div className="flex flex-col justify-between bg-stone-100 dark:bg-stone-800 px-4 py-6 rounded-md w-98 h-full">
          <h4
            className={` text-base font-medium text-white-100 tracking-tight ${fonts.inter}`}>
            {data.title}
          </h4>
          <CardAction />
        </div>
      </motion.div>
    </>
  )
}

export default CommonCard
