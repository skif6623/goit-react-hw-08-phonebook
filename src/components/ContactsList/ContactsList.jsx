import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';
import {
  ContactsItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsList.styled';
import { getFilter, getContacts } from 'components/redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactsItem key={id}>
            <ContactName>
              {name}: <ContactNumber>{number}</ContactNumber>
            </ContactName>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteBtn>
          </ContactsItem>
        );
      })}
    </ul>
  );
};
