import React from "react";
import CardCard from "./CardCard";
function CardList({deck}){
    return (
        <div>
        <h2>Cards</h2>
        <div>
            
        {deck.cards.length > 0 ? 
        <ul>
            {deck.cards.map((card) => <CardCard key={card.id} card={card} />)}
        </ul>
   
        : <h3>No cards for this deck sorry</h3>}
        </div>
        

        </div>

    )
}
export default CardList;