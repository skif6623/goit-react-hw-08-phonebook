import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContacts } from 'redux/operations';
import { ModalWindow } from 'components/Modal/Modal';
import {
  ContactsItem,
  ContactName,
  ContactNumber,
  ContactsMsg,
  ContactsMsgSpan,
} from './ContactsList.styled';
import { selectFilter, selectContacts } from 'redux/selectors';
import { Box } from 'components/Box';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ContactsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();
  return (
    <>
      {isOpen && <ModalWindow user={currentContact} closeModal={closeModal} />}
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <ContactsItem key={id}>
                <ContactName>{name}:</ContactName>
                <Box display="flex" gridGap={10}>
                  <ContactNumber>{number}</ContactNumber>
                  <IconButton
                    color="info"
                    aria-label="edit"
                    onClick={() => {
                      openModal();
                      setCurrentContact({ id, name, number });
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => dispatch(deleteContacts(id))}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </ContactsItem>
            );
          })}
        </ul>
      ) : (
        <ContactsMsg>
          <ContactsMsgSpan>Sorry...</ContactsMsgSpan>You haven't added any
          contacts yet. Hope you fix this soon.
        </ContactsMsg>
      )}
    </>
  );
};
