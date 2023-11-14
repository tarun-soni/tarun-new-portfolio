import { MyRoute } from '@/types'
import { fonts } from '@/utils/fonts'
import leftSideBarData from '@/utils/leftSidebarData'
import { FC } from 'react'
import useViewport from '@/hooks/useViewPort'
import useAppStore from '@/store'
import { Moon, Sun } from '../Icons'
import TypographyDemo from '../Typography'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { FileCheck } from 'lucide-react'
import { RESUME_URL } from '@/data/constants'
import ProfilePhoto from '../ProfilePhoto'
const iconClassNames =
  'mr-1 w-30 h-30 rounded-md p-2 text-lg dark:hover:bg-gray-700 hover:bg-gray-300 '

type SidebarContentProps = {
  selectedRoute: MyRoute
  setSelectedRoute: React.Dispatch<React.SetStateAction<MyRoute>>
  onSideBarLinkClick: (title: MyRoute) => void
}
const SidebarContent: FC<SidebarContentProps> = ({
  selectedRoute,
  setSelectedRoute,
  onSideBarLinkClick,
}) => {
  const { isDarkMode, setIsDarkMode } = useAppStore()

  const viewPort = useViewport()
  console.log('viewPort--', viewPort)
  const getClassNames = (viewPort: string) => {
    switch (viewPort) {
      case 'lg':
        return 'flex flex-col h-full justify-center bg-netural-900'
      case 'md':
      case 'sm':
        return 'flex flex-col justify-center bg-netural-900'
      case 'xs':
        return 'flex flex-col justify-center bg-netural-900'

      default:
        return 'flex flex-col h-full justify-center bg-netural-900'
    }
  }

  const getUlClassNames = (viewPort: string) => {
    switch (viewPort) {
      case 'lg':
        return 'flex flex-col w-full h-full mt-8'
      case 'md':
      case 'sm':
        return 'flex flex-row w-full h-full mt-8'
      case 'xs':
        return 'flex flex-row w-full h-full mt-8'
      default:
        return 'flex flex-row w-full h-full mt-8'
    }
  }
  const mainContainerClassNames = getClassNames(viewPort)
  const ulClassNames = getUlClassNames(viewPort)
  return (
    <div className={`${mainContainerClassNames}w-fit`}>
      <ProfilePhoto viewPort={viewPort} setSelectedRoute={setSelectedRoute} />

      <ul className={ulClassNames}>
        {leftSideBarData.map(link => {
          const selectedTabStyles = `p-2 rounded-sm ${
            selectedRoute === link.title
              ? 'bg-neutral-300 dark:bg-neutral-800'
              : ''
          }`

          return (
            <div className="my-4" key={link.path}>
              {/* {link.title === selectedRoute ? (
                <motion.div
                  className="absolute inset-0 dark:bg-neutral-800 rounded-md z-[-1]"
                  layoutId="sidebar"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}>
                  {link.title}
                </motion.div>
              ) : null} */}
              <button onClick={() => onSideBarLinkClick(link.title)}>
                {/* className={`
                transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex 
                text-xl  text-gray-600  
                ${selectedRoute === link.title && 'text-white'}
                ${fonts.sourceCodePro}
                font-bold`}> */}
                {/* <span className="relative py-[5px] px-[10px]"> */}
                <TypographyDemo
                  type="span"
                  font={`${fonts.lexend}`}
                  className={selectedTabStyles}>
                  {link.title}
                </TypographyDemo>

                {/* </span> */}
              </button>
            </div>
          )
        })}
      </ul>

      <div className="md:block  flex  items-center justify-start px-2">
        <Tooltip delayDuration={200}>
          <TooltipTrigger>
            <button
              type="button"
              aria-label="Toggle Theme"
              onClick={() => {
                setIsDarkMode(!isDarkMode)
              }}
              className={iconClassNames}>
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
          </TooltipTrigger>

          <TooltipContent itemType="button" aria-label="Toggle Mode">
            <TypographyDemo type="span" font={`${fonts.inter}`}>
              {`${isDarkMode ? 'Light' : 'Dark'} Mode`}
            </TypographyDemo>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <button
              type="button"
              aria-label="View Resume"
              onClick={() => {
                window.open(RESUME_URL, '_blank')
              }}
              className={iconClassNames}>
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
      </div>
    </div>
  )
}

export default SidebarContent
