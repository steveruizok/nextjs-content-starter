import useTheme from "./hooks/useTheme"
import { Sun } from "react-feather"
import { styled, A, Text, IconButton, Grid } from "./theme"
import SearchPreview from "./search-preview"
import Search from "./search"

const HeaderWrapper = styled.div({
  position: "relative"
})

const HeaderContainer = styled(Grid, {
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
    <HeaderWrapper>
      <HeaderContainer>
        <Search>
          <Text variant="ui">
            <b>My Content Site</b>
          </Text>
        </Search>
        <IconButton onClick={toggle} aria-label="Toggle Theme">
          <Sun size={20} />
        </IconButton>
      </HeaderContainer>
      <SearchPreview />
    </HeaderWrapper>
  )
}
