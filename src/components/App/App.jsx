import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'components/redux/operations';
import { getError, getIsLoading } from 'components/redux/selectors';

import { ContactsEditor } from '../ContactsEditor/ContactsEditor';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactsFilter } from '../ContactsFilter/ContactsFilter';
import { GlobalStyle } from '../GlobalStyle';
import { BookApp } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log(isLoading);
  console.log(error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <BookApp>
      <ContactsEditor />
      <ContactsFilter />
      {isLoading && !error && <b>Loading contacts...</b>}
      <ContactsList />
      <GlobalStyle />
    </BookApp>
  );
};
