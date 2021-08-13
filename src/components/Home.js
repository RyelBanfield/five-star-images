import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandomPhoto, fetchRandomPhotos, fetchPhotosBySearch } from '../API';
import { updateRandomPhotos, updateHomeSearchResults } from '../redux/actions';

const App = () => {
  const [randomPhoto, setRandomPhoto] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const randomPhotos = useSelector((state) => state.home.randomPhotos);
  const searchResults = useSelector((state) => state.home.searchResults);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomPhoto().then((photo) => {
      setRandomPhoto(photo);
    });

    fetchRandomPhotos().then((photos) => {
      dispatch(updateRandomPhotos(photos));
    });
  }, []);

  const handleSearch = () => {
    fetchPhotosBySearch(searchTerm).then((photos) => {
      dispatch(updateHomeSearchResults(photos));
    });
  };

  const clearSearch = () => {
    setSearchTerm('');
    dispatch(updateHomeSearchResults(null));
  };

  return (
    <main className="home">
      {randomPhoto && (
        <header>
          <img className="header-photo" src={randomPhoto.urls.regular} alt="Random" />
          <div className="search">
            <div className="search-bar">
              <input type="text" value={searchTerm} placeholder="Search new photos" onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            <div className="buttons">
              <button type="button" className="search-button btn" onClick={() => handleSearch()}>Search</button>
              <button type="button" className="clear-button btn" onClick={() => clearSearch()}>Clear Search</button>
            </div>
          </div>
        </header>
      )}

      {searchResults && (
      <div className="search-results">
        {searchResults.map((photo) => (
          <div className="search-result" key={photo.id}>
            <Link to={`/photo/${photo.id}`}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </Link>
          </div>
        ))}
      </div>
      )}

      {!searchResults && (
      <div className="random-photos">
        {randomPhotos && randomPhotos.map((photo) => (
          <div className="random-photo" key={photo.id}>
            <Link to={`/photo/${photo.id}`}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </Link>
          </div>
        ))}
      </div>
      )}

    </main>
  );
};

export default App;
