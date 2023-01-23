import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';

import { refreshUser } from 'redux/auth/operations';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home';
import { ContactsApp } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<ContactsApp />} />
        </Route>
        <Route path="*" element={<div>Неправильний маршрут</div>} />
      </Routes>
    )
  );
};
