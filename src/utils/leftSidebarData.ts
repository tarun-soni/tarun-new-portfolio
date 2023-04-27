export interface LeftSideBarData {
  title: '/wrote' | '/made' | '/talked' | '/about'
  path: string
  // icon: JSX.Element;
}

const leftSideBarData: LeftSideBarData[] = [
  {
    title: '/about',
    path: '/about',
  },
  {
    title: '/talked',
    path: '/talked',
    // icon: <FaIcons.FaComment />,
  },
  {
    title: '/wrote',
    path: '/wrote',
    // icon: <FaIcons.FaBook />,
  },
  {
    title: '/made',
    path: '/made',
    // icon: <FaIcons.FaCode />,
  },
]

export default leftSideBarData
