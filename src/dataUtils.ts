import axios, { AxiosResponse } from "axios";
import { ISearchStringArg } from "./types/searchString";
import { INextPageUrl } from "./types/pagination";

const API_ROOT = "https://api.github.com";
// https://api.github.com/orgs/styled-components/repos

// type guard function
const isSearchString = (
  str: ISearchStringArg | INextPageUrl
): str is ISearchStringArg => {
  return (str as ISearchStringArg).searchString !== undefined;
};

// type Arg = ISearchStringArg | INextPageUrl;

export const fetchData = async (arg: any) => {
  let url;
  if (isSearchString(arg)) {
    // first page
    url = `${API_ROOT}/orgs/${arg.searchString}/repos?per_page=10`;
  } else {
    // subsequent pages
    url = arg.nextPageUrl || "";
  }
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getNextPageUrl = (response: AxiosResponse) => {
  const { link }: { link: INextPageUrl["nextPageUrl"] } = response.headers;
  if (!link) {
    return null;
  }
  const nextLink = link.split(",").find(s => s.indexOf('rel="next"') > -1);
  if (!nextLink) {
    return null;
  }
  return nextLink
    .trim()
    .split(";")[0]
    .slice(1, -1);
};

export const stripData = (data: any) =>
  data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
    stargazers: repo.stargazers_count,
    watchers: repo.watchers_count,
    forks: repo.forks_count
  }));
