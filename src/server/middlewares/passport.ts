// JWTStrategies
import * as passport from "passport";
import * as PassportJWT from "passport-jwt";
import * as PassportLocal from "passport-local";
import * as Types from "../../../Types";
import * as CONFIG from "../config";
import { Application } from "express";
import { compareHash } from "./passwords";
import Query from "../db";

export function configurePassport(app: Application) {
  passport.serializeUser((user, done) => {
    if (user.password) delete user.password;
    done(null, user);
  });

  passport.deserializeUser((user: any, done) => {
    done(null, user);
  });

  // Logging in => authenticate("local") Middleware
  passport.use(
    new PassportLocal.Strategy(
      {
        usernameField: "username",
        session: false,
      },
      async (username, password, done) => {
        try {
          // query the DB for a user with the given email;
          let [userInfo] = await Query.Login.FindUser("username", username);
          // if a response is returned, the user exists
          // console.log({ res });
          // check if the provided password matches the hashedPassword from the DB
          if (userInfo && compareHash(password, userInfo.password!)) {
            // if so, remove it from the playerInfo, and call done, passing forward the playerInfo
            delete userInfo.password;
            done(null, userInfo);
          } else {
            done(null, false);
          }
        } catch (error) {
          // done(error);
          done(null, false);
        }
      }
    )
  );

  // Validate token => authenticate("jwt") Middleware to protect routes
  passport.use(
    new PassportJWT.Strategy(
      {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: CONFIG.JWT_CONFIG.jwtSecretKey,
      },
      (payload, done) => {
        try {
          done(null, payload);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
  app.use(passport.initialize()); // initialize passport so that we can use its middleware
}
