//@ Current Route is /api

import * as express from "express";
import cardsRouter from "./cards";

const apiRouter = express.Router();

apiRouter.use("/drawcard", cardsRouter);

export default apiRouter;
