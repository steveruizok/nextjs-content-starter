import Layout from "../layout"
import Footer from "../footer"

export default function DefaultLayout({ children }) {
  return (
    <Layout>
      <article>
        <main>{children}</main>
      </article>
      <Footer />
    </Layout>
  )
}
