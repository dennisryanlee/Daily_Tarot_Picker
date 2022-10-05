import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Card = (props: Types.CardCompProps) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {props.cardChosen && (
        <button className="btn btn-primary" onClick={() => props.drawCard()}>
          Choose your card
        </button>
      )}

      <div className="text-center">{/* <img src="" alt="" /> */}</div>
    </div>
  );
};

export default Card;
