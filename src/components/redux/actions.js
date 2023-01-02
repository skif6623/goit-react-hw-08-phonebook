import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('contacts/deleteContact');
export const addContact = createAction('contacts/addContact', values => {
  return {
    payload: {
      ...values,
      id: nanoid(),
    },
  };
});
export const changeFilter = createAction('filter/changeFilter');
