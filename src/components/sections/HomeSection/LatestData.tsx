import talkedData from '@/data/talked'
import wroteData from '@/data/wroteData'

const LatestData = () => {
  return (
    <>
      <div className="mt-6 font-sans">
        <p className="font-sans">Latest talk </p>

        <a
          href={talkedData[0].liveURL}
          className="text-blue-500 hover:text-blue-700 transition-all duration-300 font-sans">
          {talkedData[0].title}
        </a>

        <div className="mt-2">
          <p className="font-sans">Latest blog </p>

          <a
            href={wroteData[0].liveURL}
            className="text-blue-500 hover:text-blue-700 transition-all duration-300 font-sans">
            {wroteData[0].title}
          </a>
        </div>
      </div>
    </>
  )
}

export default LatestData
