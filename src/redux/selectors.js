import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.items;
export const selectFilterValue = ({ filter }) => filter.filter;
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
