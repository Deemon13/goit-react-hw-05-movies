import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/get-movies';

export function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    async function getMoviesById() {
      setLoading(true);
      try {
        const movie = await getMovieDetails(moviesId);
        setMovie(movie);
      } catch (error) {
        alert('Упс! Что-то пошло не так! Вернитесь на главную страницу');
      } finally {
        setLoading(false);
      }
    }
    getMoviesById();
  }, [moviesId]);

  return (
    <div>
      {loading && <Loader />}

      {movie && (
        <>
          <ButtonGoBack />
          <MovieCard movie={movie} />
        </>
      )}
      <NavLink to="/movies/:moviesId/cast">Cast</NavLink>
      <NavLink to="/movies/:moviesId/reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
}
