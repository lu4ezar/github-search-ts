import { createSlice } from '@reduxjs/toolkit';

export const searchStringSlice = createSlice({
  name: 'searchString',
  initialState: '',
  reducers: {
    setSearchString: (_, action) => action.payload
  }
});

export default searchStringSlice.reducer;
