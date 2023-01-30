import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';

import { Container } from '@mui/material';
import { BookApp } from 'pages/ContactsPage/ContactsPage.styled';
import { ContactsEditor } from 'components/ContactsEditor/ContactsEditor';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { GlobalStyle } from 'components/GlobalStyle';

import { ColorRing } from 'react-loader-spinner';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useContacts();
  const { error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <BookApp>
        <ContactsEditor />
        {isLoading && !error && (
          <ColorRing
            height="50"
            width="50"
            wrapperStyle={{
              margin: '0 auto',
              marginBottom: 20,
              display: 'block',
            }}
            colors={['#2196f3', '#2196f3', '#2196f3', '#2196f3', '#2196f3']}
          />
        )}
        <ContactsList />
        <GlobalStyle />
      </BookApp>
    </Container>
  );
};
