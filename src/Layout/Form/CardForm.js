import React from "react";
function CardForm({card, setCard}){
    const changeHandler = (event) => {
        setCard(
            {...card, [event.target.name]: event.target.value}
        )
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="frontInput" className="form-label">Front</label>
                    <textarea value={card.front} type="text" className="form-control" name="front" id="frontInput" onChange={changeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="backInput" className="form-label">Back</label>
                    <textarea value={card.back} type="text" className="form-control" name="back" id="backInput" onChange={changeHandler}/>
                </div>

            </form>            
        </div>
    )


}
export default CardForm;