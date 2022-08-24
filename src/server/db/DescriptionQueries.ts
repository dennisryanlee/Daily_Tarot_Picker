import { Query } from ".";
import * as Types from "../../../Types";

const createNewDescription = (newDescription: Types.INewTarotDescription) => Query(``, [newDescription]);

const readAllDescriptions = () => Query<Types.ITarotDescription[]>(``);

const updateDescription = (newDescription: Types.INewTarotDescription) => Query(``, [newDescription]);

const deleteDescription = (tarotDescriptionQueryInfo: Types.ITarotDescriptionQuery) => Query(``, [tarotDescriptionQueryInfo]);

export default {
  // export functions so that we may call them from another file
  createNewDescription,
  readAllDescriptions,
  updateDescription,
  deleteDescription,
};
