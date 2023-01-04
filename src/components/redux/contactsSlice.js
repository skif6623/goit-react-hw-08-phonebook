import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsIntoBook = {
  storageContacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsIntoBook,
  reducers: {
    addContact: {
      reducer(state, action) {
        return {
          ...state,
          storageContacts: [action.payload, ...state.storageContacts],
        };
        // state.storageContacts.unshift(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        ...state,
        storageContacts: state.storageContacts.filter(
          contact => contact.id !== action.payload
        ),
      };
      // return state.storageContacts.filter(
      //   contact => contact.id !== action.payload
      // );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
