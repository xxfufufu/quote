import { GET_RANDOM_QUOTE, GET_AUTHOR, GET_GENRE, GET_ALL_QUOTES, VIEW_TO_QUOTE_BY_AUTHOR, VIEW_TO_RANDOM } from "./quoteTypes"

export const getRandomQuote = (payload) => {
    return {
        type: GET_RANDOM_QUOTE,
        payload
    }
}

export const getAuthor = (payload) => {
    return {
        type: GET_AUTHOR,
        payload
    }
}

export const getGenre = (payload) => {
    return {
        type: GET_GENRE,
        payload
    }
}

export const getAllQuotes = (payload) => {
    return {
        type: GET_ALL_QUOTES, 
        payload
    }
}

export const viewToQBA = (payload) => {
    return {
        type: VIEW_TO_QUOTE_BY_AUTHOR,
        payload
    }
}

export const viewRandom = (payload) => {
    return {
        type: VIEW_TO_RANDOM,
        payload
    }
}

export const fetchRandomQuote = () => async (dispatch) => {
    const data = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    const item = await data.json();
    
    dispatch(viewRandom());
    item.data.map(x => {
            dispatch(getRandomQuote(x.quoteText))
            dispatch(getAuthor(x.quoteAuthor))
            dispatch(getGenre(x.quoteGenre))
            return x;
        })
} 


export const fetchQuotes = () => async (dispatch, getState) => {
    const dataState = getState();
    const author = dataState.author.toLowerCase().split(" ").join("+");
    const resQuotes = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`);
    const dataQuotes = await resQuotes.json();
    
    const allQuotes = dataQuotes.data.map(x => x.quoteText);
    dispatch(getAllQuotes(allQuotes));
    dispatch(viewToQBA());
}