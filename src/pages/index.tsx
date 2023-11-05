import React from 'react'
import Home from './home'
import { TooltipProvider } from '@/components/ui/tooltip'

const Main = () => {
  return (
    <TooltipProvider>
      <Home />
    </TooltipProvider>
  )
}

export default Main
