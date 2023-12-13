import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function DeckInformation({deck, deleteDeck}){
    const match = useRouteMatch();
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                
                <p className ="card-text">{deck.description}</p>
                <Link to={`${match.url}/edit`} className="btn btn-primary">Edit</Link>
                <Link to={`${match.url}/study`} className="btn btn-primary">Study</Link>
                <Link to={`${match.url}/cards/new`} className="btn btn-primary">Add Cards</Link>
                <Link to='/' className="btn btn-primary" onClick={() => deleteDeck(deck.id)}>Delete Deck</Link>
            </div>
        </div>
    )
}

export default DeckInformation;