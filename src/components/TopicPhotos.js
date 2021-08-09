import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const { id } = useParams();
  const Topics = useSelector((state) => state.topics.topics);
  const selectedTopicPhotos = useSelector((state) => state.topics.selectedTopicPhotos);
  const topic = Topics.find((topic) => topic.slug === id);

  return (
    <main className="topic">
      <h1>{topic.title}</h1>
      <div className="topic-photos">
        {selectedTopicPhotos && selectedTopicPhotos.map((photo) => (
          <div className="topic-photo" key={photo.id}>
            <Link to={`/topic/${id}/photo/${photo.id}`}>
              <img src={photo.urls.small} alt={photo.alt_description} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Photo;
