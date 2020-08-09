export type Id = number;
export type Name = string;
export type Url = string;
export type StargazersCount = number;
export type WatchersCount = number;
export type ForksCount = number;

export type IRepo = {
  id: Id;
  name: Name;
  url: Url;
  stargazers: StargazersCount;
  watchers: WatchersCount;
  forks: ForksCount;
};

export type IRepoArray = Array<IRepo>;

export type IRepoAction =
  | { type: "repos/clearRepos" }
  | { type: "repos/addRepos" };

export interface IRepoState {
  readonly repos: IRepoArray;
}
