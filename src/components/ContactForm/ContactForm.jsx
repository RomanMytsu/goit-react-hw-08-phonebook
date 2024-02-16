import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/operations';

import {
  ContactFormContainer,
  FormButton,
  FormInput,
  FormLabel,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContacts(newContact));
    setName('');
    setNumber('');
  };
  const newContact = { name: name, number: number };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <FormLabel htmlFor="nameInput">Name</FormLabel>
      <FormInput
        id="nameInput"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={name}
        onChange={handleChange}
      />
      <FormLabel htmlFor="numberInput">Number</FormLabel>
      <FormInput
        id="numberInput"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <FormButton type="submit">Add contact</FormButton>
    </ContactFormContainer>
  );
};
