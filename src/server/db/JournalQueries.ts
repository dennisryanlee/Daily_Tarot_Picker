import { Query } from ".";
import * as Types from "../../../Types";

// creates a new daily journal
const createNewJournal = (newJournalInfo: Types.IJournalInfo) => Query(`INSERT INTO journal SET ?`, [newJournalInfo]);

// reads all journals by the user
const readAllJournals = (user_id: number) =>
  Query<Types.IJournalInfo[]>(`SELECT * FROM journal WHERE user_id = ? ORDER BY created_at DESC `, [user_id]);

// reads a journal from a specific user on a specific date
const readOneJournal = ({ user_id, journal_id }: Types.IJournalQuery) =>
  Query<Types.IJournalInfo[]>(`SELECT * FROM journal WHERE user_id = ? AND journal_id = ?`, [user_id, journal_id]);

export default {
  // export functions so that we may call them from another file
  createNewJournal,
  readAllJournals,
  readOneJournal,
};
