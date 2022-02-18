import { useState } from 'react';

import { useTrendingMovies } from 'hooks/useTrendingMovies';
import { Loader } from 'components/Loader/Loader';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesWrapper, MoreMoviesBtn } from './styledPages/HomePage.styled';

export function HomePage() {
  const [page, setPage] = useState(1);
  const { movies, loading } = useTrendingMovies(page);

  return (
    <MoviesWrapper>
      <PageTitle title="Trending today" />

      {loading && <Loader />}

      <MoviesList items={movies} />

      <MoreMoviesBtn type="button" onClick={() => setPage(page => page + 1)}>
        More movies
      </MoreMoviesBtn>
    </MoviesWrapper>
  );
}
