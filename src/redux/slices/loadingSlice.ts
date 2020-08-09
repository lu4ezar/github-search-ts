import { createSlice } from "@reduxjs/toolkit";
import { ILoading } from "../../types/loading";

const loadingSlice = createSlice({
  name: "loading",
  initialState: "idle" as ILoading,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase("fetch/start", () => "pending")
      .addCase("fetch/end", () => "idle")
});

export default loadingSlice.reducer;
