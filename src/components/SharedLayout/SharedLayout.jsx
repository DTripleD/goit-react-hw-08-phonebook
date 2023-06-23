import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/" active="true">
          Home
        </StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </Nav>
      <Suspense fallback="Wait...">
        <Outlet />
      </Suspense>
    </div>
  );
};
