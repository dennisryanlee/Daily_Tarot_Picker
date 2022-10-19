import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import Fetcher from "../ClientUtils/Fetcher";
import DiaryComponent from "./DiaryComponent";

const Diaries = (props: Types.DiariesCompProps) => {
  // holds all journals
  const [allJournals, setAllJournals] = useState<Types.IJournalInfo[]>([]);
  // holds journals to display after filtering
  const [journalsToDisplay, setjournalsToDisplay] = useState<Types.IJournalInfo[]>([]);
  const [suitesToShow, setSuitesToShow] = useState<string[]>(["ar", "pe", "sw", "cu", "wa"]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  /**
   * options to sort by:
   *
   * specific card drawn
   ** (DONE)a suit of cards
   * single date
   * date range past week / month
   * text in journal
   */

  // toggles a suite in the suitesToHide array
  const toggleSuiteFilter = (suiteToToggle: string) => {
    // if the suite exists in the array, remove it
    if (suitesToShow.includes(suiteToToggle)) {
      // place the current suites in a temporary array
      let suitesToToggleTemp = [...suitesToShow];
      // find the index of the suite to hide
      const indexToRemove = suitesToShow.indexOf(suiteToToggle);
      // remove the suite from the array
      suitesToToggleTemp.splice(indexToRemove, 1);
      // place the remaining suites in state
      setSuitesToShow([...suitesToToggleTemp]);
    } else {
      // otherwise, add it
      setSuitesToShow([...suitesToShow, suiteToToggle]);
    }
  };

  // this useEffect fetches all journals
  useEffect(() => {
    // make a fetch to all journals here
    Fetcher.GET(`/api/journal/`)
      .then((res) => {
        // set the journals to state
        // console.log({ res });
        setAllJournals(res);
        setjournalsToDisplay(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // this useEffect refreshes the page when user wants to filter (currently only on suites)
  useEffect(() => {
    // declare an empty array to add journals user wishes to see
    let tempJournalArray: Types.IJournalInfo[] = [];

    // iterate over all journals, checking if their suite matches the current selection
    allJournals.forEach((journal) => {
      // define the journals suite from card_name_short for convenience
      const suiteString: string = journal.card_name_short.substring(0, 2);

      // if the suite string is included in the suites to show, add it to the temp array
      if (suitesToShow.includes(suiteString)) {
        tempJournalArray.push(journal);
      }
    });

    // set the temp journal array to state to display the newly filtered journals
    setjournalsToDisplay(tempJournalArray);
  }, [suitesToShow]);

  return (
    <>
      <div className="row mt-3 justify-content-center">
        <button className="col-1 btn btn-primary" onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="row mt-3 justify-content-center">
          <div className="card shadow col-8">
            <div className="cardbody">
              <div className="row justify-content-center">
                {/* <span className="col-2">
                <p>Filter by Suite</p>
              </span> */}
                <button
                  className={`col-2 btn btn-${suitesToShow.includes("ar") ? "success" : "danger"}`}
                  onClick={() => toggleSuiteFilter("ar")}
                >
                  Arcana
                </button>
                <button
                  className={`col-2 btn btn-${suitesToShow.includes("pe") ? "success" : "danger"}`}
                  onClick={() => toggleSuiteFilter("pe")}
                >
                  Pentacles
                </button>
                <button
                  className={`col-2 btn btn-${suitesToShow.includes("sw") ? "success" : "danger"}`}
                  onClick={() => toggleSuiteFilter("sw")}
                >
                  Swords
                </button>
                <button
                  className={`col-2 btn btn-${suitesToShow.includes("cu") ? "success" : "danger"}`}
                  onClick={() => toggleSuiteFilter("cu")}
                >
                  Cups
                </button>
                <button
                  className={`col-2 btn btn-${suitesToShow.includes("wa") ? "success" : "danger"}`}
                  onClick={() => toggleSuiteFilter("wa")}
                >
                  Wands
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="d-flex mt-4">
        {allJournals && (
          <div className="row justify-content-center">
            {journalsToDisplay.map((diary) => (
              <DiaryComponent key={`diary-key-${diary.journal_id}`} diary={diary} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Diaries;
