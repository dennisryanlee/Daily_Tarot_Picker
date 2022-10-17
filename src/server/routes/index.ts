//@ Current route is /

import * as express from "express";
import * as Passport from "passport";
import apiRouter from "./apiRouter/index";
import authRouter from "./authRouter/index";

const baseRouter = express.Router();

// apply jwt check middleware to all of /api and further routes, as journal has private data
baseRouter.use("/api", Passport.authenticate("jwt", { session: false }), apiRouter);
baseRouter.use("/auth", authRouter);

export default baseRouter;
