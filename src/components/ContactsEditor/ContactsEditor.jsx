import { addContacts } from 'redux/operations';
import { EditorForm } from 'components/EditorForm/EditorForm';

export const ContactsEditor = () => {
  return (
    <>
      <EditorForm
        action={addContacts}
        title="PhoneBook"
        buttonTitle="Add Contact"
      />
    </>
  );
};
