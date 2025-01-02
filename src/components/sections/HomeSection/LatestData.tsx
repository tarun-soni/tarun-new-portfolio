import talkedData from '@/data/talked'
import wroteData from '@/data/wroteData'
import { fonts } from '@/utils/fonts'

const LatestData = () => {
  return (
    <>
      <div className={`mt-6 ${fonts.inter}`}>
        <p className={`${fonts.inter}`}>Latest talk </p>

        <a
          href={talkedData[0].liveURL}
          className={`text-blue-500 hover:text-blue-700 transition-all duration-300 ${fonts.inter}`}>
          {talkedData[0].title}
        </a>

        <div className="mt-2">
          <p className={`${fonts.inter}`}>Latest blog </p>

          <a
            href={wroteData[0].liveURL}
            className={`text-blue-500 hover:text-blue-700 transition-all duration-300 ${fonts.inter}`}>
            {wroteData[0].title}
          </a>
        </div>
      </div>
    </>
  )
}

export default LatestData
