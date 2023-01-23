import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { ContactsEditor } from '../ContactsEditor/ContactsEditor';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactsFilter } from '../ContactsFilter/ContactsFilter';
import { GlobalStyle } from '../GlobalStyle';
import { BookApp } from './App.styled';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

import { ColorRing } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectError);
  // const error = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<div>Неправильний маршрут</div>} />
    </Routes>
  );
};

// <BookApp>
//   <ContactsEditor />
//   <ContactsFilter />
//   {isLoading && !error && (
//     <ColorRing
//       height="50"
//       width="50"
//       wrapperStyle={{
//         margin: '0 auto',
//         marginBottom: 20,
//         display: 'block',
//       }}
//       colors={['#2196f3', '#ff0000cf', '#2196f3', '#ff0000cf', '#2196f3']}
//     />
//   )}
//   <ContactsList />
//   <GlobalStyle />
// </BookApp>
