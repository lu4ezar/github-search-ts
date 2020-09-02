import { createSlice } from '@reduxjs/toolkit';
import { searchStringSlice } from './searchStringSlice';
import { fetchFailure, fetchStart } from '../fetchActions';
import { IError } from '../../types/error';

const errorSlice = createSlice({
  name: 'error',
  initialState: null as IError,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchFailure, (_, action) => action.payload)
    .addCase(fetchStart, (_, __) => null)
    .addCase(searchStringSlice.actions.setSearchString, (_, __) => null),
});

export default errorSlice.reducer;
