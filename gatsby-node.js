// const path = require('path')
const sharp = require('sharp')

sharp.cache(false)
sharp.simd(true)

// // create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allMdx {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
//     createPage({
//       path: `/posts/${slug}`,
//       component: path.resolve(`src/templates/post-template.js`),
//       context: {
//         slug,
//       },
//     })
//   })
// }
