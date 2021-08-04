import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import topicsReducer from './slices/topicsSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    topics: topicsReducer,
  },
});

export default store;
