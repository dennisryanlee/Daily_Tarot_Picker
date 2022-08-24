export interface AppProps {}
export interface LoginCompProps {}
export interface NewUserCompProps {}
export interface JournalCompProps {}
export interface DescriptionCompProps {}
export interface MainViewCompProps {}
export interface CardCompProps {}

export interface IUser {
  username: string;
}

export interface IFetchOptions {
  headers: IHeaderObject;
  body?: string;
}

export interface IHeaderObject {
  [key: string]: string;
}
