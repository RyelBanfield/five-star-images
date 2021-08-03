/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: null,
  collections: null,
  selectedCollections: null,
};

export const CollectionSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateCollectionSearchResults: (state, action) => ({
      ...state,
      searchResults: action.payload,
    }),
    updateCollections: (state, action) => ({
      ...state,
      collections: action.payload,
    }),
    updateSelectedCollections: (state, action) => ({
      ...state,
      selectedCollections: action.payload,
    }),
  },
});

export const { updateCollectionSearchResults, updateCollections, updateSelectedCollections } = CollectionSlice.actions;

export default CollectionSlice.reducer;
