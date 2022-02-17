import { Link } from 'react-router-dom';

import { useTrendingMovies } from 'hooks/useTrendingMovies';
import { Loader } from 'components/Loader/Loader';

export function HomePage() {
  const { items, loading } = useTrendingMovies();

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
