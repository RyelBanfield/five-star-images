import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const { id } = useParams();
  const randomPhotos = useSelector((state) => state.home.randomPhotos);
  const photo = randomPhotos.find((photo) => photo.id === id);
  console.log(photo);

  return (
    <div className="photo">
      <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  );
};

export default Photo;
