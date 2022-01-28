import { useContext, useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";


function FeedbackForm() 
{
    const [text, setText] = useState( '' );
    const [btnDisable, setBtnDisable] = useState( true );
    const [message, setMessage] = useState( '' );
    const [rating, setRating] = useState( 10 );
    
    const{ addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    useEffect(() => 
    {
        if(feedbackEdit.edit === true)
        {
            setBtnDisable(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            
        }
    },[feedbackEdit])
    
    const handleTextChange = ( e ) => {
        if(text === "")
        {
            setBtnDisable(true)
            setMessage(null)
        }
        else if( text !== "" && text.trim().length <= 10 )
        {
            setBtnDisable(true)
            setMessage("Message musst be longer than 10 character")
        }
        else
        {
            setBtnDisable(false);
            setMessage(null);
        }
        setText(e.target.value) 
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(text.trim().length > 10 )
        {
            const newFeedback= {
                text,
                rating
            }
            if(feedbackEdit.edit === true)
            {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else
            {
                addFeedback(newFeedback);
            }
            setText('');
        }

    }
    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us ? </h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input 
                        onChange={ handleTextChange } 
                        type="text" 
                        placeholder="Write a review"
                        value={ text } />
                    <Button 
                        type="submit"
                        isDisabled = { btnDisable }
                    >   Send
                    </Button>
                </div>
                {message && <div className="message">{ message }</div>}
            </form>
        </Card>
  );
}

export default FeedbackForm;