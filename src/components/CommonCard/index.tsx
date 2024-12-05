import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import CardAction from '../CardAction'
import StackTag from '../StackTag'

const CommonCard: FC<CardProps<MadeData>> = ({ data }) => {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)
  return (
    <>
      <motion.div
        onClick={() => {
          if (data.liveURL) {
            window.open(data.liveURL, '_blank')
          }
        }}
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
        whileHover={
          data.liveURL
            ? {
                scale: 1.02,
              }
            : {}
        }
        key={data.title}
        className={`
          ${fontClasses}
          ${data.liveURL ? 'cursor-pointer' : ''}
          rounded-md   
          m-3
          w-5/6
        `}>
        <div className="relative flex flex-col justify-between bg-stone-100 dark:bg-stone-800 px-4 py-6 rounded-md w-98 h-full">
          <div
            className={`text-base font-medium text-white-100 tracking-tight ${fonts.inter}`}>
            {data.title}
          </div>
          <div className="flex flex-col justify-between">
            <p className={`${fonts.inter} text-sm text-stone-300 mt-4`}>
              {data?.desc}
            </p>
            <div className="flex flex-wrap">
              {data?.tags?.map(tag => (
                <p
                  className={`${fonts.inter} text-sm text-stone-400 whitespace-nowrap mr-2 mt-6`}
                  key={tag}>
                  #{tag}
                </p>
              ))}
            </div>

            <StackTag stacks={data?.stack || []} />
            {!!data.liveURL && <CardAction />}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default CommonCard
