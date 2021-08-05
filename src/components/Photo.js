/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const { id } = useParams();
  const randomPhotos = useSelector((state) => state.home.randomPhotos);
  const searchResults = useSelector((state) => state.home.searchResults);
  const photo = randomPhotos.find((photo) => photo.id === id) || searchResults.find((photo) => photo.id === id);

  return (
    <main className="h-photo">
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
          {photo.likes && (
            <>
              Likes:
              {' '}
              {photo.likes}
              {' '}
            </>
          )}
          {photo.downloads && (
            <>
              Downloads:
              {' '}
              {photo.downloads}
              {' '}
            </>
          )}
          {photo.views && (
            <>
              Views:
              {' '}
              {photo.views}
            </>
          )}
        </p>
      </div>
      )}
    </main>
  );
};

export default Photo;
