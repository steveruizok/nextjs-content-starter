import { NextApiRequest, NextApiResponse } from "next"
import { getSearchResults } from "../../../lib/getSearchResults"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { search }
  } = req

  const posts = getSearchResults(Array.isArray(search) ? search[0] : search)

  if (!posts) {
    res.statusCode = 400
    res.end(JSON.stringify({ posts: [] }))
    return
  }

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(posts))
}
