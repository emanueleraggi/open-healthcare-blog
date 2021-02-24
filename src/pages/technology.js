import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
// ...GatsbyImageSharpFluid


const technology = () => {
    return (
        <Layout>
            <Hero />
            <h2>technology page</h2>
        </Layout>
    )
}

export default technology
