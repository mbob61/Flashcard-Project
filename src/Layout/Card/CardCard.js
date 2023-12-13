import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { deleteCard } from "../../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function CardCard({card}){
    const history = useHistory();
    const routeMatch = useRouteMatch();

    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure you want to delete this card?")){
            await deleteCard(id)
            history.go(0);
        }
    }

    return (
        <div className="card-body">
            <div className="row">
                <div className="col">
                {card.front}
                </div>
                <div className="col">
                {card.back}
                </div>
            </div>
            <Link to={`${routeMatch.url}/cards/${card.id}/edit`} className="btn btn-primary">Edit</Link>
            <Link to={routeMatch.url} className="btn btn-primary" onClick={() => deleteHandler(card.id)}>Delete</Link>
        </div>
    )
}

export default CardCard;