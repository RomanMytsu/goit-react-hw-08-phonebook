import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestAddContacts, requestDeleteContacts, requestFetchContacts } from 'Api/Api-contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await requestFetchContacts();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, { rejectWithValue }) => {
    try {
      const data = await requestAddContacts(newContact);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const data = await requestDeleteContacts(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
