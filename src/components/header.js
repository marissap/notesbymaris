import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './layout-override.css'
import BackgroundImage from '../images/header.jpeg';

const Header = () => (
  <div class="final-header" style={{ background: `url(${BackgroundImage})` }}>
    <div class="header-overlay">
      <div
        style={{
          margin: '0 auto',
          padding: '1.45rem 1.0875rem',
        }}
        >
        <h1 style={{margin: 0, textAlign: 'center'}}>
            <Link to="/"
              style={{
                color: 'black',
                textDecoration: 'none',
                fontWeight: '900',
              }}
            >
              Maris' Notes
            </Link>
          </h1>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
            <p 
              style={{
                color: 'black',
                textDecoration: 'none',           
                fontStyle: 'italic',
                fontWeight: '900',
              }}>          
              constantly updated collection of notes from my journey for knowledge
            </p>            
          </div>
          <div style={{display: 'flex', justifyContent: 'center',}}>
              <a href="https://github.com/marissap/" target="_blank"
                style={{ color: "black", textDecoration: "none", fontWeight: '400',}} title="github" >Github </a>
                <p style={{ color: "rgb(87, 199, 230)", fontSize: "250%"}}>•</p>
                <Link
                  to="/tags"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: '400',
                  }}
                >
                All tags
              </Link>
              <p style={{ color: "rgb(87, 199, 230)", fontSize: "250%"}}>•</p>
              <Link
                  to="/about"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: '400',
                  }}
                >
                About
              </Link>
              <p style={{ color: "rgb(87, 199, 230)", fontSize: "250%"}}>•</p>   
              <Link
                  to="/contact"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: '400',
                  }}
                >
                Contact
              </Link>         
          </div>
{}        
      </div>
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
