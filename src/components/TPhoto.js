/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TPhoto = () => {
  const { id } = useParams();
  const selectedTopicPhotos = useSelector((state) => state.topics.selectedTopicPhotos);
  const photo = selectedTopicPhotos.find((photo) => photo.id === id);

  return (
    <main className="t-photo">
      {photo && (
      <div className="photo">
        <h1>{photo.id}</h1>
        <img src={photo.urls.small} alt={photo.alt_description} />
      </div>
      )}
    </main>
  );
};

export default TPhoto;
