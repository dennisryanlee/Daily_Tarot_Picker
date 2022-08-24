// /routes/auth/auth_index.ts
//@ Current Route is /auth

import * as express from "express";
// import { giveTokenToNewUser, giveTokenToExistingUser, validateToken } from "../../Middleware";

const authRouter = express.Router();

//Auth test route
authRouter.post(`/checkToken`, (req, res) => {
  res.json({ message: `valid token!` });
});

// Log a user in "/auth/login"
// Middleware sends the response
authRouter.post("/login");

// Register an account
// Middleware sends the response
authRouter.post("/register");

export default authRouter;
