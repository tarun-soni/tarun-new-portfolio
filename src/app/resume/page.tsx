'use client'

import { RESUME_URL } from '@/data/constants'
import { useEffect } from 'react'

const ResumePage = () => {
  useEffect(() => {
    window.open(RESUME_URL, '_blank')
  }, [])
  return null
}

export default ResumePage
