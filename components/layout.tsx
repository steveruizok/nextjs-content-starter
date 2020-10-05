import { Divider } from "./theme"
import Head from "next/head"
import Header from "./header"
import { FrontMatter } from "../types"

type Props = Partial<FrontMatter> & {
  children: React.ReactNode
}

const TITLE = "My Content Site"

export default function Layout({
  description = "A content post.",
  title,
  keywords,
  children
}: Props) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ${TITLE}` : TITLE}</title>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content={title ? `${title} - ${TITLE}` : TITLE}
          key="title"
        />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={keywords ? keywords.join(", ") : "design, code"}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Header />
      </header>
      {children}
    </>
  )
}
