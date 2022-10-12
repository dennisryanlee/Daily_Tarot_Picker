import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import JournalComponent from "./JournalComponent";

const Diaries = (props: Types.NO_PROPS) => {
  const nav = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>This is diaries page</div>
      <div>View Old Journals below</div>
      <JournalComponent />
      <JournalComponent />
      <JournalComponent />
    </div>
  );
};

export default Diaries;
