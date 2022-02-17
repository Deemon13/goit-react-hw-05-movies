import { useTrendingMovies } from 'hooks/useTrendingMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesTitle } from 'components/MoviesTitle/MoviesTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesWrapper } from './styledPages/HomePage.styled';

export function HomePage() {
  const { movies, loading } = useTrendingMovies();

  return (
    <MoviesWrapper>
      <MoviesTitle title="Trending today" />

      {loading && <Loader />}

      <MoviesList items={movies} />
    </MoviesWrapper>
  );
}
