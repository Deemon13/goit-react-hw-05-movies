import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';

export function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      ;
    </div>
  );
}
