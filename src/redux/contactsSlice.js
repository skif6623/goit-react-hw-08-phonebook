import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, fetchContacts, deleteContacts } from './operations';
import {
  fetchContactsFulfilledReducer,
  addContactsFulfilledReducer,
  deleteContactsFulfilledReducer,
  anyPendingReducer,
  anyRejectedReducer,
  anyFulfilledReducer,
} from './contactsSliceReducer';

const extraActions = [addContacts, fetchContacts, deleteContacts];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsIntoBook = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsIntoBook,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContacts.fulfilled, addContactsFulfilledReducer)
      .addCase(deleteContacts.fulfilled, deleteContactsFulfilledReducer)
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer);
  },
  //
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
