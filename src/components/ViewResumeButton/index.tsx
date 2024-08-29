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
          window.open(RESUME_URL, '_blank')
        }}
      >
        <div
          className="flex item-center flex-row
            underline underline-offset-8
            align-center justify-center"
        >
          <TypographyDemo
            type="span"
            font={`${fonts.sourceCodePro}`}
            className="tracking-normal"
            // className={selectedTabStyles}
          >
            Resume
          </TypographyDemo>
          <div style={{ marginTop: '4px' }}>
            {/* border-2 border-red-300"> */}
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
            window.open(RESUME_URL, '_blank')
          }}
          className={ICON_BUTTON_COMMON_STYLES}
        >
          <FileCheck width={20} height={20} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <TypographyDemo
          type="span"
          font={`${fonts.inter}`}
          styles={{
            marginTop: '2rem',
          }}
        >
          View Resume
        </TypographyDemo>
      </TooltipContent>
    </Tooltip>
  )
}

export default ViewResumeButton
