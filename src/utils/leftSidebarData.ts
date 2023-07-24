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
    title: '/talked',
    path: '/talked',
  },
  {
    title: '/wrote',
    path: '/wrote',
  },
  {
    title: '/made',
    path: '/made',
  },
]

export default leftSideBarData
