import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import './index.css';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <div>
      <div className="columnsContainer">
        <div className="leftColumn">    
          <nav>
            <ul className="nav inline-items">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/tags">All tags</Link></li>
              <li><a href="https://github.com/marissap/" target="_blank" rel="noopener noreferrer" title="github" >Github</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>                
          <div className="wrapper">
            <div className="mug">
              <div className="handle"></div>
            </div>
            <h1>Notes by Maris</h1>
          </div>
        </div>
        <div className="rightColumn">
          {postList.edges.map(({ node }, i) => (
            <Link to={node.fields.slug} key={i} className="link" >
              <div className="post-list">
                <h1>{node.frontmatter.title}</h1>
                <span>{node.frontmatter.date}</span>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`