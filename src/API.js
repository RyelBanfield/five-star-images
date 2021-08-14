const baseUrl = 'https://api.unsplash.com';
const accessKey = process.env.REACT_APP_ACCESS_KEY;
const clientID = `client_id=${accessKey}`;

export const fetchRandomPhoto = async () => {
  const response = await fetch(`${baseUrl}/photos/random?${clientID}`);
  const randomPhotoData = await response.json();
  return randomPhotoData;
};

export const fetchPhotosBySearch = async (searchTerm) => {
  const response = await fetch(`${baseUrl}/search/photos/?${clientID}&query=${searchTerm}&per_page=30&orientation=squarish`);
  const searchPhotosData = await response.json();
  return searchPhotosData.results;
};

export const fetchRandomPhotos = async () => {
  const response = await fetch(`${baseUrl}/photos/random/?${clientID}&count=30&orientation=squarish`);
  const randomPhotosData = await response.json();
  return randomPhotosData;
};

export const fetchListOfTopics = async () => {
  const response = await fetch(`${baseUrl}/topics/?${clientID}&per_page=30`);
  const topicsData = await response.json();
  return topicsData;
};

export const fetchPhotosByTopic = async (topic) => {
  const response = await fetch(`${baseUrl}/topics/${topic}/photos/?${clientID}&per_page=30`);
  const photosData = await response.json();
  return photosData;
};
