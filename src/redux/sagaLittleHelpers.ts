import axios, { AxiosResponse } from "axios";
import { SearchString } from "../types/searchString";
import { LoadedPages } from "../types/pagination";

const API_ROOT = "https://api.github.com";

export const fetchData = async (
  searchString: SearchString,
  loadedPages: LoadedPages
) => {
  let url = `${API_ROOT}/orgs/${searchString}/repos?per_page=10`;
  if (loadedPages) {
    url += `&page=${loadedPages + 1}`;
  }
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.message;
  }
};

const getLastPageNumber = (link: string) => {
  const params = link.split("?")[1];
  const lastPageParam = params.split("&")[1];
  return Number(lastPageParam.replace(/[^0-9]/g, ""));
};

export const getTotalPagesFromResponseHeader = (
  headers: AxiosResponse["headers"]
) => {
  const { link } = headers;
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
