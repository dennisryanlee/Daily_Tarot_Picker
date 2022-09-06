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
    <div>
      <div>
        <h1>Tarot Journal</h1>
        <h3>"What should I be mindful of this week?"</h3>
      </div>
      <hr></hr>
      <Card />
      <hr></hr>
      <Journal />
      <hr></hr>
      <Description />
      <button onClick={() => saveJournal()}>Save</button>
    </div>
  );
};

export default MainView;
