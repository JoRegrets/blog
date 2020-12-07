import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
    return(
            <Layout>
                <SEO title="Contact"/>
                <div style={{color:`maroon`, fontFamily:`monospace`}}>
                <h1>Contact</h1>
                <p>This is how you contact me.</p>
                <Link to="/">Go Home</Link>
                </div>
            </Layout>
    )
}
export default Contact