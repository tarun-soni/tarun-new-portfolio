export interface MadeData {
  title?: string
  desc?: string
  alt?: string
  liveURL?: string
  githubURL?: string
  stack?: string[]
  tags?: string[]
}

export interface CardProps<T> {
  data: T
}
