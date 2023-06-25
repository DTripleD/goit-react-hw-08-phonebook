import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledLink } from './Navigation.styled';

const { useSelector } = require('react-redux');

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};

export default Navigation;
