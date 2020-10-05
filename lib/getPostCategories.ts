import searchPosts from "./post-list.json"
import { PostsByCategory } from "../types"

/**
 * Returns posts organized by their category.
 */
export function getPostCategories(): PostsByCategory {
  return searchPosts.reduce((acc, cur) => {
    const { category } = cur

    if (acc[category] === undefined) {
      acc[category] = [cur]
    } else {
      acc[category].push(cur)
    }
    return acc
  }, {})
}
