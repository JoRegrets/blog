import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
    return(
        <Layout>
            <SEO title="About"/>
            <div style={{color:`maroon`, fontFamily:`monospace`}}>
            <h2>Everything You Never Needed To Know About Jo</h2>
            <p> 
                So, as you know by now, I'm Jo. I'm 23, and live in Dallas. 
            </p>
            </div>
        </Layout>
    )
}
export default About