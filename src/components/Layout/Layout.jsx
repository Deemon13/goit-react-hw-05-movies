import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';

export function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
