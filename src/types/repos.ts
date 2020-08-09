type Id = number;
type Name = string;
type Url = string;
type StargazersCount = number;
type WatchersCount = number;
type ForksCount = number;

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
