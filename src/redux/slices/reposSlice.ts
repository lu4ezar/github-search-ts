import { createSlice } from "@reduxjs/toolkit";
import { IRepo, IRepoArray } from "../../types/repos";
import { fetchSuccess, dropState } from "../fetchActions";
import { AxiosResponse } from "axios";

export const reposSlice = createSlice({
  name: "repos",
  initialState: [] as IRepoArray,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchSuccess, (state, action) => {
        const {
          payload: { repos }
        } = action;
        const strippedRepos = repos.map(
          ({
            id,
            name,
            html_url: url,
            stargazers_count: stargazers,
            watchers_count: watchers,
            forks_count: forks
          }: AxiosResponse["data"]): IRepo => ({
            id,
            name,
            url,
            stargazers,
            watchers,
            forks
          })
        );
        return [...state, ...strippedRepos];
      })
      .addCase(dropState, () => [] as IRepoArray)
});

export default reposSlice.reducer;
