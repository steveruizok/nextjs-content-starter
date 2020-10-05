import PostLink from "../components/post-link"
import IndexLayout from "../components/layouts/index"
import { styled, Text, Title } from "../components/theme"
import sortBy from "lodash/sortBy"
import { GetServerSideProps } from "next"
import { getSearchResults } from "../lib/getSearchResults"
import { PostLite } from "../types"

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

type Props = { search: string; posts: PostLite[] }

export default function SearchPage({ search, posts }: Props) {
  return (
    <IndexLayout>
      <header>
        <Title>Search</Title>
        <Text>
          Found {posts.length} results for <b>{search}</b>.
        </Text>
      </header>
      <PostList>
        <ol>
          {sortBy(posts, "frontMatter.dateModified").map((post) => (
            <PostLink key={post.url} {...post} />
          ))}
        </ol>
      </PostList>
    </IndexLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: { search: string; posts: PostLite[] } }> => {
  const {
    query: { q }
  } = context

  const search = Array.isArray(q) ? q[0] : q
  const posts = getSearchResults(search)

  return {
    props: { search, posts }
  }
}
