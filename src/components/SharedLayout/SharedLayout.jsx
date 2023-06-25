import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { SharedLayoutWrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <div>
        <AppBar />
      </div>

      <Suspense fallback="Wait...">
        <Outlet />
      </Suspense>
    </SharedLayoutWrapper>
  );
};
