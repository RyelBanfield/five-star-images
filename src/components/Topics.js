/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchListOfTopics, fetchPhotosByTopic } from '../API';

function Topics() {
  const [topics, setTopics] = useState(null);
  const [options, setOptions] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    fetchListOfTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  useEffect(() => {
    if (topics) {
      setOptions(topics.map((topic) => ({
        value: topic.id,
        label: topic.title,
      })));
    }
  }, [topics]);

  const handleChange = (selection) => {
    fetchPhotosByTopic(selection).then((photos) => {
      setSelectedTopic(photos);
    });
  };

  const clearSelection = (event) => {
    event.preventDefault();
    setSelectedTopic(null);
  };

  return (
    <div className="topics">
      <h1>Topics</h1>
      <Select options={options} placeholder="Select Topic" onChange={(selection) => handleChange(selection.value)} />
      <button type="button" className="clear-button" onClick={(event) => clearSelection(event)}>Clear Search</button>

      {!selectedTopic && (
      <ul>
        {topics && topics.map((topic) => (
          <li key={topic.id}>
            <p>{topic.title}</p>
            <img src={topic.cover_photo.urls.small} alt={topics.alt_description} />
          </li>
        ))}
      </ul>
      )}

      {selectedTopic && selectedTopic.map((photo) => (
        <div key={photo.id}>
          <img src={photo.urls.small} alt={photo.alt_description} />
        </div>
      ))}
    </div>
  );
}

export default Topics;
