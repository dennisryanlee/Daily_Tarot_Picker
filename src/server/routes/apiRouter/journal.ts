//@ Current Route is /api/journal

import * as express from "express";
import * as Types from "../../../../Types";

const journalRouter = express.Router();

// get all journals
journalRouter.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "get on journalRouter worked" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to get all journals" });
  }
});

// get one journals
journalRouter.get("/:id", async (req, res, next) => {
  try {
    res.status(200).json({ message: "get one on journalRouter worked" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to get one journal" });
  }
});

// save a new journal
journalRouter.post("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "new journal journalRouter worked" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable make new journal" });
  }
});

export default journalRouter;
