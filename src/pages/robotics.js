import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
// ...GatsbyImageSharpFluid

const robotics = () => {
    return (
        <Layout>
            <Hero />
            <h2>robotics page</h2>
        </Layout>
    )
}

export default robotics
