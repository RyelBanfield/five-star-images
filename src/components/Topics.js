import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTopics, updateSelectedTopics } from '../redux/slices/topicsSlice';
import { fetchListOfTopics, fetchPhotosByTopic } from '../API';

function Topics() {
  const [options, setOptions] = useState(null);
  const [selectValue, setSelectValue] = useState();
  const topics = useSelector((state) => state.topics.topics);
  const selectedTopic = useSelector((state) => state.topics.selectedTopics);
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
    setSelectValue(selection.value);
    fetchPhotosByTopic(selection).then((photos) => {
      dispatch(updateSelectedTopics(photos));
    });
  };

  const clearSelection = () => {
    setSelectValue(null);
    dispatch(updateSelectedTopics(null));
  };

  return (
    <main className="topics">

      <h1>Topics</h1>
      <Select options={options} value={selectValue} placeholder="Select Topic" onChange={(selection) => handleChange(selection.value)} />
      <button type="button" className="clear-button" onClick={() => clearSelection()}>Clear Selection</button>

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
