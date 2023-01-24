export interface LeftSideBarData {
  title: '/wrote' | '/made' | '/talked'
  path: string
  // icon: JSX.Element;
}

const leftSideBarData: LeftSideBarData[] = [
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
  {
    title: '/talked',
    path: '/talked',
    // icon: <FaIcons.FaComment />,
  },
]

export default leftSideBarData
