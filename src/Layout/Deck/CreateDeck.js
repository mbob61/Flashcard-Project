import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../../utils/api";
import DeckForm from "../Form/DeckForm";

function CreateDeck(){
    const initialState = {
        name: "",
        description: ""
    }
 
    const history = useHistory();

    const addItem = (deck) => async (event) => {
        event.preventDefault();
        const response = await createDeck(deck);
        history.push(`/decks/${response.id}`)
    };

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <h1>Create Deck</h1>
            <DeckForm submitHandler={addItem} initialState={initialState} />
        </div>
    )
}

export default CreateDeck;