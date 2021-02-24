import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
//import wwww from  '../../src/assets'
// ...GatsbyImageSharpFluid

const PostsPage = ({ data }) => {
  const {allMdx: {
    nodes:posts}} = data;

  return (
    // <h2>posts page</h2>
    <Layout>
      <Hero />
      <Posts posts={posts} title="all posts"/>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`



export default PostsPage
