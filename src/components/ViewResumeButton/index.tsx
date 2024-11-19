import { fonts } from '@/utils/fonts'
import TypographyDemo from '../Typography'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { FileCheck } from 'lucide-react'
import { ICON_BUTTON_COMMON_STYLES, RESUME_URL } from '@/data/constants'
import { FC } from 'react'
import { DiagonalArrow } from '../Icons'
import { buttonDetails } from '@/utils/buttonDetails'

type ViewResumeButtonProps = {
  type: 'TOOLTIP' | 'TEXT'
}

const ViewResumeButton: FC<ViewResumeButtonProps> = ({ type = 'TEXT' }) => {
  if (type === 'TEXT') {
    return (
      <button
        type="button"
        aria-label="View Resume"
        onClick={() => {
          window.amplitude.track(buttonDetails.resumeButton)
          window.open(RESUME_URL, '_blank')
        }}
        className="relative group">
        <div className="flex flex-row justify-center items-center">
          <TypographyDemo
            type="span"
            font={`${fonts.sourceCodePro} `}
            className="relative text-lg tracking-normal">
            <span className="relative">
              Resume
              <span className="group-hover:w-full bottom-0 left-0 absolute bg-current w-0 h-[2px] transition-all duration-300" />
            </span>
          </TypographyDemo>
          <div className="mt-1 ml-1 transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px] duration-300">
            <DiagonalArrow size={18} />
          </div>
        </div>
      </button>
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <button
          type="button"
          aria-label="View Resume"
          onClick={() => {
            window.amplitude.track(buttonDetails.resumeButton)
            window.open(RESUME_URL, '_blank')
          }}
          className={ICON_BUTTON_COMMON_STYLES}>
          <FileCheck width={20} height={20} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <TypographyDemo
          type="span"
          font={`${fonts.inter}`}
          styles={{
            marginTop: '2rem',
          }}>
          View Resume
        </TypographyDemo>
      </TooltipContent>
    </Tooltip>
  )
}

export default ViewResumeButton
