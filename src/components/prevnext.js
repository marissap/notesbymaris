import React from 'react';

import './prevnext.css'

const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className="prevnext">
            {prev && <li className="prev"><a href={"/notesbymaris" + prev.fields.slug}>
                Previous: {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li className="next"><a href={"/notesbymaris" + next.fields.slug}>
                Next: {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
    )
}

export default PrevNext;