import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { listDecks } from "../utils/api";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import { deleteDeck } from "../utils/api";
import CreateDeck from "./Deck/CreateDeck";
import Deck from "./Deck/Deck";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Study from "./Study/Study";
import EditDeck from "./Deck/EditDeck";
import AddCard from "./Card/AddCard";
import EditCard from "./Card/EditCard";

function Layout() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDecks(){
      const decksFromAPI = await listDecks(abortController.signal);
      setDecks(decksFromAPI);
    }
    loadDecks(); 
    return () => {
      abortController.abort();
    }
  }, [])

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this deck?")){
      await deleteDeck(id)
      history.go(0);
    }
}

  if (decks.length > 0){
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/"> <Home decks={decks} deleteDeck={deleteHandler} /> </Route>
          <Route path='/decks/new'> <CreateDeck /> </Route> 
          <Route exact path="/decks/:deckId"> <Deck deleteDeck={deleteHandler}/> </Route>
          <Route exact path="/decks/:deckId/study"> <Study /> </Route>
          <Route exact path="/decks/:deckId/edit"> <EditDeck /> </Route>
          <Route exact path="/decks/:deckId/cards/new"> <AddCard /> </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit"> <EditCard /> </Route>
          <Route><NotFound/></Route>
        </Switch>
        
      </div>
    </div>
  );
  }
  return <p>Not Found</p>

}

export default Layout;