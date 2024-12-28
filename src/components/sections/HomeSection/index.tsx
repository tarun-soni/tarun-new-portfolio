import { fonts } from '@/utils/fonts'
import { motion } from 'framer-motion'
import getFontClasses from '@/utils/getFontClasses'
import useViewport from '@/hooks/useViewPort'
import { SocialsBar } from '@/components/SocialsBar'
import talkedData from '@/data/talked'
import wroteData from '@/data/wroteData'
import ViewResumeButton from '@/components/ViewResumeButton'
import MotionDiv from '@/components/MotionDiv'

function HomeSection() {
  const viewPort = useViewport()
  const fontClasses = getFontClasses(viewPort)

  return (
    <>
      <div>
        <MotionDiv
          className={`
          ${fontClasses}
          ${fonts.inter}
          font-base
          tracking-normal 
        `}>
          <h1 className="mb-6 font-medium text-2xl">Hi, 👋 I&apos;m Tarun,</h1>

          <div className="mt-6 text-lg">
            <p>
              I create experiences with React and React Native in addition to
              some web3 things.
            </p>
            <p className="mt-2">I write blogs, speak at tech conferences.</p>
          </div>

          <div className="-mx-2 my-5">
            <SocialsBar />
          </div>
        </MotionDiv>
      </div>
      <MotionDiv className="mt-2">
        <ViewResumeButton type="TEXT" />
      </MotionDiv>
      <MotionDiv className="mt-10">
        <LatestData />
      </MotionDiv>
    </>
  )
}
export default HomeSection

const LatestData = () => {
  return (
    <>
      <div className={`mt-6 text-md  ${fonts.inter}`}>
        <p>Latest talk </p>

        <a
          href={talkedData[0].liveURL}
          className="text-blue-500 hover:text-blue-700 transition-all duration-300">
          {talkedData[0].title}
        </a>

        <div className="mt-2">
          <p>Latest blog </p>

          <a
            href={wroteData[0].liveURL}
            className="text-blue-500 hover:text-blue-700 transition-all duration-300">
            {wroteData[0].title}
          </a>
        </div>
      </div>
    </>
  )
}
