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
    title: '/projects',
    path: '/projects',
  },
  {
    title: '/blogs',
    path: '/blogs',
  },
]

export default leftSideBarData
