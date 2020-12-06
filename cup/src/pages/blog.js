import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link} from "gatsby"
import SEO from "../components/seo"

const Blog = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            author
            body {
              id
            }
            date(fromNow: true)
            slug
            title
          }
        }
      }
    }
  `)
    return(
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            
                {
                    data.allContentfulPost.edges.map((post,i)=> {
                        return(
                            <div key={i}>
                                <h2>{post.node.title}</h2>
                                <p>Published{post.node.date}</p>
                                <p>Written By{post.node.author}</p>
                                <Link to={`/blog/${post.node.slug}`}>Read About It</Link>
                                <hr style={{height: "3px"}}/>
                            </div>
                        )
                    })
                }
            
        </Layout>
    )
}


export default Blog