const { nanoid } = require('nanoid');

export const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
    private: false,
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Contacts',
    private: true,
  },
];
