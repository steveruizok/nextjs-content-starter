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
  "&:hover > *": {
    color: "$accent",
    transform: "translateX(4px)"
  },
  "& > *": {
    transition: "transform .2s"
  },
  "& h2": {
    pt: 0,
    fontSize: "$5",
    my: 0
  }
})

export default function PostLink(props: PostLite) {
  const { title, status, url, date, author } = props

  return (
    <li>
      <Link href={url}>
        <LinkContainer href={url} aria-label={title}>
          <Heading2>
            {title}
            {status === "draft" && "*"}
          </Heading2>
          <Text variant="detail">
            {author} •{" "}
            {new Date(date).toLocaleDateString("en-us", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })}
          </Text>
        </LinkContainer>
      </Link>
    </li>
  )
}
