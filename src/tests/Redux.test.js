import homeReducer, { updateHomeSearchResults, updateRandomPhotos } from '../redux/slices/homeSlice';
import topicReducer, { updateTopics, updateSelectedTopicPhotos } from '../redux/slices/topicsSlice';

it('returns the initial home state', () => {
  expect(homeReducer(undefined, {})).toEqual({
    searchResults: null,
    randomPhotos: null,
  });
});

it('returns the initial topics state', () => {
  expect(topicReducer(undefined, {})).toEqual({
    topics: null,
    selectedTopicPhotos: null,
  });
});

it('updates the searchResults', () => {
  expect(homeReducer({}, updateHomeSearchResults(['Array of results']))).toEqual({
    searchResults: ['Array of results'],
  });
});

it('updates the randomPhotos', () => {
  expect(homeReducer({}, updateRandomPhotos(['Array of photos']))).toEqual({
    randomPhotos: ['Array of photos'],
  });
});

it('updates the Topics', () => {
  expect(topicReducer({}, updateTopics(['Array of topics']))).toEqual({
    topics: ['Array of topics'],
  });
});

it('updates the selectedTopicPhotos', () => {
  expect(topicReducer({}, updateSelectedTopicPhotos(["Array of topic's photos"]))).toEqual({
    selectedTopicPhotos: ["Array of topic's photos"],
  });
});
