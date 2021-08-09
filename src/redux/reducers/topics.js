const initialState = {
  topics: null,
  selectedTopicPhotos: null,
};

const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TOPICS':
      return {
        ...state,
        topics: action.payload,
      };
    case 'UPDATE_SELECTED_TOPIC_PHOTOS':
      return {
        ...state,
        selectedTopicPhotos: action.payload,
      };
    default:
      return state;
  }
};

export default topicsReducer;
