import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import {
  ContactsTitle,
  AddForm,
  FormLabel,
  FormInput,
  FormBtn,
  Error,
} from 'components/EditorForm/EditorForm.styled';
import { Box } from '../Box';
import { Formik, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(13).required(),
});

export const EditorForm = ({
  action,
  title,
  user = { name: '', number: '', id: null },
  closeModal,
  buttonTitle,
  noScroll,
}) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: user.name,
    number: user.number,
  };

  const handleSubmit = (values, { resetForm }) => {
    const valueWithId = { ...values, id: user.id };
    if (user.id) {
      dispatch(action(valueWithId));
      closeModal();
      return;
    }
    const doubleContact = contacts.filter(
      contact => contact.name === values.name
    );
    doubleContact.length > 0
      ? toast.error(`${values.name} is alredy in contacts.`)
      : dispatch(action(values));

    resetForm();
  };

  return (
    <>
      <ContactsTitle>{title}</ContactsTitle>
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

          <FormBtn type="submit">{buttonTitle}</FormBtn>
        </AddForm>
      </Formik>
      <Toaster position="bottom-right" />
    </>
  );
};
