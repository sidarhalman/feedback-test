import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackStats() 
{
    const {feedback} = useContext(FeedbackContext)   
    //calculating
    let average = feedback.reduce(( acc , cur) => {
        return acc + cur.rating
    },0) /feedback.length;
    return(
        <div className="feedback-stats">
            <h4>{ feedback.length }</h4>
            <h4>
                Averege Rating: { isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/,'')}
            </h4>
        </div>

  );
}

export default FeedbackStats;
