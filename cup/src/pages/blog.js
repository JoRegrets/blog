import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link} from "gatsby"
import SEO from "../components/seo"
import { useAuth0 } from "@auth0/auth0-react"

const Blog = () => {

    const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0()

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
          {
            !isAuthenticated && (
              <button style={{ backgroundColor:`maroon`, color:`white`}} onClick={() => loginWithRedirect()} >Log In</button>
            )
          }
          {
              isAuthenticated && (
                <div>
                  <SEO title="Blog" />
            <div style={{color:`maroon`, fontFamily:`monospace`}}>
            <h2>Blog</h2>
            
                {
                    data.allContentfulPost.edges.map((post,i)=> {
                        return(
                            <div key={i}>
                                <h4>{post.node.title}</h4>
                                <p>Published {post.node.date}</p>
                                <p>Written By {post.node.author}</p>
                                <Link to={`/blog/${post.node.slug}`}>Read About It</Link>
                                <hr style={{height: "3px"}}/>
                            </div>
                        )
                    })
                }
            </div>
            <button style={{backgroundColor:`maroon`, color:`white`}} onClick={() => logout()}>Sign Out</button>
                </div>
              )
          }
            
        </Layout>
    )
}


export default Blog