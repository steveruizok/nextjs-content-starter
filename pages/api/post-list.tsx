import { NextApiRequest, NextApiResponse } from "next"
import { getAllPostsLite } from "../../lib/getAllPostsLite"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const posts = getAllPostsLite()

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(posts))
}
