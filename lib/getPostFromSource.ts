import matter from "gray-matter"
import matchAll from "string.prototype.matchall"
import slugger from "github-slugger"
import { FrontMatter, PostHeader, Post } from "../types"

matchAll.shim()

const defaultFrontmatter: FrontMatter = {
  title: "Remember to add a title!",
  description: "Remember to add a description!",
  category: "general",
  lastModified: 0,
  order: 999,
  status: "draft",
  keywords: [""]
}

/**
 * Get a processed post from the file system.
 * @param source
 * @param slug
 */
export default function getPostFromSource(
  source: string,
  slug: string,
  lastModified: number
): Post {
  const { content, data } = matter(source)
  const fm = {
    ...defaultFrontmatter,
    ...data
  }

  const url = "/posts/" + slug

  let headers: PostHeader[] = Array.from(
    content.matchAll(/^#{1,2}\s(.*)/gm)
  ).map((match) => {
    const level = match[0].split(" ")[0]?.length
    const header = match[1]
    const id = slugger.slug(header)
    return [level, header, `${url}/#${id}`]
  })

  return {
    content,
    frontMatter: {
      ...fm,
      keywords: fm.keywords.map((keyword) => keyword.toLowerCase()),
      status: fm.status,
      lastModified
    },
    headers,
    slug,
    url
  }
}
