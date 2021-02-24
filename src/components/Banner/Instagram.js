// import React from 'react'
// import Title from './Title'
// import Image from 'gatsby-image'
// import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
// //...GatsbyImageSharpFluid

// const query = graphql`
//   {
//     images: allInstaNode(limit: 6) {
//       nodes {
//         localFile {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const Instagram = () => {
//   const data = useStaticQuery(query);

//   const {
//     images: {nodes}
//    } = data;

//   return ( 
//     <Wrapper>
//       <Title title="instagram" />
//       <div className="images">
//         {nodes.map((item, index) => {
//           // destructuring
//           const {localFile: {childImageSharp : {fluid}}} = item;
//           return <Image fluid={fluid} key={index} />
//         })}
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.article`
//   .images {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     gap: 1rem;
//   }
// `

// export default Instagram
