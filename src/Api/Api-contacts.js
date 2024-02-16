import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c75fdee7c384aada6e6f8f.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const requestAddContacts = async newContact => {
  const { data } = await contactsInstance.post('/', newContact);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
