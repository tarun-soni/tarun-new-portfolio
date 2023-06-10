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
        className={`
        ${fontClasses}
        text-lg  font-medium mb-6 sm:mb-10 w-full text-gray-200 tracking-normal ${fonts.lexend} px-2`}>
        {`Hi there! I'm Tarun,`}
        <br />
        {`I make stuff for the web, and mobile.`}
        <br />
        <br />
        <Balancer>
          {`I make React apps, React Native apps, web3 stuff`}
          <br />
          {`and share stuff about 'em.`}
        </Balancer>
        <div className="my-5 -mx-2">
          <SocialsBar />
        </div>
      </motion.h4>
    </div>
  )
}
export default HomeSection
