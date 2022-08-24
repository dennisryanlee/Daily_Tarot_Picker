import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Description from "./Description";
import Journal from "./Journal";

const MainView = (props: Types.MainViewCompProps) => {
  const nav = useNavigate();

  return (
    <div>
      <div>This is MainView</div>
      <hr></hr>
      <Card />
      <hr></hr>
      <Description />
      <hr></hr>
      <Journal />
    </div>
  );
};

export default MainView;
