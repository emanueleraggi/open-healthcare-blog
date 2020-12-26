import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid
const IndexPage = () => {
  return (
    // <h2>home page</h2>
    <Layout>
      {/* home page */}
      <Hero showPerson/>
    </Layout>
  )
}

export default IndexPage
