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
  const goToCards = () => {
    nav("/cards");
  };
  const goToLogin = () => {
    nav("/");
  };
  //! should i fetch all journals here in anticipation of user navigating to diary?
  // theyll end up there after daily draw anyway
  return (
    <>
      {loc.pathname != "/" && (
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
          <button
            type="button"
            className={`btn btn-${loc.pathname != "/cards" ? "primary" : "warning"} col-1 mx-2`}
            onClick={() => goToCards()}
          >
            View Cards
          </button>

          <button type="button" className={`btn btn-primary col-1 mx-2`} onClick={() => goToLogin()}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
