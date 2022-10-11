import React, { useState } from "react";
import * as Types from "../../Types";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = (props: Types.NavbarCompProps) => {
  const nav = useNavigate();
  const loc = useLocation();
  const goToDailydraw = () => {
    nav("/dailydraw");
  };
  const goToJournals = () => {
    nav("/diary");
  };
  //! should i fetch all journals here in anticipation of user navigating to diary?
  // theyll end up there after daily draw anyway
  return (
    <div className="d-flex  justify-content-center mt-3">
      <button
        type="button"
        className={`btn btn-${loc.pathname != "/dailydraw" ? "primary" : "warning"} col-1 mx-2`}
        onClick={() => goToDailydraw()}
      >
        New Journal
      </button>
      <button
        type="button"
        className={`btn btn-${loc.pathname != "/diary" ? "primary" : "warning"} col-1 mx-2`}
        onClick={() => goToJournals()}
      >
        Diaries
      </button>
    </div>
  );
};

export default Navbar;
