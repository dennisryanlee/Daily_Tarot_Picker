//@ Current Route is /api

import * as express from "express";
import cardsRouter from "./cards";
import journalRouter from "./journal";

const apiRouter = express.Router();

apiRouter.use("/drawcard", cardsRouter);
apiRouter.use("/journal", journalRouter);

export default apiRouter;
