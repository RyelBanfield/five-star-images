import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotosBySearch, fetchRandomPhoto, fetchLatestPhotos } from '../API';
import { updateHomeSearchResults, updateRandomPhoto, updateLatestPhotos } from '../redux/slices/homeSlice';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useSelector((state) => state.home.searchResults);
  const randomPhoto = useSelector((state) => state.home.randomPhoto);
  const latestPhotos = useSelector((state) => state.home.latestPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomPhoto().then((photo) => {
      dispatch(updateRandomPhoto(photo));
    });

    fetchLatestPhotos().then((photos) => {
      dispatch(updateLatestPhotos(photos));
    });
  }, []);

  const handleSearch = () => {
    fetchPhotosBySearch(searchTerm).then((photos) => {
      dispatch(updateHomeSearchResults(photos.results));
    });
  };

  const clearSearch = () => {
    setSearchTerm('');
    dispatch(updateHomeSearchResults(null));
  };

  return (
    <main className="home">

      <div className="search">
        <input type="text" value={searchTerm} placeholder="Search new photos" onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="button" className="search-button" onClick={() => handleSearch()}>Search</button>
        <button type="button" className="clear-button" onClick={() => clearSearch()}>Clear Search</button>
      </div>

      {searchResults && (
      <div className="search-results">
        <h1>Search Results</h1>
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
