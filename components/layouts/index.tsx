import Layout from "../layout"

export default function DefaultLayout({ children }) {
  return (
    <Layout>
      <article>
        <main>{children}</main>
      </article>
    </Layout>
  )
}
