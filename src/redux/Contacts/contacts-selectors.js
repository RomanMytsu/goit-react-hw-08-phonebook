import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../../redux/Filter/filter-selectors';

export const selectContacts = ({ contacts }) => contacts.items;

export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
