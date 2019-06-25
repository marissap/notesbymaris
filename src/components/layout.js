import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './layout-override.css'

// StaticQuery which is querying for the site title the data which comes back from the query is stored inside the data property.

const Layout = ({ children }) => (  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (      
      <>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © 2018-19, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> with ♥ by Marissa
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
