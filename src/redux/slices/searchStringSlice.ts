import { createSlice } from '@reduxjs/toolkit';
import { SearchString } from '../../types/searchString';

export const searchStringSlice = createSlice({
  name: 'searchString',
  initialState: '',
  reducers: {
    setSearchString: (_, action): SearchString => action.payload,
  },
});

export default searchStringSlice.reducer;
