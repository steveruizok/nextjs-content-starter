import { Title } from "../theme"
import MdxContent from "../mdx-content"
import Layout from "../layout"
import { PostWithMdx } from "../../types"

export default function PageLayout({ mdxSource, frontMatter }: PostWithMdx) {
  const { title } = frontMatter

  return (
    <Layout {...frontMatter}>
      <article>
        <header>
          <Title>{title}</Title>
        </header>
        <main>
          <MdxContent source={mdxSource} />
        </main>
      </article>
    </Layout>
  )
}
