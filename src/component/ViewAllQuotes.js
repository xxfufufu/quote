import React from 'react'
import { useSelector } from 'react-redux'
import Author from './Author'
import CardQuote from './CardQuote'


function ViewAllQuotes() {

    const data = useSelector(state =>
        state);
    const nameAuthor = data.author;
    const quotes = data.quotes;
    
    return (
        <div className="view__random" style={{maxHeight: '100%'}}>
            <Author name={nameAuthor}/>
            {quotes.map((item, index) => {
                return (
                    <CardQuote key={index} quote={item} />
                )})}
        </div>
    )
}

export default ViewAllQuotes
