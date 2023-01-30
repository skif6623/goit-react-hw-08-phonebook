import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContacts } from 'redux/operations';
import { ModalWindow } from 'components/Modal/Modal';
import {
  ContactsItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsList.styled';
import { selectFilter, selectContacts } from 'redux/selectors';
import { Box } from 'components/Box';

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
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactsItem key={id}>
              <ContactName>{name}:</ContactName>
              <Box display="flex" gridGap={10}>
                <ContactNumber>{number}</ContactNumber>
                <DeleteBtn
                  type="button"
                  onClick={() => dispatch(deleteContacts(id))}
                >
                  Delete
                </DeleteBtn>
                <DeleteBtn
                  type="button"
                  onClick={() => {
                    openModal();
                    setCurrentContact({ id, name, number });
                  }}
                >
                  Edit
                </DeleteBtn>
              </Box>
            </ContactsItem>
          );
        })}
      </ul>
    </>
  );
};
