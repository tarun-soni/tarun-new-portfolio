import Image from 'next/image'
import React from 'react'
import twitter from '/public/images/twitter.svg'
import getFontClasses from '@/utils/getFontClasses'
import { fonts } from '@/utils/fonts'

function TwitterButton() {
  return (
    <div className="absolute  right-24 flex align-baseline ">
      <Image src={twitter} alt="twitter" width={30} height={30} />

      <button
        onClick={() =>
          window.open('https://twitter.com/tarun_soni_', '_blank')
        }>
        <h1
          className={`${getFontClasses} font-semibold 
      italic
      ${fonts.sourceCodePro} text-lg tracking-normal`}>
          tarun_soni_
        </h1>
      </button>
    </div>
  )
}

export default TwitterButton
