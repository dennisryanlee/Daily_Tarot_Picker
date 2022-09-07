import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Journal = (props: Types.JournalCompProps) => {
  const nav = useNavigate();

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3">What are your first impressions of the card?</h4>
        </div>
        <textarea className="form-control" wrap="hard" id="journal1" name="journal1" />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3">
            Write about how the card pertains to your life in general, a specific situation that you are going through,
            and what solutions or perspectives it might show you.
          </h4>
        </div>
        <textarea className="form-control" wrap="hard" id="journal2" name="journal2" />
      </div>
    </div>
  );
};

export default Journal;
