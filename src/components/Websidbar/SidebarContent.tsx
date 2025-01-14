'use client'

import { MyRoute } from '@/types'
import leftSideBarData from '@/utils/leftSidebarData'
import { FC } from 'react'
import useViewport from '@/hooks/useViewPort'
import TypographyDemo from '../Typography'
import ProfilePhoto from '../ProfilePhoto'
import Link from 'next/link'

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
        return 'flex flex-row w-full mt-8'
      case 'xs':
        return 'flex flex-row w-full mt-8'
      default:
        return 'flex flex-row w-full mt-8'
    }
  }

  const mainContainerClassNames = getClassNames(viewPort)
  const ulClassNames = getUlClassNames(viewPort)

  return (
    <div className={`${mainContainerClassNames} w-fit`}>
      <ProfilePhoto viewPort={viewPort} setSelectedRoute={setSelectedRoute} />
      <ul className={ulClassNames}>
        {leftSideBarData.map(link => {
          const selectedTabStyles = `p-2 rounded-sm ${
            selectedRoute === link.title
              ? 'bg-neutral-300 dark:bg-neutral-800'
              : ''
          } hover:bg-neutral-200 dark:hover:bg-neutral-700`

          return (
            <div className="my-4" key={link.path}>
              <Link
                href={link.path}
                onClick={() => onSideBarLinkClick(link.title)}>
                <TypographyDemo
                  type="span"
                  font="font-lexend"
                  className={selectedTabStyles}>
                  {link.title}
                </TypographyDemo>
              </Link>
            </div>
          )
        })}
      </ul>
      <div className="md:block flex justify-start items-center px-2"></div>
    </div>
  )
}

export default SidebarContent
