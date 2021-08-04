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
        <h1>{photo.id}</h1>
        <img src={photo.urls.small} alt={photo.alt_description} />
      </div>
      )}
    </main>
  );
};

export default Photo;
