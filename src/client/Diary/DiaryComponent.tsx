import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Types from "../../../Types";
import Fetcher from "../ClientUtils/Fetcher";
import { getNiceDate, getPreview } from "../ClientUtils/Formatters";

const JournalComponent = ({ diary }: Types.DiaryCompProps) => {
  const nav = useNavigate();
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
    Fetcher.GET(`/api/drawcard/${diary.card_name_short}`)
      .then((card) => {
        // set the card to state
        setTarotCard(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // navigate to a single diary, passing along that diary's tarot card and diary information
  const navToSingleDiary = () => {
    nav("/singlediary", { state: { diary, tarotCard } });
  };

  return (
    <>
      {/* {JSON.stringify({ tarotCard, diary })} */}
      <div className="card col-2 m-2">
        <h6>
          {getNiceDate(diary.created_at!)} | {tarotCard.name}
        </h6>
        <img src={`${tarotCard.url}`} className="card-img-top" alt={`${tarotCard.name}`} width="300" height="521" />
        <div className="card-body">
          <h5 className="card-title">Entry 1</h5>
          <p>{getPreview(diary.entry_one)}</p>
          <h5 className="card-title">Entry 2</h5>
          <p>{getPreview(diary.entry_two)}</p>
          <h5 className="card-title">Entry 3</h5>
          <p>{getPreview(diary.entry_three)}</p>
          <button className="btn btn-primary" onClick={navToSingleDiary}>
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default JournalComponent;
