/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { fetchPhotosBySearch, fetchRandomPhoto, fetchLatestPhotos } from '../API';

const App = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [randomPhoto, setRandomPhoto] = useState(null);
  const [latestPhotos, setLatestPhotos] = useState(null);

  return (
    <main className="home">
      <div className="home-search">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="search-button" onClick={() => fetchPhotosBySearch(searchTerm)}>
          Search
        </button>
      </div>
      <h1>Hello World</h1>
    </main>
  );
};

export default App;
