import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, Blockquote, Example, PrismSetup } from './src/components/Complete'


// 1) ----- Below is correct, but we want to do it now according to 2) 
// const myH2 = props => {
//   console.log(props);
//   if(props.title) {
//    return <h2 {...props} style={{fontSize:"2rem", color:"red"}}>{props.children}</h2>
//   }
//   return <h2 {...props} className="code">{props.children}</h2>
//  }

// 2) ---- Other procedure using import 

const Testing = ({ children }) => {
 return <div className="code">{children}</div>
}


const components = {
 // logic here
 // Line below is an implicit return
 // h2: () => <h2>Title</h2>

 // Below if an explicit return
 // h2: myH2,--> this is part of 1) ----

 // Below is part of 2) -----
 h2: Headings.myH2,
 h4: Headings.myH4,
 // inlineCode: Testing
 inlineCode: Code,
 blockquote: Blockquote,
 // pre: Example,
 pre: PrismSetup,
}


export const wrapMDX = ({element}) => {
 return <MDXProvider components={components}>{element}</MDXProvider>
}