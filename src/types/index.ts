import { LeftSideBarData } from '@/utils/leftSidebarData'

export interface MadeData {
  title?: string
  desc?: string
  alt?: string
  live?: string
  liveURL?: string
  githubURL?: string
  stack?: string[]
  tags?: string[]
}

export interface CardProps<T> {
  data: T
}

export type MidComponentTitles = LeftSideBarData['title'] | '/about'

export type ViewPort = 'xs' | 'sm' | 'md' | 'lg'
