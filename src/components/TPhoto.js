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
        {photo.description && (
          <>
            <p className="photo-description-h">
              Description:
            </p>
            <p className="photo-description">
              {photo.description}
            </p>
          </>
        )}
        <p className="photographer">
          Photographer:
          {' '}
          {photo.user.name}
        </p>
        <img src={photo.urls.small} alt={photo.alt_description} />
        <p className="photo-info">
          Likes:
          {' '}
          {photo.likes}
        </p>
      </div>
      )}
    </main>
  );
};

export default TPhoto;
