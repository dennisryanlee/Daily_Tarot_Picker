import React, { useState } from "react";
import * as Types from "../../../Types";

const CardsView = (props: Types.CardsViewCompProps) => {
  const [tarotCards, setTarotCards] = useState<Types.Card[]>([]);

  // send a get request to the API endpoint to retrieve all the cards
  fetch(`/api/drawcard/`)
    .then((res) => {
      // parse the response
      return res.json();
    })
    .then((cards) => {
      // set the cards to state
      setTarotCards(cards);
    })
    .catch((err) => {
      // log any errors
      console.log(err);
    });
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-wrap justify-content-center">
        {tarotCards.map((card) => (
          <div className="card col-2 m-3">
            <img src={`${card.url}`} className="card-img-top" alt={`${card.name}`} width="300" height="521" />
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <a href="#" className="btn btn-primary ">
                View descriptions
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsView;
