import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: null,
  randomPhotos: null,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateHomeSearchResults: (state, action) => ({
      ...state,
      searchResults: action.payload,
    }),
    updateRandomPhotos: (state, action) => ({
      ...state,
      randomPhotos: action.payload,
    }),
  },
});

export const { updateHomeSearchResults, updateRandomPhotos } = homeSlice.actions;

export default homeSlice.reducer;
