export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export interface FrontMatter {
  title: string
  date: number
  description: string
  category: string
  status: string
  order: number
  keywords: string[]
  readingTime: ReadingTime
  author: string
}

export interface PostLite {
  title: string
  category: string
  status: string
  terms: string[]
  url: string
  readingTime: ReadingTime
  date: number
  author: string
}

export interface PostsByCategory {
  [key: string]: PostLite[]
}

export type PostHeader = [number, string, string]

export interface Post {
  content: string
  headers: PostHeader[]
  frontMatter: FrontMatter
  slug: string
  url: string
}

export interface MdxSource {
  compiledSource: string
  renderedOutput: string
  scope: { [key: string]: any }
}

export interface PostWithMdx extends Post {
  mdxSource: MdxSource
}
