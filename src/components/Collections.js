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

  if (options) {
    console.log(options);
  }

  return (
    <div>
      <h1>Collections</h1>
    </div>
  );
};

export default Collections;
