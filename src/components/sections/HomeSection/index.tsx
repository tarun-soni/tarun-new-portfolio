import { fonts } from '@/utils/fonts'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'

function HomeSection() {
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
        className={`text-lg  font-medium mb-6 sm:mb-10 w-full text-gray-200 tracking-normal ${fonts.lexend} px-2`}>
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
      </motion.h4>
    </div>
  )
}
export default HomeSection
