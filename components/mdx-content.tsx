import hydrate from "next-mdx-remote/hydrate"
import { MdxSource } from "../types"
import components from "./mdx-components"

export default function MdxContent({ source }: { source: MdxSource }) {
  const content = hydrate(source, { components })
  return <>{content}</>
}
