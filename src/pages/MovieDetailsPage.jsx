import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/get-movies';
import { HeaderNav, Item } from './styledPages/MovieDetailsPage.styled';

export function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesById() {
      setLoading(true);
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        alert('Упс! Что-то пошло не так! Вернитесь на главную страницу');
      } finally {
        setLoading(false);
      }
    }
    getMoviesById();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      {movie && (
        <>
          <ButtonGoBack />
          <MovieCard movie={movie} />
        </>
      )}
      <HeaderNav>
        <h2>Additional information</h2>
        <div>
          <Item to={`/movies/${movieId}/cast`}>Cast</Item>
          <Item to={`/movies/${movieId}/reviews`}>Reviews</Item>
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </div>
      </HeaderNav>
    </div>
  );
}
