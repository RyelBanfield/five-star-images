const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
const UPDATE_RANDOM_PHOTOS = 'UPDATE_RANDOM_PHOTOS';
const UPDATE_TOPICS = 'UPDATE_TOPICS';
const UPDATE_SELECTED_TOPIC_PHOTOS = 'UPDATE_SELECTED_TOPIC_PHOTOS';

export const updateRandomPhotos = (photos) => ({
  type: UPDATE_RANDOM_PHOTOS,
  payload: photos,
});

export const updateHomeSearchResults = (photos) => ({
  type: UPDATE_SEARCH_RESULTS,
  payload: photos,
});

export const updateTopics = (topics) => ({
  type: UPDATE_TOPICS,
  payload: topics,
});

export const updateSelectedTopicPhotos = (photos) => ({
  type: UPDATE_SELECTED_TOPIC_PHOTOS,
  payload: photos,
});
