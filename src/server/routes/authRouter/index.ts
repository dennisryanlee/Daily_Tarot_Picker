// /routes/auth/auth_index.ts
//@ Current Route is /auth

import * as express from "express";
import { authenticate } from "passport";
import DB from "../../db";
import { generateHash, generateToken } from "../../middlewares/Passwords";
import * as Passport from "passport";
// import { giveTokenToNewUser, giveTokenToExistingUser, validateToken } from "../../Middleware";

const authRouter = express.Router();

//Auth test route
authRouter.post(`/checkToken`, Passport.authenticate("jwt"), (req, res) => {
  res.json({ message: `valid token!` });
});

// Log a user in "/auth/login"
authRouter.post("/login", Passport.authenticate("local"), (req, res) => {
  // if there is an auth issue and req.user is undefined, respond with a 401
  if (!req.user) {
    return res.status(401).json({ message: "unknown auth error, rip" });
  }

  // grab the username from the request
  const username = req.user.username;

  // sign and send a token
  const token = generateToken(username);

  // log the user in
  res.status(200).json({ message: "Successfully created new user", token });
});

// Register an account
authRouter.post("/register", async (req, res) => {
  try {
    // grab the user info from the req body
    const { username, password } = req.body;

    // check if a username and password was provided
    if (!username || !password) {
      return res.status(400).json({ message: "check your data, missing username or password" });
    }

    // hash the given password
    const hashedPass = generateHash(password);

    // bundle the username and hashed password for db query
    const newUserInfo = { username, password: hashedPass };

    // query the database with a request to create a new user
    await DB.Login.registerNewUser(newUserInfo);

    // sign and send a token
    const token = generateToken(username);

    // log the user in
    res.status(200).json({ message: "Successfully created new user", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "general unknown server error lol" });
  }
});

export default authRouter;
