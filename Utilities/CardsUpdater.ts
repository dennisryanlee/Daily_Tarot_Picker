const cards = require("./Cards.json").cards;
const urls = require("./CardLinks.json");

// import AllCards from "./Cards.json";
// import urls from "./CardLinks.json";

import * as fs from "fs";
import * as path from "path";

/**
 * This card updater attaches the url gathered from the scraper utility to the corresponding card from cards.json
 * and writes the new data to a new file called mergedcards.json
 *
 * mergedcards.json will be served from the server
 */

// const cards = AllCards.cards;

// filter through the list of all cards, and select the specified 'suit'
const majorArcane = cards.filter((c) => c.name_short.includes("ar"));
const pentacles = cards.filter((c) => c.name_short.includes("pe"));
const cups = cards.filter((c) => c.name_short.includes("cu"));
const wands = cards.filter((c) => c.name_short.includes("wa") && c.name_short[0] === "w");
const swords = cards.filter((c) => c.name_short.includes("sw"));

// filter through the list of all urls, and select the specified 'suit'
const pentacleURLs = urls.filter((url) => url.toLowerCase().includes("pents"));
const cupURLs = urls.filter((url) => url.toLowerCase().includes("cups"));
const swordURLs = urls.filter((url) => url.toLowerCase().includes("swords"));
const wandURLs = urls.filter((url) => url.toLowerCase().includes("wands"));
const majorURLs = urls.filter(
  (url) =>
    !url.toLowerCase().includes("wands") &&
    !url.toLowerCase().includes("swords") &&
    !url.toLowerCase().includes("cups") &&
    !url.toLowerCase().includes("pents")
);

// merge the url to the corresponding card within the given suit, then flatten the resulting array
const merged = [
  majorArcane.map((ma, i) => ({ ...ma, url: majorURLs[i] })),
  pentacles.map((p, i) => ({ ...p, url: pentacleURLs[i] })),
  cups.map((c, i) => ({ ...c, url: cupURLs[i] })),
  swords.map((s, i) => ({ ...s, url: swordURLs[i] })),
  wands.map((w, i) => ({ ...w, url: wandURLs[i] })),
].flat();

// Create a file with the newly updated cards
fs.writeFile(path.join(__dirname, "../Utilities/MergedCards.json"), JSON.stringify(merged), (error) => {
  console.log(`try again lols: ${error?.message}`);
});

//@ target a 'suit' op card urls
// [
//   ...[...document.getElementsByClassName("wpb_text_column wpb_content_element ")][11].children[0].children[0].children,
// ].map((wow) => wow.children[0].href);

//@ generate a list of minor arcana links for selenium
// const BASE_URL = "https://www.biddytarot.com/tarot-card-meanings/minor-arcana";
// const SUITS = ["cups", "swords", "wands", "pentacles"];
// const CARDS = [
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
//   "page",
//   "knight",
//   "queen",
//   "king",
//   "ace",
// ];

// const seleniumPages = SUITS.map((suit) => CARDS.map((card) => `${BASE_URL}/suit-of-${suit}/${card}-of-${suit}`)).flat();
// console.log(seleniumPages);
