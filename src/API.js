/* eslint-disable no-console */
/* eslint-disable max-len */
const baseUrl = 'https://api.unsplash.com';
const accessKey = process.env.REACT_APP_ACCESS_KEY;
const clientID = `client_id=${accessKey}`;

export const fetchPhotosBySearch = async (searchTerm) => {
  const response = await fetch(`${baseUrl}/search/photos/?${clientID}&query=${searchTerm}&per_page=25`);
  const searchPhotosData = await response.json();
  console.log('fetchPhotosBySearch');
  console.log(searchPhotosData);
  return searchPhotosData;
};

export const fetchRandomPhoto = async () => {
  const response = await fetch(`${baseUrl}/photos/random/?${clientID}`);
  const randomPhotoData = await response.json();
  console.log('fetchRandomPhoto');
  console.log(randomPhotoData);
  return randomPhotoData;
};

export const fetchLatestPhotos = async () => {
  const response = await fetch(`${baseUrl}/photos/?${clientID}`);
  const latestPhotosData = await response.json();
  console.log('fetchLatestPhotos');
  console.log(latestPhotosData);
  return latestPhotosData;
};

export const fetchListOfTopics = async () => {
  const response = await fetch(`${baseUrl}/topics/?${clientID}&per_page=30`);
  const topicsData = await response.json();
  console.log('fetchListOfTopics');
  console.log(topicsData);
  return topicsData;
};

export const fetchPhotosByTopic = async (topic) => {
  const response = await fetch(`${baseUrl}/topics/${topic}/photos/?${clientID}&per_page=25`);
  const photosData = await response.json();
  console.log('fetchPhotosByTopic');
  console.log(photosData);
  return photosData;
};

export const fetchCollectionBySearch = async (searchTerm) => {
  const response = await fetch(`${baseUrl}/search/collections/?${clientID}&query=${searchTerm}&per_page=25`);
  const collectionData = await response.json();
  console.log('fetchCollectionBySearch');
  console.log(collectionData);
  return collectionData;
};

export const fetchListOfCollections = async () => {
  const response = await fetch(`${baseUrl}/collections/?${clientID}&per_page=25`);
  const collectionsData = await response.json();
  console.log('fetchListOfCollections');
  console.log(collectionsData);
  return collectionsData;
};

export const fetchPhotosByCollection = async (collection) => {
  const response = await fetch(`${baseUrl}/collections/${collection}/photos/?${clientID}&per_page=25`);
  const photosData = await response.json();
  console.log('fetchPhotosByCollection');
  console.log(photosData);
  return photosData;
};
