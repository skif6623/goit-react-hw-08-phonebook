import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'components/redux/operations';
import {
  ContactsItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsList.styled';
import { selectFilter, selectContacts } from 'components/redux/selectors';
import { Box } from 'components/Box';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

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
            <ContactName>{name}:</ContactName>
            <Box display="flex">
              <ContactNumber>{number}</ContactNumber>
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                Delete
              </DeleteBtn>
            </Box>
          </ContactsItem>
        );
      })}
    </ul>
  );
};
