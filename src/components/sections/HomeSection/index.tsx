import { fonts } from '@/utils/fonts'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'

function HomeSection() {
  return (
    <motion.h3
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
      className={`text-2xl  font-medium mb-6 sm:mb-10 w-full text-gray-200 tracking-tight ${fonts.lexend} px-2`}>
      {`Hi there! I'm Tarun Soni, I make stuff for the web, and mobile.`}
      <br />
      <br />
      <Balancer>
        {`I make React apps, React Native apps, and maybe some other stuff too.`}
      </Balancer>
    </motion.h3>
  )
}
export default HomeSection
