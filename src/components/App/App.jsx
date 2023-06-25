import { AppWrapper } from './App.styles';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import { Contacts } from 'pages/Contacts';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from '../../pages/Login';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="contacts" component={<Register />} />
            }
          />
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;

<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route
      path="contacts"
      element={
        <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
      }
    />
    <Route
      path="register"
      element={
        <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
      }
    />
    <Route
      path="login"
      element={
        <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
      }
    />
    <Route path="*" element={<Navigate to="/" replace={true} />} />
  </Route>
</Routes>;
