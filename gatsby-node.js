const path = require('path')
// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
 // from actions we can destructure createPage
  const { createPage } = actions
   // below we will be running two queries at the same time 
   // instead of one query only
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      category: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    })
  })
  result.data.category.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
}
