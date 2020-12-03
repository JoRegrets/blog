import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cup of Jo</h1>
    <h2>something Witty</h2>
    <p>More Something</p>
    <link to="/contact"></link>
  </Layout>
)

export default IndexPage
