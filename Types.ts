export interface AppProps {}
export interface LoginCompProps {}
export interface NewUserCompProps {}
export interface JournalCompProps {}
export interface MainViewCompProps {}
export interface JournalComponentProps {}
export interface LandingPageCompProps {}
export interface DiariesProps {}
export interface NavbarCompProps {}
export interface CardsViewCompProps {}
export interface CardsDetailsCompProps {}
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
  user_id: number;
  card_int: number;
  entry_one: string;
  entry_two: string;
  entry_three: string;
  created_at: string;
}

export interface IJournalQuery {
  user_id: number;
  created_at: string;
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
