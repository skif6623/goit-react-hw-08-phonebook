import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/contactsSlice';
import toast, { Toaster } from 'react-hot-toast';
import {
  ContactsTitle,
  AddForm,
  FormLabel,
  FormInput,
  FormBtn,
  Error,
} from './ContactsEditor.styled';
import { Box } from '../Box';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(13).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactsEditor = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const doubleContact = contacts.items.filter(
      contact => contact.name === values.name
    );
    doubleContact.length > 0
      ? toast.error(`${values.name} is alredy in contacts.`)
      : dispatch(addContact(values));

    resetForm();
  };

  return (
    <>
      <ContactsTitle>Phonebook</ContactsTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <AddForm>
          <Box mb={10}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Field as={FormInput} id="name" type="text" name="name" />
            <ErrorMessage name="name">
              {msg => (
                <Error>The name is required, please enter the name</Error>
              )}
            </ErrorMessage>
          </Box>

          <Box mb={25}>
            <FormLabel htmlFor="number">Number</FormLabel>
            <Field as={FormInput} id="number" type="tel" name="number" />
            <ErrorMessage name="number" />
          </Box>

          <FormBtn type="submit">Add Contact</FormBtn>
        </AddForm>
      </Formik>
      <Toaster position="bottom-right" />
    </>
  );
};
