import React from "react"
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document"

import { css } from "../components/theme"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    try {
      let extractedStyles
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage)
        extractedStyles = styles
        return result
      }

      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles.map((content, index) => (
              <style
                key={index}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
          </>
        )
      }
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
