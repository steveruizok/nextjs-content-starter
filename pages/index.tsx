import PostLink from "../components/post-link"
import IndexLayout from "../components/layouts/index"
import { styled } from "../components/theme"
import sortBy from "lodash/sortBy"
import { PostsByCategory } from "../types"
import { getPostCategories } from "../lib/getPostCategories"

const categoryOrder = ["general", "integrations", "design"]

const PostList = styled.section({
  "& ol": {
    listStyle: "none",
    pl: 0,
    mb: "$4"
  },
  "& li": {
    my: 0
  }
})

const CategoryHeader = styled.h1({
  fontWeight: 400,
  fontSize: "$1",
  textTransform: "uppercase",
  letterSpacing: 1
})

type Props = { postsByCategory: PostsByCategory }

export default function IndexPage({ postsByCategory }: Props) {
  const categories = sortBy(Object.entries(postsByCategory), ([category]) =>
    categoryOrder.includes(category) ? categoryOrder.indexOf(category) : 999
  )

  return (
    <IndexLayout>
      {categories.map(([category, posts]) => {
        return (
          <PostList key={category}>
            <CategoryHeader>
              {category[0].toUpperCase() + category.slice(1)}
            </CategoryHeader>
            <ol>
              {sortBy(posts, "frontMatter.order").map((post) => (
                <PostLink key={post.url} {...post} />
              ))}
            </ol>
          </PostList>
        )
      })}
    </IndexLayout>
  )
}

export async function getStaticProps() {
  const postsByCategory = getPostCategories()

  return { props: { postsByCategory } }
}
