import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";

const Description = (props: Types.DescriptionCompProps) => {
  const [descButtonPressed, setDescButtonPressed] = useState<boolean>(false);
  const [expandButtonOnePressed, setExpandButtonOnePressed] = useState<boolean>(false);
  const [expandButtonTwoPressed, setExpandButtonTwoPressed] = useState<boolean>(false);
  const [descToHide, setDescToHide] = useState<number>(0);
  const [descButtonHidden, setDescButtonHidden] = useState<boolean>(true);

  /**
   * This function sets component state 'descButtonPressed' to true.
   */
  const showDescriptions = () => {
    console.log(`Showing descriptions`);
    setDescButtonPressed(true);
    console.log(descButtonPressed);
  };

  useEffect(() => {}, [descButtonPressed, descToHide, descButtonHidden]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        {!descButtonPressed && (
          <button className="btn btn-primary" onClick={() => showDescriptions()}>
            Show Descriptions
          </button>
        )}

        {descButtonPressed && (
          <div className="d-flex flex-row justify-content-center align-items-center">
            {descToHide != 1 && (
              <div className="card col-6 mx-2">
                <div className="card-body text-center">
                  <h5 className="card-title text-center">Card Description 1</h5>
                  {/* use a substring for the description, expanding to the entire description when an 'expand' button is pressed*/}
                  <p className="card-text text-center">{props.tarotCard.description.one.desc}</p>

                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      setExpandButtonOnePressed(!expandButtonOnePressed);
                    }}
                  >
                    {expandButtonOnePressed ? "Collapse" : "Expand"}
                  </button>

                  {descToHide != 2 && (
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        setDescToHide(1);
                        setDescButtonHidden(true);
                      }}
                    >
                      Hide
                    </button>
                  )}
                </div>
              </div>
            )}

            {descToHide != 2 && (
              <div className="card col-6 mx-2">
                <div className="card-body text-center">
                  <h5 className="card-title text-center">Card Description 2</h5>
                  <p className="card-text text-center">{props.tarotCard.description.two.desc}</p>

                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      setExpandButtonTwoPressed(!expandButtonTwoPressed);
                    }}
                  >
                    {expandButtonTwoPressed ? "Collapse" : "Expand"}
                  </button>

                  {descToHide != 1 && (
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        setDescToHide(2);
                        setDescButtonHidden(true);
                      }}
                    >
                      Hide
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
