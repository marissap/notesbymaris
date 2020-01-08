import React from 'react';

import './prevnext.css'

const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className="prevnext">
            {prev && <li className="prev"><a href={"/notesbymaris" + prev.fields.slug}>
                <span className="tag-indicator">Previous:</span> {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li className="next"><a href={"/notesbymaris" + next.fields.slug}>
                <span className="tag-indicator">Next:</span> {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
    )
}

export default PrevNext;