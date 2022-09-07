import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Card = (props: Types.CardCompProps) => {
  const nav = useNavigate();
  const [cardChosen, setCardChosen] = useState<boolean>(true);

  /**
   * This chooses a random number which corresponds to a card.
   * The number will be used to fetch the card's image and description.
   * This will also hide the choose card button.
   */
  const drawCard = () => {
    let cardNum = Math.floor(Math.random() * 79);
    setCardChosen(false);
    console.log(`Card ${cardNum} Drawn`);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {cardChosen && (
        <button className="btn btn-primary" onClick={() => drawCard()}>
          Choose your card
        </button>
      )}

      <div className="text-center">{/* <img src="" alt="" /> */}</div>
    </div>
  );
};

export default Card;
