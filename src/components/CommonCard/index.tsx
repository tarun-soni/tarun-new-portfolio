import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { CardProps, MadeData } from '@/types'
import { fonts } from '@/utils/fonts'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import Image from 'next/image'

const gradients = [
  {
    from: 'from-[#6EE7B7]',
    via: 'via-[#3B82F6]',
    to: 'to-[#9333EA]',
  },
]

const generatedGradientIndex = Math.floor(Math.random() * gradients.length)

const CommonCard: FC<CardProps<MadeData>> = ({ data }) => {
  const img = 'https://img.youtube.com/vi/czptRA4IeCc/hqdefault.jpg'
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)
  // return
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
      // h-32 w-72
      // bg-gradient-to-r
      // px-2
      // py-2
      className={`
      ${fontClasses}
      rounded-md m-4 flex-wrap 
        cursor-pointer
        ${gradients[generatedGradientIndex].from}
        ${gradients[generatedGradientIndex].via}
        ${gradients[generatedGradientIndex].to}
        border-gradient-to-r
        `}>
      <div className="card w-80 bg-base-200 shadow-lg image-full">
        {/* <figure> */}
        <img src={img} alt="Shoes" />
        {/* </figure> */}
        <div className="card-body">
          {/* <h2 className="card-title">Shoes!</h2> */}
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-end">
            {/* <div className="p-2 text-center"> */}
            <h4
              className={`${fontClasses} text-md md:text-md font-normal mb-6 sm:mb-10 w-full light:text-white-800 dark:text-white-100 tracking-tight ${fonts.inter}`}>
              {data.title}
            </h4>
            {/* </div>{' '} */}
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover w-full h-32"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
        <div className="p-2 text-center">
          <h4
            className={`${fontClasses} text-md md:text-md font-normal mb-6 sm:mb-10 w-full light:text-white-800 dark:text-white-100 tracking-tight ${fonts.inter}`}>
            {data.title}
          </h4>
        </div>
      </div> */}
      <div className="">
        {/* <Image
          src={img}
          // placeholder="blur"
          alt={'a'}
          // fill
          className="image"
          // blurDataURL={img}
          // width={200}
          // height={00}
          sizes="100px"
          style={{
            maxWidth: '100%',
            // height: 'auto',
            objectFit: 'cover',
          }}
        /> */}
      </div>
      {/* <div className="content-container">
        <h4
          className={`${fontClasses} text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full light:text-white-800 dark:text-white-100 tracking-tight ${fonts.inter}`}>
          {data.title}
        </h4>
      </div> */}
    </motion.div>
  )
}

export default CommonCard

const A = () => (
  <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img
      className="object-cover w-72 h-32"
      src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt="avatar"
    />
    <div className="py-5 text-center">
      <h4
        className={`${fontClasses} text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full light:text-white-800 dark:text-white-100 tracking-tight ${fonts.inter}`}>
        {data.title}
      </h4>
    </div>
  </div>
)
