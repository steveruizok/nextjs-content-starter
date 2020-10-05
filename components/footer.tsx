import { A, Divider, Text } from "./theme"

export default function Footer() {
  return (
    <footer>
      <Text css={{ mt: "$8" }} variant="detail">
        © 2020 <A href="https://twitter.com/steveruizok">Steve Ruiz</A>
      </Text>
    </footer>
  )
}
