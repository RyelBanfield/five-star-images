import {
  fetchPhotosBySearch, fetchRandomPhotos, fetchListOfTopics, fetchPhotosByTopic,
} from '../API';

const baseUrl = 'https://api.unsplash.com';
const accessKey = process.env.REACT_APP_ACCESS_KEY;
const clientID = `client_id=${accessKey}`;

it('fetchPhotosBySearch should call fetch with correct params', () => {
  fetchPhotosBySearch('car');
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}/search/photos/?${clientID}&query=car&per_page=30`);
});

it('fetchRandomPhotos should call fetch with correct params', () => {
  fetchRandomPhotos();
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}/photos/random/?${clientID}&count=30`);
});

it('fetchListOfTopics should call fetch with correct params', () => {
  fetchListOfTopics();
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}/topics/?${clientID}&per_page=30`);
});

it('fetchPhotosByTopic should call fetch with correct params', () => {
  fetchPhotosByTopic('animals');
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}/topics/animals/photos/?${clientID}&per_page=30`);
});
