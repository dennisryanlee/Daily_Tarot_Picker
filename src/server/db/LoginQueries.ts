import { Query } from ".";
import * as Types from "../../../Types";

// used on login
const FindUser = (column: string, value: string) =>
  Query<Types.IUser[]>("SELECT * FROM users WHERE ?? = ?", [column, value]);

// used on register to create a new user
const registerNewUser = (newUserInfo: Types.IUser) => Query(`INSERT INTO users SET ?`, [newUserInfo]);

// delete a user account
const deleteUser = (user_id: number) => Query(`DELETE FROM users WHERE user_id = ?`, [user_id]);

// update a username

// update a user password

export default {
  // export functions so that we may call them from another file
  FindUser,
  registerNewUser,
  deleteUser,
};
