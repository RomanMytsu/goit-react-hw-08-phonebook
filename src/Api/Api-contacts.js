import { authInstance } from './Api-auth';

export const requestFetchContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const requestAddContacts = async newContact => {
  const { data } = await authInstance.post('/contacts', newContact);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
