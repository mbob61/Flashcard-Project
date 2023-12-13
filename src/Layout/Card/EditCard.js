import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../../utils/api";
import CardForm from "../Form/CardForm";
import { updateCard, readCard } from "../../utils/api";

function EditCard(){
    const history = useHistory();
    const initialState = {
        front: "",
        back: ""
    }
    const params = useParams();
    const [deck, setDeck] = useState({})

    useEffect(() => {
        async function loadDeck(){
            const response = await readDeck(params.deckId);
            setDeck(response);
        }
        async function loadCard(){
            const response = await readCard(params.cardId)
            setCard(response);
        }
        loadDeck();
        loadCard();
    }, [])

    const [card, setCard] = useState({front: "", back: ""});

    const addItem = async (event) => {
        event.preventDefault();
        await updateCard(card);
        history.go(-1);
    };

    const doneButtonHandler = async (event) => {
        event.preventDefault();
        history.go(-1)
    }

    if (deck.id ){
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href={`/decks/${deck.id}`} >{deck.name}</a></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Card {card.id}</li>
                </ol>
            </nav>
            <h2>Edit Card</h2>
            <CardForm card={card} setCard={setCard} initialState={initialState} />
            <button type="button" onClick={doneButtonHandler} className="btn btn-primary">Cancel</button>
            <button type="button" onClick={addItem} className="btn btn-primary">Submit</button>
        </div>
    )
    }
    return <p>Loading form</p>
}

export default EditCard;