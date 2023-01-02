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

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

// export const changeFilter = value => {
//   return {
//     type: 'filter/changeFilter',
//     payload: value,
//   };
// };

// export const addContact = ({ name, number }) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       name,
//       number,
//       id: nanoid(),
//     },
//   };
// };
