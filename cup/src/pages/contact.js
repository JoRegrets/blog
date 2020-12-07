import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
    return(
            <Layout>
                <SEO title="Contact"/>
                <div style={{color:`maroon`, fontFamily:`monospace`}}>
                <h2>Contact</h2>
                <p>If you have any issues with this site(DON'T), feel free to email or message me.
                    If you have a topic you want to hear about, or perhaps a comment on one of my posts, feel free to email or message me.
                </p>
                <p>Instagram: @JoRegrets Email:jthalverson@att.net</p>
                <Link to="/">Go Home</Link>
                </div>
            </Layout>
    )
}
export default Contact