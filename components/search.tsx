import Link from "next/link"
import { useRef, useEffect } from "react"
import { styled, IconButton } from "./theme"
import useTheme from "./hooks/useTheme"
import useSearch, { state } from "./hooks/useSearch"
import { Search as SearchIcon, X, Loader, ChevronRight } from "react-feather"

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  alignItems: "center",
  gap: "$0"
})

const Lockup = styled("a", {
  cursor: "pointer",
  transition: "transform opacity .16s",
  transitionDelay: "0s",
  gridArea: "1/1",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  py: "$0",
  px: "$1",
  mx: "-$1",
  md: {
    px: "$2",
    mx: "-$2"
  },
  variants: {
    state: {
      open: {
        transform: "translateX(-16px)",
        opacity: 0
      },
      closed: {
        transform: "translateX(0px)",
        opacity: 1,
        transitionDelay: ".16s"
      }
    },
    mode: {
      dark: {},
      light: {}
    }
  }
})

const SearchForm = styled.form({
  display: "flex",
  alignItems: "center",
  gridColumn: "1 / 3",
  gridRow: "1",
  transition: "all .16s",
  variants: {
    state: {
      open: {
        transform: "translateX(0px)",
        visibility: "visible",
        opacity: 1,
        transitionDelay: ".16s"
      },
      closed: {
        transform: "translateX(8px)",
        visibility: "hidden",
        opacity: 0,
        transitionDelay: "0s"
      }
    }
  }
})

const LoaderWrapper = styled.div({
  height: "fit-content",
  width: "fit-content",
  display: "inline",
  opacity: 0,
  animation: ".25s ease-in .12s 1 forwards both running fadeIn",
  "& > *": {
    animation: "2s linear 0s infinite forwards both running rotate"
  }
})

const Input = styled("input", {
  background: "transparent",
  backgroundColor: "transparent",
  outline: "none",
  border: "none",
  color: "$text",
  fontFamily: "$body",
  fontSize: "$1",
  flexGrow: 2,
  py: "$1",
  px: "$2",
  caretColor: "$accent"
})

export default function Search({ children }: { children: React.ReactNode }) {
  const local = useSearch()
  const { theme } = useTheme()
  const isOpen = local.isIn("open")
  const rInput = useRef<HTMLInputElement>()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => rInput.current?.focus(), 200)
    }
  }, [isOpen])

  return (
    <Container>
      <Link href="/" aria-label="Home">
        <Lockup
          mode={theme === "dark" ? "dark" : "light"}
          state={isOpen ? "open" : "closed"}
        >
          {children}
        </Lockup>
      </Link>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault()
          state.send("SUBMITTED_QUERY")
        }}
        state={isOpen ? "open" : "closed"}
      >
        <SearchIcon size={20} />
        <Input
          ref={rInput}
          placeholder="Search"
          autoCorrect="false"
          spellCheck="false"
          tabIndex={1}
          value={local.data.inputValue}
          onChange={(e) =>
            state.send("CHANGED_INPUT_VALUE", e.currentTarget.value)
          }
        />
        {local.isInAny("full", "searching") && (
          <IconButton
            onClick={() => local.send("SUBMITTED_SEARCH")}
            aria-label="Submit Search"
          >
            {local.whenIn({
              searching: (
                <LoaderWrapper>
                  <Loader size={20} stroke="var(--colors-accent)" />
                </LoaderWrapper>
              ),
              full: <ChevronRight size={20} />
            })}
          </IconButton>
        )}
      </SearchForm>
      <IconButton
        onClick={() => state.send("TOGGLED_OPEN")}
        aria-label="Toggle Search"
      >
        {isOpen ? <X size={20} /> : <SearchIcon size={20} />}
      </IconButton>
    </Container>
  )
}
