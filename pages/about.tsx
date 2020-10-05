import PageLayout from "../components/layouts/page"
import { getPostWithMdx } from "../lib/getPostWithMdx"
import { PostWithMdx } from "../types"

export default function Page(props: PostWithMdx) {
  return <PageLayout {...props} />
}

export async function getStaticProps(): Promise<{ props: PostWithMdx }> {
  const post = await getPostWithMdx("pages/about")

  return {
    props: post
  }
}
