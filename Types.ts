export interface NO_PROPS {}
export interface DescriptionBoxCompProps {
  tarotCard: Card;
  num: "one" | "two";
}
export interface DescriptionCompProps {
  tarotCard: Card;
  cardChosen: boolean;
}
export interface CardCompProps {
  tarotCard: Card;
  cardChosen: boolean;
  drawCard: Function;
}

export interface IUser {
  username: string;
}

export interface INewUser extends IUser {
  password: string;
}

export interface IFetchOptions {
  headers: IHeaderObject;
  body?: string;
}

export interface IHeaderObject {
  [key: string]: string;
}

export interface IJournalInfo {
  journal_id?: number;
  user_id: number;
  card_name_short: string;
  entry_one: string;
  entry_two: string;
  entry_three: string;
  created_at?: string;
}

export interface IJournalQuery {
  user_id: number;
  journal_id: number;
}

// Tarot card Type
export interface Card {
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  description: Description;
  url: string;
}
// Tarot card supprting Types
export interface Description {
  one: OneOrTwo;
  two: OneOrTwo;
}
export interface OneOrTwo {
  meaning: string;
  desc: string;
}
