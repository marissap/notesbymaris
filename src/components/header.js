import { Link } from 'gatsby'
import React from 'react'

import '../pages/index.css' // global styles
import './header.css' // component styles

const Header = () => (
  <div className="header">    
    <div className="header-text">
      <h1><Link to="/">Notes by Maris</Link></h1>
    </div>
    <nav>
      <ul className="nav inline-items">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/tags">All tags</Link></li>
        <li><a href="https://github.com/marissap/" target="_blank" rel="noopener noreferrer" title="github" >Github</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header
