import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import {
  ContactsTitle,
  FormLabel,
  FormInput,
} from '../ContactsEditor/ContactsEditor.styled';
import { Box } from '../Box';

export const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <Box mb={20}>
        <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
        <FormInput
          id="filter"
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};
