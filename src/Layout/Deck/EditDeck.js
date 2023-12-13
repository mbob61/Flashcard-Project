import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { updateDeck } from "../../utils/api";
import { readDeck } from "../../utils/api";
import DeckForm from "../Form/DeckForm";

function EditDeck(){
    const params = useParams();

    const [currentDeck, setCurrentDeck] = useState({});

    useEffect(() => {
        async function loadDeck(){
            const response = await readDeck(params.deckId);
            setCurrentDeck(response);
        }
        loadDeck();
    }, [])

    const history = useHistory();

    const editItem = (deck) => async (event) => {
        event.preventDefault();
        const newDeck = {...deck, id: currentDeck.id}
        await updateDeck(newDeck);
        history.push(`/decks/${currentDeck.id}`)
    };

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                </ol>
            </nav>
            <h1>Edit Deck</h1>
            <DeckForm submitHandler={editItem} initialState={{name: currentDeck.name, description: currentDeck.description}} />
        </div>
    )
}

export default EditDeck;