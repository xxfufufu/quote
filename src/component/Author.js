import React from 'react'
import '../style/Author.css'

function Author({name}) {

    return (
        <div className="author">
            <p className="author-name">{name}</p>
        </div>
    )
}

export default Author;