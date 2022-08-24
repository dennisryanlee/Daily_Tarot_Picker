import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Journal = (props: Types.JournalCompProps) => {
  const nav = useNavigate();

  return (
    <div>
      <div>This is Journal</div>
    </div>
  );
};

export default Journal;
