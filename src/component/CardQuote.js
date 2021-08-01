import React from 'react'
import '../style/CardQuote.css'

function CardQuote({quote}) {
    return (
        <div className="card-quote">
            <p className="card-quote-content">{quote}</p>
        </div>
    )
}

export default CardQuote;
