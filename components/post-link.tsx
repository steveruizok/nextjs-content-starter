import { styled, Grid, Footer, Heading2, Text, BoxLink, A } from "./theme"
import Link from "next/link"
import { PostLite } from "../types"

const LinkContainer = styled(BoxLink, {
  px: "$1",
  py: "$1",
  textDecoration: "none",
  sm: {
    my: 0
  },
  "&:hover h2": {
    color: "$accent",
    transform: "translateX(4px)"
  },
  "& h2": {
    pt: 0,
    fontSize: "$5",
    my: 0,
    transition: "transform .2s"
  }
})

export default function PostLink(props: PostLite) {
  const { title, status, url } = props

  return (
    <li>
      <Link href={url}>
        <LinkContainer href={url} aria-label={title}>
          <Heading2>
            {title}
            {status === "draft" && "*"}
          </Heading2>
        </LinkContainer>
      </Link>
    </li>
  )
}
