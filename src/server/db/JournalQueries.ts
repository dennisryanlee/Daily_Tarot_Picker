import { Query } from ".";
import * as Types from "../../../Types";

// creates a new daily journal
const createNewJournal = (newJournalInfo: Types.INewJournalInfo) => Query(`INSERT INTO Journal SET ?`, [newJournalInfo]);

// reads all journals by the user
const readAllJournals = () => Query<Types.IJournalInfo[]>(``);

// reads a journal from a specific user on a specific date
const readOneJournal = (journayQueryInfo: Types.IJournalQuery) => Query<Types.IJournalInfo[]>(``, [journayQueryInfo]);

export default {
  // export functions so that we may call them from another file
  createNewJournal,
  readAllJournals,
  readOneJournal,
};
