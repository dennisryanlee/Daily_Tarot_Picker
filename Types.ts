export interface AppProps {}
export interface LoginCompProps {}
export interface NewUserCompProps {}
export interface JournalCompProps {}
export interface MainViewCompProps {}
export interface DescriptionCompProps {
  tarotCard: Card;
  cardChosen: boolean;
}
export interface CardCompProps {
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

export interface INewJournalInfo extends IJournalInfo {
  user_id: number;
  //   entry_one: string;
  //   entry_two: string;
  //   entry_three: string;
  //   entry_four: string;
  //   entry_five: string;
  //   created_at: string;
}

export interface IJournalInfo {
  entry_one: string;
  entry_two: string;
  entry_three: string;
  entry_four: string;
  entry_five: string;
  created_at: string;
}

export interface IJournalQuery {
  user_id: number;
  created_at: string;
}

export interface Card {
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  description: Description;
  url: string;
}
export interface Description {
  one: OneOrTwo;
  two: OneOrTwo;
}
export interface OneOrTwo {
  meaning: string;
  desc: string;
}
