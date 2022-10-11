import React from "react";
import * as Types from "../../../Types";

const DescriptionBox = ({ tarotCard, num }: Types.DescriptionBoxCompProps) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h3>Description {num}</h3>
      </div>
      <div className="d-flex justify-content-center">
        <h5 className="card-text my-1">{tarotCard.description[num].meaning}</h5>
      </div>

      <div className="card-text">{tarotCard.description[num].desc}</div>
    </div>
  );
};

export default DescriptionBox;
