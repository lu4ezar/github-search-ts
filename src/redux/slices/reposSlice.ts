import { createSlice } from "@reduxjs/toolkit";
import { IRepoArray } from "../../types/repos";
import { fetchSuccess } from "../fetchActions";

export const reposSlice = createSlice({
  name: "repos",
  initialState: [] as IRepoArray,
  reducers: {
    clearRepos: () => [] as IRepoArray
  },
  extraReducers: builder =>
    builder.addCase(fetchSuccess, (state, action) => {
      const {
        payload: { repos }
      } = action;
      return [...state, ...repos];
    })
});

export default reposSlice.reducer;
