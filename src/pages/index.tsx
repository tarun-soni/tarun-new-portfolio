import React from 'react'
import Home from './home'
import { TooltipProvider } from '@/components/ui/tooltip'
import Script from 'next/dist/client/script'

declare global {
  interface Window {
    amplitude: {
      track: (
        event: string,
        data?: Record<string, string | number | boolean>,
      ) => void
      init: (
        key: string,
        options: { fetchRemoteConfig: boolean; autocapture: boolean },
      ) => void
    }
  }
}

const Main = () => {
  const IS_DEV = process.env.MODE !== 'development'

  const amplitudeKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || ''

  console.log('amplitudeKey', amplitudeKey)
  return (
    <TooltipProvider>
      <Home />
      {/* <script src="https://cdn.amplitude.com/libs/analytics-browser-2.11.7-min.js.gz"></script> */}

      {!IS_DEV && (
        <>
          <Script src={`https://cdn.amplitude.com/script/${amplitudeKey}.js`} />

          <Script
            id="amplitude-init"
            onLoad={() => {
              window.amplitude.init(amplitudeKey, {
                fetchRemoteConfig: true,
                autocapture: true,
              })
            }}
          />
        </>
      )}
    </TooltipProvider>
  )
}

export default Main
