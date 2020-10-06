import useTheme from "../hooks/useTheme"
import { styled } from "./core"

/* --------------------- Layout --------------------- */

export const Span = styled("span", {
  variants: {
    variant: {
      caption: {
        margin: "$1",
        lineHeight: 1.3,
        fontSize: "$1",
        fontFamily: "$ui",
        display: "block",
        mb: "$4",
        textAlign: "center"
      }
    }
  }
})

export const Container = styled("div", {
  maxWidth: 720,
  margin: "0px auto",
  p: "$1",
  sm: {
    p: "$2"
  },
  md: {
    p: "$3"
  },
  lg: {
    p: "$4"
  },
  "& sup > a": {
    fontSize: "$0",
    p: 2,
    textDecoration: "none"
  },
  "& .footnotes > ol": {
    p: 0,
    ml: "$1"
  },
  "& .footnotes .footnote-backref": {
    ml: "$0"
  },
  "& .footnotes *": {
    fontSize: "$1",
    lineHeight: 1.32
  },
  "& code": {
    fontFamily: "$monospace",
    color: "$codeText",
    fontSize: "$2"
  },
  "& :not(pre) > code": {
    color: "$inlineCode",
    bg: "$codeBg",
    px: 4,
    borderRadius: 4
  },
  variants: {
    visibility: {
      ready: { visibility: "visible" },
      loading: { visibility: "hidden" }
    }
  }
})

export const Box = styled("div", {})

export const Flex = styled("div", {
  display: "flex"
})

export const Grid = styled("div", {
  display: "grid"
})

export const Nav = styled("nav", {})

export const Footer = styled("footer", {
  py: 4,
  flexDirection: "row",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

export const Divider = styled("hr", {
  py: "$3",
  mx: 0,
  border: "none",
  "&::after": {
    content: "''",
    display: "block",
    width: "100%",
    height: 1,
    borderTop: "1px solid $muted",
    position: "relative",
    top: "50%"
  }
})

export const Blockquote = styled("blockquote", {
  borderLeft: "2px solid $hover",
  py: "$0",
  pr: "$1",
  pl: "$3",
  m: 0,
  md: {
    py: "$1",
    pr: "$2",
    pl: "$3"
  },
  opacity: 0.78,
  bg: "$hover"
})

export const CodeBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  bg: "$codeBg",
  color: "$text",
  my: "$3",
  mx: "-$1",
  px: "$1",
  py: "$2",
  sm: {
    borderRadius: 4,
    mx: "-$1",
    px: "$1",
    py: "$2"
  },
  md: {
    mx: "-$2",
    p: "$2"
  },
  lg: {
    mx: "-$3",
    p: "$3"
  },
  "&:after": {
    fontFamily: "$ui",
    fontSize: "$0",
    color: "$text",
    content: "'Interactive'",
    position: "absolute",
    opacity: 0.3,
    top: 8,
    right: 12
  }
})

export const Footnotes = styled("div", {})

/* --------------------- Inputs --------------------- */

export const Button = styled("button", {
  color: "$muted"
})

/* ------------------- Typography ------------------- */

const heading = {
  fontWeight: 500,
  mt: 0,
  pt: "$1",
  mb: "$2",
  fontFamily: "$heading"
}

export const Title = styled("h1", {
  ...heading,
  fontWeight: 500,
  fontFamily: "$display",
  fontSize: "$6",
  mb: "$4",
  pt: 0
})

export const Heading1 = styled("h1", {
  ...heading,
  fontSize: "$5",
  mb: "$1"
})

export const Heading2 = styled("h2", {
  ...heading,
  fontSize: "$5"
})

export const Heading3 = styled("h3", {
  ...heading,
  fontSize: "$4"
})

export const Heading4 = styled("h4", {
  ...heading,
  fontSize: "$3"
})

export const Heading5 = styled("h5", {
  ...heading,
  fontSize: "$2"
})

export const Heading6 = styled("h6", {
  ...heading,
  fontSize: "$1"
})

export const Text = styled("p", {
  fontSize: "$2",
  fontWeight: 400,
  fontFamily: "$body",
  lineHeight: "$body",
  variants: {
    variant: {
      caption: {
        margin: "$1",
        lineHeight: 1.3,
        fontSize: "$1",
        fontFamily: "$ui"
      },
      ui: {
        margin: 0,
        lineHeight: 1,
        fontFamily: "$ui"
      },
      attr: {
        margin: 0,
        lineHeight: 1.5,
        fontSize: "$1",
        fontFamily: "$ui",
        color: "$muted"
      },
      detail: {
        margin: 0,
        lineHeight: 1.5,
        fontSize: "$1",
        fontFamily: "$ui"
      },
      default: {
        fontSize: "$2",
        fontFamily: "$body"
      },
      label: {
        textTransform: "uppercase",
        color: "$text",
        opacity: 0.82,
        fontSize: "$0",
        letterSpacing: 1,
        mb: "$0",
        mt: 0
      }
    }
  }
})

