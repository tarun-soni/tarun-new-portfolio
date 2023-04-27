import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'

const gradients = [
  {
    from: 'from-[#6EE7B7]',
    via: 'via-[#3B82F6]',
    to: 'to-[#9333EA]',
  },
]

const generatedGradientIndex = Math.floor(Math.random() * gradients.length)

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
        duration: 0.3,
      }}
      whileHover={{
        scale: 1.07,
      }}
      key={data.title}
      className={`
      ${fontClasses}
        rounded-md m-4 flex-wrap h-32 w-72
        bg-gradient-to-r px-2 py-2 
        cursor-pointer
        ${gradients[generatedGradientIndex].from}
        ${gradients[generatedGradientIndex].via}
        ${gradients[generatedGradientIndex].to}
 border-gradient-to-r
        `}>
      <div className="flex flex-col justify-between h-full bg-stone-900  rounded-md p-4">
        <h4
          className={`${fontClasses} text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full light:text-white-800 dark:text-white-100 tracking-tight ${fonts.inter}`}>
          {data.title}
        </h4>
      </div>
    </motion.div>
  )
}

export default CommonCard
