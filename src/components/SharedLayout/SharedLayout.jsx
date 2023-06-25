import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { SharedLayoutWrapper } from './SharedLayout.styled';
import { CircularProgress } from '@mui/material';

export const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <AppBar />

      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </SharedLayoutWrapper>
  );
};
