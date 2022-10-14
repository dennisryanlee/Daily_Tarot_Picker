import React, { useState } from "react";
import * as Types from "../../../Types";

const Description = (props: Types.DescriptionCompProps) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        {!props.cardChosen ? (
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Description 1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{props.tarotCard.description.one.desc}</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Description 2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{props.tarotCard.description.two.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3">
            What thoughts do you have about the card and how it relates to your life? What new insights do you have
            after reading the description?
          </h4>
          <textarea
            className="form-control"
            wrap="hard"
            id="journal3"
            name="journal3"
            value={props.Journal3Text}
            onChange={(e) => props.setJournal3Text(e)}
            maxLength={5000}
          />
          <div className="">
            {props.Journal3Text.length >= 4750 && <div>{5000 - props.Journal3Text.length} characters remaining</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
