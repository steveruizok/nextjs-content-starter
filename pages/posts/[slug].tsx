import fs from "fs"
import path from "path"
import { GetStaticProps } from "next"
import PostLayout from "../../components/layouts/post"
import MdxContent from "../../components/mdx-content"
import { getPostWithMdx } from "../../lib/getPostWithMdx"
import { PostWithMdx } from "../../types"

export default function BlogPost(props: PostWithMdx) {
  return (
    <PostLayout {...props}>
      <MdxContent source={props.mdxSource} />
    </PostLayout>
  )
}

export const getStaticProps: GetStaticProps = async (
  context
): Promise<{ props: PostWithMdx }> => {
  const {
    params: { slug }
  } = context

  const post = await getPostWithMdx(Array.isArray(slug) ? slug[0] : slug)

  return {
    props: post
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(process.cwd(), "content"))
      .filter((p) => p.includes(".mdx"))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } }))
  }
}
