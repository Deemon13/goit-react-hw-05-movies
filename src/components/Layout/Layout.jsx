import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/homepage">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <Outlet />
      </nav>
    </div>
  );
}
