export interface FrontMatter {
  title: string
  lastModified: number
  description: string
  category: string
  status: string
  order: number
  keywords: string[]
}

export interface PostLite {
  title: string
  category: string
  status: string
  terms: string[]
  url: string
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
