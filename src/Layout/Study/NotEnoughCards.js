import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NotEnoughCards({deck}){

    return (
        <div>
            <h2>Not enough cards</h2>
            <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
            <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">Add cards</Link>
        </div>
    )

}

export default NotEnoughCards;