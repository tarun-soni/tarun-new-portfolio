import { fonts } from '@/utils/fonts'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import getFontClasses from '@/utils/getFontClasses'
import useViewport from '@/hooks/useViewPort'
import { SocialsBar } from '@/components/SocialsBar'

function HomeSection() {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)

  return (
    <div className="">
      <motion.h4
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
        // text-lg  font-medium mb-6 sm:mb-10 w-full text-gray-200 tracking-normal ${fonts.lexend} px-2`}

        className={`
        ${fontClasses}
        ${fonts.lexend}
        font-thin
        tracking-normal 
        `}>
        {`Hi! I'm Tarun,`}

        <br />

        <br />
        <>
          I make experiences using React & React Native, as well as some web3
          stuff.
        </>
        <div className="my-5 -mx-2">
          <SocialsBar />
        </div>
      </motion.h4>
    </div>
  )
}
export default HomeSection
