import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { MenuWrapper, UserName } from './UserMenu.styled';
import { Button } from '@mui/material';

const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = event => {
    event.preventDefault();
    dispatch(logOut());
  };

  return (
    <MenuWrapper>
      <UserName>Hello, {user.email}</UserName>
      <Button onClick={handleLogout} variant="contained" color="error">
        Log Out
      </Button>
    </MenuWrapper>
  );
};

export default UserMenu;
