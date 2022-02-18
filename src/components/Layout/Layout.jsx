import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';

export function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
