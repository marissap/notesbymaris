import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './layout-override.css'

const Header = () => (
  <div class="final-header">
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
              }}>          
              constantly updated collection of notes from my journey for knowledge
            </p>            
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://github.com/marissap/"
                style={{ color: "#e5aeae", textDecoration: "none"}} title="github" >Github | </a>
                <Link
                  to="/tags"
                  style={{
                    color: '#e5aeae',
                    textDecoration: 'none',
                  }}
                >
                | All tags |
              </Link>
              <Link
                  to="/about"
                  style={{
                    color: '#e5aeae',
                    textDecoration: 'none',
                  }}
                >
                | About |
              </Link>    
              <Link
                  to="/about"
                  style={{
                    color: '#e5aeae',
                    textDecoration: 'none',
                  }}
                >
                | Contact
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
