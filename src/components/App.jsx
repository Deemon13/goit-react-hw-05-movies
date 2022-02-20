import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { HomePage, MoviesPage, MovieDetailsPage } from 'pages';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="homepage" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
