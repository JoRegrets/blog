import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import { withAuthenticationRequired } from "@auth0/auth0-react"

export const data = graphql`
    query($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            author
            date(fromNow: true)
            slug
            title
            body{
                json
            }
        }
    }
`

const BlogPost = (props) => {
    const options = {
        renderNode: {
            [INLINES.ASSET_HYPERLINK]: (node) => {
                if(node.data.uri.includes("youtube")) {
                    var url = node.data.uri.replace("watch?v=","embed/")
                    return <iframe title={node.title} width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                }
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const alt = node.data.target.fields.title["en-US"]
                const url= node.data.target.fields.file["en-US"].url
                return <img src={url} alt={alt}/>
            }
        }
    }
    return(
        <Layout>
            <div>
                <h2>{props.data.contentfulPost.title}</h2>
                <p style={{fontweight:200, fontsize: "0.8rem"}}>Published {props.data.contentfulPost.date}</p>
                <p style={{fontweight:200, fontsize: "0.8rem"}}>Written By {props.data.contentfulPost.author}</p>
                {
                    documentToReactComponents(props.data.contentfulPost.body.json,options)
                }
                <Link to="/blog">Back to Blog</Link>
            </div>
        </Layout>
    )
}

export default  withAuthenticationRequired(BlogPost)