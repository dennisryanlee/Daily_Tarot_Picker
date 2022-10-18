import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import Fetcher from "../ClientUtils/Fetcher";
import DiaryComponent from "./DiaryComponent";

const Diaries = (props: Types.DiariesCompProps) => {
  const [allJournals, setAllJournals] = useState<Types.IJournalInfo[]>([]);

  // this useEffect fetches all journals
  useEffect(() => {
    // make a fetch to all journals here
    Fetcher.GET(`/api/journal/`)
      .then((res) => {
        // set the journals to state
        console.log({ res });
        setAllJournals(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="d-flex mt-4">
      {allJournals && (
        <div className="row justify-content-center">
          {allJournals.map((diary) => (
            <DiaryComponent key={`diary-key-${diary.journal_id}`} diary={diary} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Diaries;
