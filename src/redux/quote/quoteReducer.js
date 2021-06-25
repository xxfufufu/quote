import { GET_AUTHOR, GET_RANDOM_QUOTE, GET_GENRE, GET_ALL_QUOTES, VIEW_TO_QUOTE_BY_AUTHOR, VIEW_TO_RANDOM } from "./quoteTypes"

const initialState = {
    quotes  : null,
    author  : null, 
    genre   : null,
    view    : true
}

const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RANDOM_QUOTE: {
            return {...state,
            quotes: action.payload}
        }
        case GET_AUTHOR: {
            return {...state,
            author: action.payload}
        }
        case GET_GENRE: {
            return {...state, 
            genre: action.payload}
        }
        case GET_ALL_QUOTES: {
            return {...state,
            quotes: action.payload}
        }
        case VIEW_TO_QUOTE_BY_AUTHOR: {
            return {...state,
            view: false}
        }
        case VIEW_TO_RANDOM: {
            return {...state,
            view: true}
        }
        default:
            return state
    }
}

export default quoteReducer;