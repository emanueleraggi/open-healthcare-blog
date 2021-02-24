import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
// ...GatsbyImageSharpFluid


const healthcare = () => {
    return (
        <Layout>
            <Hero />
            <h2>healthcare page</h2>
        </Layout>
    )
}

export default healthcare
