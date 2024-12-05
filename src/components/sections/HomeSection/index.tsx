import { fonts } from '@/utils/fonts'
import { motion } from 'framer-motion'
import getFontClasses from '@/utils/getFontClasses'
import useViewport from '@/hooks/useViewPort'
import { SocialsBar } from '@/components/SocialsBar'

function HomeSection() {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)

  return (
    <div>
      <motion.div
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
          ${fonts.inter}
          font-base
          tracking-normal 
        `}>
        <h1 className="mb-6 font-medium text-2xl">Hi, 👋 I&apos;m Tarun,</h1>

        <div className="mt-6 text-lg">
          <p>
            I create experiences with React and React Native in addition to some
            web3 things.
          </p>
          <p className="mt-2">
            I write blogs, speak in conferences, and create content.
          </p>
        </div>

        <div className="-mx-2 my-5">
          <SocialsBar />
        </div>
      </motion.div>
    </div>
  )
}

export default HomeSection
