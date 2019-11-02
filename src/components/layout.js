import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import '../pages/index.css' // global styles
import './layout.css' // component styles

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
        <div className="content">
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
