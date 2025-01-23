'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn('overflow-hidden', className)}>
      {isLoading && <CardShimmer />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={90}
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

function CardShimmer() {
  return (
    <div className="h-full w-full animate-pulse rounded-md bg-gray-200"></div>
  )
}
