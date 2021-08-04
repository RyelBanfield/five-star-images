import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const { id } = useParams();
  const Topics = useSelector((state) => state.topics.topics);
  const selectedTopicPhotos = useSelector((state) => state.topics.selectedTopicPhotos);
  const topic = Topics.find((topic) => topic.slug === id);

  return (
    <>
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>
      <div className="photo">
        {selectedTopicPhotos && selectedTopicPhotos.map((photo) => (
          <Link to={`/topic/${id}/photo/${photo.id}`} key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Photo;
