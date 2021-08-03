import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTopics, updateSelectedTopics } from '../redux/slices/topicsSlice';
import { fetchListOfTopics, fetchPhotosByTopic } from '../API';

function Topics() {
  const [options, setOptions] = useState(null);
  const topics = useSelector((state) => state.topics.topics);
  const selectedTopic = useSelector((state) => state.topics.selectedTopic);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchListOfTopics().then((topics) => {
      dispatch(updateTopics(topics));
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
      dispatch(updateSelectedTopics(photos));
    });
  };

  const clearSelection = (event) => {
    event.preventDefault();
    dispatch(updateSelectedTopics(null));
  };

  return (
    <main className="topics">

      <h1>Topics</h1>
      <Select options={options} placeholder="Select Topic" onChange={(selection) => handleChange(selection.value)} />
      <button type="button" className="clear-button" onClick={(event) => clearSelection(event)}>Clear Selection</button>

      {!selectedTopic && (
      <ul className="topics">
        {topics && topics.map((topic) => (
          <li key={topic.id} className="topic">
            <p>{topic.title}</p>
            <img src={topic.cover_photo.urls.small} alt={topics.alt_description} />
          </li>
        ))}
      </ul>
      )}

      {selectedTopic && (
        <div className="selected-topics">
          {selectedTopic.map((photo) => (
            <div className="selected-topic" key={photo.id}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
          ))}
        </div>
      )}

    </main>
  );
}

export default Topics;
