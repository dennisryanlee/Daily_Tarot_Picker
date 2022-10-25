import * as mysql from "mysql"; // import mysql so that we can make requests from the database
import Journals from "./JournalQueries";
import Login from "./LoginQueries";
import * as dotenv from "dotenv";
import { CLEAR_DB_CONNECTION_STRING, DB_CONFIG } from "../config"; // import the database config object containing the connection info

dotenv.config();

// console.log(process.env);

// creates a database connection with the following properties

export const Connection = mysql.createPool(CLEAR_DB_CONNECTION_STRING || DB_CONFIG);

export const Query = <T = mysql.OkPacket>(query: string, values?: unknown[]) => {
  return new Promise<T>((resolve, reject) => {
    const formattedSQL = mysql.format(query, values!); // formats the mysql requests
    console.log({ formattedSQL }); // logs the mysql requests for debugging

    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      return resolve(results);
    });
  });
};

export default {
  // this is where the tables from the database will be exported
  Journals,
  Login,
};
