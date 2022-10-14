import React, { useState, useEffect } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Description from "./Description";
import Journal from "./Journal";
import HR_Component from "../Components/HR";
import Fetcher from "../ClientUtils/Fetcher";

const DailyDraw = (props: Types.DailyDrawCompProps) => {
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

  // hold journals state here, since we make 1 fetch with information from 2 children components
  const [Journal1Text, setJournal1Text] = useState<string>("");
  const [Journal2Text, setJournal2Text] = useState<string>("");
  const [Journal3Text, setJournal3Text] = useState<string>("");

  /**
   * Requests a random card from the server
   * This will also hide the choose card button.
   */
  const drawCard = async () => {
    // fetch the card's information
    fetch(`/api/drawcard/random`)
      .then((res) => {
        // parse the response
        console.log(res);
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

  /**
   * Sends a post req to save the journal entry, and if sucessful, navigates user to the diaries view
   */
  const saveJournal = () => {
    Fetcher.POST(`/api/journal/`, {
      // user_id,
      card_name_short: tarotCard.name_short,
      entry_one: Journal1Text,
      entry_two: Journal2Text,
      entry_three: Journal3Text,
    })
      .then(() => {
        console.log(`Journal save has been pressed.`);
        //! send the user to the diary to view the entry they just made
        nav("/diary");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <Journal
            setJournal1Text={setJournal1Text}
            Journal1Text={Journal1Text}
            setJournal2Text={setJournal2Text}
            Journal2Text={Journal2Text}
          />
        </div>
      </div>

      <HR_Component />

      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <Description
            tarotCard={tarotCard}
            cardChosen={cardChosen}
            setJournal3Text={setJournal3Text}
            Journal3Text={Journal3Text}
          />
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

export default DailyDraw;
