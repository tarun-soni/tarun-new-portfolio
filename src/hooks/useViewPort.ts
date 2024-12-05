'use client'

import { ViewPort } from '@/types'
import { useState, useEffect } from 'react'

const useViewport = (): ViewPort => {
  const [viewPort, setViewPort] = useState<ViewPort>('lg')

  const updateViewPort = () => {
    if (window.innerWidth < 640) {
      setViewPort('xs')
    } else if (window.innerWidth < 768) {
      setViewPort('sm')
    } else if (window.innerWidth < 1024) {
      setViewPort('md')
    } else {
      setViewPort('lg')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateViewPort)
    updateViewPort()
    return () => window.removeEventListener('resize', updateViewPort)
  }, [])

  return viewPort
}

export default useViewport
