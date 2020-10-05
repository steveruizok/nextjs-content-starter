import path from "path"
import fs from "fs"
import getPostFromSource from "./getPostFromSource"
import { Post } from "../types"

const root = process.cwd()

/**
 * Returns a full post (frontmatter and content).
 * @param slug The slug of the post, like "my-first-post".
 */
export function getPostFromSlug(slug: string): Post {
  const filePath = path.join(root, "content", `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")
  const stats = fs.statSync(filePath)

  return getPostFromSource(source, slug, stats.mtimeMs)
}
