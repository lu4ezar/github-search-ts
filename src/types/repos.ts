export type Id = number;
export type Name = string;
export type HtmlUrl = string;
export type Description = string;
export type StargazersCount = number;
export type WatchersCount = number;

export type IRepo = {
  id?: Id;
  name: Name;
  htmlUrl: HtmlUrl;
  description: Description;
  stargazersCount: StargazersCount;
  watchersCount: WatchersCount;
};

export type IRepoArray = Array<IRepo>;

export type IRepoAction =
  | { type: "repos/clearRepos" }
  | { type: "repos/addRepos" };

export interface IRepoState {
  readonly repos: IRepoArray;
}
