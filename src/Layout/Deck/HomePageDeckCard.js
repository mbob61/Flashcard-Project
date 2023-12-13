import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
function HomePageDeckCard({deck, deleteDeck}){
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                
                <p className ="card-text">{deck.cards.length} cards</p>
                <p className ="card-text">{deck.description}</p>
                <Link to={`/decks/${deck.id}`} className="btn btn-primary">View</Link>
                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                <Link to="/" className="btn btn-primary" onClick={() => deleteDeck(deck.id)}>Delete</Link>
            </div>
        </div>
    )
}

export default HomePageDeckCard;