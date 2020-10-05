import renderToString from "next-mdx-remote/render-to-string"
import components from "../components/mdx-components"
import { PostWithMdx, MdxSource } from "../types"
import { getPostFromSlug } from "./getPostFromSlug"

/**
 * Get a post with its MDX source.
 * @param slug
 */
export async function getPostWithMdx(slug: string): Promise<PostWithMdx> {
  const post = getPostFromSlug(slug)

  const mdxSource: MdxSource = await renderToString(post.content, {
    components,
    mdxOptions: {
      fileExtensions: ["mdx", "md"],
      remarkPlugins: [require("@ngsctt/remark-smartypants")],
      rehypePlugins: [require("@mapbox/rehype-prism"), require("rehype-slug")]
    },
    scope: {}
  })
  return { ...post, mdxSource }
}
