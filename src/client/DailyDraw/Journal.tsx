import React, { useState } from "react";
import * as Types from "../../../Types";

const Journal = (props: Types.JournalCompProps) => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3">What are your first impressions of the card?</h4>
        </div>
        <textarea
          className="form-control"
          wrap="hard"
          id="journal1"
          name="journal1"
          value={props.Journal1Text}
          onChange={(e) => props.setJournal1Text(e)}
          maxLength={5000}
        />
        <div className="d-flex flex-row-reverse">
          {props.Journal1Text.length >= 4750 && (
            <div className="text-end border">{5000 - props.Journal1Text.length} characters remaining</div>
          )}
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3">
            Before reading the descriptions, write about how the card pertains to your life in general or a specific
            situation that you are going through, and what solutions or perspectives it might show you.
          </h4>
        </div>
        <textarea
          className="form-control"
          wrap="hard"
          id="journal2"
          name="journal2"
          value={props.Journal2Text}
          onChange={(e) => props.setJournal2Text(e)}
          maxLength={5000}
        />
        <div className="">
          {props.Journal2Text.length >= 4750 && <div>{5000 - props.Journal2Text.length} characters remaining</div>}
        </div>
      </div>
    </div>
  );
};

export default Journal;
