const { withAuthenticationRequired } = require("@auth0/auth0-react")

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Cup of Jo`,
    description: `ya know`,
    author: `@joregrets`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options : {
        spaceId: "lylsgdhet4pf",
        accessToken: "opDCoV4E2Ndg61mVHh0S-JAe5hVC2ulG1bupfn-hV1c"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
