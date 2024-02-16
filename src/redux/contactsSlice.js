import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';
import { initialState } from './initialState';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDel,
  handleFulfilledFetch,
  handlePending,
  handleRejected,
} from './helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContacts.fulfilled, handleFulfilledAdd)
      .addCase(deleteContacts.fulfilled, handleFulfilledDel)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContacts.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContacts.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContacts.fulfilled,
          deleteContacts.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
