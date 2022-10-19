import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import Fetcher from "../ClientUtils/Fetcher";
import DiaryComponent from "./DiaryComponent";
import Select, { SingleValue } from "react-select";
import DatePicker from "react-datepicker";

const ALLCARDS = require("./MergedCards.json");

// reassign to give cards a type
const CARDS: Types.Card[] = ALLCARDS;
const EMPTY_SELECTOR = { value: "", label: "Choose a card" };
const DEFAULT_SUITS = ["ar", "pe", "sw", "cu", "wa"];

interface selectorItem {
  value: string;
  label: string;
}

const NOW = new Date();

const Diaries = (props: Types.DiariesCompProps) => {
  // holds all journals
  const [allJournals, setAllJournals] = useState<Types.IJournalInfo[]>([]);
  // holds journals to display after filtering
  const [journalsToDisplay, setjournalsToDisplay] = useState<Types.IJournalInfo[]>([]);
  const [suitsToShow, setSuitsToShow] = useState<string[]>(DEFAULT_SUITS);
  const [cardToShow, setCardToShow] = useState<selectorItem>(EMPTY_SELECTOR);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());

  // map over ALL CARDS and reduce them to a list of options for a select tag
  const options = [EMPTY_SELECTOR, ...CARDS.map((card) => ({ value: card.name_short, label: card.name }))];

  /**
   * options to sort by:
   *
   ** (DONE) specific card drawn - mui autocomplete > overhaul with mui for experience?
   ** (DONE) a suit of cards
   * single date
   * date range past week / month
   * text in journal
   */

  const clearAllFilters = () => {
    setSuitsToShow(DEFAULT_SUITS);
    setCardToShow(EMPTY_SELECTOR);
  };

  // toggles a suit in the suitsToHide array
  const toggleSuitFilter = (suitToToggle: string) => {
    // if the suit exists in the array, remove it
    if (suitsToShow.length === 1 && suitToToggle === suitsToShow[0]) {
      setSuitsToShow(DEFAULT_SUITS);
    } else if (suitsToShow.includes(suitToToggle)) {
      // place the current suits in a temporary array
      let suitsToToggleTemp = [...suitsToShow];
      // find the index of the suit to hide
      const indexToRemove = suitsToShow.indexOf(suitToToggle);
      // remove the suit from the array
      suitsToToggleTemp.splice(indexToRemove, 1);
      // place the remaining suits in state
      setSuitsToShow([...suitsToToggleTemp]);
    } else {
      // otherwise, add it
      setSuitsToShow([...suitsToShow, suitToToggle]);
    }
    // remove the single card filter
    setCardToShow(EMPTY_SELECTOR);
  };

  const handleSelectorFilter = (
    e: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    // if a card has been chosen, clear all old filters, then apply the card filter
    setSuitsToShow(DEFAULT_SUITS);
    if (e?.value) {
      setCardToShow(e);
    }
    // console.log(e);
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

  // this useEffect refreshes the page when user wants to filter based on suit or card
  useEffect(() => {
    // determine if the new date chosen is not the same as the current date
    const startHasUpdated = Math.abs(NOW.getTime() - startDate!.getTime()) > 5000;
    const endtHasUpdated = Math.abs(NOW.getTime() - endDate!.getTime()) > 5000;

    // declare a filtered array to display later
    let filtered: Types.IJournalInfo[] = [];

    // if user wants to filter by card
    if (cardToShow.value) {
      filtered = allJournals.filter((journal) => {
        return journal.card_name_short === cardToShow.value;
      });
    } else {
      // otherwise, user is filtering by suit
      filtered = allJournals.filter((journal) => {
        return suitsToShow.includes(journal.card_name_short.substring(0, 2));
      });
    }

    // apply date filters
    if (startHasUpdated || endtHasUpdated) {
      let first = startDate!.setHours(0);
      const last = endDate!.getTime();
      const start = first < last ? first : last;
      const end = first < last ? last : first;

      filtered = filtered.filter((journal) => {
        const current = new Date(journal.created_at!).getTime();
        console.log({ time: new Date(journal.created_at!), startDate, endDate });
        return current > start && current <= end;
      });
    }
    // display the filtered journals
    setjournalsToDisplay(filtered);
  }, [suitsToShow, cardToShow, startDate, endDate]);

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
                <button
                  className={`col-2 mx-1 btn btn-${suitsToShow.includes("ar") ? "success" : "danger"}`}
                  onClick={() => toggleSuitFilter("ar")}
                >
                  Arcana
                </button>
                <button
                  className={`col-2 mx-1 btn btn-${suitsToShow.includes("pe") ? "success" : "danger"}`}
                  onClick={() => toggleSuitFilter("pe")}
                >
                  Pentacles
                </button>
                <button
                  className={`col-2 mx-1 btn btn-${suitsToShow.includes("sw") ? "success" : "danger"}`}
                  onClick={() => toggleSuitFilter("sw")}
                >
                  Swords
                </button>
                <button
                  className={`col-2 mx-1 btn btn-${suitsToShow.includes("cu") ? "success" : "danger"}`}
                  onClick={() => toggleSuitFilter("cu")}
                >
                  Cups
                </button>
                <button
                  className={`col-2 mx-1 btn btn-${suitsToShow.includes("wa") ? "success" : "danger"}`}
                  onClick={() => toggleSuitFilter("wa")}
                >
                  Wands
                </button>
              </div>
            </div>
            <div className="cardbody">
              <Select onChange={handleSelectorFilter} value={cardToShow} options={options} />
            </div>
            <div className="cardbody">
              <DatePicker selected={startDate} onChange={setStartDate} />
              <DatePicker selected={endDate} onChange={setendDate} />
            </div>
          </div>
        </div>
      )}

      <div className="mt-4">
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
