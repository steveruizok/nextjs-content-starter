import Figure from "./figure"
import * as C from "./theme"

/* Note -------
These components are fed into both the `hydrate` function in `mdx-content`
and the `renderToString` function in `lib/getPostWithMdx`. It is critical
that both functions recieve the same components, so they are defined
together here.

If you want to make more components available in MDX, add them here.*/

export default {
  a: C.A,
  blockquote: C.Blockquote,
  code: C.Code,
  h1: C.Heading1,
  h2: C.Heading2,
  h3: C.Heading3,
  h4: C.Heading4,
  h5: C.Heading5,
  h6: C.Heading6,
  hr: C.Divider,
  img: Figure,
  ol: C.OrderedList,
  p: C.Paragraph,
  pre: C.Pre,
  table: C.Table,
  td: C.TD,
  thead: C.THead,
  tr: C.TR,
  ul: C.UnorderedList,
  Callout: C.Callout,
  CodeBox: C.CodeBox,
  CodeSandbox: C.CodeSandbox
}
