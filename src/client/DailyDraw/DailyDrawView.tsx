import React, { useState, useEffect } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Description from "./Description";
import Journal from "./Journal";

const MainView = (props: Types.MainViewCompProps) => {
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
   * This chooses a random number which corresponds to a card.
   * The number will be used to fetch the card's image and description.
   * This will also hide the choose card button.
   */
  const drawCard = async () => {
    // pick a random integer to serve as the index when choosing from the allcards array
    let cardNum = Math.floor(Math.random() * 78);
    // console.log(`Card ${cardNum} Drawn`);
    // fetch the card's information
    fetch(`/api/drawcard/${cardNum}`)
      .then((res) => {
        // parse the response
        return res.json();
      })
      .then((card) => {
        // set state for child component
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

      <div className="d-flex justify-content-center">
        <hr style={{ width: "50%" }}></hr>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <Card cardChosen={cardChosen} drawCard={drawCard} tarotCard={tarotCard} />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <hr style={{ width: "50%" }}></hr>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <Journal />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <hr style={{ width: "50%" }}></hr>
      </div>

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
