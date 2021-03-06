import { createStyled } from "@stitches/react"
import utils from "./utils"

const { styled, css } = createStyled({
  tokens: {
    colors: {
      $text: "rgba(10,10,10,1)",
      $background: "rgba(245, 245, 245, 1)",
      $backgroundFaded: "rgba(245, 245, 245, 0)",
      $muted: "rgba(10,10,10,.16)",
      $accent: "rgba(2, 101, 214, 1.000)",
      $hover: "rgba(144, 144, 144, .1)",
      // code blocks
      $codeBg: "rgba(144, 144, 144, 0.10)",
      $codeText: "#24292e",
      $inlineCode: "#24292e",
      $codeSelectionText: "#263238",
      $codeSelectionBg: "#cceae7",
      $syntaxOperator: "#d63a4a",
      $syntaxPunctuation: "#444a40",
      $syntaxVariable: "#6f42c1",
      $syntaxAltVariable: "#005cc5",
      $syntaxKeyword: "#d73a49",
      $syntaxAtom: "#005cc5",
      $syntaxString: "#22863a",
      $syntaxQualifier: "#6f42c1",
      $syntaxType: "#d73a49",
      $syntaxComment: "#63676a",
      $syntaxTag: "#005cc5",
      $syntaxAttribute: "#6f42c1",
      $syntaxLink: "#032f62",
      $syntaxHeader: "#0000ff"
    },
    lineHeights: {
      $body: "1.7",
      $code: "1.55"
    },
    space: {
      $0: "8px",
      $1: "16px",
      $2: "24px",
      $3: "32px",
      $4: "40px",
      $5: "48px",
      $6: "64px",
      $7: "80px",
      $8: "96px",
      $9: "128px"
    },
    fontSizes: {
      $0: "12px",
      $code: "15px",
      $1: "16px",
      $2: "18px",
      $3: "20px",
      $4: "24px",
      $5: "28px",
      $6: "36px"
    },
    fonts: {
      $body: "Helvetica Neue, system-ui, sans-serif",
      $ui: "Helvetica Neue, system-ui, sans-serif",
      $heading: "Helvetica Neue, system-ui, sans-serif",
      $display: "Helvetica Neue, system-ui, sans-serif",
      $monospace: "'Roboto Mono', monospace"
    }
  },
  breakpoints: {
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1240px) { ${rule} }`
  },
  utils
})

const lightTheme = css.theme({})

const darkTheme = css.theme({
  colors: {
    $text: "rgba(232, 232, 232, 1.000)",
    $background: "rgba(10,10,10, 1.000)",
    $backgroundFaded: "rgba(10,10,10, 0)",
    $muted: "rgba(232, 232, 232, 0.16)",
    $accent: "rgba(29, 161, 241, 1.000)",
    $hover: "rgba(144, 144, 144, .06)",
    // code blocks
    $codeBg: "#141414",
    $codeText: "#d1d5da",
    $inlineCode: "#FF5DE0",
    $codeSelectionText: "#eeeeee",
    $codeSelectionBg: "#363636",
    $syntaxOperator: "#d1d5da",
    $syntaxPunctuation: "#79b8ff",
    $syntaxVariable: "#b392f0",
    $syntaxAltVariable: "#79b8ff",
    $syntaxKeyword: "#f97583",
    $syntaxAtom: "#79b8ff",
    $syntaxString: "#ffab70",
    $syntaxQualifier: "#b392f0",
    $syntaxType: "#f97583",
    $syntaxComment: "#959da5",
    $syntaxTag: "#34d058",
    $syntaxAttribute: "#b392f0",
    $syntaxLink: "#79b8ff",
    $syntaxHeader: "#f97583"
  }
})

css.global({
  "*": {
    boxSizing: "border-box"
  },
  html: {
    margin: 0,
    padding: 0
  },
  body: {
    backgroundColor: "$background",
    color: "$text",
    fontFamily: "$body",
    fontSize: "$2",
    lineHeight: "$body",
    fontWeight: 400,
    letterSpacing: "normal",
    padding: 0,
    margin: 0
  },
  "pre[class*='language-']": {
    fontSize: "$code",
    backgroundColor: "$codeBg",
    color: "$codeText"
  },
  ".token.number": {
    color: "$syntaxAtom"
  },
  ".token.attr-name,.attribute": {
    color: "$syntaxAttribute"
  },
  ".token.attr-value,.pseudo-element,.pseudo-class,.string": {
    color: "$syntaxString"
  },
  ".token.atrule,.boolean,.constant,.hexcode,.id,.important,.keyword,.symbol": {
    color: "$syntaxKeyword"
  },
  ".token.hexcode,.unit,.cdata,.class,.inserted,Helvetica Neueolation-punctuation": {
    color: "$syntaxAltVariable"
  },
  ".token.regex,.function,.method,.variable,.maybe-class-name": {
    color: "$syntaxAltVariable"
  },
  ".token.comment,.doctype,.prolog": {
    color: "$syntaxComment"
  },
  ".token.deleted,.entity,.url,.selector,.type": {
    color: "$syntaxVariable"
  },
  ".token > .tag, .token.tag > .punctuation": {
    color: "$syntaxTag"
  },
  ".token.punctuation": {
    color: "$syntaxPunctuation"
  },
  ".token.operator": {
    color: "$syntaxOperator"
  },
  ".token.builtin": {
    color: "$syntaxLink"
  }
})

export { styled, css, lightTheme, darkTheme }
