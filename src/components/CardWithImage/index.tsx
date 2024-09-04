import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import Container from '../Container'
import { DiagonalArrow } from '../Icons'
import useAppStore from '@/store'
import Image from 'next/image'
import CardAction from '../CardAction'
import TestImage from '../TestImage'

const CardWithImage: FC<CardProps<MadeData>> = ({ data }) => {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)
  const stylesIfImage = data?.imageURL
    ? 'relative overflow-hidden bg-gray-800 h-36 w-96'
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
        className={`
          ${fontClasses}
          cursor-pointer
          rounded-md   
          m-3
          w-5/6
          relative overflow-hidden bg-gray-800 h-42
        `}>
        {/* {data?.imageURL && ( */}
        <Image
          width={400}
          height={500}
          src={data.imageURL || ''}
          alt={data.title || ''}
          className="w-full h-full object-cover"
        />

        <div
          className="right-0 bottom-0 left-0 absolute flex flex-col justify-end bg-gradient-to-b from-transparent to-black p-4"
          // style={{ height: '20%' }}
        >
          <h4
            className={`text-base font-medium text-white-100 tracking-tight ${fonts.inter} drop-shadow-md`}>
            {data.title}
          </h4>
          <CardAction />
        </div>
      </motion.div>
    </>
  )
}

export default CardWithImage
