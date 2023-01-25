import { Outlet } from 'react-router-dom';
import { AppBarComponent } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
