import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Description = (props: Types.DescriptionCompProps) => {
  const nav = useNavigate();

  return (
    <div>
      <div>This is Description</div>
    </div>
  );
};

export default Description;
