import searchPosts from "./post-list.json"
import { PostLite } from "../types"

/**
 * Returns only the contents of the post-list JSON file.
 */
export function getAllPostsLite(): PostLite[] {
  return searchPosts
}
