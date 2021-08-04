/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const { id } = useParams();
  const selectedTopic = useSelector((state) => state.topics.selectedTopic);
  const photo = selectedTopic.find((topic) => topic.id === id);

  return (
    <div className="photo">
      <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  );
};

export default Photo;
