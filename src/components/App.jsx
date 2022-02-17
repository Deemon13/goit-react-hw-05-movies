import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { HomePage, MoviesPage, MovieDetailsPage } from '../pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="homepage" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<div>Movie cast</div>}></Route>
          <Route path="reviews" element={<div>Movie reviews</div>}></Route>
        </Route>
      </Route>
    </Routes>
  );
}
