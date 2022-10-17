//@ Current Route is /api/drawcard

import * as express from "express";
import * as Types from "../../../../Types";
const ALLCARDS = require(`../../MergedCards.json`);

const cardsRouter = express.Router();

//* random card route must come before specific card, otherwise 'random' will be interpreted as a variable for a card's name
// get a single random card
cardsRouter.get("/random", (req, res, next) => {
  try {
    // choose a random number
    const cardNum = Math.floor(Math.random() * 78);
    // select the card whose place in the ALLCARDS array matches that of the chosen number
    const cardToSend = ALLCARDS[cardNum];

    // console.log({ cardToSend });
    // respond with the card
    res.status(200).json(cardToSend);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to get a random card" });
  }
});

// get a single specific card
cardsRouter.get("/:cardname", (req, res, next) => {
  try {
    // grab the card name from the req params
    const cardName = req.params.cardname;
    // select the card whose name matches that of the chosen card from all cards
    const [cardToSend] = ALLCARDS.filter((card: Types.Card) => card.name_short === cardName);
    // respond with the card
    // console.log({ cardToSend });
    res.status(200).json(cardToSend);
  } catch (error) {
    const cardName = req.params.cardname;
    console.log(error);
    res.status(500).json({ message: `unable to get card: ${cardName}` });
  }
});

// get all cards
cardsRouter.get("/", (req, res, next) => {
  try {
    // respond with all cards
    console.log("fetched all cards");
    res.status(200).json(ALLCARDS);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `unable to get all cards` });
  }
});

export default cardsRouter;
