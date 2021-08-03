import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: null,
  selectedTopics: null,
};

export const topicsSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateTopics: (state, action) => ({
      ...state,
      topics: action.payload,
    }),
    updateSelectedTopics: (state, action) => ({
      ...state,
      selectedTopics: action.payload,
    }),
  },
});

export const { updateTopics, updateSelectedTopics } = topicsSlice.actions;

export default topicsSlice.reducer;
