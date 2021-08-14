import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TPhoto = () => {
  const { id } = useParams();
  const selectedTopicPhotos = useSelector((state) => state.topics.selectedTopicPhotos);
  const photo = selectedTopicPhotos.find((photo) => photo.id === id);

  return (
    <main className="photo-container">
      {photo && (
      <div className="photo">
        <img src={photo.urls.small} alt={photo.alt_description} />
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
        <p className="photo-info">
          {photo.likes && (
            <>
              Likes:
              {' '}
              {photo.likes}
              {' '}
              <br />
            </>
          )}
          {photo.downloads && (
            <>
              Downloads:
              {' '}
              {photo.downloads}
              {' '}
              <br />
            </>
          )}
          {photo.views && (
            <>
              Views:
              {' '}
              {photo.views}
            </>
          )}
          <br />
          <>
            Photographer:
            {' '}
            {photo.user.name}
          </>
        </p>
      </div>
      )}
    </main>
  );
};

export default TPhoto;
