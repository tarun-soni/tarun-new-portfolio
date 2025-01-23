'use client'

import { RESUME_URL } from '@/data/constants'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ResumePage = () => {
  const router = useRouter()
  useEffect(() => {
    window.open(RESUME_URL, '_blank')

    return () => {
      router.replace('/')
    }
  }, [])

  return null
}

export default ResumePage
