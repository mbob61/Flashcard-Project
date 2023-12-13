import CreateDeckButton from "./CreateDeckButton";
import React from "react";
import DeckList from "./Deck/DeckList";

function Home({decks, deleteDeck}){
    return (
        <div>
            <CreateDeckButton />
            <DeckList decks={decks} deleteDeck={deleteDeck} />
        </div>
    )
}

export default Home;
