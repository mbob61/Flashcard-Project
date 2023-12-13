import React from "react";
import HomePageDeckCard from "./HomePageDeckCard";
function DeckList({decks, deleteDeck}){
    return (
        <div>
        {decks.length > 0 ?
         <ul> {decks.map((deck) => (<HomePageDeckCard key={deck.id} deck={deck} deleteDeck={deleteDeck} />))} </ul> :
         <h4>No Decks to display. Please create a deck.</h4>}
        </div>
    );


}

export default DeckList;