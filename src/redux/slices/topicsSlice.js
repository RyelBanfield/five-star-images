import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: null,
  selectedTopicPhotos: null,
};

export const topicsSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateTopics: (state, action) => ({
      ...state,
      topics: action.payload,
    }),
    updateSelectedTopicPhotos: (state, action) => ({
      ...state,
      selectedTopicPhotos: action.payload,
    }),
  },
});

export const { updateTopics, updateSelectedTopicPhotos } = topicsSlice.actions;

export default topicsSlice.reducer;
