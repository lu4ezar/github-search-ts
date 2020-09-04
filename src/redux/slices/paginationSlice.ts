import { createSlice } from '@reduxjs/toolkit';
import { fetchSuccess, dropState } from '../fetchActions';
import { IPagination } from '../../types/pagination';

const initialState = {} as IPagination;

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchSuccess, (_, action) => {
      const {
        payload: { pagesInfo },
      } = action;
      return pagesInfo;
    })
    .addCase(dropState, () => initialState),
});

export default paginationSlice.reducer;
