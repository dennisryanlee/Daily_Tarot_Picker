import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Card = (props: Types.CardCompProps) => {
  const nav = useNavigate();

  return (
    <div>
      <div>This is Card</div>
    </div>
  );
};

export default Card;
