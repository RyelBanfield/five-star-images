import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: null,
  randomPhoto: null,
  latestPhotos: null,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateSearchResults: (state, action) => ({
      ...state,
      searchResults: action.payload,
    }),
    updateRandomPhoto: (state, action) => ({
      ...state,
      randomPhoto: action.payload,
    }),
    updateLatestPhotos: (state, action) => ({
      ...state,
      latestPhotos: action.payload,
    }),
  },
});

export const { updateSearchResults, updateRandomPhoto, updateLatestPhotos } = homeSlice.actions;

export default homeSlice.reducer;
