import { AppWrapper } from './App.styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Contacts } from 'pages/Contacts';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import Register from 'pages/Register/Register';
import Login from '../../pages/Login/Login';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import Home from 'pages/Home/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
