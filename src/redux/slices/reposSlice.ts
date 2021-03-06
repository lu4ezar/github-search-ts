import { createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IRepo, IRepoArray } from '../../types/repos';
import { fetchSuccess, dropState } from '../fetchActions';

export const reposSlice = createSlice({
  name: 'repos',
  initialState: [] as IRepoArray,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchSuccess, (_, action) => {
      const {
        payload: { repos },
      } = action;
      const strippedRepos = repos.map(
        ({
          id,
          name,
          html_url: url,
          stargazers_count: stargazers,
          watchers_count: watchers,
          forks_count: forks,
        }: AxiosResponse['data']): IRepo => ({
          id,
          name,
          url,
          stargazers,
          watchers,
          forks,
        }),
      );
      return strippedRepos;
    })
    .addCase(dropState, () => [] as IRepoArray),
});

export default reposSlice.reducer;
