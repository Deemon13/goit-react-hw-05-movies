import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/get-movies';

export function useTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const movies = await getPopularMovies();
        setMovies(movies.results);
      } catch (error) {
        console.error();
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  return { movies, loading };
}
