import { fonts } from '@/utils/fonts'
import useAppStore from '@/store'
import { Moon, Sun } from '../Icons'
import TypographyDemo from '../Typography'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ICON_BUTTON_COMMON_STYLES } from '@/data/constants'
import { buttonDetails } from '@/utils/buttonDetails'

const ToggleThemeButton = () => {
  const { isDarkMode, setIsDarkMode } = useAppStore()

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger>
        <button
          type="button"
          aria-label="Toggle Theme"
          onClick={() => {
            window.amplitude.track(buttonDetails.themeButton)
            setIsDarkMode(!isDarkMode)
          }}
          className={ICON_BUTTON_COMMON_STYLES}>
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
      </TooltipTrigger>

      <TooltipContent itemType="button" aria-label="Toggle Mode">
        <TypographyDemo type="span" font={`${fonts.inter}`}>
          {`${isDarkMode ? 'Light' : 'Dark'} Mode`}
        </TypographyDemo>
      </TooltipContent>
    </Tooltip>
  )
}

export default ToggleThemeButton
