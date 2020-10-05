import Link from "next/link"
import { styled, Image, Span, A } from "./theme"

const FigureLink = styled(A, {
  textAlign: "center",
  display: "block",
  mt: "$3",
  mx: "-$1",
  sm: {
    mx: "-$1"
  },
  md: {
    mx: "-$2"
  },
  lg: {
    mx: "-$2"
  }
})

export default function Figure(props: {
  src: string
  alt: string
  title: "string"
}) {
  return (
    <>
      <Link href={props.src}>
        <FigureLink>
          <Image {...props} loading="lazy" />
        </FigureLink>
      </Link>
      <Span variant="caption">{props.title}</Span>
    </>
  )
}
