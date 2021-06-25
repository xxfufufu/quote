import { Autorenew } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { fetchRandomQuote, viewRandom } from "../redux/quote/quoteAction";
import '../style/Random.css';
import { useEffect } from 'react';



function Random() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRandomQuote())
    }, [dispatch])

    return (
        <div className="random" onClick={() => dispatch(fetchRandomQuote())}>
            <p className="random-content">random</p>
            <div className="random-icon">
                <Autorenew style={{fontSize: "14"}}/>
            </div>
        </div>
    );
}

export default Random;