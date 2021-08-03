import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import topicsReducer from './slices/topicsSlice';
import collectionsReducer from './slices/collectionsSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    topics: topicsReducer,
    collections: collectionsReducer,
  },
});

export default store;
