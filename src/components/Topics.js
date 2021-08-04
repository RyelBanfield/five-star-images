import Select from 'react-select';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchListOfTopics, fetchPhotosByTopic } from '../API';
import { updateTopics, updateSelectedTopic } from '../redux/slices/topicsSlice';

function Topics() {
  const [options, setOptions] = useState();
  const [selectValue, setSelectValue] = useState();
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
    setSelectValue(selection.value);
    fetchPhotosByTopic(selection).then((photos) => {
      dispatch(updateSelectedTopic(photos));
    });
  };

  const clearSelection = () => {
    setSelectValue(null);
    dispatch(updateSelectedTopic(null));
  };

  return (
    <main className="topics">

      <h1>Topics</h1>
      <Select options={options} value={selectValue} placeholder="Select Topic" onChange={(selection) => handleChange(selection.value)} />
      <button type="button" className="clear-button" onClick={() => clearSelection()}>Clear Selection</button>

      {!selectedTopic && (
      <div className="topics">
        {topics && topics.map((topic) => (
          <div key={topic.id} className="topic">
            <p>{topic.title}</p>
            <img src={topic.cover_photo.urls.small} alt={topics.alt_description} />
          </div>
        ))}
      </div>
      )}

      {selectedTopic && (
        <div className="selected-topics">
          {selectedTopic.map((photo) => (
            <div className="selected-topic" key={photo.id}>
              <Link to={`/t-photo/${photo.id}`}>
                <p>{photo.id}</p>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </Link>
            </div>
          ))}
        </div>
      )}

    </main>
  );
}

export default Topics;
