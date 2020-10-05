import { NextApiRequest, NextApiResponse } from "next"
import { getPostFromSlug } from "../../../lib/getPostFromSlug"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug }
  } = req

  const post = getPostFromSlug(Array.isArray(slug) ? slug[0] : slug)

  if (!post) {
    res.statusCode = 400
    return
  }

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(post))
}
