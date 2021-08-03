/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const baseUrl = 'https://api.unsplash.com';
const clientID = 'client_id=a_Z7NO_N0k7l1GH6j1gkFW8fZ6Nq6uJayy_SCralv1I';

export const fetchPhotosBySearch = async (searchTerm) => {
  const response = await fetch(`${baseUrl}/search/photos/?${clientID}&query=${searchTerm}&per_page=25`);
  const searchPhotosData = await response.json();
  console.log(searchPhotosData);
  return searchPhotosData;
};

export const fetchRandomPhoto = async () => {
  const response = await fetch(`${baseUrl}/photos/random/?${clientID}`);
  const randomPhotoData = await response.json();
  console.log(randomPhotoData);
  return randomPhotoData;
};

export const fetchLatestPhotos = async () => {
  const response = await fetch(`${baseUrl}/photos/?${clientID}`);
  const latestPhotosData = await response.json();
  console.log(latestPhotosData);
  return latestPhotosData;
};

export const fetchListOfTopics = async () => {
  const response = await fetch(`${baseUrl}/topics/?${clientID}&per_page=25`);
  const topicsData = await response.json();
  console.log(topicsData);
  return topicsData;
};

export const fetchPhotosByTopic = async (topic) => {
  const response = await fetch(`${baseUrl}/topics/${topic}/photos/?${clientID}&per_page=25`);
  const photosData = await response.json();
  console.log(photosData);
  return photosData;
};

export const fetchCollectionBySearch = async (searchTerm) => {
  const response = await fetch(`${baseUrl}/search/collections/?${clientID}&query=${searchTerm}&per_page=25`);
  const collectionData = await response.json();
  console.log(collectionData);
  return collectionData;
};

export const fetchListOfCollections = async () => {
  const response = await fetch(`${baseUrl}/collections/?${clientID}&per_page=25`);
  const collectionsData = await response.json();
  console.log(collectionsData);
  return collectionsData;
};
