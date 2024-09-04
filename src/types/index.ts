export interface MadeData {
  title?: string
  desc?: string
  alt?: string
  live?: string
  liveURL?: string
  githubURL?: string
  stack?: string[]
  tags?: string[]
  imageURL?: string
}

export interface CardProps<T> {
  data: T
}

export type MyRoute = '/about' | '/talks' | '/blogs' | '/projects'

export type ViewPort = 'xs' | 'sm' | 'md' | 'lg'

export type StoreInitialState = {
  selectedRoute: MyRoute
  setSelectedRoute: (route: MyRoute) => void
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}
