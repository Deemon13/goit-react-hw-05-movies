import { NavLink, Outlet } from 'react-router-dom';

export function MovieDetailsPage() {
  return (
    <div>
      <h1>Movie details page</h1>
      <NavLink to="/movies/:moviesId/cast">Cast</NavLink>
      <NavLink to="/movies/:moviesId/reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
}
