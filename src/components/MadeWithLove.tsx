import { TWITTER_URL } from '@/data/profileURLs'
import useViewport from '@/hooks/useViewPort'
import { fonts } from '@/utils/fonts'
import React from 'react'

const MadeWithLove = () => {
  const viewPort = useViewport()

  const isMobile = viewPort === 'xs' || viewPort === 'sm'

  if (isMobile)
    return (
      <pre
        className={`
        text-white
        text-end
        fixed
        top-4
        right-4
        text-xs
        ${fonts.inter}
      `}>
        Made with ❤️ by{' '}
        <a href={TWITTER_URL} className="underline">
          Tarun Soni
        </a>
      </pre>
    )

  return (
    <pre
      className={`
        text-white
        text-end
        fixed
        bottom-4
        right-10
        ${fonts.inter}
      `}>
      Made with ❤️ by{' '}
      <a href={TWITTER_URL} className="underline">
        Tarun Soni
      </a>
    </pre>
  )
}

export default MadeWithLove
