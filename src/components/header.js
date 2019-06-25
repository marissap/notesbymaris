import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './layout-override.css'

const Header = () => (
  <div className="final-header">    
    <div className="header-text">
      <h1><Link to="/">Notes by Maris</Link></h1>
      <p>constantly updated collection of notes from my journey for knowledge</p>
    </div>
    <div className="nav">
      <Link to="/about">About</Link>
      <a href="https://github.com/marissap/" target="_blank" rel="noopener noreferrer" title="github" >Github</a>
      <Link to="/tags">All tags</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
