interface LeftSideBarData {
  title: string;
  path: string;
  // icon: JSX.Element;
}

const leftSideBarData: LeftSideBarData[] = [
  {
    title: '/wrote',
    path: '/wrote',
    // icon: <FaIcons.FaBook />,
  },
  {
    title: '/developed',
    path: '/developed',
    // icon: <FaIcons.FaCode />,
  },
  {
    title: '/talked-about',
    path: '/talked-about',
    // icon: <FaIcons.FaComment />,
  },
];

export default leftSideBarData;
