import React, { useState } from "react";
import * as Types from "../../../Types";

const Journal = (props: Types.NO_PROPS) => {
  const [Journal1Text, setJournal1Text] = useState<string>("");
  const handleJournal1Update = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournal1Text(e.target.value);
  };
  const [Journal2Text, setJournal2Text] = useState<string>("");
  const handleJournal2Update = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournal2Text(e.target.value);
  };
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
          value={Journal1Text}
          onChange={(e) => handleJournal1Update(e)}
          maxLength={5000}
        />
        <div className="d-flex flex-row-reverse">
          {Journal1Text.length >= 4750 && (
            <div className="text-end border">{5000 - Journal1Text.length} characters remaining</div>
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
          value={Journal2Text}
          onChange={(e) => handleJournal2Update(e)}
          maxLength={5000}
        />
        <div className="">
          {Journal2Text.length >= 4750 && <div>{5000 - Journal2Text.length} characters remaining</div>}
        </div>
      </div>
    </div>
  );
};

export default Journal;
