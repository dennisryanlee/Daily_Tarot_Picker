import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";

const JournalComponent = ({ diary }: Types.DiaryCompProps) => {
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
    <>
      <div className="card">
        <h6>
          {diary.created_at} | {diary.card_name_short}
        </h6>
        <img src={`${tarotCard.url}`} className="card-img-top" alt={`${tarotCard.name}`} width="300" height="521" />
        <div className="card-body">
          <h5 className="card-title">Entry 1</h5>
          <p>{diary.entry_one}</p>
          <h5 className="card-title">Entry 2</h5>
          <p>{diary.entry_two}</p>
          <h5 className="card-title">Entry 3</h5>
          <p>{diary.entry_three}</p>
        </div>
      </div>
    </>
  );
};

export default JournalComponent;
