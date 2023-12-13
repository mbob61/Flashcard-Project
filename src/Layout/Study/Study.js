import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import NotEnoughCards from "./NotEnoughCards";
import StudyCard from "./StudyCard";

function Study(){
    const params = useParams();
    const match = useRouteMatch();
    const [deck, setDeck] = useState({});
    const [flipped, setFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const flipHandler = (event) => {
        event.preventDefault()
        setFlipped(prevFlip => !prevFlip);
    }

    const cardIndexHandler = () => {
        setCurrentCardIndex(prevIndex => prevIndex + 1)
        setFlipped(false);
    }

    const resetHandler = () => {
        setCurrentCardIndex(0);
        setFlipped(false);
    }

    useEffect(() => {
        
        async function loadDeck(){
            const deckFromAPI = await readDeck(params.deckId);
            setDeck(deckFromAPI);
        }

        loadDeck();
    }, [])

    if (deck.id) {
        
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deck.id}`} >{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>
                <h1>Study: {deck.name}</h1>

                {
                    deck.cards.length > 2 ?
                        <StudyCard 
                        deck={deck}
                        index={currentCardIndex}
                        flipped={flipped}
                        flipHandler={flipHandler}
                        indexHandler={cardIndexHandler}
                        resetHandler={resetHandler}/>
                    :
                        <NotEnoughCards deck={deck} />
                }




            </div>        
        )

       
    }
    return <p>Loading....</p>

}

export default Study;