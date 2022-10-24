import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Types from "../../../Types";
import Fetcher from "../ClientUtils/Fetcher";
import { getNiceDate, getPreview } from "../ClientUtils/Formatters";

// declare an interface for the state passed from diaries view
interface passedState {
  diary: Types.IJournalInfo;
  tarotCard: Types.Card;
}

const SingleDiary = (props: Types.NO_PROPS) => {
  const loc = useLocation();
  const nav = useNavigate();

  // destructure the state passed from the previous view
  const { diary, tarotCard } = loc.state as passedState;

  return (
    <>
      {/* {JSON.stringify({ tarotCard, diary })} */}
      <div className="container">
        <div className="card mt-4">
          <div className="row">
            <div className="col-8">
              <h6 className="text-center mt-2 display-6">
                {getNiceDate(diary.created_at!)} | {tarotCard.name}
              </h6>
            </div>
            <div className="col-4 mt-2 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={() => nav(-1)}>
                Back
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="shadow-lg">
                <img src={`${tarotCard.url}`} className="card-img-top img-fluid" alt={`${tarotCard.name}`} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="shadow-lg">
                <div className="card-body h-100">
                  <h5 className="card-title">Entry 1</h5>
                  <p>{diary.entry_one}</p>
                  <h5 className="card-title">Entry 2</h5>
                  <p>{diary.entry_two}</p>
                  <h5 className="card-title">Entry 3</h5>
                  <p>{diary.entry_three}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDiary;
