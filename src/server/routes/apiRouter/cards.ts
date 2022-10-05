//@ Current Route is /api/drawcard

import * as express from "express";
import * as fs from "fs";
import * as path from "path";

const cardsRouter = express.Router();

cardsRouter.get("/", (req, res, next) => {
  // get the path name to the MergedCards.json file
  const pathName = path.join(__dirname, "../src/server/MergedCards.json");
  console.log(pathName);

  // read the MergedCards.json file
  fs.readFile(pathName, (err, MergedCards) => {
    // if there is an error, respond with an error message
    if (err) {
      res.status(500).json({ message: "could not read Merged Cards file" });
    } else {
      // if there was no error, find the card, then respond with the card
      // transform the buffer to a string
      const cards = MergedCards.toString();
      // parse the string as JSON data
      const cardsAsJson = JSON.parse(cards);
      // choose the card from the request
      const cardone = cardsAsJson[1];
      console.log(cardone);

      res.status(200).json({ message: "wow" });
    }
  });

  // using the number from the request, respond with that card from mergedcards.json
});

export default cardsRouter;
