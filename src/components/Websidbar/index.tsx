import { MyRoute } from '@/types'
import { FC, useState } from 'react'
import useViewport from '@/hooks/useViewPort'
import getFontClasses from '@/utils/getFontClasses'
import useAppStore from '@/store'
import SidebarContent from './SidebarContent'

type WebSidebarProps = {
  selectedRoute: MyRoute
  setSelectedRoute: React.Dispatch<React.SetStateAction<MyRoute>>
}

const WebSidebar: FC<WebSidebarProps> = ({
  selectedRoute,
  setSelectedRoute,
}) => {
  const viewPort = useViewport()
  const [showSidebar, setShowSidebar] = useState(false)
  const fontClasses = getFontClasses(viewPort)

  const store = useAppStore()

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const onSideBarLinkClick = (title: MyRoute) => {
    setShowSidebar(false)
    setSelectedRoute(title)
    store.setSelectedRoute(title)
  }

  return (
    <>
      <div className="md:block md:w-1/5 ">
        {/* Sidebar content goes here */}
        <SidebarContent
          setSelectedRoute={setSelectedRoute}
          selectedRoute={selectedRoute}
          onSideBarLinkClick={onSideBarLinkClick}
        />
      </div>
    </>
  )
}

export default WebSidebar
