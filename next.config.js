const fs = require("fs")
const path = require("path")
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")
const matter = require("gray-matter")

function getPostList() {
  const root = process.cwd()
  const contentRoot = path.join(root, "content")

  const defaultFrontmatter = {
    title: "Remember to add a title!",
    description: "Remember to add a description!",
    category: "general",
    lastModified: 0,
    order: 999,
    status: "draft",
    keywords: []
  }

  return fs
    .readdirSync(contentRoot)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const filePath = path.join(contentRoot, file)
      const source = fs.readFileSync(filePath, "utf8")
      const slug = file.replace(/\.mdx/, "")
      const { data } = matter(source)

      const { title, category, keywords, status } = {
        ...defaultFrontmatter,
        ...data
      }

      const terms = [
        ...title.split(" ").filter((word) => word.length > 2),
        ...keywords
      ].map((term) => term.toLowerCase())

      const url = "/posts/" + slug

      return {
        title,
        category,
        status,
        terms,
        url
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
