import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../../utils/api";
import DeckInformation from "./DeckInformation";
import CardList from "../Card/CardList";


function Deck({deleteDeck}){
    const params = useParams();
    const [deck, setDeck] = useState({})

    useEffect(() => {
        async function loadDeck(){
            const response = await readDeck(params.deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deck.id])

    if (deck.id ){
        return (
        <div>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>
            <DeckInformation deck={deck} deleteDeck={deleteDeck}/>
            <CardList deck={deck} />
        </div>
        )
    }
    return <p>Loading</p>

}

export default Deck;