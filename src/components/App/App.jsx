import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';

import { refreshUser } from 'redux/auth/operations';

import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
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
          <Route
            index
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={ContactsPage} redirectTo="/" />}
          />
        </Route>
        <Route path="*" element={<div>Неправильний маршрут</div>} />
      </Routes>
    )
  );
};
