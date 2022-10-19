import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import { Link } from "react-router-dom";
import Fetcher from "../ClientUtils/Fetcher";

const CardsView = (props: Types.NO_PROPS) => {
  const [tarotCards, setTarotCards] = useState<Types.Card[]>([]);

  // fetch all cards within a useEffect with an empty dependency array to avoid fetching multiple times
  useEffect(() => {
    // send a get request to the API endpoint to retrieve all the cards
    Fetcher.GET(`/api/drawcard/`)
      .then((cards) => {
        // set the cards to state
        setTarotCards(cards);
      })
      .catch((err) => {
        // log any errors
        console.log(err);
      });
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-wrap justify-content-center">
        {tarotCards.map((card) => (
          <div className="card col-2 m-3 shadow" key={card.name_short}>
            <img src={`${card.url}`} className="card-img-top" alt={`${card.name}`} width="300" height="521" />
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <Link to={`/cards/${card.name_short}`} className="btn btn-primary">
                View descriptions
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsView;
