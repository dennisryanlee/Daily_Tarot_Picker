// /routes/auth/auth_index.ts
//@ Current Route is /auth

import * as express from "express";
import DB from "../../db";
import { generateHash } from "../../middlewares/Passwords";
// import { giveTokenToNewUser, giveTokenToExistingUser, validateToken } from "../../Middleware";

const authRouter = express.Router();

//Auth test route
authRouter.post(`/checkToken`, (req, res) => {
  res.json({ message: `valid token!` });
});

// Log a user in "/auth/login"
// Middleware sends the response
authRouter.post("/login", (req, res) => {});

// Register an account
// Middleware sends the response
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
    const DB_Response = await DB.Login.registerNewUser(newUserInfo);

    // grab the insertId, and pass it to the client
    const user_id = DB_Response.insertId;

    //! also sign and send a token

    res.status(200).json({ message: "Successfully created new user", user_id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "general unknown server error lol" });
  }
});

export default authRouter;
