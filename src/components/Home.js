/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { fetchPhotosBySearch, fetchRandomPhoto, fetchLatestPhotos } from '../API';

const App = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [randomPhoto, setRandomPhoto] = useState(null);
  const [latestPhotos, setLatestPhotos] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchPhotosBySearch(searchTerm).then((photos) => {
      setSearchResults(photos.results);
    });
  };

  const clearSearch = (event) => {
    event.preventDefault();
    setSearchResults(null);
  };

  useEffect(() => {
    fetchRandomPhoto().then((photo) => {
      setRandomPhoto(photo);
    });

    fetchLatestPhotos().then((photos) => {
      setLatestPhotos(photos);
    });
  }, []);

  return (
    <main className="home">

      <div className="search">
        <input type="text" placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="button" className="search-button" onClick={(event) => handleSearch(event)}>Search</button>
        <button type="button" className="clear-button" onClick={(event) => clearSearch(event)}>Clear Search</button>
      </div>

      {searchResults && (
      <div className="search-results">
        {searchResults.map((photo) => (
          <div className="search-result" key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
        ))}
      </div>
      )}

      {!searchResults && (
        <>
          <div className="random-photo">
            <h2>Random Photo</h2>
            {randomPhoto && <img src={randomPhoto.urls.small} alt={randomPhoto.alt_description} />}
          </div>

          <div className="latest-photos">
            <h2>Latest Photos</h2>
            {latestPhotos && latestPhotos.map((photo) => (
              <div className="latest-photo" key={photo.id}>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </div>
            ))}
          </div>
        </>
      )}

    </main>
  );
};

export default App;
