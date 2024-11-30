import React, { useEffect } from 'react'
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
  const IS_DEV = process.env.MODE === 'development'

  const amplitudeKey = process.env.NEXT_PUBLIC_AMPLITUDE || ''

  useEffect(() => {
    fetch('/api/amplitude')
      .then(response => response.json())
      .then(data => console.log('Fetch succssfull'))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <TooltipProvider>
      <Home />

      {!IS_DEV && (
        <>
          <Script
            src={`https://cdn.amplitude.com/script/${amplitudeKey}.js`}
            onLoad={() => {
              // console.log('1-loaded amplitude script successfully')
            }}
            onError={e => {
              // console.log('1- error loading amplitude script', e)
            }}
          />

          <Script
            id="amplitude-init"
            onError={e => {}}
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
