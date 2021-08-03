import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { updateCollectionSearchResults, updateCollections, updateSelectedCollections } from '../redux/slices/collectionsSlice';
import { fetchCollectionBySearch, fetchListOfCollections, fetchPhotosByCollection } from '../API';

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [options, setOptions] = useState(null);
  const collections = useSelector((state) => state.collections.collections);
  const searchResults = useSelector((state) => state.collections.searchResults);
  const selectedCollections = useSelector((state) => state.collections.selectedCollections);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchListOfCollections().then((collections) => {
      dispatch(updateCollections(collections));
    });
  }, []);

  useEffect(() => {
    if (collections) {
      setOptions(collections.map((collection) => ({
        value: collection.id,
        label: collection.title,
      })));
    }
  }, [collections]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchCollectionBySearch(searchTerm).then((photos) => {
      dispatch(updateCollectionSearchResults(photos.results));
    });
  };

  const handleChange = (selection) => {
    fetchPhotosByCollection(selection).then((photos) => {
      dispatch(updateCollectionSearchResults(null));
      dispatch(updateSelectedCollections(photos));
    });
  };

  const clearSelection = (event) => {
    event.preventDefault();
    dispatch(updateCollectionSearchResults(null));
    dispatch(updateSelectedCollections(null));
  };

  return (
    <main className="collections">
      <h1>Collections</h1>
      <input type="text" placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)} />
      <Select options={options} placeholder="Select Collection" onChange={(selection) => handleChange(selection.value)} />
      <button type="button" className="search-button" onClick={(event) => handleSearch(event)}>Search</button>
      <button type="button" className="clear-button" onClick={(event) => clearSelection(event)}>Clear Selection</button>

      {!searchResults && !selectedCollections && (
        <ul className="collections">
          {collections && collections.map((collection) => (
            <li key={collection.id} className="collection">
              <p>{collection.title}</p>
              <img
                src={collection.cover_photo.urls.small}
                alt={collection.cover_photo.alt_description}
              />
            </li>
          ))}
        </ul>
      )}

      {searchResults && (
        <div className="collection-search-results">
          {searchResults.map((collection) => (
            <div key={collection.id} className="collection-search-result">
              <h2>{collection.title}</h2>
              <img src={collection.cover_photo.urls.small} alt={collection.alt_description} />
            </div>
          ))}
        </div>
      )}

      {!searchResults && selectedCollections && (
        <div className="selected-collections">
          {selectedCollections.map((photo) => (
            <div key={photo.id} className="selected-collection">
              <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Collections;
