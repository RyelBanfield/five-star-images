import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhotosBySearch, fetchRandomPhotos } from '../API';
import { updateHomeSearchResults, updateRandomPhotos } from '../redux/slices/homeSlice';
// import Photo from './Photo';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useSelector((state) => state.home.searchResults);
  const randomPhotos = useSelector((state) => state.home.randomPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomPhotos().then((photos) => {
      dispatch(updateRandomPhotos(photos));
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
      <div className="random-photos">
        {randomPhotos && randomPhotos.map((photo) => (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
          </Link>
        ))}
      </div>
      )}

    </main>
  );
};

export default App;
