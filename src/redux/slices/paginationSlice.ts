import { createSlice } from "@reduxjs/toolkit";
import { fetchSuccess } from "../fetchActions";
import { NextPageUrl } from "../../types/pagination";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    nextPageUrl: null as NextPageUrl
  },
  reducers: {},
  extraReducers: builder =>
    builder.addCase(fetchSuccess, (state, action) => {
      const {
        payload: { nextPageUrl }
      } = action;
      state.page = state.page + 1;
      state.nextPageUrl = nextPageUrl;
    })
});

export default paginationSlice.reducer;
