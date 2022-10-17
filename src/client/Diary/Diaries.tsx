import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";
import DiaryComponent from "./DiaryComponent";

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
      <div>View old Journals below</div>
      {allJournals.map((diary) => (
        <DiaryComponent key={`diary-key-${diary.created_at}`} diary={diary} />
      ))}
    </div>
  );
};

export default Diaries;
