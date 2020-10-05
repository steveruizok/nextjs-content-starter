import { useState, useEffect } from "react"
import { Container } from "../components/theme"
import Head from "next/head"
import { state as searchState } from "../components/hooks/useSearch"

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleClick() {
      searchState.send("DISMISSED")
    }

    document.body.addEventListener("click", handleClick)
    return () => document.body.addEventListener("click", handleClick)
  }, [])

  return (
    <Container visibility={mounted ? "ready" : "loading"}>
      <Head>
        <title>Title</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="My Site" key="title" />
        <meta property="og:type" content="website" />
        <meta name="description" content="A blazing-fast content site." />
        <meta name="keywords" content="design, code" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
