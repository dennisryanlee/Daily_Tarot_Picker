import React, { useState, useEffect } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Description from "./Description";
import Journal from "./Journal";
import HR_Component from "../Components/HR";

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

  const saveJournal = () => {
    // send the user to the diary to view the entry they just made
    //! fetch save journal route here, nav in a dot then block
    nav("/diary");
    console.log(`Journal save has been pressed.`);
  };

  // this useEffect fetches all journals in anticipation of finishing this journal so they'll be ready upon saving and navigating to diaries view
  useEffect(() => {
    // make a fetch to all journals here
    fetch(`/api/journal/`)
      .then((res) => {
        // parse the response
        console.log(res);
        return res.json();
      })
      .then((res) => {
        // set the journals to state
        props.setAllJournals(res);
        // notify parent that journals were fetched successfully
        props.setAllJournalsFetchSuccess(true);
      })
      .catch((err) => {
        // notify parent that journals were fetched unsuccessfully
        props.setAllJournalsFetchSuccess(false);
        console.log(err);
      });
  }, []);

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

export default DailyDraw;
