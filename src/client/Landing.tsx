import React, { useState } from "react";
import * as Types from "../../Types";
import { useNavigate } from "react-router-dom";

const LandingPage = (props: Types.LandingPageCompProps) => {
  const nav = useNavigate();
  const goToDailydraw = () => {
    nav("/dailydraw");
  };
  const goToJournals = () => {
    nav("/diary");
  };
  //! should i fetch all journals here in anticipation of user navigating to diary?
  // theyll end up there after daily draw anyway
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>This is landing page</div>
      <button type="button" className="btn btn-primary" onClick={() => goToDailydraw()}>
        New Journal
      </button>
      <button type="button" className="btn btn-primary" onClick={() => goToJournals()}>
        Diaries
      </button>
    </div>
  );
};

export default LandingPage;
