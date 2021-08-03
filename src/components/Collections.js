/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchCollectionBySearch, fetchListOfCollections, fetchPhotosByCollection } from '../API';

const Collections = () => {
  const [collections, setCollections] = useState(null);
  const [options, setOptions] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);

  useEffect(() => {
    fetchListOfCollections().then((collections) => {
      setCollections(collections);
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

  const handleChange = (selection) => {
    fetchPhotosByCollection(selection).then((photos) => {
      setSelectedCollection(photos);
    });
  };

  const clearSelection = (event) => {
    event.preventDefault();
    setSelectedCollection(null);
  };

  return (
    <div className="collections">
      <h1>Collections</h1>
      <Select options={options} placeholder="Select Collection" onChange={(selection) => handleChange(selection.value)} />
      <button type="button" className="clear-button" onClick={(event) => clearSelection(event)}>Clear Search</button>

      {!selectedCollection && (
        <ul>
          {collections && collections.map((collection) => (
            <li key={collection.id}>
              <a href={collection.url}>{collection.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collections;
