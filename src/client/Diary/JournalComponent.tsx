import React, { useState } from "react";
import * as Types from "../../../Types";

const JournalComponent = (props: Types.NO_PROPS) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>Date: date here</div>
      <div>card here</div>
      <div>entry 1</div>
      <div>entry 2</div>
      <div>entry 3</div>
    </div>
  );
};

export default JournalComponent;
