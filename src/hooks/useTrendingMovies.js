import { useEffect, useState } from 'react';

import { getPopularMovies } from 'services/get-movies';

export function useTrendingMovies(page) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const movies = await getPopularMovies(page);
        setMovies(prevState => [...prevState, ...movies.results]);
      } catch (error) {
        console.error();
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [page]);

  return { movies, loading };
}
