import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import About from "../pages/about"
import Contact from "../pages/contact"
import headerStyles from "../components/header.module.css"
const Header = ({ siteTitle, siteDescription, about, contact, blog }) => (
  
  <header
    style={{
      background: `maroon`,
      marginBottom: `1.45rem`,
      fontFamily: `monospace`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        fontFamily:`monospace`
      }}
    >
      <h1 >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily:`monospace`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <h3 style={{color:`white`, margin:`0 0 0 0.9rem`, fontFamily:`monospace`}}>{siteDescription}</h3>
        <div style={{color:`white`, display:`flex`}}>
          <h4 style={{marginRight:`0.9rem`, fontFamily:`monospace`}}>
          <Link to="/about" className={headerStyles.link}>{about}</Link>
          </h4>
          <h4 style={{marginRight:`0.9rem`, fontFamily:`monospace`}}>
          <Link to="/contact" className={headerStyles.link}>{contact}</Link>
          </h4>
          <h4 style={{marginRight:`0.9rem`, fontFamily:`monospace`}}>
          <Link to="/blog" className={headerStyles.link}>{blog}</Link>
          </h4>
          
          
</div>
    </div>
     
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
  blog: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
