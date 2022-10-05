import React, { useState } from "react";
import * as Types from "../../../Types";

const Card = (props: Types.CardCompProps) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {props.cardChosen && (
        <button className="btn btn-primary" onClick={() => props.drawCard()}>
          Choose your card
        </button>
      )}
      {!props.cardChosen && (
        <div className="text-center">
          <img src={`${props.tarotCard.url}`} alt={`${props.tarotCard.name}`} width="300" height="521" />
        </div>
      )}
    </div>
  );
};

export default Card;
