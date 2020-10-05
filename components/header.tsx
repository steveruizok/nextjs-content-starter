import useTheme from "./hooks/useTheme"
import { useRouter } from "next/router"
import { Search as SearchIcon, Sun } from "react-feather"
import { styled, A, Text, IconButton, Grid } from "./theme"
import debounce from "lodash/debounce"
import SearchPreview from "./search-preview"
import Search from "./search"

const Container = styled(Grid, {
  mt: 0,
  mb: "$5",
  gridTemplateColumns: "1fr repeat(4, auto)",
  gridGap: 0,
  alignItems: "center",
  justifyContent: "space-between",
  font: "$ui",
  mr: "-$0",
  sm: {
    mt: "$2",
    mr: "-$1"
  }
})

export default function Header() {
  const { toggle } = useTheme()

  return (
    <div style={{ position: "relative" }}>
      <Container>
        <Search>
          <Text variant="ui">
            <b>My Content Site</b>
          </Text>
        </Search>
        <IconButton onClick={toggle} aria-label="Toggle Theme">
          <Sun size={20} />
        </IconButton>
      </Container>
      <SearchPreview />
    </div>
  )
}
