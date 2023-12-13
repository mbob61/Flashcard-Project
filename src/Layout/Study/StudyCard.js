import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function StudyCard({deck, index, flipped, flipHandler, indexHandler, resetHandler}){
    const history = useHistory();
    useEffect(() => {
        if (flipped && index === deck.cards.length - 1){
            setTimeout(setAlert, 100);
        }
    }, [flipped])


    function setAlert(){
        if(window.confirm('Would you like to restart the deck')) {
           resetHandler();
        } else {
          history.push("/")
        }
    }

    return (
        <div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {index + 1} of {deck.cards.length}</h5>

                    {flipped ? 
                    <p className="card-text">{deck.cards[index].back}</p>: 
                    <p className="card-text">{deck.cards[index].front}</p>}
                    
                    <button className="btn btn-primary" onClick={flipHandler}> Flip Card</button>
                    
                    {flipped && index < deck.cards.length - 1 && <button className="btn btn-primary" onClick={indexHandler}>Next Card</button>}


                </div>
            </div>
        </div>
    );

}

export default StudyCard;