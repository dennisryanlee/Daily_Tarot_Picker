import { Query } from ".";
import * as Types from "../../../Types";

const FindUser = (column: string, value: string) => Query<Types.IUser[]>("SELECT * FROM Users WHERE ?? = ?", [column, value]);

const registerNewUser = (newUserInfo: Types.INewUser) => Query(`INSERT INTO Users SET ?`, [newUserInfo]);

export default {
  // export functions so that we may call them from another file
  FindUser,
  registerNewUser,
};
