import { combineReducers } from 'redux';
import homeReducer from './home';
import topicsReducer from './topics';

const rootReducer = combineReducers({
  home: homeReducer,
  topics: topicsReducer,
});

export default rootReducer;
