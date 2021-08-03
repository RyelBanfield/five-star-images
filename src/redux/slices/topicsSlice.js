import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: null,
  selectedTopic: null,
};

export const topicsSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateTopics: (state, action) => ({
      ...state,
      topics: action.payload,
    }),
    updateSelectedTopic: (state, action) => ({
      ...state,
      selectedTopic: action.payload,
    }),
  },
});

export const { updateTopics, updateSelectedTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
