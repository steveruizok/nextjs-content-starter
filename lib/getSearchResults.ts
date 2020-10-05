import searchPosts from "./post-list.json"
import { PostLite } from "../types"

/**
 * Returns frontmatter for posts with titles that match a search string.
 * @param search
 */
export function getSearchResults(search: string): PostLite[] {
  const postsData = searchPosts.filter(({ terms }) => terms.includes(search))
  return postsData
}
