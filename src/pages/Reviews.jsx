import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/get-movies';
import { List, Text, Title } from './styledPages/Reviews.styled';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews && (
        <List>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Title>Author: {author}</Title>
              <Text>'{content}'</Text>
            </li>
          ))}
        </List>
      )}
      {reviews && reviews.length === 0 && (
        <Text>We don't have any review for this moment</Text>
      )}
    </div>
  );
}
