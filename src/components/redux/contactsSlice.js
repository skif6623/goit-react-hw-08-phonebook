import { createSlice } from '@reduxjs/toolkit';
import { addContacts, fetchContacts, deleteContacts } from './operations';
const contactsIntoBook = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsIntoBook,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
