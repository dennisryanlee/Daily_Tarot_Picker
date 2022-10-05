import { Query } from ".";
import * as Types from "../../../Types";

// creates a new daily journal
const createNewJournal = (newJournalInfo: Types.IJournalInfo) => Query(`INSERT INTO Journal SET ?`, [newJournalInfo]);

// reads all journals by the user
const readAllJournals = (id: number) => Query<Types.IJournalInfo[]>(`SELECT * FROM Journal WHERE user_id = ?`, [id]);

// reads a journal from a specific user on a specific date
const readOneJournal = ({ user_id, created_at }: Types.IJournalQuery) =>
  Query<Types.IJournalInfo[]>(`SELECT * FROM Journal WHERE user_id = ? AND created_at = ?`, [user_id, created_at]);

export default {
  // export functions so that we may call them from another file
  createNewJournal,
  readAllJournals,
  readOneJournal,
};
