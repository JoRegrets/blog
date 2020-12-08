import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{color:`maroon`, fontFamily:`monospace`}}>
    <h2>Life Happens, Ya Know?</h2>
    <h4>Caffine Addicts Anonymous</h4>
    <p>Hey, I'm Jo and I'm 23.</p>
    <p>I don't quite live in my parent's basement, but it's close enough. Thanks Covid. I went from having 3 jobs to no jobs
      so now, this is what I do with my time. Life has ups and downs, crazy I know, so this site here will showcase my personal ups and downs.
      Nothing too extreme. 
      But hey, quarantine 2020 did bring me a new(to me) car, which is now a defining personality trait of mine. 
    </p>
    <p> So stick around, read a little, and welcome to the melting pot.</p>
    <link to="/contact.js"></link>
    </div>
    
  </Layout>
)

export default IndexPage
