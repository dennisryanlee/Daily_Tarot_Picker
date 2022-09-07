import React, { useEffect, useState } from "react";
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
    console.log(descButtonPressed);
  };

  useEffect(() => {}, [descButtonPressed, descToHide, descButtonHidden]);

  return (
    <div>
      <div>This is Description</div>
      <div>
        {!descButtonPressed && <button onClick={() => showDescriptions()}>Show Descriptions</button>}

        {descButtonPressed && (
          <div>
            {descToHide != 1 && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card Description 1</h5>
                  <p className="card-text">Description 1 text here.</p>
                  {descToHide != 2 && (
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

            {descToHide != 2 && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card Description 2</h5>
                  <p className="card-text">Description 2 text here.</p>

                  {descToHide != 1 && (
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
        )}
        <div>
          <p>
            What thoughts do you have about the card and how it relates to your life? What new insights do you have
            after reading the description?
          </p>
          <input type="text" id="journal3" name="journal3" />
        </div>
      </div>
    </div>
  );
};

export default Description;
