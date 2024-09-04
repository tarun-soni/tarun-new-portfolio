import { MyRoute } from '@/types'

export interface LeftSideBarData {
  title: MyRoute
  path: string
}

const leftSideBarData: LeftSideBarData[] = [
  {
    title: '/about',
    path: '/about',
  },
  {
    title: '/talks',
    path: '/talks',
  },
  {
    title: '/blogs',
    path: '/blogs',
  },
  {
    title: '/projects',
    path: '/projects',
  },
]

export default leftSideBarData
