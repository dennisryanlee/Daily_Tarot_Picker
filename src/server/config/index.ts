import * as dotenv from "dotenv";
dotenv.config();

export const DB_CONFIG = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const CLEAR_DB_CONNECTION_STRING = process.env.CLEARDB_DATABASE_URL;

export const JWT_CONFIG = { jwtSecretKey: process.env.JWT_SECRET_KEY! };

/**
 *This is how we hide the database access info, while still being able to use it
 */
