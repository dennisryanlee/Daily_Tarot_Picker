import React, { useState, useEffect } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Description from "./Description";
import Journal from "./Journal";
import HR_Component from "../Components/HR";

const MainView = (props: Types.NO_PROPS) => {
  const nav = useNavigate();
  const dummyCard = {
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
  };
  const [cardChosen, setCardChosen] = useState<boolean>(true);
  const [tarotCard, setTarotCard] = useState<Types.Card>(dummyCard);

  /**
   * Requests a random card from the server
   * This will also hide the choose card button.
   */
  const drawCard = async () => {
    // fetch the card's information
    fetch(`/api/drawcard/random/`)
      .then((res) => {
        // parse the response
        return res.json();
      })
      .then((card) => {
        // set the card to state for child component, set state to hide choose card button
        setCardChosen(false);
        setTarotCard(card);
        // console.log(card);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveJournal = () => {
    // send the user to the diary to view the entry they just made
    nav("/diary");
    console.log(`Journal save has been pressed.`);
  };

  //! need to fetch all journals here in anticipation of finishing this draw

  useEffect(() => {
    // console.log({ tarotCard });
  }, [cardChosen, tarotCard]);

  return (
    <div className="container">
      <div>
        <h1 className="text-center my-3">Tarot Journal</h1>
        <h3 className="text-center mt-2">"What should I be mindful of this week?"</h3>
      </div>

      <HR_Component />

      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <Card cardChosen={cardChosen} drawCard={drawCard} tarotCard={tarotCard} />
        </div>
      </div>

      <HR_Component />

      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <Journal />
        </div>
      </div>

      <HR_Component />

      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <Description tarotCard={tarotCard} cardChosen={cardChosen} />
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-primary mt-4" onClick={() => saveJournal()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default MainView;
