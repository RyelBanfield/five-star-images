/* eslint-disable no-console */
/* eslint-disable max-len */
const baseUrl = 'https://api.unsplash.com';
const accessKey = process.env.REACT_APP_ACCESS_KEY;
const clientID = `client_id=${accessKey}`;

export const fetchPhotosBySearch = async (searchTerm) => {
  const response = await fetch(`${baseUrl}/search/photos/?${clientID}&query=${searchTerm}&per_page=30`);
  const searchPhotosData = await response.json();
  console.log('fetchPhotosBySearch');
  console.log(searchPhotosData);
  return searchPhotosData;
};

export const fetchRandomPhotos = async () => {
  const response = await fetch(`${baseUrl}/photos/random/?${clientID}&count=30`);
  const randomPhotosData = await response.json();
  console.log('fetchRandomPhotos');
  console.log(randomPhotosData);
  return randomPhotosData;
};

export const fetchListOfTopics = async () => {
  const response = await fetch(`${baseUrl}/topics/?${clientID}&per_page=30`);
  const topicsData = await response.json();
  console.log('fetchListOfTopics');
  console.log(topicsData);
  return topicsData;
};

export const fetchPhotosByTopic = async (topic) => {
  const response = await fetch(`${baseUrl}/topics/${topic}/photos/?${clientID}&per_page=30`);
  const photosData = await response.json();
  console.log('fetchPhotosByTopic');
  console.log(photosData);
  return photosData;
};
