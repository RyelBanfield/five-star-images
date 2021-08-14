import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const { id } = useParams();
  const photos = useSelector((state) => state.home.randomPhotos);
  const results = useSelector((state) => state.home.searchResults);
  const photo = photos.find((photo) => photo.id === id) || results.find((photo) => photo.id === id);

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

export default Photo;
