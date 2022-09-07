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
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>This is Description</div>
      <div className="text-center">
        {!descButtonPressed && (
          <button className="btn btn-primary col-1" onClick={() => showDescriptions()}>
            Show Descriptions
          </button>
        )}

        {descButtonPressed && (
          <div>
            {descToHide != 1 && (
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title text-center">Card Description 1</h5>
                  <p className="card-text text-center">Description 1 text here.</p>
                  {descToHide != 2 && (
                    <button
                      className="btn btn-primary col-1"
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
                <div className="card-body text-center">
                  <h5 className="card-title text-center">Card Description 2</h5>
                  <p className="card-text text-center">Description 2 text here.</p>

                  {descToHide != 1 && (
                    <button
                      className="btn btn-primary col-1"
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
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3">
            What thoughts do you have about the card and how it relates to your life? What new insights do you have
            after reading the description?
          </h4>
          <textarea className="form-control" wrap="hard" id="journal3" name="journal3" />
        </div>
      </div>
    </div>
  );
};

export default Description;
