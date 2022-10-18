import React, { useEffect, useState } from "react";
import * as Types from "../../Types";
import { useNavigate, useLocation } from "react-router-dom";
import Fetcher from "./ClientUtils/Fetcher";

const Navbar = (props: Types.NO_PROPS) => {
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

  // determines whether the user is on the login page
  const OKtoDisplay = loc.pathname != "/";

  // upon every page change / navigation, recheck the token and if it is expired, log the user out
  useEffect(() => {
    if (OKtoDisplay) {
      Fetcher.POST(`/auth/checkToken`, null).catch(() => {
        goToLogin();
      });
    }
  }, [loc.pathname]);

  return (
    <>
      {OKtoDisplay && (
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
