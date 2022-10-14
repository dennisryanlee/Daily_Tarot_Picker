import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import JournalComponent from "./JournalComponent";

const Diaries = (props: Types.DiariesCompProps) => {
  const nav = useNavigate();
  const [allJournals, setAllJournals] = useState<Types.IJournalInfo[]>([]);

  // this useEffect fetches all journals
  useEffect(() => {
    // make a fetch to all journals here
    fetch(`/api/journal/`)
      .then((res) => {
        // parse the response
        console.log(res);
        return res.json();
      })
      .then((res) => {
        // set the journals to state
        setAllJournals(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>This is diaries page</div>
      <div>View Old Journals below</div>
      <JournalComponent />
      <JournalComponent />
      <JournalComponent />
    </div>
  );
};

export default Diaries;
