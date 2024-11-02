import { MyRoute } from '@/types'
import { fonts } from '@/utils/fonts'
import leftSideBarData from '@/utils/leftSidebarData'
import { FC } from 'react'
import useViewport from '@/hooks/useViewPort'
import TypographyDemo from '../Typography'
import ProfilePhoto from '../ProfilePhoto'

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
  const viewPort = useViewport()

  const getClassNames = (viewPort: string) => {
    switch (viewPort) {
      case 'lg':
        return 'flex flex-col bg-netural-900'
      case 'md':
      case 'sm':
        return 'flex flex-col bg-netural-900'
      case 'xs':
        return 'flex flex-col bg-netural-900'
      default:
        return 'flex flex-col bg-netural-900'
    }
  }

  const getUlClassNames = (viewPort: string) => {
    switch (viewPort) {
      case 'lg':
        return 'flex flex-col w-full mt-8'
      case 'md':
      case 'sm':
        return 'flex flex-row w-full  mt-8'
      case 'xs':
        return 'flex flex-row w-full  mt-8'
      default:
        return 'flex flex-row w-full  mt-8'
    }
  }
  const mainContainerClassNames = getClassNames(viewPort)
  const ulClassNames = getUlClassNames(viewPort)
  return (
    <div className={`${mainContainerClassNames} w-fit `}>
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
                  className="z-[-1] absolute inset-0 dark:bg-neutral-800 rounded-md"
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
                {/* <span className="relative px-[10px] py-[5px]"> */}
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

      <div className="md:block flex justify-start items-center px-2">
        {/* <ToggleThemeButton /> */}
      </div>
    </div>
  )
}

export default SidebarContent
