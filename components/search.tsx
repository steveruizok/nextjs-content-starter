import Link from "next/link"
import { useRef, useEffect } from "react"
import { styled, IconButton } from "./theme"
import useTheme from "./hooks/useTheme"
import useSearch, { state } from "./hooks/useSearch"
import { Search as SearchIcon, X, Loader, ChevronRight } from "react-feather"

export default function Search({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  const local = useSearch()
  const isOpen = local.isIn("open")

  return (
    <Container>
      <Link href="/" aria-label="Home">
        <Lockup
          mode={theme === "dark" ? "dark" : "light"}
          state={isOpen ? "open" : "closed"}
        >
          {children /* Site icon or title*/}
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
        <SearchInput />
      </SearchForm>
      {local.whenIn({
        searching: <LoadingIcon />,
        loading: <LoadingIcon />,
        full: <SubmitButton />
      })}
      <ToggleButton isOpen={isOpen} />
    </Container>
  )
}

function LoadingIcon() {
  return (
    <LoaderWrapper>
      <Loader size={20} stroke="var(--colors-accent)" />
    </LoaderWrapper>
  )
}

function SubmitButton() {
  return (
    <IconButton
      onClick={() => state.send("SUBMITTED_SEARCH")}
      aria-label="Submit Search"
      variant="fadeIn"
    >
      <ChevronRight size={20} />
    </IconButton>
  )
}

function ToggleButton({ isOpen }: { isOpen: boolean }) {
  return (
    <IconButton
      onClick={() => state.send("TOGGLED_OPEN")}
      aria-label="Toggle Search"
    >
      {isOpen ? <X size={20} /> : <SearchIcon size={20} />}
    </IconButton>
  )
}

function SearchInput() {
  const rFocused = useRef(false)
  const rInput = useRef<HTMLInputElement>()
  const local = useSearch()
  const isOpen = local.isIn("open")

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => rInput.current?.focus(), 200)
    }
  }, [isOpen])

  function handleFocus() {
    rFocused.current = true
  }

  function handleBlur() {
    rFocused.current = false
    setTimeout(() => {
      if (local.isIn("open") && rFocused.current === false) {
        local.send("DISMISSED")
      }
    }, 200)
  }

  return (
    <Input
      ref={rInput}
      placeholder="Search"
      autoCorrect="false"
      spellCheck="false"
      tabIndex={1}
      value={local.data.inputValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={(e) => {
        state.send("CHANGED_INPUT_VALUE", e.currentTarget.value)
      }}
    />
  )
}

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
  height: 48,
  width: 48,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  animation: ".25s ease-in 0s 1 forwards both running fadeIn",
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
