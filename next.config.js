// @ts-check

const fs = require("fs")
const path = require("path")
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")
const matter = require("gray-matter")
const getReadingTime = require("reading-time")

function getPostList() {
  const root = process.cwd()
  const contentRoot = path.join(root, "content")

  const defaultFrontmatter = {
    title: "Remember to add a title!",
    description: "Remember to add a description!",
    category: "general",
    date: "10 Jan 2021",
    order: 999,
    status: "draft",
    author: "Steve",
    readingTime: {
      text: "1 min read",
      minutes: 1,
      time: 60000,
      words: 200
    },
    keywords: []
  }

  return fs
    .readdirSync(contentRoot)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const filePath = path.join(contentRoot, file)
      const source = fs.readFileSync(filePath, "utf8")
      const slug = file.replace(/\.mdx/, "")

      const url = "/posts/" + slug

      const { content, data } = matter(source)

      const readingTime = getReadingTime(content)

      const { title, category, keywords, status, date, author } = {
        ...defaultFrontmatter,
        ...data
      }

      const terms = [
        ...title.split(" ").filter((word) => word.length > 2),
        ...keywords
      ].map((term) => term.toLowerCase())

      return {
        title,
        category,
        status,
        terms,
        url,
        author,
        date: Date.parse(date),
        readingTime
      }
    })
}

module.exports = (phase, { defaultConfig }) => {
  let postList = getPostList()

  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    postList = postList.filter((post) => post.status === "published")
  }

  fs.writeFileSync("lib/post-list.json", JSON.stringify(postList))

  return defaultConfig
}
