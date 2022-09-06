import React, { useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Description = (props: Types.DescriptionCompProps) => {
  const nav = useNavigate();
  const [descButtonPressed, setDescButtonPressed] = useState<boolean>(false);
  const [descToHide, setDescToHide] = useState<number>(0);
  const [descButtonHidden, setDescButtonHidden] = useState<boolean>(true);

  /**
   * This function fetches the descriptions and sets component state 'descButtonPressed' to true.
   */
  const showDescriptions = () => {
    console.log(`Showing descriptions`);
    setDescButtonPressed(true);
  };

  /**
   * Each Description Card has its own button, which will hide the description.
   * This will also remove the "Hide this description" button on the other description card.
   * @returns JSX containing the cards descriptions.
   */
  const descriptionsJSX = () => {
    return (
      <div>
        {descToHide === 1 && (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Description 1</h5>
              <p className="card-text">Description 1 text here.</p>
              {descButtonHidden && (
                <button
                  onClick={() => {
                    setDescToHide(1);
                    setDescButtonHidden(true);
                  }}
                >
                  Hide this description
                </button>
              )}
            </div>
          </div>
        )}

        {descToHide === 2 && (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Description 2</h5>
              <p className="card-text">Description 2 text here.</p>

              {descButtonHidden && (
                <button
                  onClick={() => {
                    setDescToHide(2);
                    setDescButtonHidden(true);
                  }}
                >
                  Hide this description
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div>This is Description</div>
      <div>
        <button type="button" onClick={() => showDescriptions()}>
          Show Description
        </button>
        {descButtonPressed && descriptionsJSX()}
        <div>
          <p>
            What thoughts do you have about the card and how it relates to your life? What new insights do you have
            after reading the description?
          </p>
          <input type="text" id="journal2" name="journal2" />
        </div>
      </div>
    </div>
  );
};

export default Description;
