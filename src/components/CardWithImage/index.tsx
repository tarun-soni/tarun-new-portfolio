'use client'

import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import OptimizedImage from '../OptimizedImage'
import CardAction from '../CardAction'
import { cn } from '@/utils'

const CardWithImage: FC<CardProps<MadeData>> = ({ data }) => {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)
  const stylesIfImage = data?.imageURL
    ? 'relative overflow-hidden bg-gray-800 w-400 h-500'
    : null

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
        className={cn(
          fontClasses,
          'cursor-pointer rounded-md m-3',
          stylesIfImage,
        )}>
        <OptimizedImage
          src={data.imageURL || ''}
          alt={data.title || ''}
          width={400}
          height={500}
          className="object-cover"
        />

        <div className="right-0 bottom-0 left-0 absolute flex flex-col justify-end bg-gradient-to-b from-transparent to-black px-4">
          <h4
            className={`text-base font-medium text-white-100 tracking-tight ${fonts.inter} drop-shadow-md`}>
            {data.title}
          </h4>
          <div className="mb-6">
            <CardAction />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default CardWithImage
