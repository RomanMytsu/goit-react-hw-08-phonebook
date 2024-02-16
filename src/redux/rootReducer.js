import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from './Contacts/contacts-slice';
import { filterReducer } from './Filter/filterSlice';
import { authReducer } from './auth/auth-slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