export const Paragraph = styled("p", {
  fontFamily: "$body",
  fontSize: "$2",
  lineHeight: "$body",
  fontWeight: 400
})

/* ---------------------- Links --------------------- */

export const A = styled("a", {
  cursor: "pointer",
  color: "$text",
  display: "relative",
  fontWeight: 400,
  sm: {
    "&:hover": {
      color: "$accent"
    }
  },
  variants: {
    variant: {
      author: {
        fontWeight: 700,
        color: "$text",
        textDecoration: "none"
      },
      ghost: {
        textDecoration: "none",
        color: "$text",
        "&:hover": {
          textDecoration: "none"
        }
      }
    }
  }
})

export const BoxLink = styled("a", {
  display: "block",
  cursor: "pointer",
  borderRadius: 4,
  color: "$text",
  textDecoration: "none",
  p: "$1",
  mx: "-$1",
  sm: {
    p: "$1",
    mx: "-$1",
    "&:hover": {
      bg: "$hover",
      color: "$text"
    }
  },
  md: {
    p: "$2",
    mx: "-$2"
  },
  lg: {
    p: "$2",
    mx: "-$2"
  }
})

/* --------------------- Images --------------------- */

export const Avatar = styled("img", {
  borderRadius: "100%",
  overflow: "hidden",
  height: 40,
  width: 40
})

export const Image = styled("img", {
  maxWidth: "100%",
  height: "auto",
  color: "$text",
  borderRadius: 0,
  sm: {
    borderRadius: 4
  }
})

/* ------------------- Code Blocks ------------------ */

export const Pre = styled("pre", {
  fontFamily: "$monospace",
  lineHeight: "$code",
  fontSize: "$1",
  overflowX: "scroll",
  bg: "$codeBg",
  my: "$3",
  mx: "-$1",
  px: "$1",
  py: "$2",
  sm: {
    borderRadius: 4,
    mx: "-$1",
    px: "$1",
    py: "$2"
  },
  md: {
    mx: "-$2",
    p: "$2"
  },
  lg: {
    mx: "-$3",
    p: "$3"
  },
  "& code": {
    color: "$codeText"
  }
})

export const Code = styled("code", { fontFamily: "$monospace" })

/* --------------------- Tables --------------------- */

export const Table = styled("table", {
  fontFamily: "$body",
  fontSize: "$2",
  mt: "$2",
  mb: "$4",
  borderCollapse: "collapse"
})

export const THead = styled("thead", {
  textAlign: "left",
  th: { padding: "$1 $3 $1 0", borderBottom: "1px solid $muted" }
})

export const TR = styled("tr", {})

export const TD = styled("td", { padding: "$2 $3 0 0" })

/* ---------------------- Lists --------------------- */

export const OrderedList = styled("ol", {
  fontFamily: "$body",
  fontSize: "$2",
  "& li": {
    my: "$1"
  }
})

export const UnorderedList = styled("ul", {
  fontFamily: "$body",
  fontSize: "$2",
  "& li": {
    my: "$1"
  }
})

export const IconButton = styled.button({
  p: 0,
  height: 48,
  width: 48,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$text",
  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  borderRadius: 4,
  sm: {
    "&:hover": {
      bg: "$hover",
      color: "$accent"
    }
  },
  variants: {
    variant: {
      fadeIn: {
        opacity: 0,
        animation: ".2s ease-in 0s 1 forwards both running fadeIn"
      }
    }
  }
})

/* --------------------- Special -------------------- */

export function CodeSandbox({
  id,
  height = 500
}: {
  id: string
  height?: number
}) {
  const { theme } = useTheme()

  return (
    <CodeBox>
      <iframe
        src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=${theme}`}
        style={{
          width: "100%",
          height,
          border: "none",
          borderRadius: 4,
          overflow: "hidden"
        }}
        title={id}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </CodeBox>
  )
}

export const Callout = styled("blockquote", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridAutoFlow: "column",
  gridGap: "$1",
  borderRadius: 4,
  py: "$1",
  pr: "$1",
  pl: "$2",
  my: "$3",
  mx: 0,
  md: {
    py: "$2",
    pr: "$2"
  },
  opacity: 1,
  bg: "$hover",
  fontSize: "$2",
  "&::before": {
    content: "'💡'",
    display: "block",
    fontSize: "$3"
  },
  variants: {
    variant: {
      tip: {
        "&::before": {
          content: "'👉'",
          fontSize: "$3"
        }
      },
      warn: {
        "&::before": {
          content: "'⚠️'",
          fontSize: "$3"
        }
      }
    }
  }
})
