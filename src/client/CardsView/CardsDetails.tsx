import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import DescriptionBox from "./DescriptionBox";
import HR_Component from "../Components/HR";
import Fetcher from "../ClientUtils/Fetcher";

const CardsDetails = (props: Types.NO_PROPS) => {
  const { cardID } = useParams();
  const nav = useNavigate();
  const goToCards = () => {
    nav("/cards");
  };

  const [tarotCard, setTarotCard] = useState<Types.Card>({
    name_short: "",
    name: "",
    value: "",
    value_int: 0,
    description: {
      one: {
        meaning: "",
        desc: "",
      },
      two: {
        meaning: "",
        desc: "",
      },
    },
    url: "",
  });

  useEffect(() => {
    // fetch the card's information
    Fetcher.GET(`/api/drawcard/${cardID}`)
      .then((card) => {
        setTarotCard(card);
        // console.log(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="row justify-content-center align-items-center">
      <button
        type="button"
        className="btn btn-primary col-8 col-md-1  btn btn-primary mx-2 my-3"
        onClick={() => goToCards()}
      >
        Back to Cards
      </button>
      <div className="row justify-content-center">
        <div className="card col-6 m-3">
          <img src={`${tarotCard.url}`} className="card-img-top" alt={`${tarotCard.name}`} />
          <div className="card-body">
            <DescriptionBox tarotCard={tarotCard} num={"one"} />
            <HR_Component />
            <DescriptionBox tarotCard={tarotCard} num={"two"} />
            <div className="d-flex justify-content-center">
              <button type="button" className={`btn btn-primary my-3`} onClick={() => goToCards()}>
                Back to Cards
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
