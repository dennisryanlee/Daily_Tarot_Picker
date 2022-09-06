import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Journal = (props: Types.JournalCompProps) => {
  const nav = useNavigate();

  return (
    <div>
      <div>This is Journal</div>
      <div>
        <div>
          <p>What are your first impressions of the card?</p>
          <input type="text" id="journal1" name="journal1" />
        </div>

        <div>
          <p>
            Write about how the card pertains to your life in general, a specific situation that you are going through,
            and what solutions or perspectives it might show you.
          </p>
          <input type="text" id="journal2" name="journal2" />
        </div>
      </div>
    </div>
  );
};

export default Journal;
