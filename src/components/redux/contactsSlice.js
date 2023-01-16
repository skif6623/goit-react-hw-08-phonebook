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
console.log(getActions('pending'));
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
  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [addContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.unshift(action.payload);
  //   },
  //   [addContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [deleteContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       item => item.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
