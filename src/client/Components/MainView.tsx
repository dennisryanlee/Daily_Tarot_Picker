import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Description from "./Description";
import Journal from "./Journal";

const MainView = (props: Types.MainViewCompProps) => {
  const nav = useNavigate();

  const saveJournal = () => {
    console.log(`Journal save has been pressed.`);
  };

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
          <Card />
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
          <Description />
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
