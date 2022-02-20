import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Item, MoviePoster } from './MoviesList.styled';
import NoImage from '../../images/NoImageAvailable.png';

export function MoviesListItem({ id, title, poster }) {
  const location = useLocation();
  return (
    <Item>
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <MoviePoster
            src={
              poster ? `http://image.tmdb.org/t/p/w500${poster}` : `${NoImage}`
            }
            alt={title ? `Poster of ${title}` : 'Poster'}
          />
        </Link>
      </li>
    </Item>
  );
}
