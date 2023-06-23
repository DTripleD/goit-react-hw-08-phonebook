import { AppWrapper } from './App.styles';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import { Contacts } from 'pages/Contacts';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Link, Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
