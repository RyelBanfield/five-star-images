/* eslint-disable max-len */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchListOfTopics, fetchPhotosByTopic } from '../API';
import { updateTopics, updateSelectedTopicPhotos } from '../redux/slices/topicsSlice';

function Topics() {
  const topics = useSelector((state) => state.topics.topics);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchListOfTopics().then((topics) => {
      dispatch(updateTopics(topics));
    });
  }, []);

  const handleClick = (topic) => {
    fetchPhotosByTopic(topic.id).then((photos) => {
      dispatch(updateSelectedTopicPhotos(photos));
    });
  };

  return (
    <main className="topics">

      <h1>Topics</h1>

      {topics && (
      <div className="topics">
        {topics.map((topic) => (
          <div key={topic.id} className="topic">
            <p>{topic.title}</p>
            <Link to={`/topic/${topic.slug}/photos`} onClick={() => handleClick(topic)}>
              <img src={topic.cover_photo.urls.small} alt={topics.alt_description} />
            </Link>
          </div>
        ))}
      </div>
      )}

    </main>
  );
}

export default Topics;
