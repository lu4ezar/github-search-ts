import axios, { AxiosResponse } from "axios";
import { SearchString } from "./types/searchString";
import { LoadedPages } from "./types/pagination";

const API_ROOT = "https://api.github.com";

export const fetchData = async (
  searchString: SearchString,
  loadedPages: LoadedPages
) => {
  let url = `${API_ROOT}/orgs/${searchString}/repos?per_page=10`;
  if (loadedPages) {
    url = url + `&page=${loadedPages + 1}`;
  }
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getPaginationInfoFromResponseHeader = (
  response: AxiosResponse
) => {
  const { link } = response.headers;
  if (!link) {
    return 0;
  }
  const linkFragments = link.split(",");
  const lastPageLink = linkFragments.find((link: string) =>
    link.match(/rel="last"/g)
  );
  const totalPages = getLastPageNumber(lastPageLink);
  return totalPages;
};

const getLastPageNumber = (link: string) => {
  const params = link.split("?")[1];
  const lastPageParam = params.split("&")[1];
  return Number(lastPageParam.replace(/[^0-9]/g, ""));
};

export const stripData = (data: any) => {
  return data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
    stargazers: repo.stargazers_count,
    watchers: repo.watchers_count,
    forks: repo.forks_count
  }));
};
