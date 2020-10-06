import Link from "next/link"
import { styled, A, Text } from "./theme"
import useSearch from "./hooks/useSearch"

export default function SearchPreview() {
  const local = useSearch()
  const { predictions } = local.data

  return (
    <SearchPreviewContainer
      state={local.whenIn({
        searched: "searched",
        searching: "searching",
        default: "closed"
      })}
    >
      {local.isIn("searched") && predictions.length === 0 && (
        <Text>No results.</Text>
      )}
      {local.isInAny("searched", "loading") && (
        <ol>
          {local.data.predictions.map((result, i) => (
            <li key={i}>
              <Link href={result.url} passHref>
                <SearchPreviewLink
                  tabIndex={i + 2}
                  onClick={() => local.send("SELECTED_PREDICTION")}
                  aria-label={result.title}
                >
                  <Text variant="label">{result.category}</Text>
                  <Text variant="ui">{result.title}</Text>
                </SearchPreviewLink>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </SearchPreviewContainer>
  )
}

const SearchPreviewContainer = styled.div({
  position: "absolute",
  top: "100%",
  width: "100%",
  px: "$2",
  bg: "$background",
  "& ol": {
    listStyle: "none",
    ml: 0,
    pl: 0,
    mt: "$0",
    mb: "$2",
    pr: "$0"
  },
  zIndex: 999,
  borderBottom: "none",
  transition: "transform opacity .2s",
  variants: {
    state: {
      searched: {
        transitionDelay: ".2s",
        transform: "translateY(0)",
        opacity: 1,
        visibility: "visible",
        "&:after": {
          // Covers screen behind container and provides gradient that starts from bottom
          zIndex: -1,
          content: "''",
          display: "block",
          position: "absolute",
          top: 16,
          left: -24,
          height: "100%",
          width: "calc(100% + 48px)",
          background:
            "linear-gradient(var(--colors-background) calc(100% - 16px), var(--colors-backgroundFaded) 100%)"
        }
      },
      searching: {
        transitionDelay: ".2s",
        transform: "translateY(0)",
        opacity: 1,
        visibility: "visible"
      },
      closed: {
        transitionDelay: "0s",
        transform: "translateY(-4px)",
        opacity: 0,
        visibility: "hidden"
      }
    }
  }
})

const SearchPreviewLink = styled(A, {
  display: "block",
  px: "$1",
  py: "$1",
  my: 0,
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  borderRadius: 4,
  "&:hover": {
    bg: "$hover",
    color: "$accent"
  },
  "&:focus": {
    bg: "$hover",
    color: "$accent"
  }
})
