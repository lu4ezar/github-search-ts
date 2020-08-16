import { createSlice } from '@reduxjs/toolkit';
import { fetchSuccess, dropState } from '../fetchActions';

const initialState = {
  currentPage: 0,
  loadedPages: 0,
  totalPages: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchSuccess, (state, action) => {
        const {
          payload: { totalPages },
        } = action;
        state.currentPage += 1;
        state.loadedPages += 1;
        state.totalPages = totalPages;
      })
      .addCase(dropState, () => initialState),
});

export default paginationSlice.reducer;
