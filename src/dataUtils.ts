import axios, { AxiosResponse } from 'axios';

const API_ROOT = 'https://api.github.com/search/repositories';

export const fetchData = async (arg: any) => {
  let url;
  if (arg.searchString) {
    url = `${API_ROOT}?q=${arg.searchString}`;
  } else {
    url = arg;
  }
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getNextPageUrl = (response: AxiosResponse) => {
  const { link } = response.headers;
  if (!link) {
    return null;
  }
  const nextLink = link
    .split(',')
    .find((s: any) => s.indexOf('rel="next"') > -1);
  if (!nextLink) {
    return null;
  }
  return nextLink
    .trim()
    .split(';')[0]
    .slice(1, -1);
};

/* eslint-disable camelcase */
export const stripData = ({ items }: { items: any }) =>
  items.map(
    ({
      id,
      name,
      html_url,
      description,
      stargazers_count,
      watchers_count,
    }: any) => ({
      id,
      name,
      htmlUrl: html_url,
      description,
      stargazersCount: stargazers_count,
      watchersCount: watchers_count,
    }),
  );
