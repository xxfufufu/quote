import React from 'react'
import CardQuote from './CardQuote'
import  CardAuthor from './CardAuthor'
import { useSelector } from 'react-redux'

function ViewRandom() {

    const data = useSelector(state => state);
    const nameAuthor = data.author;
    const genre = data.genre;
    const quotes = data.quotes

    return (
        <div className="view__quotes">
            <CardQuote quote={quotes}/>
            <CardAuthor name={nameAuthor} genre={genre}/>  
        </div>
    )
}

export default ViewRandom;