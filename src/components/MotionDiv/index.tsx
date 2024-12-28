import { motion } from 'framer-motion'
import { cn } from '@/utils'

interface MotionDivProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function MotionDiv({
  children,
  className,
  delay = 0,
}: MotionDivProps) {
  return (
    <motion.div
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: delay,
      }}
      className={className}>
      {children}
    </motion.div>
  )
}
