import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";

const JournalComponent = ({ diary }: Types.DiaryCompProps) => {
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
  const [tarotCard, setTarotCard] = useState<Types.Card>(dummyCard);

  // useEffect to fetch the card that was drawn for this diary
  useEffect(() => {
    // fetch the card's information
    fetch(`/api/drawcard/${diary.card_name_short}`)
      .then((res) => {
        // parse the response
        return res.json();
      })
      .then((card) => {
        // set the card to state
        setTarotCard(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>{diary.created_at}</div>
      <div>{diary.card_name_short}</div>
      <div>
        <img src={`${tarotCard.url}`} className="card-img-top" alt={`${tarotCard.name}`} width="300" height="521" />
      </div>
      <div>{diary.entry_one}</div>
      <div>{diary.entry_two}</div>
      <div>{diary.entry_three}</div>
    </div>
  );
};

export default JournalComponent;
