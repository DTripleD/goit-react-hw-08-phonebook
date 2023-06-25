import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, StyledLink } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu/UserMenu';

export const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/contacts">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <UserMenu />
      </Nav>

      <Suspense fallback="Wait...">
        <Outlet />
      </Suspense>
    </div>
  );
};
