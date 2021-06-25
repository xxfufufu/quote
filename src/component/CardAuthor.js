import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import '../style/CardAuthor.css'
import { useDispatch } from 'react-redux'
import { fetchQuotes } from '../redux/quote/quoteAction'


function CardAuthor({name, genre}) {

    const dispatch= useDispatch();

    return (
        <div className="card-author">
            <div className="card-author-name">
                <p className="name">{name}</p>
                <p className="job">{genre}</p>
            </div>
            <div className="arrow-icon" onClick={() => {dispatch(fetchQuotes())}}>
                <ArrowRightAltIcon style={{color:"white"}}/>
            </div>
        </div>
    )
}

export default CardAuthor;
