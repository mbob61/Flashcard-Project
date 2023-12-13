import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function DeckForm({submitHandler, initialState}){
    const history = useHistory();
    const [deck, setDeck] = useState({initialState});

    const changeHandler = (event) => {
        setDeck(
            {...deck, [event.target.name]: event.target.value}
        )
    }

    const cancelButtonHandler = async (event) => {
        event.preventDefault();
        history.go(-1)
    }

    return (
        <div>
            <form onSubmit={submitHandler(deck)}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Deck name</label>
                    <input defaultValue={initialState.name} type="text" className="form-control" name="name" id="nameInput" onChange={changeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descriptionInput" className="form-label">Deck Description</label>
                    <textarea defaultValue={initialState.description} type="text" className="form-control" name="description" id="descriptionInput" onChange={changeHandler}/>
                </div>
                <button onClick={cancelButtonHandler} className="btn btn-primary">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>            
        </div>
    )
}

export default DeckForm;