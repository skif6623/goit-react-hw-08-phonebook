// import { createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { deleteContact, addContact, changeFilter } from './actions';

// const contactsIntoBook = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const initContactsFromStorage = () => {
//   const savedStorageContacts = localStorage.getItem('contacts');
//   if (savedStorageContacts !== null) {
//     return JSON.parse(savedStorageContacts);
//   }
//   return contactsIntoBook;
// };

// const contactsinitialState = initContactsFromStorage();

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsinitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         return [action.payload, ...state];
//       },
//       prepare(values) {
//         return {
//           payload: {
//             ...values,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const contactsReducer = createReducer(contactsinitialState, {
//   [addContact]: (state, action) => {
//     return [action.payload, ...state];
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//   [changeFilter]: (_, action) => {
//     return action.payload;
//   },
// });
